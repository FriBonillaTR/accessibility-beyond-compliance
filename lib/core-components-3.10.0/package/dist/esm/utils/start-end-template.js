import { html, ref } from '../@microsoft/fast-element/dist/esm/index.js';

/**
 * A mixin class implementing start and end slots.
 * These are generally used to decorate text elements with icons or other visual indicators.
 * @public
 */
class StartEnd {
}
/**
 * The template for the end slot.
 * For use with {@link StartEnd}
 *
 * @public
 */
function endSlotTemplate() {
    return html `<slot name="end" ${ref('end')}></slot>`.inline();
}
/**
 * The template for the start slots.
 * For use with {@link StartEnd}
 *
 * @public
 */
function startSlotTemplate() {
    return html ` <slot name="start" ${ref('start')}></slot> `.inline();
}

export { StartEnd, endSlotTemplate, startSlotTemplate };
