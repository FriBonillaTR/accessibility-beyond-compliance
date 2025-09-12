import { __decorate } from 'tslib';
import { FASTElement, Observable, observable, attr } from '../../../@microsoft/fast-element/dist/esm/index.js';
import { Orientation, Direction } from '@microsoft/fast-web-utilities';
import { Slider } from '../slider.js';

const defaultConfig = {
    min: 0,
    max: 0,
    direction: Direction.ltr,
    orientation: Orientation.horizontal,
    disabled: false,
};
/**
 * A label element intended to be used with the {@link @saffron/core-components#(Slider:class)} component.
 *
 * @slot - The default slot for the label content
 * @csspart container - The element wrapping the label mark and content
 * @csspart mark - The element wrapping the label mark
 * @csspart content - The element wrapping the label content
 *
 * @public
 */
class SliderLabel extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Hides the tick mark.
         *
         * @public
         * @remarks
         * HTML Attribute: hide-mark
         */
        this.hideMark = false;
        /**
         * The orientation state of the label. This is controlled by the parent Slider.
         * @see {@link @saffron/core-components#(Slider:class)}.
         * @public
         * @internal
         * @remarks
         * HTML Attribute: orientation
         */
        this.orientation = Orientation.horizontal;
        /**
         * @internal
         */
        this.sliderDirection = Direction.ltr;
        this.getSliderConfiguration = () => {
            if (!this.isSliderConfig(this.parentNode)) {
                this.sliderDirection = defaultConfig.direction || Direction.ltr;
                this.orientation = defaultConfig.orientation || Orientation.horizontal;
                this.sliderMaxPosition = defaultConfig.max;
                this.sliderMinPosition = defaultConfig.min;
            }
            else {
                const parentSlider = this.parentNode;
                const { min, max, direction, orientation, disabled } = parentSlider;
                if (disabled !== undefined) {
                    this.disabled = disabled;
                }
                this.sliderDirection = direction || Direction.ltr;
                this.orientation = orientation || Orientation.horizontal;
                this.sliderMaxPosition = max;
                this.sliderMinPosition = min;
            }
        };
        this.positionAsStyle = () => {
            const direction = this.sliderDirection ? this.sliderDirection : Direction.ltr;
            const pct = Slider.convertPixelToPercent(Number(this.position), Number(this.sliderMinPosition), Number(this.sliderMaxPosition));
            let rightNum = Math.round((1 - pct) * 100);
            let leftNum = Math.round(pct * 100);
            if (Number.isNaN(leftNum) && Number.isNaN(rightNum)) {
                rightNum = 50;
                leftNum = 50;
            }
            if (this.orientation === Orientation.horizontal) {
                return direction === Direction.rtl
                    ? `right: ${leftNum}%; left: ${rightNum}%;`
                    : `left: ${leftNum}%; right: ${rightNum}%;`;
            }
            else {
                return `top: ${rightNum}%; bottom: ${leftNum}%;`;
            }
        };
    }
    positionChanged() {
        this.positionStyle = this.positionAsStyle();
    }
    /**
     * @internal
     */
    connectedCallback() {
        super.connectedCallback();
        this.getSliderConfiguration();
        this.positionStyle = this.positionAsStyle();
        this.notifier = Observable.getNotifier(this.parentNode);
        this.notifier.subscribe(this, 'direction');
        this.notifier.subscribe(this, 'max');
        this.notifier.subscribe(this, 'min');
    }
    /**
     * @internal
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.notifier.unsubscribe(this, 'direction');
        this.notifier.unsubscribe(this, 'max');
        this.notifier.unsubscribe(this, 'min');
    }
    /**
     * @internal
     */
    handleChange(source, propertyName) {
        switch (propertyName) {
            case 'direction':
                this.sliderDirection = source.direction;
                break;
            case 'max':
                this.sliderMaxPosition = source.max;
                break;
            case 'min':
                this.sliderMinPosition = source.min;
                break;
            default:
                break;
        }
        this.positionStyle = this.positionAsStyle();
    }
    isSliderConfig(node) {
        return node.max !== undefined && node.min !== undefined;
    }
}
__decorate([
    observable
], SliderLabel.prototype, "positionStyle", void 0);
__decorate([
    attr
], SliderLabel.prototype, "position", void 0);
__decorate([
    attr({ attribute: 'hide-mark', mode: 'boolean' })
], SliderLabel.prototype, "hideMark", void 0);
__decorate([
    attr({ attribute: 'disabled', mode: 'boolean' })
], SliderLabel.prototype, "disabled", void 0);
__decorate([
    observable
], SliderLabel.prototype, "orientation", void 0);
__decorate([
    observable
], SliderLabel.prototype, "sliderMinPosition", void 0);
__decorate([
    observable
], SliderLabel.prototype, "sliderMaxPosition", void 0);
__decorate([
    observable
], SliderLabel.prototype, "sliderDirection", void 0);

export { SliderLabel };
