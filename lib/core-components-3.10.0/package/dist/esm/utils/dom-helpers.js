const createInlineStyle = (attributes) => {
    let str = '';
    Object.entries(attributes).forEach(([key, value]) => {
        str += `${key}:${value};`;
    });
    return str;
};
const checkEmptyAttribute = (attributeToCheck, attributeName, updatedValue) => {
    return attributeToCheck === attributeName && updatedValue === '';
};
const setAttributeOnChild = (parentElement, targetChildTagName, attributeName, attributeValue = '') => {
    const allChildren = parentElement.children;
    for (let i = 0; i < allChildren.length; i++) {
        const child = allChildren.item(i);
        if ((child === null || child === void 0 ? void 0 : child.localName) === targetChildTagName.toLowerCase()) {
            child.setAttribute(attributeName, attributeValue);
        }
    }
};
const isSaffronComponent = (el) => !!el.shadowRoot && el.tagName.startsWith('SAF-');
// checks if the element is activeElement, taking into account that it may be inside the shadow DOM
const isActiveElement = (element, root = document) => {
    const activeElement = root.activeElement;
    if (!activeElement) {
        return false;
    }
    if (activeElement === element) {
        return true;
    }
    if (activeElement.shadowRoot) {
        return isActiveElement(element, activeElement.shadowRoot);
    }
    return false;
};
/**
 * @returns the active element in the shadow context of the element in question.
 */
function getRootActiveElement(element) {
    const rootNode = element.getRootNode();
    if (rootNode instanceof ShadowRoot) {
        return rootNode.activeElement;
    }
    return document.activeElement;
}
function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (rect.top >= 0 &&
        rect.left >= 0 &&
        Math.round(rect.bottom) <= (window.innerHeight || document.documentElement.clientHeight) &&
        Math.round(rect.right) <= (window.innerWidth || document.documentElement.clientWidth));
}

export { checkEmptyAttribute, createInlineStyle, getRootActiveElement, isActiveElement, isElementInViewport, isSaffronComponent, setAttributeOnChild };
