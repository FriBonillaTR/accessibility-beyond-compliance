import { CSSProperties, FormEvent, HTMLAttributes, PropsWithChildren, Ref } from 'react';
/**
 * this type helper unpacks complicated types into a simpler form
 */
type Simplify<T> = {
    [K in keyof T]: T[K] extends object ? Simplify<T[K]> : T[K];
} & {};
/**
 * This type helper correctly types the events for a React component
 */
export declare type ReactEvents<Events, HTMLElementPrototype = HTMLElement, EventDetails extends {
    [event: string]: {
        [key: string]: unknown;
    };
} = {}> = {
    [Event in keyof Events]?: (e: FormEvent<HTMLElementPrototype> & {
        target: HTMLElementPrototype;
    } & (Events[Event] extends keyof EventDetails ? EventDetails[Events[Event]] : {})) => unknown;
};
/**
 * The props for a Saffron React component
 * - `Component` is the HTMLElement that the React component is wrapping
 * - `Options` is an object with a property `events` that is a dictionary of event names and mappings in React
 *
 * To understand this type helper:
 * First, the base type is `Omit<HTMLAttributes<Component>, keyof Options['events']>`, which is the react html attributes for the component, minus the events that are already typed in `Options['events']`
 * Then we're adding to it the component's own properties, minus the children and style properties. children should be added by PropsWithChildren, and style is added separately
 * Finally, we're adding the events, which are typed as React events
 *
 * The result type is simplified, then we add children, ref and style properties
 */
export type SafReactComponentProps<Component extends HTMLElement, Options extends {
    events: {
        [event: string]: string;
    };
} = {
    events: {};
}, EventDetails extends {
    [event: string]: {
        [key: string]: unknown;
    };
} = {}> = PropsWithChildren<Simplify<Omit<HTMLAttributes<Component>, keyof Options['events']> & Partial<Omit<Component, 'children' | 'style' | 'addEventListener'>> & ReactEvents<Options['events'], Component, EventDetails>>> & {
    ref?: Ref<Component>;
    style?: CSSProperties;
};
export {};
