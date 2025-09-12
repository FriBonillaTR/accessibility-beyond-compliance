import { getRegistry, getComponentName } from '@saffron/config';
import SafButton from '../button/define.js';
import SafProgress from '../progress/define.js';
import SafStatus from '../status/define.js';
import { FileUpload } from './file-upload.js';
import { styles } from './file-upload.styles.js';
import { fileUploadTemplate } from './file-upload.template.js';

const SafFileUpload = () => {
    SafButton();
    SafProgress();
    SafStatus();
    return FileUpload.define({
        name: getComponentName('saf-file-upload'),
        template: fileUploadTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafFileUpload as default };
