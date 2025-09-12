import { getRegistry, getComponentName } from '@saffron/config';
import { CommentField } from './comment-field.js';
import { styles } from './comment-field.styles.js';
import { commentFieldTemplate } from './comment-field.template.js';

const SafCommentField = () => CommentField.define({
    name: getComponentName('saf-comment-field'),
    template: commentFieldTemplate(),
    styles: styles(),
    registry: getRegistry(),
});

export { SafCommentField as default };
