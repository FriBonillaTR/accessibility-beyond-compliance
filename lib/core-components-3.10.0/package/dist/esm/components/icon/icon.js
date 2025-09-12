import { __decorate } from 'tslib';
import { FASTElement, attr, observable } from '../../@microsoft/fast-element/dist/esm/index.js';
import { Logger } from '../../services/logger.js';

/**
 * A class for Icon
 */
class Icon extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * The appearance of the icon. This will be applied to the `fa-` class. `light`, `solid`, `brands`. When `light` or `solid` is selected, `fa-` and `fa-sharp` classes will be added.
         *
         * @public
         */
        this.appearance = 'light';
        /**
         * Determines the unit of the size attribute.
         *
         * @public
         */
        this.sizeUnit = 'px';
        /**
         * Controls the `role` and `aria-hidden` attributes
         * If set to `true`, `role` will be set to `presentation`, and `aria-hidden` will be set to `true`
         * If set to `false`, `role` will be set to `img`, and `aria-hidden` will be set to `false`
         *
         * @a11y
         * @public
         */
        this.presentation = true;
    }
    sizeChanged() {
        var _a, _b, _c;
        // Check if CSSStylesheet has been initialized to prevent multiple new CSSStyleSheets
        if (!this.iconSizeStyles) {
            this.iconSizeStyles = new CSSStyleSheet();
        }
        // Check for undefined color
        const root = document.documentElement;
        // Get font size of :host
        const iconFontSize = parseInt(window.getComputedStyle(this, null).getPropertyValue('font-size'), 10); // ParseInt - 10 - decimal
        // Get font size of root/html
        const rootFontSize = parseInt(window.getComputedStyle(root, null).getPropertyValue('font-size'), 10); // ParseInt - 10 - decimal
        // Calculate rem/em values for use inside switch
        const remValue = this.size / rootFontSize;
        const emValue = this.size / iconFontSize;
        let sizeStyles = '';
        if (this.size) {
            switch (this.sizeUnit) {
                case 'rem':
                    sizeStyles = `:host { --saf-icon-size: ${Math.ceil(remValue)}rem}`;
                    break;
                case 'em':
                    sizeStyles = `:host { --saf-icon-size: ${Math.ceil(emValue)}em}`;
                    break;
                case 'px':
                default:
                    sizeStyles = `:host { --saf-icon-size: ${this.size}px}`;
                    break;
            }
            // Use replaceSync to replace the previous styles with new styles to prevent multiple overrides
            (_b = (_a = this.iconSizeStyles) === null || _a === void 0 ? void 0 : _a.replaceSync) === null || _b === void 0 ? void 0 : _b.call(_a, sizeStyles);
        }
        // Push/add new styles to shadowRoot adoptedStyleSheets, adds encapsulated styles with low specificity vs inline styles
        (_c = this.shadowRoot.adoptedStyleSheets) === null || _c === void 0 ? void 0 : _c.push(this.iconSizeStyles);
    }
    colorChanged() {
        // Check if CSSStylesheet has been initialized to prevent multiple new CSSStyleSheets
        if (!this.iconColorStyles) {
            this.iconColorStyles = new CSSStyleSheet();
        }
        // If a color attribute is set, apply it directly to :host via adoptedStyleSheets.
        // This overrides inherited color and allows explicit icon coloring.
        if (this.color) {
            this.iconColorStyles.replaceSync(`:host { color: ${this.color}; }`);
            // Push/add new styles to shadowRoot adoptedStyleSheets, adds encapsulated styles with low specificity vs inline styles
            this.shadowRoot.adoptedStyleSheets = [
                ...(this.shadowRoot.adoptedStyleSheets || []),
                this.iconColorStyles,
            ];
        }
        else {
            // If no color attribute is set, remove the custom color so the icon can inherit color from its parent (e.g., anchor states)
            this.iconColorStyles.replaceSync('');
            // Push/add new styles to shadowRoot adoptedStyleSheets, allows inheritance from parent
            this.shadowRoot.adoptedStyleSheets = [
                ...(this.shadowRoot.adoptedStyleSheets || []),
                this.iconColorStyles,
            ];
        }
    }
    /**
     * @internal
     */
    connectedCallback() {
        super.connectedCallback();
        if (!this.presentation) {
            this.checkForLabel();
        }
    }
    /**
     * @internal
     */
    checkForLabel() {
        if (this.ariaLabel === undefined && this.ariaLabelledBy === undefined) {
            Logger.warn('If you use role img, you must include either an aria-label or aria-labelledby attribute on the saf-icon component');
        }
    }
}
__decorate([
    attr({ attribute: 'appearance' })
], Icon.prototype, "appearance", void 0);
__decorate([
    attr({ attribute: 'icon-name' })
], Icon.prototype, "iconName", void 0);
__decorate([
    attr
], Icon.prototype, "name", void 0);
__decorate([
    attr
], Icon.prototype, "size", void 0);
__decorate([
    attr({ attribute: 'size-unit' })
], Icon.prototype, "sizeUnit", void 0);
__decorate([
    attr
], Icon.prototype, "color", void 0);
__decorate([
    observable
], Icon.prototype, "iconSizeStyles", void 0);
__decorate([
    observable
], Icon.prototype, "iconColorStyles", void 0);
__decorate([
    attr
], Icon.prototype, "colorType", void 0);
__decorate([
    attr({ attribute: 'aria-labelledby' })
], Icon.prototype, "ariaLabelledBy", void 0);
__decorate([
    attr({ attribute: 'aria-label' })
], Icon.prototype, "ariaLabel", void 0);
__decorate([
    attr({ attribute: 'aria-hidden' })
], Icon.prototype, "ariaHidden", void 0);
__decorate([
    attr({ mode: 'boolean' })
], Icon.prototype, "presentation", void 0);
__decorate([
    attr({ mode: 'boolean', attribute: 'focusable' })
], Icon.prototype, "isFocusable", void 0);

export { Icon };
