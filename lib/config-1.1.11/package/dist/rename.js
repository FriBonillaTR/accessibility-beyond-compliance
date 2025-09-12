const trimSurroundingDashes = (name) => {
    return name.replace(/^-+|-+$/g, '');
};
let prefix = typeof __SAF_COMPONENT_PREFIX__ !== 'undefined' ? __SAF_COMPONENT_PREFIX__ : '';
let suffix = typeof __SAF_COMPONENT_SUFFIX__ !== 'undefined' ? __SAF_COMPONENT_SUFFIX__ : '';
export function getPrefix() {
    return prefix;
}
export function getSuffix() {
    return suffix;
}
export function setPrefix(newPrefix) {
    prefix = trimSurroundingDashes(newPrefix);
}
export function setSuffix(newSuffix) {
    suffix = trimSurroundingDashes(newSuffix);
}
/**
 * Returns the full component name with prefix and suffix
 * @param name component name without prefix and suffix
 * @example
 * `saf-button` becomes `prefix-saf-button-suffix`
 */
export function getComponentName(name) {
    return trimSurroundingDashes(`${prefix}-${name}-${suffix}`);
}
/**
 * Extracts the clean component name from a full component name
 * by removing the prefix, suffix and "saf-"
 * @example
 * `prefix-saf-button-suffix` becomes `button`
 */
export function extractCleanComponentName(name) {
    return name
        .replace(new RegExp(`^${prefix}-`), '')
        .replace('saf-', '')
        .replace(new RegExp(`-${suffix}$`), '');
}
/**
 * Replaces component names in CSS with the `[saf="name"]` attribute selector.
 * This is necessary for styles to work when components are renamed.
 *
 * The regex uses negative lookbehind `?<!` to avoid replacing some patterns including:
 * - Comments (// or /*)
 * - CSS variables (e.g., `--saf-token`)
 * - SCSS variables (e.g., `$saf-token`)
 * - The `container-name:` property
 * - Container queries (e.g., `@container`)
 * - The `@include` directive in SCSS
 * - String literals (e.g., `"saf-button"` or `'saf-button'`) which are often used as params in scss functions
 *
 * And uses negative lookahead `?!` to avoid replacing:
 * - imports from common libs like saf-util or saf-density
 *
 * @param css original CSS string
 * @returns CSS string with component names replaced by the [saf] attribute selector
 * @example
 * `slotted(saf-button)` becomes `slotted([saf="button"])`
 */
export function replaceComponentNamesWithSafAttribute(css) {
    if (prefix || suffix) {
        return css.replace(new RegExp('(?<!// |\\* |--|\\$|container-name:|@container |@include |"|\')saf-(\\w+)((-\\w+)*)(?!util|density)', 'g'), `[saf="$1$2"]`);
    }
    return css;
}
/**
 * Renames component tags in a template html string from `<saf-component>` to `<prefix-saf-component-suffix>`.
 * @param html The html string to process
 * @returns A new html string with the renamed component tags
 */
export const renameComponentTags = (html) => {
    if (typeof html !== 'string')
        return html;
    let newHtml = html.replace(/<(\/?)saf((-\w+)+)/g, (...matches) => {
        const [, closingSlash, name] = matches;
        return `<${closingSlash}${getComponentName(`saf${name}`)}`;
    });
    return newHtml;
};
