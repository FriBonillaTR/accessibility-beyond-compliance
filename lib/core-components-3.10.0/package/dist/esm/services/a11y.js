/**
 * Classes and types for shared component
 * accessibility (a11y) service.
 */
const ASSERTIVE_DWELL = 300;
const ASSERTIVE_CLEAR = 300;
const POLITE_DWELL = 1000;
const POLITE_CLEAR = 500;
const INSERT_DELAY = 500;
/**
 * Main accessibility service. Usage examples:
 *
 * // Queue a screen reader announcement
 * SafA11y.announce('My message');
 *
 * // Trigger an immediate screen reader announcement
 * SafA11y.announce('My message', 'alert');
 *
 * // Set a custom DOM container for ARIA live region elements
 * SafA11y.liveRegionContainer = 'div#my-container';
 *
 * // Set custom off-screen styles for live region elements
 * SafA11y.liveRegionStyle = 'clip:rect(0 0 0 0); ...';
 */
class SafA11y {
    static get queue() {
        return this._queue || (this._queue = new LiveRegionQueue(this._container));
    }
    static get liveRegionStyle() {
        return LiveRegion.style;
    }
    static set liveRegionStyle(value) {
        LiveRegion.style = value;
    }
    static get liveRegionContainer() {
        return this._container;
    }
    static set liveRegionContainer(value) {
        this._container = value;
        if (this._queue) {
            this._queue.setContainer(value);
        }
    }
    static announce(message, type, callback) {
        this.queue.appendMessage(message, type, callback);
    }
    static announceNext(message, type, callback) {
        this.queue.prependMessage(message, type, callback);
    }
}
class LiveRegionQueue {
    constructor(container) {
        this.createLiveRegions();
        this.setContainer(container);
    }
    setContainer(container) {
        if (container instanceof HTMLElement) {
            this.containerEl = container;
        }
        else if (typeof container === 'string') {
            this.containerEl = document.querySelector(container);
        }
        else {
            this.containerEl = document.body;
        }
        this.appendLiveRegions();
    }
    getLiveRegion(type) {
        return type && this.regions[type] !== undefined ? this.regions[type] : this.regions.polite;
    }
    clear(type) {
        this.getLiveRegion(type).clear();
    }
    appendMessage(message, type, callback) {
        this.getLiveRegion(type).push(message, callback);
    }
    prependMessage(message, type, callback) {
        this.getLiveRegion(type).unshift(message, callback);
    }
    reset() {
        for (const type in this.regions) {
            this.regions[type].remove();
        }
        this.createLiveRegions();
        this.appendLiveRegions();
    }
    createLiveRegions() {
        this.regions = {
            polite: new LiveRegion('polite', POLITE_DWELL, POLITE_CLEAR),
            assertive: new LiveRegion('assertive', ASSERTIVE_DWELL, ASSERTIVE_CLEAR),
            status: new LiveRegion('status', POLITE_DWELL, POLITE_CLEAR),
            alert: new LiveRegion('alert', ASSERTIVE_DWELL, ASSERTIVE_CLEAR),
        };
    }
    appendLiveRegions() {
        for (const type in this.regions) {
            const region = this.regions[type];
            region.remove();
            if (this.containerEl instanceof HTMLElement) {
                this.containerEl.appendChild(region.el);
                region.start(INSERT_DELAY);
            }
        }
    }
}
class LiveRegion {
    constructor(type, dwell, clear) {
        this.queue = [];
        // Holds a reference to the currently active timeout
        this.timeout = null;
        this.name = type;
        this.dwellTime = dwell;
        this.clearTime = clear;
        this.el = document.createElement('div');
        this.el.setAttribute('style', LiveRegion.style);
        this.el.setAttribute('data-saf-a11y', 'live');
        if (type == 'status' || type == 'alert') {
            this.el.setAttribute('role', type);
        }
        else {
            this.el.setAttribute('aria-live', type);
            this.el.setAttribute('aria-atomic', 'true');
        }
    }
    push(message, callback) {
        this.queue.push({ text: message, callback: callback });
        this.queueAnnouncement();
    }
    unshift(message, callback) {
        this.queue.unshift({ text: message, callback: callback });
        this.queueAnnouncement();
    }
    clear() {
        this.stop();
        this.queue.length = 0;
    }
    stop() {
        clearTimeout(this.timeout);
        this.timeout = null;
    }
    start(delay = 0) {
        this.timeout = setTimeout(() => {
            this.timeout = null;
            this.queueAnnouncement();
        }, delay);
    }
    remove() {
        this.clear();
        this.el.remove();
    }
    queueAnnouncement() {
        if (this.timeout || this.queue.length < 1)
            return;
        const message = this.queue.shift();
        if (typeof message === 'undefined')
            return;
        this.el.textContent = message.text;
        if (message.callback) {
            message.callback(this.name, message.text);
        }
        this.timeout = setTimeout(() => {
            clearTimeout(this.timeout);
            this.el.textContent = '';
            this.timeout = setTimeout(() => {
                clearTimeout(this.timeout);
                this.timeout = null;
                this.queueAnnouncement();
            }, this.clearTime);
        }, this.dwellTime);
    }
}
LiveRegion.style = 'border:0;clip-path:inset(50%);height:0px;margin:0;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:0px;';

export { SafA11y };
