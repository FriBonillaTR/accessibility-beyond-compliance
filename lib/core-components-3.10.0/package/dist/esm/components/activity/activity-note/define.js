import { getRegistry, getComponentName } from '@saffron/config';
import { ActivityNote } from './activity-note.js';
import { styles } from './activity-note.styles.js';
import { activityNoteTemplate } from './activity-note.template.js';

const SafActivityNote = () => ActivityNote.define({
    name: getComponentName('saf-activity-note'),
    template: activityNoteTemplate(),
    styles: styles(),
    registry: getRegistry(),
});

export { SafActivityNote as default };
