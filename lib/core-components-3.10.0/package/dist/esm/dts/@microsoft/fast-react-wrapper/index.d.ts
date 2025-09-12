import type ReactModule from "react";
import { Constructable, FASTElementDefinition } from "../fast-element/index.js";
/**
 * Event signatures for a React wrapper.
 * @public
 */
export declare type ReactEvents<T> = {
    [P in keyof T]?: (e: Event) => unknown;
};
/**
 * Maps React event names to DOM event types for special handling.
 * @public
 */
export declare type ReactEventMap<T> = {
    [P in keyof T]: string;
};
/**
 * Optional configuration for the React wrapper.
 * @public
 */
export declare type ReactWrapperConfig<TEvents> = {
    /**
     * The tag that the React component will generate.
     */
    name?: string;
    /**
     * A mapping of React event name to DOM event type to be handled
     * by attaching event listeners to the underlying web component.
     * @remarks
     * Typically only needed for non-FAST web components.
     */
    events?: ReactEventMap<TEvents>;
    /**
     * A list of properties to be handled directly by the wrapper.
     * @remarks
     * Typically only needed for vanilla web components.
     */
    properties?: string[];
};
/**
 * The props used by a ReactWrapper.
 * @public
 */
export declare type ReactWrapperProps<TElement extends HTMLElement, TEvents> = ReactModule.PropsWithChildren<ReactModule.PropsWithRef<Partial<Omit<TElement, "children" | "style">> & ReactEvents<TEvents> & ReactModule.HTMLAttributes<HTMLElement>> & {
    style?: ReactModule.CSSProperties;
}>;
/**
 * A React component that wraps a Web Component.
 * @public
 */
export interface ReactWrapper<TElement extends HTMLElement, TEvents> extends Constructable<ReactModule.Component<ReactWrapperProps<TElement, TEvents>>> {
    displayName: string;
}
/**
 * @param React - The React module, typically imported from the `react` npm
 * package
 * @param registry - The custom elements registry to register components in if wrapped by definition.
 * @public
 */
export declare function reactWrapper(React: any, registry?: CustomElementRegistry): {
    <TElement extends HTMLElement, TEvents>(def: FASTElementDefinition<Constructable<TElement>>, config?: ReactWrapperConfig<TEvents> | undefined): ReactWrapper<TElement, TEvents>;
    <TElement_1 extends HTMLElement, TEvents_1>(type: Constructable<TElement_1>, config?: ReactWrapperConfig<TEvents_1> | undefined): ReactWrapper<TElement_1, TEvents_1>;
};
