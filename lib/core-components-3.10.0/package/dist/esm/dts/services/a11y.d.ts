/**
 * Classes and types for shared component
 * accessibility (a11y) service.
 */
type LiveRegionCollection = {
    [key: string]: LiveRegion;
};
type LiveRegionMessage = {
    text: string | null;
    callback: AnnouncementCallback | undefined;
};
type AnnouncementType = 'polite' | 'assertive' | 'status' | 'alert';
type AnnouncementCallback = (type: AnnouncementType, message: string | null) => void;
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
export declare class SafA11y {
    protected static _container: HTMLElement | string | undefined;
    protected static _queue: LiveRegionQueue | undefined;
    static get queue(): LiveRegionQueue;
    static get liveRegionStyle(): string;
    static set liveRegionStyle(value: string);
    static get liveRegionContainer(): HTMLElement | string | undefined;
    static set liveRegionContainer(value: HTMLElement | string | undefined);
    static announce(message: string | null, type?: AnnouncementType, callback?: AnnouncementCallback): void;
    static announceNext(message: string | null, type?: AnnouncementType, callback?: AnnouncementCallback): void;
}
declare class LiveRegionQueue {
    protected regions: LiveRegionCollection;
    protected containerEl: HTMLElement | null;
    constructor(container?: HTMLElement | string | null);
    setContainer(container?: HTMLElement | string | null): void;
    getLiveRegion(type?: AnnouncementType): LiveRegion;
    clear(type?: AnnouncementType): void;
    appendMessage(message: string | null, type?: AnnouncementType, callback?: AnnouncementCallback): void;
    prependMessage(message: string | null, type?: AnnouncementType, callback?: AnnouncementCallback): void;
    reset(): void;
    protected createLiveRegions(): void;
    protected appendLiveRegions(): void;
}
declare class LiveRegion {
    static style: string;
    el: HTMLElement;
    name: AnnouncementType;
    protected queue: LiveRegionMessage[];
    protected timeout: any;
    protected dwellTime: number;
    protected clearTime: number;
    constructor(type: AnnouncementType, dwell: number, clear: number);
    push(message: string | null, callback?: AnnouncementCallback): void;
    unshift(message: string | null, callback?: AnnouncementCallback): void;
    clear(): void;
    stop(): void;
    start(delay?: number): void;
    remove(): void;
    protected queueAnnouncement(): void;
}
export {};
