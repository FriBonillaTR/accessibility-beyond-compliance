import { workspacePatternTemplate } from './workspace-pattern.template.js';
import { getRegistry, getComponentName } from '@saffron/config';
import { styles } from './workspace-pattern.styles.js';
import { WorkspacePattern } from './workspace-pattern.js';
import SafSplitter from '../../components/splitter/define.js';

const SafWorkspacePattern = () => {
    SafSplitter();
    return WorkspacePattern.define({
        name: getComponentName('saf-workspace-pattern'),
        template: workspacePatternTemplate(),
        styles: styles(),
        registry: getRegistry(),
    });
};

export { SafWorkspacePattern as default };
