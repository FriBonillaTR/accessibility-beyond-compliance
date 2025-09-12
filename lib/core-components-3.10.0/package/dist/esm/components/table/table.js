import { __decorate } from 'tslib';
import { FASTElement, attr, observable } from '../../@microsoft/fast-element/dist/esm/index.js';
import '../../utils/index.js';
import { globalStyles } from './table-global.styles.js';
import { HeaderBackgroundEnum } from './table.options.js';
import { getComponentName } from '@saffron/config';
import { ComponentDensityEnum } from '../../utils/global-enums.js';

/**
 * A class for Table
 */
class Table extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Used to change the spacing in and around the component.
         *
         * @public
         */
        this.density = ComponentDensityEnum.inherit;
        /**
         * Controls zebra striping, which alternates background colors in every other row.
         *
         * @public
         */
        this.alternatingRows = true;
        /**
         * Determines if vertical column borders will be visible.
         *
         * @public
         */
        this.inlineBorders = true;
        /**
         * Used to change the background of the table header.
         *
         * @public
         */
        this.headerBackground = HeaderBackgroundEnum.default;
        /**
         * Represents the new global styles stylesheet for table.
         *
         * @private
         * @internal
         */
        this.styles = new CSSStyleSheet();
    }
    connectedCallback() {
        super.connectedCallback();
        const adoptedStyleSheets = document.adoptedStyleSheets;
        // Loop through document stylesheets and identify if a global table stylesheet has been added.
        for (let i = 0; i < adoptedStyleSheets.length; i++) {
            const stylesheet = adoptedStyleSheets[i];
            // Each cssRule should include the `saf-table` selector, selecting the first one arbitrarily
            if (stylesheet.cssRules[0].cssText.includes(getComponentName('saf-table'))) {
                // Make this stylesheet more accessible so we have easier access to it
                this.tableGlobalStylesheet = stylesheet;
            }
        }
        // Check to see if the table global stylesheet exists already, if not add it.
        if (!this.tableGlobalStylesheet) {
            // Insert rules from table-global.scss into new constructed stylesheet
            this.styles.replaceSync(globalStyles);
            // Add new stylesheet to document, making them global
            adoptedStyleSheets.push(this.styles);
            this.tableGlobalStylesheet = this.styles;
        }
        // If previous table stylesheet is disconnected, it will be disabled.  Re-enable it
        if (this.tableGlobalStylesheet && this.tableGlobalStylesheet.disabled === true) {
            this.tableGlobalStylesheet.disabled = false;
        }
    }
    disconnectedCallback() {
        // When disconnecting component, disable this stylesheet so it doesn't output styling.
        this.tableGlobalStylesheet.disabled = true;
    }
}
__decorate([
    attr({ attribute: 'density' })
], Table.prototype, "density", void 0);
__decorate([
    attr({ attribute: 'alternating-rows' })
], Table.prototype, "alternatingRows", void 0);
__decorate([
    attr({ attribute: 'inline-borders' })
], Table.prototype, "inlineBorders", void 0);
__decorate([
    attr({ attribute: 'header-background' })
], Table.prototype, "headerBackground", void 0);
__decorate([
    observable
], Table.prototype, "styles", void 0);
__decorate([
    observable
], Table.prototype, "tableGlobalStylesheet", void 0);

export { Table };
