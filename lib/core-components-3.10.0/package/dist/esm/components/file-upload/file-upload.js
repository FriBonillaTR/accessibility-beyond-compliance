import { __decorate } from 'tslib';
import { FASTElement, attr, observable } from '../../@microsoft/fast-element/dist/esm/index.js';

/**
 * A class for FileUpload
 */
class FileUpload extends FASTElement {
}
__decorate([
    attr,
    observable
], FileUpload.prototype, "status", void 0);
__decorate([
    attr({ attribute: 'file-name' })
], FileUpload.prototype, "fileName", void 0);
__decorate([
    attr({ attribute: 'progress-value' })
], FileUpload.prototype, "progressValue", void 0);
__decorate([
    attr({ attribute: 'validation-message' })
], FileUpload.prototype, "validationMessage", void 0);
__decorate([
    attr({ attribute: 'file-types-text' })
], FileUpload.prototype, "fileTypesText", void 0);
__decorate([
    attr({ attribute: 'instructional-text' })
], FileUpload.prototype, "instructionalText", void 0);

export { FileUpload };
