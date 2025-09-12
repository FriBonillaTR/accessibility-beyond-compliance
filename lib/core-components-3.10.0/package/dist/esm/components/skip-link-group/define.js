import { skipLinkGroupTemplate } from './skip-link-group.template.js';
import { styles } from './skip-link-group.styles.js';
import { SkipLinkGroup } from './skip-link-group.js';
import { getComponentName } from '@saffron/config';
import SkipLinkDefine from '../skip-link/define.js';

const SkipLinkGroupDefine = () => {
    /*
     * If on your template's code you use other Saffron components you will need
     * to import their definitions here so your component works properly.
     * Ex.
     *
     * ButtonDefine();
     * IconDefine();
     *
     */
    SkipLinkDefine();
    return SkipLinkGroup.define({
        name: getComponentName('saf-skip-link-group'),
        template: skipLinkGroupTemplate(),
        styles: styles(),
    });
};

export { SkipLinkGroupDefine as default };
