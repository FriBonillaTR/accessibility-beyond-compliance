import { __decorate } from 'tslib';
import { FASTElement, attr } from '../../@microsoft/fast-element/dist/esm/index.js';
import SafDescriptionDetails from './description-details/define.js';
import SafDescriptionTerm from './description-term/define.js';
import { DescriptionListOrientationEnum } from './description-list.options.js';

/**
 * A class derived from the FASTElement foundation component
 */
class DescriptionList extends FASTElement {
    constructor() {
        super(...arguments);
        /**
         * Determine if the bullets are going to be displayed or not.
         *
         * @public
         */
        this.bulletPoint = false;
        /**
         * Determine the orientation of the description list.
         *
         * @public
         */
        this.orientation = DescriptionListOrientationEnum.horizontal;
        /**
         * Determine the number of columns for the description list.
         *
         * @public
         */
        this.colNumber = 3;
    }
    connectedCallback() {
        super.connectedCallback();
        this.createDescriptionListGroups();
        this.setColumnNumber();
    }
    createDescriptionListGroups() {
        var _a;
        const slot = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot[name="items"]');
        const childNodes = this.childNodes;
        let container = document.createElement('div');
        let workingOnGroup = false;
        childNodes.forEach((child) => {
            if (child instanceof SafDescriptionTerm && workingOnGroup) {
                container.appendChild(child);
                workingOnGroup = false;
                slot === null || slot === void 0 ? void 0 : slot.append(container);
                container = document.createElement('div');
            }
            if (child instanceof SafDescriptionTerm) {
                container.appendChild(child);
                workingOnGroup = true;
            }
            if (child instanceof SafDescriptionDetails) {
                if ('setAttribute' in child) {
                    if (this.bulletPoint) {
                        child.setAttribute('bullet-point', 'bullet-point');
                    }
                    else {
                        child.removeAttribute('bullet-point');
                    }
                }
                container.appendChild(child);
            }
        });
        slot === null || slot === void 0 ? void 0 : slot.append(container);
    }
    setColumnNumber() {
        var _a;
        const dl = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('dl');
        if (this.orientation === DescriptionListOrientationEnum.horizontal && dl) {
            dl.style.gridTemplateColumns = `repeat(${this.colNumber}, auto)`;
        }
    }
}
__decorate([
    attr({ attribute: 'bullet-point', mode: 'boolean' })
], DescriptionList.prototype, "bulletPoint", void 0);
__decorate([
    attr({ attribute: 'orientation' })
], DescriptionList.prototype, "orientation", void 0);
__decorate([
    attr({ attribute: 'col-number' })
], DescriptionList.prototype, "colNumber", void 0);

export { DescriptionList };
