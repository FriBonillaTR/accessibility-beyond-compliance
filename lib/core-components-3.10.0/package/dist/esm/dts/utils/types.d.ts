/**
 * This type helper augments the type of addEventListener to add the custom events defined in the component's config
 *
 * It takes the class type extending HTMLElement, removes the original addEventListener (using Omit<>),
 * and adds a new one with the correct event types.
 * The object type containing the 2 declarations of addeventListener was directly copied from lib.dom.d.ts
 * then added this part to include custom events
 * `| Config['events'][keyof Config['events']]`
 */
export declare type AugmentClassEvents<Class, Config extends {
    events: {
        [event: string]: string;
    };
} = {
    events: {};
}, EventDetails extends {
    [event: string]: {
        [key: string]: unknown;
    };
} = {}> = Omit<Class, 'addEventListener' | '$emit' | '$fastController'> & {
    addEventListener<K extends Config['events'][keyof Config['events']]>(type: K, listener: (this: HTMLElement, ev: (K extends keyof HTMLElementEventMap ? HTMLElementEventMap[K] : Event) & {
        target: Class;
    } & (K extends Config['events'][keyof Config['events']] ? K extends keyof EventDetails ? EventDetails[K] : {} : {})) => unknown, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
};
