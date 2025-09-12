export declare function getPrefix(): string;
export declare function getSuffix(): string;
export declare function setPrefix(newPrefix: string): void;
export declare function setSuffix(newSuffix: string): void;
/**
 * Returns the full component name with prefix and suffix
 * @param name component name without prefix and suffix
 * @example
 * `saf-button` becomes `prefix-saf-button-suffix`
 */
export declare function getComponentName(name: string): string;
/**
 * Extracts the clean component name from a full component name
 * by removing the prefix, suffix and "saf-"
 * @example
 * `prefix-saf-button-suffix` becomes `button`
 */
export declare function extractCleanComponentName(name: string): string;
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
export declare function replaceComponentNamesWithSafAttribute(css: string): string;
/**
 * Renames component tags in a template html string from `<saf-component>` to `<prefix-saf-component-suffix>`.
 * @param html The html string to process
 * @returns A new html string with the renamed component tags
 */
export declare const renameComponentTags: (html: string) => string;
