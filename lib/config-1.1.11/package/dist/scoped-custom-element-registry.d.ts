/**
 * @license
 * Copyright (c) 2020 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
declare global {
    interface CustomElementConstructor {
        observedAttributes?: Array<string>;
        formAssociated?: boolean;
        new (...params: unknown[]): CustomHTMLElement;
    }
    interface CustomElementRegistry {
        _getDefinition(tagName: string): CustomElementDefinition | undefined;
    }
    interface Window {
        CustomElementRegistryPolyfill: {
            formAssociated: Set<string>;
        };
        __SCOPED_CUSTOM_ELEMENTS_POLYFILL_APPLIED__?: boolean;
    }
}
interface CustomHTMLElement {
    connectedCallback?(): void;
    disconnectedCallback?(): void;
    adoptedCallback?(): void;
    attributeChangedCallback?(name: string, oldValue?: string | null, newValue?: string | null, namespace?: string | null): void;
    formAssociatedCallback?(form: HTMLFormElement | null): void;
    formDisabledCallback?(disabled: boolean): void;
    formResetCallback?(): void;
    formStateRestoreCallback?(state: File | string | FormData | null, mode: string): void;
}
interface CustomElementDefinition {
    elementClass: CustomElementConstructor;
    tagName: string;
    /**
     * We hold onto the versions of callbacks at registration time, because
     * that's the spec behavior.
     */
    connectedCallback?: CustomHTMLElement['connectedCallback'];
    disconnectedCallback?: CustomHTMLElement['disconnectedCallback'];
    adoptedCallback?: CustomHTMLElement['adoptedCallback'];
    attributeChangedCallback?: CustomHTMLElement['attributeChangedCallback'];
    formAssociated?: boolean;
    formAssociatedCallback?: CustomHTMLElement['formAssociatedCallback'];
    formDisabledCallback?: CustomHTMLElement['formDisabledCallback'];
    formResetCallback?: CustomHTMLElement['formResetCallback'];
    formStateRestoreCallback?: CustomHTMLElement['formStateRestoreCallback'];
    observedAttributes: Set<string>;
    /**
     * The class that's registered on the global custom element registry for this
     * element definition. Only present if this definition is registered on the
     * global registry, though all definitions do have a stand-in.
     */
    standInClass?: CustomElementConstructor;
}
export declare const scopedRegistryPolyfill: () => void;
export {};
