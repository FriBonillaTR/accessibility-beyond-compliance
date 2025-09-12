interface CSSPropertiesType {
    [key: string]: string;
}
export declare const createInlineStyle: (attributes: CSSPropertiesType) => string;
export declare const checkEmptyAttribute: (attributeToCheck: string, attributeName: string, updatedValue: string) => boolean;
export declare const setAttributeOnChild: (parentElement: HTMLElement, targetChildTagName: string, attributeName: string, attributeValue?: string) => void;
export declare const isSaffronComponent: (el: Element) => boolean;
export declare const isActiveElement: (element: HTMLElement, root?: Document | ShadowRoot) => any;
/**
 * @returns the active element in the shadow context of the element in question.
 */
export declare function getRootActiveElement(element: Element): Element | null;
export declare function isElementInViewport(el: Element): boolean;
export {};
