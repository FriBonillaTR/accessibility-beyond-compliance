import { getRegistry, getComponentName } from '@saffron/config';
import { actionCardTemplate } from './action-card.template.js';
import { styles } from './action-card.styles.js';
import { ActionCard } from './action-card.js';

const ActionCardDefine = () => {
    /*
     * If on your template's code you use other Saffron components you will need
     * to import their definitions here so your component works properly.
     * Ex.
     *
     * ButtonDefine();
     * IconDefine();
     *
     */
    return ActionCard.define({
        name: getComponentName('saf-action-card'),
        template: actionCardTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { ActionCardDefine as default };
