import { getRegistry, getComponentName } from '@saffron/config';
import SafMessageBox from '../message-box/define.js';
import { ActionCardAction } from './action-card-action.js';
import { styles } from './action-card-action.styles.js';
import { actionCardActionTemplate } from './action-card-action.template.js';

const ActionCardActionDefine = () => {
    SafMessageBox();
    SafMessageBox();
    return ActionCardAction.define({
        name: getComponentName('saf-action-card-action'),
        template: actionCardActionTemplate(),
        styles: styles(),
        registry: getRegistry(),
        shadowOptions: {
            delegatesFocus: true,
        },
    });
};

export { ActionCardActionDefine as default };
