import { PropsWithChildren, HTMLAttributes, FormEvent, Ref, CSSProperties, ComponentType } from 'react';
import { Direction as Direction$1, Orientation } from '@microsoft/fast-web-utilities';
import { Locale } from '@saffron/date-fns';

/**
 * this type helper unpacks complicated types into a simpler form
 */
type Simplify<T> = {
    [K in keyof T]: T[K] extends object ? Simplify<T[K]> : T[K];
} & {};
/**
 * This type helper correctly types the events for a React component
 */
declare type ReactEvents<Events, HTMLElementPrototype = HTMLElement, EventDetails extends {
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
type SafReactComponentProps<Component extends HTMLElement, Options extends {
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

/**
 * Represents a type which can be constructed with the new operator.
 *
 * @public
 */
declare type Constructable<T = {}> = {
    new (...args: any[]): T;
};
/**
 * Provides a mechanism for releasing resources.
 * @public
 */
interface Disposable {
    /**
     * Disposes the resources.
     */
    dispose(): void;
}

/**
 * Implemented by objects that are interested in change notifications.
 * @public
 */
interface Subscriber {
    /**
     * Called when a subject this instance has subscribed to changes.
     * @param subject - The subject of the change.
     * @param args - The event args detailing the change that occurred.
     */
    handleChange(subject: any, args: any): void;
}
/**
 * Provides change notifications for an observed subject.
 * @public
 */
interface Notifier {
    /**
     * The object that subscribers will receive notifications for.
     */
    readonly subject: any;
    /**
     * Notifies all subscribers, based on the args.
     * @param args - Data passed along to subscribers during notification.
     * @remarks
     * In some implementations, the args may be used to target specific subscribers.
     * This is usually in the case where a propertyName was passed during subscription.
     */
    notify(args: any): void;
    /**
     * Subscribes to notification of changes in an object's state.
     * @param subscriber - The object that is subscribing for change notification.
     * @param propertyToWatch - The name of the property that the subscriber is interested in watching for changes.
     * @remarks
     * Some implementation may or may not require the propertyToWatch.
     */
    subscribe(subscriber: Subscriber, propertyToWatch?: any): void;
    /**
     * Unsubscribes from notification of changes in an object's state.
     * @param subscriber - The object that is unsubscribing from change notification.
     * @param propertyToUnwatch - The name of the property that the subscriber is no longer interested in watching.
     * @remarks
     * Some implementation may or may not require the propertyToUnwatch.
     */
    unsubscribe(subscriber: Subscriber, propertyToUnwatch?: any): void;
}
/**
 * An implementation of Notifier that allows subscribers to be notified
 * of individual property changes on an object.
 * @public
 */
declare class PropertyChangeNotifier implements Notifier {
    private subscribers;
    private subjectSubscribers;
    /**
     * The subject that property changes are being notified for.
     */
    readonly subject: any;
    /**
     * Creates an instance of PropertyChangeNotifier for the specified subject.
     * @param subject - The object that subscribers will receive notifications for.
     */
    constructor(subject: any);
    /**
     * Notifies all subscribers, based on the specified property.
     * @param propertyName - The property name, passed along to subscribers during notification.
     */
    notify(propertyName: string): void;
    /**
     * Subscribes to notification of changes in an object's state.
     * @param subscriber - The object that is subscribing for change notification.
     * @param propertyToWatch - The name of the property that the subscriber is interested in watching for changes.
     */
    subscribe(subscriber: Subscriber, propertyToWatch?: string): void;
    /**
     * Unsubscribes from notification of changes in an object's state.
     * @param subscriber - The object that is unsubscribing from change notification.
     * @param propertyToUnwatch - The name of the property that the subscriber is no longer interested in watching.
     */
    unsubscribe(subscriber: Subscriber, propertyToUnwatch?: string): void;
}

/**
 * Represents a getter/setter property accessor on an object.
 * @public
 */
interface Accessor {
    /**
     * The name of the property.
     */
    name: string;
    /**
     * Gets the value of the property on the source object.
     * @param source - The source object to access.
     */
    getValue(source: any): any;
    /**
     * Sets the value of the property on the source object.
     * @param source - The source object to access.
     * @param value - The value to set the property to.
     */
    setValue(source: any, value: any): void;
}
/**
 * Describes how the source's lifetime relates to its controller's lifetime.
 * @public
 */
declare const SourceLifetime: Readonly<{
    /**
     * The source to controller lifetime relationship is unknown.
     */
    readonly unknown: undefined;
    /**
     * The source and controller lifetimes are coupled to one another.
     * They can/will be GC'd together.
     */
    readonly coupled: 1;
}>;
/**
 * Describes how the source's lifetime relates to its controller's lifetime.
 * @public
 */
declare type SourceLifetime = (typeof SourceLifetime)[keyof typeof SourceLifetime];
/**
 * Controls the lifecycle of an expression and provides relevant context.
 * @public
 */
interface ExpressionController<TSource = any, TParent = any> {
    /**
     * The source the expression is evaluated against.
     */
    readonly source: TSource;
    /**
     * Indicates how the source's lifetime relates to the controller's lifetime.
     */
    readonly sourceLifetime?: SourceLifetime;
    /**
     * The context the expression is evaluated against.
     */
    readonly context: ExecutionContext<TParent>;
    /**
     * Indicates whether the controller is bound.
     */
    readonly isBound: boolean;
    /**
     * Registers an unbind handler with the controller.
     * @param behavior - An object to call when the controller unbinds.
     */
    onUnbind(behavior: {
        unbind(controller: ExpressionController<TSource, TParent>): any;
    }): void;
}
/**
 * Provides additional contextual information available to behaviors and expressions.
 * @public
 */
interface ExecutionContext<TParent = any> {
    /**
     * The index of the current item within a repeat context.
     */
    index: number;
    /**
     * The length of the current collection within a repeat context.
     */
    length: number;
    /**
     * The parent data source within a nested context.
     */
    parent: TParent;
    /**
     * The parent execution context when in nested context scenarios.
     */
    parentContext: ExecutionContext<TParent>;
    /**
     * The current event within an event handler.
     */
    readonly event: Event;
    /**
     * Indicates whether the current item within a repeat context
     * has an even index.
     */
    readonly isEven: boolean;
    /**
     * Indicates whether the current item within a repeat context
     * has an odd index.
     */
    readonly isOdd: boolean;
    /**
     * Indicates whether the current item within a repeat context
     * is the first item in the collection.
     */
    readonly isFirst: boolean;
    /**
     * Indicates whether the current item within a repeat context
     * is somewhere in the middle of the collection.
     */
    readonly isInMiddle: boolean;
    /**
     * Indicates whether the current item within a repeat context
     * is the last item in the collection.
     */
    readonly isLast: boolean;
    /**
     * Returns the typed event detail of a custom event.
     */
    eventDetail<TDetail>(): TDetail;
    /**
     * Returns the typed event target of the event.
     */
    eventTarget<TTarget extends EventTarget>(): TTarget;
}
/**
 * Provides additional contextual information available to behaviors and expressions.
 * @public
 */
declare const ExecutionContext: Readonly<{
    /**
     * A default execution context.
     */
    default: ExecutionContext<any>;
    /**
     * Gets the current event.
     * @returns An event object.
     */
    getEvent(): Event | null;
    /**
     * Sets the current event.
     * @param event - An event object.
     */
    setEvent(event: Event | null): void;
}>;

/**
 * A node that can be targeted by styles.
 * @public
 */
interface StyleTarget extends Pick<Node, "getRootNode"> {
    /**
     * Stylesheets to be adopted by the node.
     */
    adoptedStyleSheets?: CSSStyleSheet[];
    /**
     * Adds styles to the target by appending the styles.
     * @param styles - The styles element to add.
     */
    append(styles: HTMLStyleElement): void;
    /**
     * Removes styles from the target.
     * @param styles - The styles element to remove.
     */
    removeChild(styles: HTMLStyleElement): void;
    /**
     * Returns all element descendants of node that match selectors.
     * @param selectors - The CSS selector to use for the query.
     */
    querySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E>;
}
/**
 * Implemented to provide specific behavior when adding/removing styles
 * for elements.
 * @public
 */
interface StyleStrategy {
    /**
     * Adds styles to the target.
     * @param target - The target to add the styles to.
     */
    addStylesTo(target: StyleTarget): void;
    /**
     * Removes styles from the target.
     * @param target - The target to remove the styles from.
     */
    removeStylesFrom(target: StyleTarget): void;
}

/**
 * Controls the lifecycle and context of behaviors and styles
 * associated with a component host.
 * @public
 */
interface HostController<TSource = any> extends ExpressionController<TSource> {
    /**
     * Indicates whether the host is connected or not.
     */
    readonly isConnected: boolean;
    /**
     * The main set of styles used for the component, independent
     * of any behavior-specific styles.
     */
    mainStyles: ElementStyles | null;
    /**
     * Adds the behavior to the component.
     * @param behavior - The behavior to add.
     */
    addBehavior(behavior: HostBehavior<TSource>): void;
    /**
     * Removes the behavior from the component.
     * @param behavior - The behavior to remove.
     * @param force - Forces removal even if this behavior was added more than once.
     */
    removeBehavior(behavior: HostBehavior<TSource>, force?: boolean): void;
    /**
     * Adds styles to this element. Providing an HTMLStyleElement will attach the element instance to the shadowRoot.
     * @param styles - The styles to add.
     */
    addStyles(styles: ElementStyles | HTMLStyleElement | null | undefined): void;
    /**
     * Removes styles from this element. Providing an HTMLStyleElement will detach the element instance from the shadowRoot.
     * @param styles - the styles to remove.
     */
    removeStyles(styles: ElementStyles | HTMLStyleElement | null | undefined): void;
}
/**
 * Represents an object that can contribute behavior to a host.
 * @public
 */
interface HostBehavior<TSource = any> {
    /**
     * Executed when this behavior is attached to a controller.
     * @param controller - Controls the behavior lifecycle.
     */
    addedCallback?(controller: HostController<TSource>): void;
    /**
     * Executed when this behavior is detached from a controller.
     * @param controller - Controls the behavior lifecycle.
     */
    removedCallback?(controller: HostController<TSource>): void;
    /**
     * Executed when this behavior's host is connected.
     * @param controller - Controls the behavior lifecycle.
     */
    connectedCallback?(controller: HostController<TSource>): void;
    /**
     * Executed when this behavior's host is disconnected.
     * @param controller - Controls the behavior lifecycle.
     */
    disconnectedCallback?(controller: HostController<TSource>): void;
}

/**
 * Represents styles that can be composed into the ShadowDOM of a custom element.
 * @public
 */
declare type ComposableStyles = string | ElementStyles | CSSStyleSheet;
/**
 * A type that instantiates a StyleStrategy.
 * @public
 */
declare type ConstructibleStyleStrategy = {
    /**
     * Creates an instance of the strategy.
     * @param styles - The styles to initialize the strategy with.
     */
    new (styles: (string | CSSStyleSheet)[]): StyleStrategy;
};
/**
 * Represents styles that can be applied to a custom element.
 * @public
 */
declare class ElementStyles {
    readonly styles: ReadonlyArray<ComposableStyles>;
    private targets;
    private _strategy;
    /**
     * The behaviors associated with this set of styles.
     */
    readonly behaviors: ReadonlyArray<HostBehavior<HTMLElement>> | null;
    /**
     * Gets the StyleStrategy associated with these element styles.
     */
    get strategy(): StyleStrategy;
    /**
     * Creates an instance of ElementStyles.
     * @param styles - The styles that will be associated with elements.
     */
    constructor(styles: ReadonlyArray<ComposableStyles>);
    /** @internal */
    addStylesTo(target: StyleTarget): void;
    /** @internal */
    removeStylesFrom(target: StyleTarget): void;
    /** @internal */
    isAttachedTo(target: StyleTarget): boolean;
    /**
     * Associates behaviors with this set of styles.
     * @param behaviors - The behaviors to associate.
     */
    withBehaviors(...behaviors: HostBehavior<HTMLElement>[]): this;
    /**
     * Sets the strategy that handles adding/removing these styles for an element.
     * @param strategy - The strategy to use.
     */
    withStrategy(Strategy: ConstructibleStyleStrategy): this;
    /**
     * Sets the default strategy type to use when creating style strategies.
     * @param Strategy - The strategy type to construct.
     */
    static setDefaultStrategy(Strategy: ConstructibleStyleStrategy): void;
    /**
     * Normalizes a set of composable style options.
     * @param styles - The style options to normalize.
     * @returns A singular ElementStyles instance or undefined.
     */
    static normalize(styles: ComposableStyles | ComposableStyles[] | undefined): ElementStyles | undefined;
    /**
     * Indicates whether the DOM supports the adoptedStyleSheets feature.
     */
    static readonly supportsAdoptedStyleSheets: boolean;
}

/**
 * The target nodes available to a behavior.
 * @public
 */
declare type ViewBehaviorTargets = {
    [id: string]: Node;
};
/**
 * Controls the lifecycle of a view and provides relevant context.
 * @public
 */
interface ViewController<TSource = any, TParent = any> extends ExpressionController<TSource, TParent> {
    /**
     * The parts of the view that are targeted by view behaviors.
     */
    readonly targets: ViewBehaviorTargets;
}

/**
 * Represents a collection of DOM nodes which can be bound to a data source.
 * @public
 */
interface View<TSource = any, TParent = any> extends Disposable {
    /**
     * The execution context the view is running within.
     */
    readonly context: ExecutionContext<TParent>;
    /**
     * The data that the view is bound to.
     */
    readonly source: TSource | null;
    /**
     * Indicates whether the controller is bound.
     */
    readonly isBound: boolean;
    /**
     * Binds a view's behaviors to its binding source.
     * @param source - The binding source for the view's binding behaviors.
     */
    bind(source: TSource, context?: ExecutionContext<TParent>): void;
    /**
     * Unbinds a view's behaviors from its binding source and context.
     */
    unbind(): void;
}
/**
 * A View representing DOM nodes specifically for rendering the view of a custom element.
 * @public
 */
interface ElementView<TSource = any, TParent = any> extends View<TSource, TParent> {
    /**
     * Indicates how the source's lifetime relates to the controller's lifetime.
     */
    readonly sourceLifetime?: SourceLifetime;
    /**
     * Registers an unbind handler with the controller.
     * @param behavior - An object to call when the controller unbinds.
     */
    onUnbind(behavior: {
        unbind(controller: ViewController<TSource, TParent>): any;
    }): void;
    /**
     * Appends the view's DOM nodes to the referenced node.
     * @param node - The parent node to append the view's DOM nodes to.
     */
    appendTo(node: Node): void;
}

/**
 * A template capable of creating views specifically for rendering custom elements.
 * @public
 */
interface ElementViewTemplate<TSource = any, TParent = any> {
    /**
     * Creates an ElementView instance based on this template definition.
     * @param hostBindingTarget - The element that host behaviors will be bound to.
     */
    create(hostBindingTarget: Element): ElementView<TSource, TParent>;
    /**
     * Creates an HTMLView from this template, binds it to the source, and then appends it to the host.
     * @param source - The data source to bind the template to.
     * @param host - The Element where the template will be rendered.
     * @param hostBindingTarget - An HTML element to target the host bindings at if different from the
     * host that the template is being attached to.
     */
    render(source: TSource, host: Node, hostBindingTarget?: Element): ElementView<TSource, TParent>;
}

/**
 * Represents objects that can convert values to and from
 * view or model representations.
 * @public
 */
interface ValueConverter {
    /**
     * Converts a value from its representation in the model, to a representation for the view.
     * @param value - The value to convert to a view representation.
     */
    toView(value: any): any;
    /**
     * Converts a value from its representation in the view, to a representation for the model.
     * @param value - The value to convert to a model representation.
     */
    fromView(value: any): any;
}
declare const booleanMode = "boolean";
declare const reflectMode = "reflect";
/**
 * The mode that specifies the runtime behavior of the attribute.
 * @remarks
 * By default, attributes run in `reflect` mode, propagating their property
 * values to the DOM and DOM values to the property. The `boolean` mode also
 * reflects values, but uses the HTML standard boolean attribute behavior,
 * interpreting the presence of the attribute as `true` and the absence as
 * `false`. The `fromView` behavior only updates the  property value based on
 * changes in the DOM, but does not reflect property changes back.
 * @public
 */
declare type AttributeMode = typeof reflectMode | typeof booleanMode | "fromView";
/**
 * Metadata used to configure a custom attribute's behavior.
 * @public
 */
declare type AttributeConfiguration = {
    property: string;
    attribute?: string;
    mode?: AttributeMode;
    converter?: ValueConverter;
};
/**
 * Metadata used to configure a custom attribute's behavior.
 * @public
 */
declare const AttributeConfiguration: Readonly<{
    /**
     * Locates all attribute configurations associated with a type.
     */
    locate: (target: {}) => AttributeConfiguration[];
}>;
/**
 * An implementation of {@link Accessor} that supports reactivity,
 * change callbacks, attribute reflection, and type conversion for
 * custom elements.
 * @public
 */
declare class AttributeDefinition implements Accessor {
    private readonly fieldName;
    private readonly callbackName;
    private readonly hasCallback;
    private readonly guards;
    /**
     * The class constructor that owns this attribute.
     */
    readonly Owner: Function;
    /**
     * The name of the property associated with the attribute.
     */
    readonly name: string;
    /**
     * The name of the attribute in HTML.
     */
    readonly attribute: string;
    /**
     * The {@link AttributeMode} that describes the behavior of this attribute.
     */
    readonly mode: AttributeMode;
    /**
     * A {@link ValueConverter} that integrates with the property getter/setter
     * to convert values to and from a DOM string.
     */
    readonly converter?: ValueConverter;
    /**
     * Creates an instance of AttributeDefinition.
     * @param Owner - The class constructor that owns this attribute.
     * @param name - The name of the property associated with the attribute.
     * @param attribute - The name of the attribute in HTML.
     * @param mode - The {@link AttributeMode} that describes the behavior of this attribute.
     * @param converter - A {@link ValueConverter} that integrates with the property getter/setter
     * to convert values to and from a DOM string.
     */
    constructor(Owner: Function, name: string, attribute?: string, mode?: AttributeMode, converter?: ValueConverter);
    /**
     * Sets the value of the attribute/property on the source element.
     * @param source - The source element to access.
     * @param value - The value to set the attribute/property to.
     */
    setValue(source: HTMLElement, newValue: any): void;
    /**
     * Gets the value of the attribute/property on the source element.
     * @param source - The source element to access.
     */
    getValue(source: HTMLElement): any;
    /** @internal */
    onAttributeChangedCallback(element: HTMLElement, value: any): void;
    private tryReflectToAttribute;
    /**
     * Collects all attribute definitions associated with the owner.
     * @param Owner - The class constructor to collect attribute for.
     * @param attributeLists - Any existing attributes to collect and merge with those associated with the owner.
     * @internal
     */
    static collect(Owner: Function, ...attributeLists: (ReadonlyArray<string | AttributeConfiguration> | undefined)[]): ReadonlyArray<AttributeDefinition>;
}

/**
 * Shadow root initialization options.
 * @public
 */
interface ShadowRootOptions extends ShadowRootInit {
    /**
     * A registry that provides the custom elements visible
     * from within this shadow root.
     * @beta
     */
    registry?: CustomElementRegistry;
}
/**
 * Represents metadata configuration for a custom element.
 * @public
 */
interface PartialFASTElementDefinition {
    /**
     * The name of the custom element.
     */
    readonly name: string;
    /**
     * The template to render for the custom element.
     */
    readonly template?: ElementViewTemplate;
    /**
     * The styles to associate with the custom element.
     */
    readonly styles?: ComposableStyles | ComposableStyles[];
    /**
     * The custom attributes of the custom element.
     */
    readonly attributes?: (AttributeConfiguration | string)[];
    /**
     * Options controlling the creation of the custom element's shadow DOM.
     * @remarks
     * If not provided, defaults to an open shadow root. Provide null
     * to render to the associated template to the light DOM instead.
     */
    readonly shadowOptions?: Partial<ShadowRootOptions> | null;
    /**
     * Options controlling how the custom element is defined with the platform.
     */
    readonly elementOptions?: ElementDefinitionOptions;
    /**
     * The registry to register this component in by default.
     * @remarks
     * If not provided, defaults to the global registry.
     */
    readonly registry?: CustomElementRegistry;
}
/**
 * Defines metadata for a FASTElement.
 * @public
 */
declare class FASTElementDefinition<TType extends Constructable<HTMLElement> = Constructable<HTMLElement>> {
    private platformDefined;
    /**
     * The type this element definition describes.
     */
    readonly type: TType;
    /**
     * Indicates if this element has been defined in at least one registry.
     */
    get isDefined(): boolean;
    /**
     * The name of the custom element.
     */
    readonly name: string;
    /**
     * The custom attributes of the custom element.
     */
    readonly attributes: ReadonlyArray<AttributeDefinition>;
    /**
     * A map enabling lookup of attribute by associated property name.
     */
    readonly propertyLookup: Record<string, AttributeDefinition>;
    /**
     * A map enabling lookup of property by associated attribute name.
     */
    readonly attributeLookup: Record<string, AttributeDefinition>;
    /**
     * The template to render for the custom element.
     */
    readonly template?: ElementViewTemplate;
    /**
     * The styles to associate with the custom element.
     */
    readonly styles?: ElementStyles;
    /**
     * Options controlling the creation of the custom element's shadow DOM.
     */
    readonly shadowOptions?: ShadowRootOptions;
    /**
     * Options controlling how the custom element is defined with the platform.
     */
    readonly elementOptions: ElementDefinitionOptions;
    /**
     * The registry to register this component in by default.
     */
    readonly registry: CustomElementRegistry;
    private constructor();
    /**
     * Defines a custom element based on this definition.
     * @param registry - The element registry to define the element in.
     * @remarks
     * This operation is idempotent per registry.
     */
    define(registry?: CustomElementRegistry): this;
    /**
     * Creates an instance of FASTElementDefinition.
     * @param type - The type this definition is being created for.
     * @param nameOrDef - The name of the element to define or a config object
     * that describes the element to define.
     */
    static compose<TType extends Constructable<HTMLElement> = Constructable<HTMLElement>>(type: TType, nameOrDef?: string | PartialFASTElementDefinition): FASTElementDefinition<TType>;
    /**
     * Registers a FASTElement base type.
     * @param type - The type to register as a base type.
     * @internal
     */
    static registerBaseType(type: Function): void;
    /**
     * Gets the element definition associated with the specified type.
     * @param type - The custom element type to retrieve the definition for.
     */
    static readonly getByType: (key: Function) => FASTElementDefinition<Constructable<HTMLElement>> | undefined;
    /**
     * Gets the element definition associated with the instance.
     * @param instance - The custom element instance to retrieve the definition for.
     */
    static readonly getForInstance: (object: any) => FASTElementDefinition<Constructable<HTMLElement>> | undefined;
}

/**
 * A type that instantiates an ElementController
 * @public
 */
interface ElementControllerStrategy {
    new (element: HTMLElement, definition: FASTElementDefinition): ElementController;
}
/**
 * Controls the lifecycle and rendering of a `FASTElement`.
 * @public
 */
declare class ElementController<TElement extends HTMLElement = HTMLElement> extends PropertyChangeNotifier implements HostController<TElement> {
    private boundObservables;
    private needsInitialization;
    private hasExistingShadowRoot;
    private _template;
    private stage;
    /**
     * A guard against connecting behaviors multiple times
     * during connect in scenarios where a behavior adds
     * another behavior during it's connectedCallback
     */
    private guardBehaviorConnection;
    private behaviors;
    private _mainStyles;
    /**
     * This allows Observable.getNotifier(...) to return the Controller
     * when the notifier for the Controller itself is being requested. The
     * result is that the Observable system does not need to create a separate
     * instance of Notifier for observables on the Controller. The component and
     * the controller will now share the same notifier, removing one-object construct
     * per web component instance.
     */
    private readonly $fastController;
    /**
     * The element being controlled by this controller.
     */
    readonly source: TElement;
    /**
     * The element definition that instructs this controller
     * in how to handle rendering and other platform integrations.
     */
    readonly definition: FASTElementDefinition;
    /**
     * The view associated with the custom element.
     * @remarks
     * If `null` then the element is managing its own rendering.
     */
    readonly view: ElementView<TElement> | null;
    /**
     * Indicates whether or not the custom element has been
     * connected to the document.
     */
    get isConnected(): boolean;
    /**
     * The context the expression is evaluated against.
     */
    get context(): ExecutionContext;
    /**
     * Indicates whether the controller is bound.
     */
    get isBound(): boolean;
    /**
     * Indicates how the source's lifetime relates to the controller's lifetime.
     */
    get sourceLifetime(): SourceLifetime | undefined;
    /**
     * Gets/sets the template used to render the component.
     * @remarks
     * This value can only be accurately read after connect but can be set at any time.
     */
    get template(): ElementViewTemplate<TElement> | null;
    set template(value: ElementViewTemplate<TElement> | null);
    /**
     * The main set of styles used for the component, independent
     * of any dynamically added styles.
     */
    get mainStyles(): ElementStyles | null;
    set mainStyles(value: ElementStyles | null);
    /**
     * Creates a Controller to control the specified element.
     * @param element - The element to be controlled by this controller.
     * @param definition - The element definition metadata that instructs this
     * controller in how to handle rendering and other platform integrations.
     * @internal
     */
    constructor(element: TElement, definition: FASTElementDefinition);
    /**
     * Registers an unbind handler with the controller.
     * @param behavior - An object to call when the controller unbinds.
     */
    onUnbind(behavior: {
        unbind(controller: ExpressionController<TElement>): any;
    }): void;
    /**
     * Adds the behavior to the component.
     * @param behavior - The behavior to add.
     */
    addBehavior(behavior: HostBehavior<TElement>): void;
    /**
     * Removes the behavior from the component.
     * @param behavior - The behavior to remove.
     * @param force - Forces removal even if this behavior was added more than once.
     */
    removeBehavior(behavior: HostBehavior<TElement>, force?: boolean): void;
    /**
     * Adds styles to this element. Providing an HTMLStyleElement will attach the element instance to the shadowRoot.
     * @param styles - The styles to add.
     */
    addStyles(styles: ElementStyles | HTMLStyleElement | null | undefined): void;
    /**
     * Removes styles from this element. Providing an HTMLStyleElement will detach the element instance from the shadowRoot.
     * @param styles - the styles to remove.
     */
    removeStyles(styles: ElementStyles | HTMLStyleElement | null | undefined): void;
    /**
     * Runs connected lifecycle behavior on the associated element.
     */
    connect(): void;
    /**
     * Runs disconnected lifecycle behavior on the associated element.
     */
    disconnect(): void;
    /**
     * Runs the attribute changed callback for the associated element.
     * @param name - The name of the attribute that changed.
     * @param oldValue - The previous value of the attribute.
     * @param newValue - The new value of the attribute.
     */
    onAttributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    /**
     * Emits a custom HTML event.
     * @param type - The type name of the event.
     * @param detail - The event detail object to send with the event.
     * @param options - The event options. By default bubbles and composed.
     * @remarks
     * Only emits events if connected.
     */
    emit(type: string, detail?: any, options?: Omit<CustomEventInit, "detail">): void | boolean;
    private renderTemplate;
    /**
     * Locates or creates a controller for the specified element.
     * @param element - The element to return the controller for.
     * @remarks
     * The specified element must have a {@link FASTElementDefinition}
     * registered either through the use of the {@link customElement}
     * decorator or a call to `FASTElement.define`.
     */
    static forCustomElement(element: HTMLElement): ElementController;
    /**
     * Sets the strategy that ElementController.forCustomElement uses to construct
     * ElementController instances for an element.
     * @param strategy - The strategy to use.
     */
    static setStrategy(strategy: ElementControllerStrategy): void;
}

declare function compose<TType extends Constructable<HTMLElement> = Constructable<HTMLElement>>(this: TType, nameOrDef: string | PartialFASTElementDefinition): FASTElementDefinition<TType>;
declare function compose<TType extends Constructable<HTMLElement> = Constructable<HTMLElement>>(type: TType, nameOrDef?: string | PartialFASTElementDefinition): FASTElementDefinition<TType>;
declare function define<TType extends Constructable<HTMLElement> = Constructable<HTMLElement>>(this: TType, nameOrDef: string | PartialFASTElementDefinition): TType;
declare function define<TType extends Constructable<HTMLElement> = Constructable<HTMLElement>>(type: TType, nameOrDef?: string | PartialFASTElementDefinition): TType;
declare function from<TBase extends typeof HTMLElement>(BaseType: TBase): new () => InstanceType<TBase> & FASTElement;
/**
 * Represents a custom element based on the FASTElement infrastructure.
 * @public
 */
interface FASTElement extends HTMLElement {
    /**
     * The underlying controller that handles the lifecycle and rendering of
     * this FASTElement.
     */
    readonly $fastController: ElementController;
    /**
     * Emits a custom HTML event.
     * @param type - The type name of the event.
     * @param detail - The event detail object to send with the event.
     * @param options - The event options. By default bubbles and composed.
     * @remarks
     * Only emits events if the element is connected.
     */
    $emit(type: string, detail?: any, options?: Omit<CustomEventInit, "detail">): boolean | void;
    /**
     * The connected callback for this FASTElement.
     * @remarks
     * This method is invoked by the platform whenever this FASTElement
     * becomes connected to the document.
     */
    connectedCallback(): void;
    /**
     * The disconnected callback for this FASTElement.
     * @remarks
     * This method is invoked by the platform whenever this FASTElement
     * becomes disconnected from the document.
     */
    disconnectedCallback(): void;
    /**
     * The attribute changed callback for this FASTElement.
     * @param name - The name of the attribute that changed.
     * @param oldValue - The previous value of the attribute.
     * @param newValue - The new value of the attribute.
     * @remarks
     * This method is invoked by the platform whenever an observed
     * attribute of FASTElement has a value change.
     */
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
}
/**
 * A minimal base class for FASTElements that also provides
 * static helpers for working with FASTElements.
 * @public
 */
declare const FASTElement: {
    new (): FASTElement;
    define: typeof define;
    compose: typeof compose;
    from: typeof from;
};

/**
 * A class for Workspace Pattern
 */
declare class WorkspacePattern extends FASTElement {
    /**
     * Screen reader title for splitter indicator.
     *
     * @public
     *
     * @remarks
     * Re-exposed from saf-splitter
     */
    srOnlyTitle: string;
    /**
     * Tooltip text for splitter.
     *
     * @public
     */
    tooltipText: string;
    /**
     * Whether or not primary panel should be scrollable.
     *
     * @public
     */
    scrollablePrimary: boolean;
    /**
     * Whether or not secondary panel should be scrollable.
     *
     * @public
     */
    scrollableSecondary: boolean;
    /**
     * Initial size for splitter in percentage.
     *
     * @public
     */
    initialSize?: number | undefined;
}

/**
 * This type helper augments the type of addEventListener to add the custom events defined in the component's config
 *
 * It takes the class type extending HTMLElement, removes the original addEventListener (using Omit<>),
 * and adds a new one with the correct event types.
 * The object type containing the 2 declarations of addeventListener was directly copied from lib.dom.d.ts
 * then added this part to include custom events
 * `| Config['events'][keyof Config['events']]`
 */
declare type AugmentClassEvents<Class, Config extends {
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

type SafWorkspacePatternInstance = AugmentClassEvents<WorkspacePattern>;

type SafWorkspacePatternProps = SafReactComponentProps<SafWorkspacePatternInstance>;
declare const SafReactWorkspacePattern: ComponentType<SafWorkspacePatternProps>;

declare const ComponentDensityEnum: {
    readonly compact: "compact";
    readonly standard: "standard";
    readonly inherit: "inherit";
};
type ComponentDensity = (typeof ComponentDensityEnum)[keyof typeof ComponentDensityEnum];
declare const ComponentDensityWithExtraCompactEnum: {
    readonly 'extra-compact': "extra-compact";
    readonly compact: "compact";
    readonly standard: "standard";
    readonly inherit: "inherit";
};
type ComponentDensityWithExtraCompact = (typeof ComponentDensityWithExtraCompactEnum)[keyof typeof ComponentDensityWithExtraCompactEnum];
declare const BreakpointEnum: {
    readonly xs: "xs";
    readonly sm: "sm";
    readonly md: "md";
    readonly lg: "lg";
    readonly xl: "xl";
    readonly xxl: "xxl";
    readonly xxxl: "xxxl";
    readonly xxxxl: "xxxxl";
};
type Breakpoint = (typeof BreakpointEnum)[keyof typeof BreakpointEnum];

/**
 * A mixin class implementing start and end slots.
 * These are generally used to decorate text elements with icons or other visual indicators.
 * @public
 */
declare class StartEnd {
}

/**
 * Accordion item heading size
 *
 * @public
 */
declare const AccordionItemHeadingSizeEnum: {
    readonly fill: "fill";
    readonly hug: "hug";
};
/**
 * Types for accordion item heading size values
 *
 * @public
 */
type AccordionItemHeadingSize = (typeof AccordionItemHeadingSizeEnum)[keyof typeof AccordionItemHeadingSizeEnum];

/**
 * A class derived from the Accordion foundation component
 */
declare class AccordionItem extends FASTElement {
    /**
     * Configures the {@link https://www.w3.org/TR/wai-aria-1.1/#aria-level | level} of the
     * heading element.
     *
     * @defaultValue 2
     * @public
     * @remarks
     * HTML attribute: heading-level
     */
    headinglevel: 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * Expands or collapses the item.
     *
     * @public
     * @remarks
     * HTML attribute: expanded
     */
    expanded: boolean;
    /**
     * Disables an accordion item
     *
     * @public
     * @remarks
     * HTML attribute: disabled
     */
    disabled: boolean;
    /**
     * The item ID
     *
     * @public
     * @remarks
     * HTML Attribute: id
     */
    id: string;
    /**
     * Used to change the spacing in and around the component.
     * @public
     */
    density: ComponentDensity;
    /**
     * Determines whether the heading element should fill the available width or hug its content.
     * @public
     */
    headingSize: AccordionItemHeadingSize;
    /**
     * `Deprecated`. Propagation is allowed by default.
     * @TODO: Delete attribute in v4
     * @public
     * @deprecated
     */
    allowContentPropagation: boolean;
}
interface AccordionItem extends StartEnd {
}

declare const safAccordionConfig$1: {
    readonly events: {
        readonly onChange: "change";
    };
};
type SafAccordionItemInstance = AugmentClassEvents<AccordionItem, typeof safAccordionConfig$1>;

type SafAccordionItemProps = SafReactComponentProps<SafAccordionItemInstance, typeof safAccordionConfig$1>;
declare const SafReactAccordionItem: ComponentType<SafAccordionItemProps>;

/**
 * Expand mode for {@link Accordion}
 * `single` designates only a single {@link @saffron/core-components#(AccordionItem:class)} can be open a time.
 * `multi` designates multiple {@link @saffron/core-components#(AccordionItem:class)} can be open simultaneously.
 *
 * @public
 */
declare const AccordionExpandModeEnum: {
    readonly single: "single";
    readonly multi: "multi";
};
/**
 * Type for the {@link Accordion} Expand Mode
 * @public
 */
type AccordionExpandMode = (typeof AccordionExpandModeEnum)[keyof typeof AccordionExpandModeEnum];

/**
 * An Accordion Custom HTML Element
 * Implements {@link https://www.w3.org/TR/wai-aria-practices-1.1/#accordion | ARIA Accordion}.
 *
 * @slot - The slot for the accordion items
 * @fires change - Fires a custom 'change' event when the active item changes
 * @public
 *
 * @remarks
 * Designed to be used with {@link @saffron/core-components#accordionTemplate}
 * and {@link @saffron/core-components#(AccordionItem:class)}.
 */
declare class Accordion extends FASTElement {
    /**
     * Controls the expand mode of the Accordion, either allowing
     * single or multiple item expansion.
     * @public
     *
     * @remarks
     * HTML attribute: expand-mode
     * TODO: rename to expand-mode in v4
     */
    expandmode: AccordionExpandMode;
    expandmodeChanged(prev: AccordionExpandMode, next: AccordionExpandMode): void;
    protected accordionItems: Element[];
    private activeid;
    private activeItemIndex;
    private accordionIds;
    private change;
    private findExpandedItem;
    private setItems;
    private setSingleExpandMode;
    private removeItemListeners;
    private activeItemChange;
    private handleExpandedChange;
    private getItemIds;
    private isSingleExpandMode;
    private handleItemKeyDown;
    private handleItemFocus;
    private adjust;
    private focusItem;
    /**
     * The density of the accordion
     *
     * @public
     */
    density: ComponentDensity;
}

declare const safAccordionConfig: {
    readonly events: {
        readonly onChange: "change";
    };
};
type SafAccordionEventDetails = {
    change: {
        detail: string;
    };
};
type SafAccordionInstance = AugmentClassEvents<Accordion, typeof safAccordionConfig, SafAccordionEventDetails>;

type SafAccordionProps = SafReactComponentProps<SafAccordionInstance, typeof safAccordionConfig, SafAccordionEventDetails>;
declare const SafReactAccordion: ComponentType<SafAccordionProps>;

/**
 * A class for Blank
 */
declare class ActivityNote extends FASTElement {
}

type SafActivityNoteInstance = AugmentClassEvents<ActivityNote>;

type SafActivityNoteProps = SafReactComponentProps<SafActivityNoteInstance>;
declare const SafReactActivityNote: ComponentType<SafActivityNoteProps>;

/**
 * A class for Activity
 */
declare class Activity extends FASTElement {
    /**
     * Describes the amount of time that has passed since the activity was completed. We recommend following the format described in <a href="/?path=/docs/design-foundations-content-conventions-date-and-time-formats--docs">our content conventions</a>.
     *
     * @public
     */
    time: string;
    /**
     * The unique ID for the activity header. This is used for accessibility. If there are multiple `saf-activity` components on your page or SPA, make sure to create a unique ID for each activity header
     *
     * @a11y
     * @public
     */
    headerId: string;
    /**
     * The unique ID for the time element of the activity list. This is used for accessibility. If there are multiple `saf-activity` components on your page or SPA, make sure to create a unique ID for each time element
     *
     * @a11y
     * @public
     */
    timeId: string;
}
interface Activity extends StartEnd {
}

type SafActivityInstance = AugmentClassEvents<Activity>;

type SafActivityProps = SafReactComponentProps<SafActivityInstance>;
declare const SafReactActivity: ComponentType<SafActivityProps>;

/**
 * Alert Type.
 *
 * @public
 */
declare const AlertTypeEnum: {
    readonly toast: "toast";
    readonly inline: "inline";
};
/**
 * Type for alert type values.
 *
 * @public
 */
type AlertType = (typeof AlertTypeEnum)[keyof typeof AlertTypeEnum];
/**
 * Alert appearance values.
 *
 * @public
 */
declare const AlertAppearanceEnum: {
    readonly informational: "informational";
    readonly success: "success";
    readonly warning: "warning";
    readonly error: "error";
    readonly neutral: "neutral";
};
/**
 * Types for alert appearance values.
 *
 * @public
 */
type AlertAppearance = (typeof AlertAppearanceEnum)[keyof typeof AlertAppearanceEnum];

declare class Alert extends FASTElement {
    /**
     * The appearance type of the alert.
     *
     * @defaultValue informational
     * @public
     */
    appearance: AlertAppearance;
    /**
     * The type of alert. If the type is `inline`, or default, the alert will appear next to the element that triggered it. If `toast`, it will appear at the top of the web page.
     *
     * @public
     */
    alertType: AlertType;
    /**
     * The text of `aria-label` inside of the icon used in the alert.
     *
     * @a11y
     * @public
     */
    iconAriaLabel: string;
    /**
     * Set the type of role that the saf icon will have in the saf alert. If this setting is used to hide the status icon from screen reader users its meaning must be reflected in the text of the alert message
     *
     * @public
     */
    iconPresentation: boolean;
    /**
     * The text of the screen-reader only text that notifies screen-reader users of the value of the close button.
     *
     * @a11y
     * @public
     */
    closeAriaLabel: string;
    /**
     * The amount of time in seconds that the alert remains visible. The minimum duration for an alert is 10 seconds. To prevent the alert from disappearing, do not add this attribute or give it a value of 0.
     *
     * @public
     */
    duration: number;
    afterDelay: boolean;
    /**
     * The hidden state of the alert.
     *
     * @public
     */
    isHidden: boolean;
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
    /**
     * Cause alert to be announced immediately by assistive technologies.
     *
     * @a11y
     * @public
     */
    announce: boolean;
    /**
     * Hide the close button to prevent the alert from being dismissed.
     *
     * @public
     */
    hideCloseButton: boolean;
    /**
     * Function to hide the alert using CSS. Emits the `close` event after the alert is hidden.
     *
     * @public
     */
    close(timer: number): void;
    addClosingClass(): void;
    connectedCallback(): void;
    protected announceContent(): void;
}

declare const safAlertConfig: {
    readonly events: {
        readonly onClose: "close";
    };
};
type SafAlertInstance = AugmentClassEvents<Alert, typeof safAlertConfig>;

type SafAlertProps = SafReactComponentProps<SafAlertInstance, typeof safAlertConfig>;
declare const SafReactAlert: ComponentType<SafAlertProps>;

/**
 * Some states and properties are applicable to all host language elements regardless of whether a role is applied.
 * The following global states and properties are supported by all roles and by all base markup elements.
 * @link https://www.w3.org/TR/wai-aria-1.1/#global_states
 *
 * This is intended to be used as a mixin. Be sure you extend FASTElement.
 *
 */
declare class ARIAGlobalStatesAndProperties {
    /**
     * Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the `aria-relevant` attribute.
     *
     * @link https://www.w3.org/TR/wai-aria-1.1/#aria-atomic
     * @public
     * @remarks
     * HTML Attribute: aria-atomic
     */
    ariaAtomic: 'true' | 'false' | string | null;
    /**
     * Indicates an element is being modified and that assistive technologies may want to wait until the modifications are complete before exposing them to the user.
     *
     * @link https://www.w3.org/TR/wai-aria-1.1/#aria-busy
     * @public
     * @remarks
     * HTML Attribute: aria-busy
     */
    ariaBusy: 'true' | 'false' | string | null;
    /**
     * Identifies the element (or elements) whose contents or presence are controlled by the current element.
     *
     * @link https://www.w3.org/TR/wai-aria-1.1/#aria-controls
     * @public
     * @remarks
     * HTML Attribute: aria-controls
     */
    ariaControls: string | null;
    /**
     * Indicates the element that represents the current item within a container or set of related elements.
     *
     * @link https://www.w3.org/TR/wai-aria-1.1/#aria-current
     * @public
     * @remarks
     * HTML Attribute: aria-current
     */
    ariaCurrent: 'page' | 'step' | 'location' | 'date' | 'time' | 'true' | 'false' | string | null;
    /**
     * Identifies the element (or elements) that describes the object.
     *
     * @link https://www.w3.org/TR/wai-aria-1.1/#aria-describedby
     * @public
     * @remarks
     * HTML Attribute: aria-describedby
     */
    ariaDescribedby: string | null;
    /**
     * Identifies the element that provides a detailed, extended description for the object.
     *
     * @link https://www.w3.org/TR/wai-aria-1.1/#aria-details
     * @public
     * @remarks
     * HTML Attribute: aria-details
     */
    ariaDetails: string | null;
    /**
     * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
     *
     * @link https://www.w3.org/TR/wai-aria-1.1/#aria-disabled
     * @public
     * @remarks
     * HTML Attribute: aria-disabled
     */
    ariaDisabled: 'true' | 'false' | string | null;
    /**
     * Identifies the element that provides an error message for the object.
     *
     * @link https://www.w3.org/TR/wai-aria-1.1/#aria-errormessage
     * @public
     * @remarks
     * HTML Attribute: aria-errormessage
     */
    ariaErrormessage: string | null;
    /**
     * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order.
     *
     * @link https://www.w3.org/TR/wai-aria-1.1/#aria-flowto
     * @public
     * @remarks
     * HTML Attribute: aria-flowto
     */
    ariaFlowto: string | null;
    /**
     * Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
     *
     * @link https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup
     * @public
     * @remarks
     * HTML Attribute: aria-haspopup
     */
    ariaHaspopup: 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog' | string | null;
    /**
     * Indicates whether the element is exposed to a screen reader.
     *
     * @link https://www.w3.org/TR/wai-aria-1.1/#aria-hidden
     * @public
     * @remarks
     * HTML Attribute: aria-hidden
     */
    ariaHidden: 'false' | 'true' | string | null;
    /**
     * Indicates the entered value does not conform to the format expected by the application.
     *
     * @link https://www.w3.org/TR/wai-aria-1.1/#aria-invalid
     * @public
     * @remarks
     * HTML Attribute: aria-invalid
     */
    ariaInvalid: 'false' | 'true' | 'grammar' | 'spelling' | string | null;
    /**
     * Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
     *
     * @link https://www.w3.org/TR/wai-aria-1.1/#aria-keyshortcuts
     * @public
     * @remarks
     * HTML Attribute: aria-keyshortcuts
     */
    ariaKeyshortcuts: string | null;
    /**
     * Defines a string value that labels the current element.
     *
     * @link https://www.w3.org/TR/wai-aria-1.1/#aria-label
     * @public
     * @remarks
     * HTML Attribute: aria-label
     */
    ariaLabel: string | null;
    /**
     * Identifies the element (or elements) that labels the current element.
     *
     * @link https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby
     * @public
     * @remarks
     * HTML Attribute: aria-labelledby
     */
    ariaLabelledby: string | null;
    /**
     * Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
     *
     * @link https://www.w3.org/TR/wai-aria-1.1/#aria-live
     * @public
     * @remarks
     * HTML Attribute: aria-live
     */
    ariaLive: 'assertive' | 'off' | 'polite' | string | null;
    /**
     * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
     *
     * @link https://www.w3.org/TR/wai-aria-1.1/#aria-owns
     * @public
     * @remarks
     * HTML Attribute: aria-owns
     */
    ariaOwns: string | null;
    /**
     * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
     *
     * @link https://www.w3.org/TR/wai-aria-1.1/#aria-relevant
     * @public
     * @remarks
     * HTML Attribute: aria-relevant
     */
    ariaRelevant: 'additions' | 'additions text' | 'all' | 'removals' | 'text' | string | null;
    /**
     * Defines a human-readable, author-localized description for the role of an element.
     *
     * @link https://www.w3.org/TR/wai-aria-1.1/#aria-roledescription
     * @public
     * @remarks
     * HTML Attribute: aria-roledescription
     */
    ariaRoledescription: string | null;
}

/**
 * Anchor target values.
 *
 * @public
 */
declare const AnchorTargetEnum: {
    readonly _self: "_self";
    readonly _blank: "_blank";
    readonly _parent: "_parent";
    readonly _top: "_top";
};
/**
 * Anchor target type.
 *
 * @public
 */
type AnchorTarget = (typeof AnchorTargetEnum)[keyof typeof AnchorTargetEnum];
/**
 * Anchor appearance values.
 *
 * @public
 */
declare const AnchorAppearanceEnum: {
    readonly anchor: "anchor";
    readonly ctaPrimary: "cta-primary";
    readonly ctaSecondary: "cta-secondary";
    readonly ctaTertiary: "cta-tertiary";
};
/**
 * Anchor appearance type.
 *
 * @public
 */
type AnchorAppearance = (typeof AnchorAppearanceEnum)[keyof typeof AnchorAppearanceEnum];

/**
 * Includes ARIA states and properties relating to the ARIA link role
 *
 * @public
 */
declare class DelegatesARIALink {
    /**
     * Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
     * @public
     * @remarks
     * @see {@link https://www.w3.org/WAI/PF/aria/roles#link} for more information
     * HTML Attribute: aria-expanded
     */
    ariaExpanded: 'true' | 'false' | string | null;
}
interface DelegatesARIALink extends ARIAGlobalStatesAndProperties {
}
/**
 * An Anchor Custom HTML Element.
 * Based largely on the {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element }.
 *
 * @slot start - Content which can be provided before the anchor content
 * @slot end - Content which can be provided after the anchor content
 * @slot - The default slot for anchor content
 * @csspart control - The anchor element
 * @csspart content - The element wrapping anchor content
 *
 * @public
 */
declare class AnchorBase extends FASTElement {
    /**
     * Prompts the user to save the linked URL.
     * @public
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element } for more information.
     * @remarks
     * HTML Attribute: download
     */
    download: string;
    /**
     * The URL the hyperlink references.
     * See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element } for more information.
     * @public
     * @remarks
     * HTML Attribute: href
     */
    href: string;
    /**
     * Hints at the language of the referenced resource.
     * See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element } for more information.
     * @public
     * @remarks
     * HTML Attribute: hreflang
     */
    hreflang: string;
    /**
     * A space-separated list of URLs. When the link is followed, the browser will send POST requests with the body PING to the URLs.
     * @public
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element } for more information.
     * @remarks
     * HTML Attribute: ping
     */
    ping: string;
    /**
     * Determines how much of the referrer to send when following the link.
     * @public
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element } for more information.
     * @remarks
     * HTML Attribute: referrerpolicy
     */
    referrerpolicy: string;
    /**
     * The relationship of the linked URL as space-separated link types.
     * @public
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element } for more information.
     * @remarks
     * HTML Attribute: rel
     */
    rel: string;
    /**
     * Determines where a link will open in browsing context.
     * @public
     * @defaultValue _blank
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element } for more information.
     * @remarks
     * HTML Attribute: target
     */
    target: AnchorTarget;
    /**
     * Hints at the linked URL's format with a MIME type. No built-in functionality.
     * @public
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a | <a> element } for more information.
     * @remarks
     * HTML Attribute: type
     */
    type: string;
    /**
     * A description for the anchor that is only visible to screen readers.
     *
     * @public
     */
    a11yAriaDescription: string | undefined;
    /**
     * Indicates the element that represents the current item within a container or set of related elements.
     *
     * @public
     */
    a11yAriaCurrent: 'page' | 'step' | 'location' | 'date' | 'time' | true | false | string | undefined;
}
interface AnchorBase extends DelegatesARIALink {
}
declare class Anchor extends AnchorBase {
    /**
     * `deprecated`. Handle click events instead.
     * TODO: Remove in v4
     * @public
     * @deprecated
     */
    transferFocus: boolean;
    /**
     * If true, the anchor will be rendered as a span element instead of an anchor element. Useful for integrating with SPA links like `react-router-dom`.
     *
     * @public
     */
    span: boolean;
    /**
     * The appearance style variant of the anchor.
     * @public
     * @remarks
     * HTML Attribute: appearance
     */
    appearance?: AnchorAppearance;
    /**
     * The density of the anchor when using a CTA appearance.
     * Only applies when appearance is set to a CTA variant.
     * @public
     * @remarks
     * HTML Attribute: density
     */
    density?: ComponentDensityWithExtraCompact;
    /**
     * Indicates the anchor should be rendered as icon-only
     *
     * @public
     * @remarks
     * HTML Attribute: icon-only
     */
    iconOnly: boolean;
    transferFocusChanged(prev: boolean | undefined, next: boolean): void;
    protected transferFocusHandler: (e: MouseEvent | KeyboardEvent) => void;
    isKeyboardEvent(e: Event): e is KeyboardEvent;
}
interface Anchor extends StartEnd, DelegatesARIALink {
}

declare const safAnchorConfig: {
    readonly events: {
        readonly onTransferFocus: "transfer-focus";
    };
};
type SafAnchorInstance = AugmentClassEvents<Anchor, typeof safAnchorConfig>;

type SafAnchorProps = SafReactComponentProps<SafAnchorInstance, typeof safAnchorConfig>;
declare const SafReactAnchor: ComponentType<SafAnchorProps>;

/**
 * Values to define the base behavior of an anchored region on a particular axis
 * @public
 */
declare const AxisPositioningModeEnum: {
    readonly uncontrolled: "uncontrolled";
    readonly locktodefault: "locktodefault";
    readonly dynamic: "dynamic";
};
/**
 * Type to define the base behavior of an anchored region on a particular axis
 * @public
 */
type AxisPositioningMode = (typeof AxisPositioningModeEnum)[keyof typeof AxisPositioningModeEnum];
/**
 * Values to define the scaling behavior of an anchored region on a particular axis
 * @public
 */
declare const AxisScalingModeEnum: {
    readonly anchor: "anchor";
    readonly content: "content";
    readonly fill: "fill";
};
/**
 * Type to define the scaling behavior of an anchored region on a particular axis
 *
 * @public
 */
type AxisScalingMode = (typeof AxisScalingModeEnum)[keyof typeof AxisScalingModeEnum];
/**
 * Values for the horizontal positioning options for an anchored region
 * @public
 */
declare const HorizontalPositionEnum: {
    readonly start: "start";
    readonly end: "end";
    readonly left: "left";
    readonly right: "right";
    readonly center: "center";
    readonly unset: "unset";
};
/**
 * Type for the horizontal positioning options for an anchored region
 *
 * @public
 */
type HorizontalPosition = (typeof HorizontalPositionEnum)[keyof typeof HorizontalPositionEnum];
/**
 * Values for the vertical positioning options for an anchored region
 * @public
 */
declare const VerticalPositionEnum: {
    readonly top: "top";
    readonly bottom: "bottom";
    readonly center: "center";
    readonly unset: "unset";
};
/**
 * Type for the vertical positioning options for an anchored region
 *
 * @public
 */
type VerticalPosition = (typeof VerticalPositionEnum)[keyof typeof VerticalPositionEnum];
/**
 * Defines if the component updates its position automatically. Calling update() always provokes an update.
 * anchor - the component only updates its position when the anchor resizes (default)
 * auto - the component updates its position when:
 * - update() is called
 * - the anchor resizes
 * - the window resizes
 * - the viewport resizes
 * - any scroll event in the document
 *
 * @public
 */
declare const AutoUpdateModeEnum: {
    readonly anchor: "anchor";
    readonly auto: "auto";
};
/**
 * Type for the auto update mode values
 * @public
 */
type AutoUpdateMode = (typeof AutoUpdateModeEnum)[keyof typeof AutoUpdateModeEnum];

/**
 * An anchored region Custom HTML Element.
 *
 * @slot - The default slot for the content
 * @fires loaded - Fires a custom 'loaded' event when the region is loaded and visible
 * @fires positionchange - Fires a custom 'positionchange' event when the position has changed
 *
 * @public
 */
declare class AnchoredRegion extends FASTElement {
    /**
     * The HTML ID of the anchor element this region is positioned relative to
     *
     * @public
     * @remarks
     * HTML Attribute: anchor
     */
    anchor: string;
    protected anchorChanged(): void;
    /**
     * The ID of the element that serves as the viewport for the region.
     *
     * @public
     * @remarks
     * HTML Attribute: anchor
     */
    viewport: string;
    protected viewportChanged(): void;
    /**
     * Sets what logic the component uses to determine horizontal placement.
     * 'locktodefault' forces the default position
     * 'dynamic' decides placement based on available space
     * 'uncontrolled' does not control placement on the horizontal axis
     *
     * @public
     * @remarks
     * HTML Attribute: horizontal-positioning-mode
     */
    horizontalPositioningMode: AxisPositioningMode;
    protected horizontalPositioningModeChanged(): void;
    /**
     * The default horizontal position of the region relative to the anchor element
     *
     * @public
     * @remarks
     * HTML Attribute: horizontal-default-position
     */
    horizontalDefaultPosition: HorizontalPosition;
    protected horizontalDefaultPositionChanged(): void;
    /**
     * Whether the region remains in the viewport (ie. detaches from the anchor) on the horizontal axis
     *
     * @public
     * @remarks
     * HTML Attribute: horizontal-viewport-lock
     */
    horizontalViewportLock: boolean;
    protected horizontalViewportLockChanged(): void;
    /**
     * Whether the region overlaps the anchor on the horizontal axis
     *
     * @public
     * @remarks
     * HTML Attribute: horizontal-inset
     */
    horizontalInset: boolean;
    protected horizontalInsetChanged(): void;
    /**
     * How narrow the space allocated to the default position has to be before the widest area is selected for layout.
     *
     * @public
     * @remarks
     * HTML Attribute: horizontal-threshold
     */
    horizontalThreshold: number;
    protected horizontalThresholdChanged(): void;
    /**
     * Defines how the width of the region is calculated
     *
     * @public
     * @remarks
     * HTML Attribute: horizontal-scaling
     */
    horizontalScaling: AxisScalingMode;
    protected horizontalScalingChanged(): void;
    /**
     * Sets what logic the component uses to determine vertical placement.
     * 'locktodefault' forces the default position
     * 'dynamic' decides placement based on available space
     * 'uncontrolled' does not control placement on the vertical axis
     *
     * @public
     * @remarks
     * HTML Attribute: vertical-positioning-mode
     */
    verticalPositioningMode: AxisPositioningMode;
    protected verticalPositioningModeChanged(): void;
    /**
     * The default vertical position of the region relative to the anchor element
     *
     * @public
     * @remarks
     * HTML Attribute: vertical-default-position
     */
    verticalDefaultPosition: VerticalPosition;
    protected verticalDefaultPositionChanged(): void;
    /**
     * Whether the region remains in the viewport (ie. detaches from the anchor) on the vertical axis
     *
     * @public
     * @remarks
     * HTML Attribute: vertical-viewport-lock
     */
    verticalViewportLock: boolean;
    protected verticalViewportLockChanged(): void;
    /**
     * Whether the region overlaps the anchor on the vertical axis
     *
     * @public
     * @remarks
     * HTML Attribute: vertical-inset
     */
    verticalInset: boolean;
    protected verticalInsetChanged(): void;
    /**
     * How short the space allocated to the default position has to be before the tallest area is selected for layout.
     *
     * @public
     * @remarks
     * HTML Attribute: vertical-threshold
     */
    verticalThreshold: number;
    protected verticalThresholdChanged(): void;
    /**
     * Defines how the height of the region is calculated
     *
     * @public
     * @remarks
     * HTML Attribute: vertical-scaling
     */
    verticalScaling: AxisScalingMode;
    protected verticalScalingChanged(): void;
    /**
     * Whether the region is positioned using css "position: fixed" allows the region to break out of parent containers.
     *
     * @public
     * @remarks
     * HTML Attribute: fixed-placement
     */
    fixedPlacement: boolean;
    protected fixedPlacementChanged(): void;
    /**
     * Defines what triggers the anchored region to revaluate positioning
     *
     * @public
     * @remarks
     * HTML Attribute: auto-update-mode
     */
    autoUpdateMode: AutoUpdateMode;
    protected autoUpdateModeChanged(prevMode: AutoUpdateMode, newMode: AutoUpdateMode): void;
    protected anchorElementChanged(): void;
    protected viewportElementChanged(): void;
    /**
     * values to be applied to the component's transform on render
     */
    private translateX;
    private translateY;
    /**
     * the span to be applied to the region on each axis
     */
    private regionWidth;
    private regionHeight;
    private resizeDetector;
    private viewportRect;
    private anchorRect;
    private regionRect;
    /**
     * base offsets between the positioner's base position and the anchor's
     */
    private baseHorizontalOffset;
    private baseVerticalOffset;
    private pendingPositioningUpdate;
    private pendingReset;
    private currentDirection;
    private regionVisible;
    private forceUpdate;
    private updateThreshold;
    private static intersectionService;
    /**
     * Programmatically updates the anchored region's position
     * @readonly
     */
    update: () => void;
    /**
     * destroys the instance's resize observer
     */
    private disconnectResizeDetector;
    /**
     * initializes the instance's resize observer
     */
    private initializeResizeDetector;
    /**
     * react to attribute changes that don't require a reset
     */
    private updateForAttributeChange;
    /**
     * fully initializes the component
     */
    private initialize;
    /**
     * Request a reset if there are currently no open requests
     */
    private requestReset;
    /**
     * sets the starting configuration for component internal values
     */
    private setInitialState;
    /**
     * starts observers
     */
    private startObservers;
    /**
     * get position updates
     */
    private requestPositionUpdates;
    /**
     * stops observers
     */
    private stopObservers;
    /**
     * Gets the viewport element by id, or defaults to document root
     */
    private getViewport;
    /**
     *  Gets the anchor element by id
     */
    private getAnchor;
    /**
     *  Handle intersections
     */
    private handleIntersection;
    /**
     *  iterate through intersection entries and apply data
     */
    private applyIntersectionEntries;
    /**
     *  Update the offset values
     */
    private updateRegionOffset;
    /**
     *  compare rects to see if there is enough change to justify a DOM update
     */
    private isRectDifferent;
    /**
     *  Handle resize events
     */
    private handleResize;
    /**
     * resets the component
     */
    private reset;
    /**
     *  Recalculate layout related state values
     */
    private updateLayout;
    /**
     *  Updates the style string applied to the region element as well as the css classes attached
     *  to the root element
     */
    private updateRegionStyle;
    /**
     *  Updates the css classes that reflect the current position of the element
     */
    private updatePositionClasses;
    /**
     * Get horizontal positioning state based on desired position
     */
    private setHorizontalPosition;
    /**
     * Set vertical positioning state based on desired position
     */
    private setVerticalPosition;
    /**
     *  Get available positions based on positioning mode
     */
    private getPositioningOptions;
    /**
     *  Get the space available for a particular relative position
     */
    private getAvailableSpace;
    /**
     * Get region dimensions
     */
    private getNextRegionDimension;
    /**
     * starts event listeners that can trigger auto updating
     */
    private startAutoUpdateEventListeners;
    /**
     * stops event listeners that can trigger auto updating
     */
    private stopAutoUpdateEventListeners;
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
}

declare const safAnchoredRegionConfig: {
    readonly events: {
        readonly onLoaded: "loaded";
        readonly onPositionChange: "positionchange";
    };
};
type SafAnchoredRegionInstance = AugmentClassEvents<AnchoredRegion, typeof safAnchoredRegionConfig>;

type SafAnchoredRegionProps = SafReactComponentProps<SafAnchoredRegionInstance, typeof safAnchoredRegionConfig>;
declare const SafReactAnchoredRegion: ComponentType<SafAnchoredRegionProps>;

/**
 * An object representing the available sizes for the Avatar component.
 *
 * @remarks
 * This object is a constant that contains the available size options for the Avatar component.
 *
 * @public
 */
declare const AvatarSizeEnum: {
    readonly xlarge: "xlarge";
    readonly large: "large";
    readonly medium: "medium";
    readonly small: "small";
};
/**
 * A union type representing the available size values for the Avatar component.
 *
 * @public
 */
type AvatarSize = (typeof AvatarSizeEnum)[keyof typeof AvatarSizeEnum];
/**
 * An object representing the available appearances for the Avatar component.
 *
 * @remarks
 * This object is a constant that contains the available appearance options for the Avatar component.
 *
 * @public
 */
declare const AvatarAppearanceEnum: {
    readonly icon: "icon";
    readonly iconLight: "icon-light";
    readonly image: "image";
    readonly imageLight: "image-light";
    readonly blue: "blue";
    readonly blueLight: "blue-light";
    readonly gray: "gray";
    readonly grayLight: "gray-light";
    readonly green: "green";
    readonly greenLight: "green-light";
    readonly neutral: "neutral";
    readonly neutralLight: "neutral-light";
    /** @deprecated */
    readonly purple: "purple";
    /** @deprecated */
    readonly purpleLight: "purple-light";
    readonly red: "red";
    readonly redLight: "red-light";
    readonly hue2: "hue-2";
    readonly hue2Light: "hue-2-light";
};
/**
 * A union type representing the available appearance values for the Avatar component.
 *
 * @public
 */
type AvatarAppearance = (typeof AvatarAppearanceEnum)[keyof typeof AvatarAppearanceEnum];

/**
 * An Avatar Custom HTML Element
 *
 * @slot media - Used for media such as an image
 * @slot - The default slot for avatar text, commonly a name or initials
 * @slot badge - Used to provide a badge, such as a status badge
 * @csspart backplate - The wrapping container for the avatar
 * @csspart content - The default slot
 *
 * @public
 */
declare class Avatar extends FASTElement {
    /**
     * Determines avatar size.
     *
     * @public
     */
    size: AvatarSize;
    /**
     * Determines the appearance of the avatar.
     *
     * @public
     */
    appearance: AvatarAppearance;
    /**
     * Determines the source of the image if appearance is set to image.
     *
     * @public
     */
    imgSrc: string;
    /**
     * Determines the accessible label for the avatar. When used with initials or an image its used to provide the full name to screen readers.
     *
     * @a11y
     * @public
     */
    label: string;
    /**
     * The option to enable or disable presentation
     *
     * @a11y
     * @public
     */
    presentation: boolean;
}

type SafAvatarInstance = AugmentClassEvents<Avatar>;

type SafAvatarProps = SafReactComponentProps<SafAvatarInstance>;
declare const SafReactAvatar: ComponentType<SafAvatarProps>;

type Direction = keyof typeof Direction$1;
/**
 * A class for back-to-top derived from the Button foundation component
 */
declare class BackToTop extends FASTElement {
    /**
     * The anchor id to which you want to scroll.
     * For example, if you want to scroll to the top of the body, and the body has an id of `top`, the value for this attribute is `top`.
     *
     * @public
     */
    scrollToId: string;
    /**
     * The distance in pixels a user has to scroll from the top before the component appears.
     *
     * @public
     */
    yOffset: number;
    /**
     * Whether or not the component is used in a right-to-left situation.
     * If rtl, the component will appear on the bottom left side of the screen.
     *
     * @public
     */
    direction: Direction;
    /**
     * The text that appears in the tooltip that is activated on hover or focus.
     *
     * @public
     */
    tooltipText: string;
    /**
     * A description for the anchor that is only visible to screen readers, passed to a hidden span element, connected to the anchor via aria-describedby
     *
     * @public
     */
    a11yAriaDescription: string | undefined;
    id: string;
    private scrollTimeout;
    private handleScroll;
    connectedCallback(): void;
    disconnectedCallBack(): void;
}

type SafBackToTopInstance = AugmentClassEvents<BackToTop>;

type SafBackToTopProps = SafReactComponentProps<SafBackToTopInstance>;
declare const SafReactBackToTop: ComponentType<SafBackToTopProps>;

/**
 * Badge appearance values
 *
 * @public
 */
declare const BadgeAppearanceEnum: {
    readonly error: "error";
    readonly errorLight: "error-light";
    readonly info: "info";
    readonly infoLight: "info-light";
    readonly success: "success";
    readonly successLight: "success-light";
    readonly warning: "warning";
    readonly warningLight: "warning-light";
    readonly neutral: "neutral";
    readonly neutralLight: "neutral-light";
};
/**
 * Types for badge appearance values
 *
 * @public
 */
type BadgeAppearance = (typeof BadgeAppearanceEnum)[keyof typeof BadgeAppearanceEnum];

/**
 * A Badge Custom HTML Element.
 * @slot start - Content which can be provided before the default slot
 * @slot end - Content which can be provided after the default slot
 * @slot - The default slot for the badge
 * @csspart control - The element wrapping the default slot
 *
 * @public
 */
declare class Badge extends FASTElement {
    /**
     * Determines if the badge is attached to its parent.
     *
     * @public
     */
    attached: boolean;
    /**
     * If true, the badge will render a smaller variant meant to be used as a counter.
     *
     * @public
     */
    counter: boolean;
    /**
     * Determines the appearance of the badge.
     *
     * @public
     * @remarks
     * HTML Attribute: appearance
     */
    appearance: BadgeAppearance;
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
}
interface Badge extends StartEnd {
}

type SafBadgeInstance = AugmentClassEvents<Badge>;

type SafBadgeProps = SafReactComponentProps<SafBadgeInstance>;
declare const SafReactBadge: ComponentType<SafBadgeProps>;

/**
 * A Breadcrumb Item Custom HTML Element.
 *
 * @slot start - Content which can be provided before the breadcrumb content
 * @slot end - Content which can be provided after the breadcrumb content
 * @slot - The default slot for when no href is provided or for providing your own custom elements
 * @slot separator - The slot for providing a custom separator
 * @csspart listitem - The wrapping container for the item, represents a semantic listitem
 * @csspart separator - The wrapping element for the separator
 *
 * @public
 */
declare class BreadcrumbItem extends Anchor {
    /**
     * A description for the anchor that is only visible to screen readers, passed to a hidden span element, connected to the anchor via aria-describedby
     *
     * @public
     */
    a11yAriaDescription: string | undefined;
}

type SafBreadcrumbItemInstance = AugmentClassEvents<BreadcrumbItem>;

type SafBreadcrumbItemProps = SafReactComponentProps<SafBreadcrumbItemInstance>;
declare const SafReactBreadcrumbItem: ComponentType<SafBreadcrumbItemProps>;

/**
 * A Breadcrumb Custom HTML Element.
 * @slot - The default slot for the breadcrumb items
 * @csspart list - The element wrapping the slotted items
 *
 * @public
 */
declare class Breadcrumb extends FASTElement {
    protected slottedBreadcrumbItemsChanged(): void;
}

type SafBreadcrumbInstance = AugmentClassEvents<Breadcrumb>;

type SafBreadcrumbProps = SafReactComponentProps<SafBreadcrumbInstance>;
declare const SafReactBreadcrumb: ComponentType<SafBreadcrumbProps>;

/**
 * ButtonEmbedded
 */
declare class ButtonEmbedded extends FASTElement {
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
    private mutationObserver;
    slottedNodesChanged(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private updateButtonClasses;
    private observeSlottedElements;
}

type SafButtonEmbeddedInstance = AugmentClassEvents<ButtonEmbedded>;

type SafButtonEmbeddedProps = SafReactComponentProps<SafButtonEmbeddedInstance>;
declare const SafReactButtonEmbedded: ComponentType<SafButtonEmbeddedProps>;

/**
 * Button appearance values.
 *
 * @public
 */
declare const ButtonGroupOrientationEnum: {
    readonly horizontal: "horizontal";
    readonly vertical: "vertical";
};
type ButtonGroupOrientation = (typeof ButtonGroupOrientationEnum)[keyof typeof ButtonGroupOrientationEnum];

/**
 * ButtonGroup
 * aria-label: string (required) - To identify the group of buttons
 * role: string (optional) - The role of the button group
 */
declare class ButtonGroup extends FASTElement {
    /**
     * Defines a string value to identify the component as an interactive element.
     *
     * @a11y
     * @public
     */
    ariaLabel: string;
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
    role: string;
    /**
     * Determines the orientation of the button group.
     *
     * @public
     */
    orientation: ButtonGroupOrientation;
    slottedNodesChanged(): void;
}

type SafButtonGroupInstance = AugmentClassEvents<ButtonGroup>;

type SafButtonGroupProps = SafReactComponentProps<SafButtonGroupInstance>;
declare const SafReactButtonGroup: ComponentType<SafButtonGroupProps>;

/**
 * This file enables typing support for ElementInternals APIs.
 * It is largely taken from https://github.com/microsoft/TSJS-lib-generator/pull/818/files.
 *
 * When TypeScript adds support for these APIs we can delete this file.
 */
interface ValidityStateFlags {
    badInput?: boolean;
    customError?: boolean;
    patternMismatch?: boolean;
    rangeOverflow?: boolean;
    rangeUnderflow?: boolean;
    stepMismatch?: boolean;
    tooLong?: boolean;
    tooShort?: boolean;
    typeMismatch?: boolean;
    valueMissing?: boolean;
}
/**
 * Source:
 * https://html.spec.whatwg.org/multipage/custom-elements.html#elementinternals
 */
interface ElementInternals {
    /**
     * Returns the form owner of internals target element.
     */
    readonly form: HTMLFormElement | null;
    /**
     * Returns a NodeList of all the label elements that internals target element is associated with.
     */
    readonly labels: NodeList;
    /**
     * Returns the error message that would be shown to the user if internals target element was to be checked for validity.
     */
    readonly validationMessage: string;
    /**
     * Returns the ValidityState object for internals target element.
     */
    readonly validity: ValidityState;
    /**
     * Returns true if internals target element will be validated when the form is submitted; false otherwise.
     */
    readonly willValidate: boolean;
    /**
     * Returns true if internals target element has no validity problems; false otherwise.
     * Fires an invalid event at the element in the latter case.
     */
    checkValidity(): boolean;
    /**
     * Returns true if internals target element has no validity problems; otherwise,
     * returns false, fires an invalid event at the element, and (if the event isn't canceled) reports the problem to the user.
     */
    reportValidity(): boolean;
    /**
     * Sets both the state and submission value of internals target element to value.
     *
     * While "null" isn't enumerated as
     * a argument type (here)[https://html.spec.whatwg.org/multipage/custom-elements.html#the-elementinternals-interface],
     * In practice it appears to remove the value from the form data on submission. Adding it as a valid type here
     * becuase that capability is required for checkbox and radio types
     */
    setFormValue(value: File | string | FormData | null, state?: File | string | FormData | null): void;
    /**
     * Marks internals target element as suffering from the constraints indicated by the flags argument,
     * and sets the element's validation message to message.
     * If anchor is specified, the user agent might use
     * it to indicate problems with the constraints of internals target
     * element when the form owner is validated interactively or reportValidity() is called.
     */
    setValidity(flags: ValidityStateFlags, message?: string, anchor?: HTMLElement): void;
}
declare let ElementInternals: {
    prototype: ElementInternals;
    new (): ElementInternals;
};
/**
 * Base class for providing Custom Element Form Association.
 *
 * @beta
 */
interface FormAssociated extends Omit<ElementInternals, 'labels'> {
    dirtyValue: boolean;
    /**
     * Prevents the user from interacting with the component
     */
    disabled: boolean;
    readonly elementInternals: ElementInternals | null;
    readonly formAssociated: boolean;
    initialValue: string;
    readonly labels: ReadonlyArray<Node[]>;
    /**
     * Name of the form control. Submitted with the form as part of the name/value pair.
     */
    name: string;
    /**
     * A value is required or must be checked for the form to be submittable.
     */
    required: boolean;
    /**
     * The initial value of the control.
     */
    value: string;
    currentValue: string;
    attachProxy(): void;
    detachProxy(): void;
    disabledChanged?(previous: boolean, next: boolean): void;
    formDisabledCallback?(disabled: boolean): void;
    formResetCallback(): void;
    initialValueChanged?(previous: string, next: string): void;
    nameChanged?(previous: string, next: string): void;
    requiredChanged(prev: boolean, next: boolean): void;
    stopPropagation(e: Event): void;
    valueChanged(previous: string, next: string): void;
}
/**
 * Base class for providing Custom Element Form Association with checkable features.
 *
 * @beta
 */
interface CheckableFormAssociated extends FormAssociated {
    currentChecked: boolean;
    dirtyChecked: boolean;
    checkedAttribute: boolean;
    defaultChecked: boolean;
    defaultCheckedChanged(oldValue: boolean | undefined, newValue: boolean): void;
    /**
     * Determines whether this component is checked by default (when the page loads).
     */
    checked: boolean;
    checkedChanged(oldValue: boolean | undefined, newValue: boolean): void;
}

declare class _Button extends FASTElement {
}
interface _Button extends FormAssociated {
}
declare const FormAssociatedButton_base: typeof _Button;
/**
 * A form-associated base class for the {@link @saffron/core-components#(Button:class)} component.
 *
 * @beta
 */
declare class FormAssociatedButton extends FormAssociatedButton_base {
    proxy: HTMLInputElement;
}

/**
 * Button type values.
 *
 * @public
 */
declare const ButtonTypeEnum: {
    readonly submit: "submit";
    readonly reset: "reset";
    readonly button: "button";
};
/**
 * Type for button type values.
 *
 * @public
 */
type ButtonType = (typeof ButtonTypeEnum)[keyof typeof ButtonTypeEnum];
/**
 * Button appearance values.
 *
 * @public
 */
declare const ButtonAppearanceEnum: {
    readonly primary: "primary";
    readonly secondary: "secondary";
    readonly tertiary: "tertiary";
    readonly inline: "inline";
};
/**
 * Types for button appearance values.
 *
 * @public
 */
type ButtonAppearance = (typeof ButtonAppearanceEnum)[keyof typeof ButtonAppearanceEnum];
/**
 * Button shape values.
 * rectangle is set to undefined so if shape isn't set, it defaults to rectangle, without adding the attribute to the button element
 *
 * @public
 */
declare const ButtonShapeEnum: {
    readonly rectangle: undefined;
    readonly circle: "circle";
};
/**
 * Types for button shape values.
 *
 * @public
 */
type ButtonShape = (typeof ButtonShapeEnum)[keyof typeof ButtonShapeEnum];

/**
 * contains attributes and logic related to Saffron button (i.e. density, layout, shape)
 */
declare class Button extends ButtonBase {
    /**
     * Determines the visual appearance of the button.
     *
     * @public
     */
    appearance: ButtonAppearance;
    /**
     * Determines if the icon buttons are rectangle (default) or circular shape. Shape circle only affects icon buttons.
     *
     * @public
     */
    shape: ButtonShape;
    /**
     * Adds styles to render an icon only button
     *
     * @public
     */
    iconOnly: boolean;
    /**
     * Adds styles to nested buttons used within other components
     *
     * @public
     */
    nestedItem: boolean;
    /**
     * If set to `block`, will have the button expand to the full width of its container
     *
     * @public
     */
    layout: 'block' | undefined;
    /**
     * Used to change the spacing in and around the component
     *
     * @public
     */
    density: ComponentDensityWithExtraCompact;
}
/**
 * contains attributes and logic related to buttons in general (i.e. disabled, autofocus, aria attributes)
 */
declare class ButtonBase extends FASTElement {
    /**
     * Prevents the user from interacting with the component.
     */
    disabled: boolean;
    /**
     * Determines if the element should receive document focus on page load.
     *
     * @public
     * @remarks
     * HTML Attribute: autofocus
     */
    autofocus: boolean;
    control: HTMLButtonElement;
    /**
     * Pass through for a div that adds additional information for the button, which uses aria-describedby to associate the two
     *
     * @public
     */
    a11yAriaDescription: string | undefined;
    /**
     * Identifies the element (or elements) whose contents or presence are controlled by the current element.
     *
     * @public
     */
    ariaControls: string | null;
    /**
     * Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
     *
     * @public
     */
    ariaHaspopup: 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog' | string | null;
    /**
     * Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
     *
     * @public
     */
    ariaExpanded: 'true' | 'false' | string | null;
    /**
     * Indicates the current "pressed" state of toggle buttons.
     * @see {@link https://www.w3.org/WAI/PF/aria/roles#button} for more information
     * @public
     * @remarks
     * HTML Attribute: aria-pressed
     */
    ariaPressed: 'true' | 'false' | 'mixed' | string | null;
    /**
     * attr for passing aria-label to the button without also being applied to the component element
     *
     * @public
     */
    a11yAriaLabel: string;
    /**
     * attr for passing role to the button without also being applied to the component element
     *
     * @public
     */
    a11yRole: string;
    /**
     * attr for passing aria-valuenow to the button
     *
     * @public
     */
    a11yAriaValueNow: string;
    /**
     * attr for passing aria-valuemin to the button
     *
     * @public
     */
    a11yAriaValueMin: string;
    /**
     * attr for passing aria-valuemax to the button
     *
     * @public
     */
    a11yAriaValueMax: string;
    /**
     * attr for passing aria-orientation to the button
     *
     * @public
     */
    a11yAriaOrientation: string;
    /**
     * attr for passing aria-roledescription to the button
     *
     * @public
     */
    a11yAriaRoleDescription: string;
    /**
     * Indicates the current "selected" state.
     *
     * @public
     */
    ariaSelected: 'true' | 'false' | string | null;
}
interface ButtonBase extends ARIAGlobalStatesAndProperties {
}
/**
 * contains attributes and logic related to form associated buttons (i.e. name, value, form submission logic)
 */
declare class FormButton extends FormAssociatedButton {
    protected autofocusChanged(): void;
    /**
     * The `id` of a form to associate the element to.
     *
     * @public
     * @remarks
     * HTML Attribute: form
     */
    formId: string;
    /**
     * The URL that processes the information submitted by the button.
     *
     * @public
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button | <button> element} for more details.
     * @remarks
     * HTML Attribute: formaction
     */
    formaction: string;
    protected formactionChanged(): void;
    /**
     * Specifies how to encode the form data that is submitted.
     *
     * @public
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button | <button> element} for more details.
     * @remarks
     * HTML Attribute: formenctype
     */
    formenctype: string;
    protected formenctypeChanged(): void;
    /**
     * Specifies the HTTP method used to submit the form.
     *
     * @public
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button | <button> element} for more details.
     * @remarks
     * HTML Attribute: formmethod
     */
    formmethod: string;
    protected formmethodChanged(): void;
    /**
     * Specifies that the form is not to be validated when it is submitted.
     *
     * @public
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button | <button> element} for more details.
     * @remarks
     * HTML Attribute: formnovalidate
     */
    formnovalidate: boolean;
    protected formnovalidateChanged(): void;
    /**
     * Indicates where to display the response from submitting the form.
     *
     * @public
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button | <button> element} for more details.
     * @remarks
     * HTML Attribute: formtarget
     */
    formtarget: '_self' | '_blank' | '_parent' | '_top';
    protected formtargetChanged(): void;
    /**
     * The default behavior of the button.
     *
     * @public
     * @remarks
     * HTML Attribute: type
     */
    type: ButtonType;
    protected typeChanged(previous: ButtonType | undefined, next: ButtonType): void;
    validate(): void;
    /**
     * Submits the parent form
     */
    private handleSubmission;
    /**
     * Resets the parent form
     */
    private handleFormReset;
    focus(options?: FocusOptions): void;
    private _keypressHandler;
}
interface FormButton extends StartEnd, Button {
}

type SafButtonInstance = AugmentClassEvents<FormButton>;

type SafButtonProps = SafReactComponentProps<SafButtonInstance>;
declare const SafReactButton: ComponentType<SafButtonProps>;

/**
 * Card appearance values.
 *
 * @public
 */
declare const CardAppearanceEnum: {
    readonly horizontal: "horizontal";
    readonly vertical: "vertical";
};
/**
 * Types for card appearance values
 *
 * @public
 */
type CardAppearance = (typeof CardAppearanceEnum)[keyof typeof CardAppearanceEnum];

/**
 * A class for Card
 */
declare class Card extends FASTElement {
    /**
     * Determines the card orientation.
     *
     * @public
     */
    appearance: CardAppearance;
    /**
     * Configures the {@link https://www.w3.org/TR/wai-aria-1.1/#aria-level | level} of the heading element.
     *
     * @a11y
     * @public
     */
    headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
    /**
     * Determines if the image bleeds to the edge of the card or is inset
     *
     * @public
     */
    imageBleed: boolean;
}

type SafCardInstance = AugmentClassEvents<Card>;

type SafCardProps = SafReactComponentProps<SafCardInstance>;
declare const SafReactCard: ComponentType<SafCardProps>;

/**
 * A class for Carousel
 */
declare class Carousel extends FASTElement {
    /**
     * Hide or show the flippers for assistive technologies.
     *
     * @public
     */
    flippersHiddenFromAT: string;
    /**
     * Header to display in slide controls.
     *
     * @public
     */
    slideLabel: string;
    /**
     * Determines the total number of slides.
     *
     * @public
     */
    totalSlides: number;
    /**
     * Determines the number of the current slide.
     *
     * @public
     */
    currentSlide: number;
    private step;
    private contentContainer;
    private scrollArea;
    private slotContent;
    private slides;
    private endOfSlides;
    private currentIndex;
    observeResize: boolean;
    private resizeObserver;
    addResizeObserver(): void;
    slottedNodesChanged(): void;
    initialize(): void;
    resizeSlide(): void;
    previousSlide(): void;
    nextSlide(): void;
    disconnectedCallback(): void;
}

type SafCarouselInstance = AugmentClassEvents<Carousel>;

type SafCarouselProps = SafReactComponentProps<SafCarouselInstance>;
declare const SafReactCarousel: ComponentType<SafCarouselProps>;

/**
 * A class for Chat
 */
declare class Chat extends FASTElement {
    /**
     * The aria label for the region called chat.
     *
     * @a11y
     * @public
     */
    ariaLabel: string;
    /**
     * Whether or not the content is being loaded.
     *
     * @public
     */
    loading: boolean;
    /**
     * Text on loading ring.
     *
     * @public
     */
    loadingText: string;
    /**
     * The aria label for the list of chat messages.
     *
     * @a11y
     * @public
     */
    messageAriaLabel?: string;
    footerNodesChanged(): void;
    footerItemsExist(): void;
}

type SafChatInstance = AugmentClassEvents<Chat>;

type SafChatProps = SafReactComponentProps<SafChatInstance>;
declare const SafReactChat: ComponentType<SafChatProps>;

/**
 * Checkbox Group
 */
declare class CheckboxGroup extends FASTElement {
    supportsElementsInternals: boolean;
    form: HTMLFormElement | undefined;
    slottedNodes: Node[];
    /**
     * Text that describes the checkbox group.
     *
     * @public
     */
    label: string;
    /**
     * Indicates the checkbox group is required.
     *
     * @public
     */
    required: boolean;
    /**
     * Provides additional instructional text for extra guidance for the checkbox group.
     *
     * @public
     */
    instructionalText: string;
    /**
     * Provides additional optional text to the label. Accepts any text but intended to indicate `(Required)` or `(Optional)`.
     *
     * @a11y
     * @public
     */
    optionalText?: string;
    disabled: boolean;
    /**
     * Controls the visual orientation of the checkbox group.
     *
     * @public
     */
    orientation: 'horizontal' | 'vertical';
    /**
     * Defines a string value that labels the error icon, when icons are not just presentational but used to communicate status.
     *
     * @a11y
     * @public
     */
    errorAriaLabel: string;
    /**
     * Indicates the entered value does not conform to the format expected by the application.
     *
     * @public
     */
    invalid: boolean;
    /**
     * The message displayed when the control is valid or invalid.
     *
     * @public
     */
    validationMessage: string;
    /**
     * Adds additional character to the label when checkbox-group is required.
     *
     * @public
     */
    requiredText?: string;
    /**
     * Provides additional ARIA text when the checkbox group is required.
     *
     * @a11y
     * @public
     */
    requiredAriaText: string;
    requiredAriaTextChanged(_oldValue: string, newValue: string): void;
    connectedCallback(): void;
    /**
     * The values of selected checkbox items.
     *
     * @public
     */
    value: string[];
    setValidity: () => void;
    protected canAnnounceValidation: boolean;
    invalidChanged(): void;
    validationMessageChanged(): void;
    protected announceValidation(): void;
}

declare const safCheckboxGroupConfig: {
    readonly events: {
        readonly onChange: "change";
        readonly onInvalid: "invalid";
        readonly onReset: "reset";
    };
};
type SafCheckboxGroupEventDetails = {
    invalid: {
        detail: boolean;
    };
};
type SafCheckboxGroupInstance = AugmentClassEvents<CheckboxGroup, typeof safCheckboxGroupConfig, SafCheckboxGroupEventDetails>;

type SafCheckboxGroupProps = SafReactComponentProps<SafCheckboxGroupInstance, typeof safCheckboxGroupConfig, SafCheckboxGroupEventDetails>;
declare const SafReactCheckboxGroup: ComponentType<SafCheckboxGroupProps>;

declare class _Checkbox extends FASTElement {
}
interface _Checkbox extends CheckableFormAssociated {
}
declare const FormAssociatedCheckbox_base: typeof _Checkbox;
/**
 * A form-associated base class for the {@link @saffron/core-components#(Checkbox:class)} component.
 *
 * @beta
 */
declare class FormAssociatedCheckbox extends FormAssociatedCheckbox_base {
    proxy: HTMLInputElement;
}

/**
 * A Checkbox Custom HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#checkbox | ARIA checkbox }.
 *
 * @slot checked-indicator - The checked indicator
 * @slot indeterminate-indicator - The indeterminate indicator
 * @slot - The default slot for the label
 * @csspart control - The element representing the visual checkbox control
 * @csspart label - The label
 * @fires change - Emits a custom change event when the checked state changes
 *
 * @public
 */
declare class Checkbox extends FormAssociatedCheckbox {
    /**
     * This is a state in which it's impossible to say whether the item is toggled on or off.
     */
    indeterminate: boolean;
    constructor();
    private toggleChecked;
    /**
     * Pass through the input element.
     *
     * @public
     */
    id: string;
    get internalId(): string;
    /**
     * Pass through for a div that adds additional information for the button, which uses aria-describedby to associate the two
     *
     * @a11y
     * @public
     */
    a11yAriaDescription: string | undefined;
    /**
     * Indicates the entered value does not conform to the format expected by the application.
     *
     * @public
     */
    invalid: boolean;
    /**
     * The message displayed when the control is valid or invalid.
     *
     * @public
     */
    validationMessage: string;
    /**
     * Defines a string value that labels the error icon, when icons are not just presentational but used to communicate status.
     *
     * @a11y
     * @public
     */
    errorAriaLabel: string;
    /**
     * A label that is passed from the component to the checkbox input element.
     *
     * @a11y
     * @public
     */
    a11yAriaLabel: string;
    private checkedInternal;
    connectedCallback(): void;
    changeHandler: () => void;
    private syncCheckedState;
    private updateForm;
    checkedChanged(prev: boolean | undefined): void;
    indeterminateChanged(): void;
    protected canAnnounceValidation: boolean;
    invalidChanged(): void;
    validationMessageChanged(): void;
    protected announceValidation(): void;
}

declare const safCheckboxConfig: {
    readonly events: {
        readonly onChange: "change";
    };
};
type SafCheckboxInstance = AugmentClassEvents<Checkbox, typeof safCheckboxConfig>;

type SafCheckboxProps = SafReactComponentProps<SafCheckboxInstance, typeof safCheckboxConfig>;
declare const SafReactCheckbox: ComponentType<SafCheckboxProps>;

/**
 * A class for Chip
 */
declare class Chip extends ButtonBase {
    /**
     * Toggles the close icon and the ability to close the chip by clicking the component.
     *
     * @public
     */
    closeable: boolean;
    /**
     * Toggles the chip clickable functionality. True will act as button, false will act as a div.
     *
     * @public
     */
    clickable: boolean;
    /**
     * The close button label and its tooltip text.
     *
     * @public
     */
    closeButtonLabel: string | undefined;
    /**
     * Toggles the close icon tooltip.
     *
     * @public
     */
    closeableTooltip: boolean;
    /**
     * Text of the close icon.
     *
     * @public
     */
    tooltipText: string | undefined;
    /**
     * Causes tooltip contents to be announced by assistive technologies.
     *
     * @public
     */
    announceTooltip: boolean;
    close(event: Event): void;
    focus(): void;
}

declare const safChipConfig: {
    readonly events: {
        readonly onRemove: "remove";
    };
};
type SafChipInstance = AugmentClassEvents<Chip, typeof safChipConfig>;

type SafChipProps = SafReactComponentProps<SafChipInstance, typeof safChipConfig>;
declare const SafReactChip: ComponentType<SafChipProps>;

/**
 * A class for ClickAwayListener
 */
declare class ClickAwayListener extends FASTElement {
    handleClick: (event: MouseEvent) => void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * The density of the alert.
     * @public
     */
    density: ComponentDensity;
}

declare const safClickAwayListenerConfig: {
    readonly events: {
        readonly onClickAway: "click-away";
    };
};
type SafClickAwayListenerEventDetails = {
    'click-away': {
        detail: EventTarget[];
    };
};

type SafClickAwayListenerInstance = AugmentClassEvents<ClickAwayListener, typeof safClickAwayListenerConfig, SafClickAwayListenerEventDetails>;

type SafClickAwayListenerProps = SafReactComponentProps<SafClickAwayListenerInstance, typeof safClickAwayListenerConfig, SafClickAwayListenerEventDetails>;
declare const SafReactClickAwayListener: ComponentType<SafClickAwayListenerProps>;

/**
 * States and properties relating to the ARIA `option` role.
 *
 * @public
 */
declare class DelegatesARIAListboxOption {
    /**
     * Indicates the current "checked" state.
     * @see {@link https://www.w3.org/TR/wai-aria-1.2/#option} for more information.
     * @public
     * @remarks
     * HTML Attribute: `aria-checked`
     */
    ariaChecked: 'true' | 'false' | string | null;
    /**
     * Defines an element's number or position in the current set of listitems.
     * @see {@link https://www.w3.org/TR/wai-aria-1.2/#option} for more information.
     * @public
     * @remarks
     * HTML Attribute: `aria-posinset`
     */
    ariaPosInSet: string | null;
    /**
     * Indicates the current "selected" state.
     * @see {@link https://www.w3.org/TR/wai-aria-1.2/#option} for more information.
     * @public
     * @remarks
     * HTML Attribute: `aria-selected`
     */
    ariaSelected: 'true' | 'false' | string | null;
    /**
     * Defines the number of items in the current set of listitems.
     * @see {@link https://www.w3.org/TR/wai-aria-1.2/#option} for more information.
     * @public
     * @remarks
     * HTML Attribute: `aria-setsize`
     */
    ariaSetSize: string | null;
}
interface DelegatesARIAListboxOption extends ARIAGlobalStatesAndProperties {
}
/**
 * An Option Custom HTML Element.
 * Implements {@link https://www.w3.org/TR/wai-aria-1.1/#option | ARIA option }.
 *
 * @slot start - Content which can be provided before the listbox option content
 * @slot end - Content which can be provided after the listbox option content
 * @slot - The default slot for listbox option content
 * @csspart content - Wraps the listbox option content
 *
 * @public
 */
declare class Option extends FASTElement {
    /**
     * The checked state is used when the parent listbox is in multiple selection mode.
     * To avoid accessibility conflicts, the checked state should not be present in
     * single selection mode.
     *
     * @public
     */
    checked?: boolean;
    /**
     * Updates the ariaChecked property when the checked property changes.
     *
     * @param prev - the previous checked value
     * @param next - the current checked value
     *
     * @public
     */
    protected checkedChanged(prev: boolean | unknown, next?: boolean): void;
    /**
     * The default slotted content.
     *
     * @public
     */
    content: Node[];
    /**
     * The defaultSelected state of the option.
     * @public
     */
    defaultSelected: boolean;
    protected defaultSelectedChanged(): void;
    /**
     * The disabled state of the option.
     * @public
     * @remarks
     * HTML Attribute: disabled
     */
    disabled: boolean;
    protected disabledChanged(_prev: boolean, _next: boolean): void;
    /**
     * The selected attribute value. This sets the initial selected value.
     *
     * @public
     * @remarks
     * HTML Attribute: selected
     */
    selectedAttribute: boolean;
    protected selectedAttributeChanged(): void;
    /**
     * The checked state of the control.
     *
     * @public
     */
    selected: boolean;
    protected selectedChanged(): void;
    /**
     * Track whether the value has been changed from the initial value
     */
    dirtyValue: boolean;
    /**
     * The initial value of the option. This value sets the `value` property
     * only when the `value` property has not been explicitly set.
     *
     * @remarks
     * HTML Attribute: value
     */
    protected initialValue: string;
    initialValueChanged(_previous: string, _next: string): void;
    get label(): string;
    get text(): string;
    set value(next: string);
    /**
     * The initial value of the control.
     */
    get value(): string;
    get form(): HTMLFormElement | null;
    constructor(text?: string, value?: string, defaultSelected?: boolean, selected?: boolean);
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
}
interface Option extends StartEnd, DelegatesARIAListboxOption {
}

/**
 * Includes ARIA states and properties relating to the ARIA listbox role
 *
 * @public
 */
declare class DelegatesARIAListbox {
    /**
     * See {@link https://www.w3.org/TR/wai-aria-1.2/#listbox} for more information
     * @public
     * @remarks
     * HTML Attribute: `aria-activedescendant`
     */
    ariaActiveDescendant: string | null;
    /**
     * See {@link https://www.w3.org/TR/wai-aria-1.2/#listbox} for more information
     * @public
     * @remarks
     * HTML Attribute: `aria-disabled`
     */
    ariaDisabled: 'true' | 'false' | string | null;
    /**
     * See {@link https://www.w3.org/TR/wai-aria-1.2/#listbox} for more information
     * @public
     * @remarks
     * HTML Attribute: `aria-expanded`
     */
    ariaExpanded: 'true' | 'false' | string | null;
    /**
     * See {@link https://w3c.github.io/aria/#listbox} for more information
     * @public
     * @remarks
     * HTML Attribute: `aria-multiselectable`
     */
    ariaMultiSelectable: 'true' | 'false' | string | null;
}
interface DelegatesARIAListbox extends ARIAGlobalStatesAndProperties {
}
/**
 * A Listbox Custom HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#listbox | ARIA listbox }.
 *
 * @slot - The default slot for the listbox options
 *
 * @public
 */
declare abstract class ListboxAbstract extends FASTElement {
    /**
     * The list of options.
     *
     * @public
     */
    get options(): Option[];
    set options(value: Option[]);
    protected set typeAheadExpired(value: boolean);
    /**
     * The disabled state of the listbox.
     *
     * @public
     * @remarks
     * HTML Attribute: `disabled`
     */
    disabled: boolean;
    /**
     * An array representing the currently selected `<saf-option>` elements.
     *
     * @public
     */
    selectedOptions: Option[];
    /**
     * A static filter to include only selectable options.
     *
     * @param n - element to filter
     * @public
     */
    static slottedOptionFilter(n: HTMLElement): boolean;
    /**
     * Sets an option as selected and gives it focus.
     *
     * @public
     */
    protected setSelectedOptions(): void;
}
interface ListboxAbstract extends DelegatesARIAListbox {
}

declare const ComboboxSearchModeEnum: {
    /**
     * Search all words across options
     */
    readonly includes: "includes";
    /**
     * Search first word across options
     */
    readonly startsWith: "startsWith";
};
/**
 * Search mode type for combobox.
 * @public
 */
type ComboboxSearchMode = (typeof ComboboxSearchModeEnum)[keyof typeof ComboboxSearchModeEnum];

/**
 * A Combobox Custom HTML Element.
 * Implements the {@link https://w3c.github.io/aria-practic1es/#combobox | ARIA combobox }.
 *
 * @slot - The default slot for the options
 * @slot root - The wrapper element containing the input area, including start and end
 * @slot control - Used to replace the input element representing the combobox
 * @slot start - Content which can be provided before the input
 * @slot end - Content which can be provided after the input
 * @slot loading - The progress indicator to show while loading
 * @slot clear - The button to clear the combobox
 * @csspart indicator - The element wrapping the indicator slot
 * @slot chips - Used to render chips for selected elements in multiple mode
 * @slot success - The wrapper for success validation feedback
 * @slot error - The wrapper for error validation feedback
 * @csspart label-container - The container for the label and required indicator
 * @csspart label - The label text element
 * @csspart optional-text - The optional text element
 * @csspart instructional-text - The instructional text element
 * @csspart root - The wrapper div element containing input, loading, clear, and indicator
 * @csspart clear-button - The button element used to clear the input
 * @csspart indicator - The element wrapping the indicator slot
 * @csspart listbox - The wrapper for the listbox slotted options
 * @csspart success - The wrapper for success validation feedback
 * @csspart success-icon - The success icon
 * @csspart error - The wrapper for error validation feedback
 * @csspart error-icon - The error icon
 * @csspart message - The validation message element under success or error
 * @csspart a11y-aria-description - The div that contains the additional information
 * @fires input - Fires a custom 'input' event when user types in the input
 * @fires open - Fires a custom 'open' event when the listbox opens
 * @fires close - Fires a custom 'close' event when the listbox closes
 * @fires clear - Fires a custom 'clear' event when the clear button is clicked
 * @fires scroll-end - Fires a custom 'scroll-end' event when the listbox reaches the end of the scroll
 */
declare class _Combobox extends FASTElement {
}
interface _Combobox extends FormAssociated {
}
declare const FormAssociatedCombobox_base: typeof _Combobox;
/**
 * A form-associated base class for the {@link (Combobox:class)} component.
 *
 * @beta
 */
declare class FormAssociatedCombobox extends FormAssociatedCombobox_base {
    proxy: HTMLInputElement;
}
declare class DelegatesARIACombobox {
    /**
     * See {@link https://www.w3.org/TR/wai-aria-1.2/#aria-autocomplete} for more information.
     *
     * @public
     * HTML Attribute: `aria-autocomplete`
     */
    ariaAutoComplete: 'inline' | 'list' | 'both' | 'none' | string | null;
    /**
     * See {@link https://www.w3.org/TR/wai-aria-1.2/#aria-controls} for more information.
     *
     * @public
     * HTML Attribute: `aria-controls`
     */
    ariaControls: string | null;
}
interface DelegatesARIACombobox extends DelegatesARIAListbox {
}
declare class Combobox extends FormAssociatedCombobox {
    set options(value: Option[]);
    slottedEmptyOption: Element[];
    get hasSlottedOptions(): boolean;
    protected setOptionsAriaLabels(): void;
    protected setOptionNotifiers(): void;
    slottedOptionNotifiers: Notifier[];
    /**
     * Unique ID on the input text element.
     * @public
     */
    id: string;
    /**
     * Whether input field is required to enter.
     * Note that the validation state is controlled, and this attribute is only used for styling and accessibility purposes.
     * @public
     */
    required: boolean;
    /**
     * Toggles the disabled state for the combobox.
     * @public
     */
    disabled: boolean;
    /**
     * Text for listbox aria-description in multiple mode
     * @public
     * @a11y
     */
    a11yKeyboardHelp: string;
    /**
     * Text for progress ring aria label
     * @public
     * @a11y
     */
    progressRingAriaLabel: string;
    /**
     * Text to show in a disabled option when no results are found.
     * Appears only when the `search-offline` attribute is true.
     *
     * @category Label attributes
     * @public
     */
    emptyOptionText: string;
    /**
     * Sets the placeholder value of the input, generally used to provide a hint to the user.
     * @category Label attributes
     * @public
     */
    placeholder: string;
    /**
     * The readonly attribute for input.
     * @public
     */
    readonly: boolean;
    /**
     * Value of the input.
     * @public
     */
    value: string;
    valueChanged: () => void;
    /**
     * Validation state. If true, combobox is invalid.
     * If false, combobox is indeterminate.
     * @public
     */
    invalid: boolean;
    /**
     * Validation state. If true and invalid is false, combobox is in success state.
     * If false, combobox is in indeterminate state.
     * @public
     */
    isSuccess: boolean | undefined;
    /**
     * Label text value.
     * @category Label attributes
     * @public
     */
    label?: string;
    /**
     * Aria label to input element.
     * @public
     * @a11y
     */
    inputAriaLabel?: string;
    /**
     * Paragraph element that takes instructional text.
     * @category Label attributes
     * @public
     */
    instructionalText?: string;
    /**
     * Text to visually indicate the field is required.
     * @category Label attributes
     * @public
     */
    requiredText: string;
    /**
     * For accessibility purposes, allows author to mentions in text next to label
     * whether the field is optional '(Optional)' or '(Required)'.
     * @category Label attributes
     * @public
     */
    optionalText?: string;
    /**
     * Indicates loading state of the combobox. To be used with remote search.
     * @public
     */
    loading: boolean;
    /**
     * Indicates whether the input field is clearable when clicks on the clear button.
     * @public
     */
    clearable: boolean;
    /**
     * The density of the combobox
     * @public
     */
    density: ComponentDensity;
    /**
     * Text message to show when invalid is true (error)
     * or isSuccess is true (success).
     * @category Label attributes
     * @public
     */
    validationMessage: string;
    /**
     * The aria label for the success icon.
     * @public
     * @a11y
     */
    successAriaLabel: string;
    /**
     * The aria label for the error icon.
     * @public
     * @a11y
     */
    errorAriaLabel: string;
    /**
     * Pass through for a div that adds additional information for combobox
     * @public
     */
    a11yAriaDescription: string | undefined;
    /**
     * Specifies if combobox is in multiselect mode.
     * @public
     */
    multiple: boolean;
    multipleChanged(): void;
    /**
     * If true, listbox closes automatically on selecting an option.
     * If false, listbox remains open until user clicks outside or
     * presses escape key.
     * @public
     */
    closeOnSelect: boolean;
    /**
     * If true, when pressing escape key, combobox will emit the `clear` event.
     * @public
     */
    clearOnEscape: boolean;
    /**
     * If true, upon combobox focus, listbox will open.
     * @public
     */
    openOnFocus: boolean;
    /**
     * If true, combobox will search offline in the available options.
     * If false, typing in the input will not filter the options. You control the filtering and the options passed to the listbox.
     * @public
     */
    searchOffline: boolean;
    /**
     * Specifies search mode used when searchOffline is true.
     * @public
     */
    searchMode: ComboboxSearchMode;
    /**
     * If true, on input, first option label will be populated in the field.
     * Works only when `searchOffline==true`, `searchMode=='startsWith'` and `multiple==false`.
     * To use autocomplete with a custom search mode (`searchOffline==false`), refer to the `setAutocomplete()` public method.
     *
     * @public
     */
    autocomplete: boolean;
    /**
     * Specifies the autocomplete attribute for the input element,
     * which can be used to provide hints for the browser's autocomplete functionality.
     * @public
     */
    browserAutocomplete?: string;
    /**
     * Turns virtualization feature on and off for the listbox container.
     * @public
     */
    virtualized: boolean;
    /**
     * Default height for each option when virtualization is on.
     * @public
     */
    estimatedItemHeight: number;
    /**
     * Determines the number of options to render in the listbox before and after the virtualization window.
     * For example, if the listbox shows 7 items, and padding is 3 items, a total of 3+7+3=13 items will be rendered at a given moment.
     * @public
     */
    virtualizationPadding: number;
    /**
     * If true, the combobox will highlight the substring in the options
     * that matches the user input.
     * @public
     */
    highlightSubstrings: boolean;
    slottedChipsChanged(prev: HTMLElement[] | undefined, next: HTMLElement[]): void;
    /**
     * The unique IDs of the instruction and additional accessibility description.
     * @public
     */
    get ariaDescribedbyIds(): string;
    /**
     * Emits clear event when clear button is clicked.
     * @public
     * @remarks
     * Emits clear event when clear button is clicked.
     * @public
     */
    clearHandler(e: MouseEvent): void;
    /**
     * Autocomplete the input and highlight the rest of the text.
     */
    private applyAutocomplete;
    private setupVirtualization;
    renderOptions(startIndex: number, endIndex: number): void;
    handleScroll(event: UIEvent): boolean | void;
    /**
     * Public method to achieve autocomplete in controlled form.
     * @public
     */
    setAutocomplete(from?: string, to?: string): void;
    /**
     * Select combobox input content
     * @public
     */
    select(): void;
    /**
     * @public
     * Public method for opening the listbox.
     */
    openMenu(): void;
    /**
     * @public
     * Public method for closing the listbox.
     */
    closeMenu(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected syncListboxProxy(): void;
    focusedIndexChanged(): void;
    handleChange(source: any): void;
}
interface Combobox extends StartEnd, DelegatesARIACombobox {
}

declare const safComboboxConfig: {
    readonly events: {
        readonly onInput: "input";
        readonly onClick: "click";
        readonly onClear: "clear";
        readonly onScrollEnd: "scroll-end";
        readonly onChange: "change";
    };
};
type SafComboboxEventDetails = {
    input: {
        detail: string;
    };
};
type SafComboboxInstance = AugmentClassEvents<Combobox, typeof safComboboxConfig, SafComboboxEventDetails>;

type SafComboboxProps = SafReactComponentProps<SafComboboxInstance, typeof safComboboxConfig, SafComboboxEventDetails>;
declare const SafReactCombobox: ComponentType<SafComboboxProps>;

/**
 * A class for Chat
 */
declare class CommentField extends FASTElement {
    /**
     * The aria label for the region called comments.
     *
     * @a11y
     * @public
     */
    ariaLabel: string;
}

type SafCommentFieldInstance = AugmentClassEvents<CommentField>;

type SafCommentFieldProps = SafReactComponentProps<SafCommentFieldInstance>;
declare const SafReactCommentField: ComponentType<SafCommentFieldProps>;

declare class Container extends FASTElement {
    /**
     * Controls the maximum width of the container based on CSS container queries.
     *
     * @public
     */
    maxWidth: Breakpoint | undefined;
    /**
     * Determines if the content should be centered.
     *
     * @defaultValue false
     * @public
     */
    centered: boolean;
    /**
     * Used to disable the padding on the container. Typically used for components that have padding like tabs and navigation.
     *
     * @defaultValue false
     * @public
     */
    disablePadding: boolean;
}

type SafContainerInstance = AugmentClassEvents<Container>;

type SafContainerProps = SafReactComponentProps<SafContainerInstance>;
declare const SafReactContainer: ComponentType<SafContainerProps>;

/**
 * Day of the week.
 *
 * @public
 */
declare const DatePickerDayOfWeekEnum: {
    readonly Sunday: 0;
    readonly Monday: 1;
    readonly Tuesday: 2;
    readonly Wednesday: 3;
    readonly Thursday: 4;
    readonly Friday: 5;
    readonly Saturday: 6;
};
/**
 * Types for day of the week.
 *
 * @public
 */
type DatePickerDayOfWeek = (typeof DatePickerDayOfWeekEnum)[keyof typeof DatePickerDayOfWeekEnum];

interface MonthInfo {
    index: number;
    label: string;
}
/**
 * A class for Calendar
 */
declare class Calendar extends FASTElement {
    /**
     * Short names of months to list in the dropdown.
     * Override to change the months names in the month dropdown
     * @type {Array<{index: number; label: string;}>}
     * @defaultValue computed from locale
     * @public
     */
    months: MonthInfo[];
    pickerMonthChanged(): void;
    /**
     * Current selected date in the picker.
     * value as Date for selectedDate
     * @private
     * @readonly
     * @see selected-date
     */
    private value;
    valueChanged(): void;
    private get fnsLocale();
    /**
     * Abbreviated names for weekdays.
     * Override to change the weekdays letters shown in the picker.
     * @category Public members
     * @defaultValue computed from locale
     * @public
     */
    weekdaysShort: string[];
    weekdaysShortChanged(prev: string[], next: string[]): void;
    /**
     * Full names for weekdays.
     * Override to change the weekdays aria-label.
     * @category Public members
     * @defaultValue computed from locale
     * @public
     */
    weekdaysFull: string[];
    weekdaysFullChanged(prev: string[], next: string[]): void;
    /**
     * Locale used for calendar.
     * @public
     */
    locale: string;
    localeChanged(): void;
    /**
     * Minimum date to select in format "yyyy-MM-dd".
     * @public
     */
    minDate: string;
    minDateChanged(): void;
    /**
     * Maximum date to select in format "yyyy-MM-dd".
     * @public
     */
    maxDate: string;
    maxDateChanged(): void;
    /**
     * Determines the day shown at beginning of each row in picker.
     * Takes a value from 0 to 6, representing Sunday to Saturday.
     * @public
     */
    firstDayOfTheWeek?: DatePickerDayOfWeek;
    firstDayOfTheWeekChanged(): void;
    /**
     * Default picker view month and date to focus in the format "yyyy-MM-dd".
     * @public
     */
    defaultPickerDate?: string;
    /**
     * Default date format. If value is not provided or is invalid, the format will be based on the locale.
     * @public
     * @defaultValue computed from locale
     */
    format: string;
    formatChanged(): void;
    /**
     * Denotes the selected date for the picker in the format "yyyy-MM-dd".
     * @public
     */
    selectedDate: string | null;
    selectedDateChanged(): void;
    /**
     * Shows/hides the date picker.
     *
     * @remarks Current state of the picker view. If true, picker is open and visible.
     * @public
     */
    open: boolean;
    openChanged(): void;
    private setWeekdays;
    private setWeekdaysShortAndFull;
    private setFirstDayOfTheWeek;
    private setYearsAndMinMaxDates;
    /**
     * Function to scroll into selected year in the picker.
     * @private
     */
    private scrollToSelectedYear;
    /**
     * Bind this function to be able to disable specific dates i.e. disable weekends.
     *
     * @category Public members
     * @remarks
     * Public function to know if a date is disabled.
     * Returns true if date is disabled.
     * @public
     */
    getDateDisabled(_date: Date): boolean;
    getDateDisabledChanged(): void;
    /**
     * Public function to know if a date is < minDate
     * or > maxDate, or disabled (using getDateDisabled).
     * @private
     */
    private getDateDisabledInternal;
    /**
     * Text that describes the input.
     * @public
     */
    label?: string;
    /**
     * aria-label for the month select dropdown.
     * @public
     * @a11y
     */
    monthSelectAriaLabel?: string;
    /**
     * The text appended to the label for the `aria-label` of the dialog.
     * @public
     * @a11y
     */
    datePickerAriaLabel?: string;
    /**
     * aria-label for the previous month icon button.
     * @public
     * @a11y
     */
    prevMonthAriaLabel?: string;
    /**
     * aria-label for the next month icon button.
     * @public
     * @a11y
     */
    nextMonthAriaLabel?: string;
    /**
     * aria-label for the year select dropdown.
     * @public
     * @a11y
     */
    yearSelectAriaLabel?: string;
}

declare const safCalendarConfig: {
    readonly events: {
        readonly onClose: "close";
        readonly onDateSelected: "date-selected";
    };
};
type SafCalendarEventDetails = {
    close: {
        detail: EventTarget[] | undefined;
    };
    'date-selected': {
        detail: Date;
    };
};

type SafCalendarInstance = AugmentClassEvents<Calendar, typeof safCalendarConfig, SafCalendarEventDetails>;

type SafCalendarProps = SafReactComponentProps<SafCalendarInstance, typeof safCalendarConfig, SafCalendarEventDetails>;
declare const SafReactCalendar: ComponentType<SafCalendarProps>;

declare class _TextField extends FASTElement {
}
interface _TextField extends FormAssociated {
}
declare const FormAssociatedTextField_base: typeof _TextField;
/**
 * A form-associated base class for the {@link @saffron/core-components#(TextField:class)} component.
 *
 * @beta
 */
declare class FormAssociatedTextField extends FormAssociatedTextField_base {
    proxy: HTMLInputElement;
}

/**
 * Text field sub-types
 * @public
 */
declare const TextFieldTypeEnum: {
    readonly email: "email";
    readonly password: "password";
    readonly tel: "tel";
    readonly text: "text";
    readonly url: "url";
};
/**
 * Types for the text field sub-types
 * @public
 */
type TextFieldType = (typeof TextFieldTypeEnum)[keyof typeof TextFieldTypeEnum];

interface DelegatesARIATextbox extends ARIAGlobalStatesAndProperties {
}
/**
 * A Text Field Custom HTML Element.
 * Based largely on the {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text | <input type="text" /> element }.
 * Not currently recommended for number input
 * @slot start - Content which can be provided before the input field
 * @slot end - Content which can be provided after the input field
 * @slot - The default slot for the label
 * @csspart label - The label
 * @csspart control - The logical control, the element wrapping the input field, including start and end slots
 * @csspart control - The text field element
 * @fires change - Fires a custom 'change' event when the value has changed
 *
 * @public
 */
declare class TextField extends FormAssociatedTextField {
    /**
     * When true, the input will be immutable by user interaction.
     * See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute} for more information.
     * @public
     * @remarks
     * HTML Attribute: readonly
     */
    readOnly: boolean;
    protected readOnlyChanged(): void;
    /**
     * Indicates that this element should get focus after the page finishes loading.
     * See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautofocus | autofocus HTML attribute}
     * for more information.
     * @public
     * @remarks
     * HTML Attribute: autofocus
     */
    autofocus: boolean;
    protected autofocusChanged(): void;
    /**
     * Sets the placeholder value of the element, generally used to provide a hint to the user.
     * @public
     * @remarks
     * HTML Attribute: placeholder
     * Using this attribute does is not a valid substitute for a labeling element.
     */
    placeholder: string;
    protected placeholderChanged(): void;
    /**
     * Allows setting a type or mode of text.
     * @public
     * @remarks
     * HTML Attribute: type
     */
    type: TextFieldType;
    private typeChanged;
    /**
     * Allows associating a {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist | datalist}
     * to the element by {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/id}.
     * @public
     * @remarks
     * HTML Attribute: list
     */
    list: string;
    protected listChanged(): void;
    /**
     * The maximum number of characters a user can enter.
     * @public
     * @remarks
     * HTMLAttribute: maxlength
     */
    maxlength: number;
    protected maxlengthChanged(): void;
    /**
     * The minimum number of characters a user can enter.
     * @public
     * @remarks
     * HTMLAttribute: minlength
     */
    minlength: number;
    protected minlengthChanged(): void;
    /**
     * A regular expression that the value must match to pass validation.
     * @public
     * @remarks
     * HTMLAttribute: pattern
     */
    pattern: string;
    protected patternChanged(): void;
    /**
     * Sets the width of the element to a specified number of characters.
     * @public
     * @remarks
     * HTMLAttribute: size
     */
    size: number;
    protected sizeChanged(): void;
    /**
     * Controls whether or not to enable spell checking for the input field, or if the default spell checking configuration should be used.
     * @public
     * @remarks
     * HTMLAttribute: size
     */
    spellcheck: boolean;
    protected spellcheckChanged(): void;
    /**
     * defines what action label (or icon) to present for the enter key on virtual keyboards.
     * @public
     * @remarks
     * HTMLAttribute: enterkeyhint
     */
    enterKeyHint: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
    protected enterKeyHintChanged(): void;
    /**
     * Selects all the text in the text field
     *
     * @public
     */
    select(): void;
    validate(): void;
    /**
     * unique ID on the input text element
     * @public
     */
    id: string;
    /**
     * The initial value of the control.
     * @public
     */
    value: string;
    /**
     * Text that describes the input.
     *
     * @public
     */
    label?: string;
    /**
     * Indicates the entered value does not conform to the format expected by the application.
     * @public
     * @remarks
     * invalid attribute: initializes as false
     */
    invalid: boolean;
    /**
     * The message displayed when the control is valid or invalid.
     * @public
     */
    validationMessage: string;
    /**
     * Specifies that the control is valid and that a success message should display.
     *
     * @public
     * @remarks
     * This boolean value exists as an api for taking in async behaviors
     * (i.e. uploading or password validation) that need success state reflected
     * in tandem with isValid
     */
    isSuccess: boolean | undefined;
    /**
     * Provides additional instructional text that provides extra guidance for the input.
     *
     * @public
     * @remarks
     * paragraph element that takes instructional text
     */
    instructionalText?: string;
    /**
     * Provides additional optional text to the label. Accepts any text but intended to indicate `(Required)` or `(Optional)`.
     *
     * @remarks
     * For accessibility purposes, allows author to mentions in text next to label
     * whether the field is optional '(Optional)' or '(Required)'
     * @public
     */
    optionalText?: string;
    /**
     * Adds additional character to the label when text-field is required.
     * @public
     * @remarks
     * character to add on required radio group
     */
    requiredText?: string;
    /**
     * A description for the input that is only visible to screen readers.
     * @public
     */
    a11yAriaDescription: string;
    get ariaDescribedbyIds(): string;
    /**
     * Defines a string value that labels the success icon, when icons are not just presentational but used to communicate status.
     * @a11y
     * @public
     */
    successAriaLabel: string;
    /**
     * Defines a string value that labels the error icon, when icons are not just presentational but used to communicate status.
     * @a11y
     * @public
     */
    errorAriaLabel: string;
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
    /**
     * Controls <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete">browser autofill</a> behavior. (Ex: `off`, `on`, `name`, `email`)
     * @public
     * @remarks
     * Autocomplete attribute for identifying input purpose
     */
    autocomplete?: string;
    valueChanged(previous: string, next: string): void;
    currentValueChanged(): void;
    disconnectedCallback(): void;
    dataLists: HTMLDivElement;
    slottedDataChanged(): void;
    protected canAnnounceValidation: boolean;
    isSuccessChanged(): void;
    invalidChanged(): void;
    validationMessageChanged(): void;
    protected announceValidation(): void;
}
interface TextField extends StartEnd, DelegatesARIATextbox {
}

type Section = 'day' | 'month' | 'year';
type SectionInfo = {
    startIndex: number;
    endIndex: number;
    isFilled: boolean;
    value: string;
    defaultValue: string;
};
type Sections = Record<Section, SectionInfo>;
/**
 * A class for DateMaskedInput
 */
declare class DateMaskedInput extends TextField {
    /**
     * Represents the current text value of the input field.
     * @public
     */
    value: string;
    valueChanged(_oldValue: any, newValue: any): void;
    minimumDate: Date;
    /**
     * Minimum selectable date. Defaults to 'yyyy-MM-dd' format unless a custom format is specified using the 'format' attribute.
     * @public
     */
    minDate: string;
    minDateChanged(): void;
    /**
     * Determines whether the component automatically corrects invalid dates
     * @public
     */
    autocorrect: boolean;
    maximumDate: Date;
    /**
     * Maximum selectable date. Defaults to 'yyyy-MM-dd' format unless a custom format is specified using the 'format' attribute.
     * @public
     */
    maxDate: string;
    maxDateChanged(): void;
    /**
     * Retrieves the effective date format.
     * Returns the consumer-provided format if available; otherwise, falls back to dbFormat.
     * @private
     */
    private get resolvedFormat();
    private getDateFormatDelimiter;
    /**
     * sections of the date input
     * contains info about each section value, state, and start and end indices
     * @public
     */
    sections: Record<Section, SectionInfo>;
    selectedSectionChanged(): void;
    /**
     * Default date format. If value is not provided or is invalid, the format will be based on the locale.
     * @public
     */
    format: string;
    formatChanged(_oldValue: string, _newValue: string): void;
    connectedCallback(): void;
    /**
     * Check for RTL context and set data attribute on text-field
     * @private
     */
    private checkAndSetRTL;
    /**
     * public function to set the value of the input field
     * and also update the sections accordingly
     * value MUST be a valid date, and must be in the format specified in the format property
     * @public
     */
    setValue(value: string): void;
}

declare const safDateMaskedInputConfig: {
    readonly events: {
        readonly onSectionsChanged: "sections-changed";
        readonly onInput: "input";
    };
};
type SafDateMaskedInputEventDetails = {
    'sections-changed': {
        detail: Sections;
    };
    input: {
        detail: string;
    };
};

type SafDateMaskedInputInstance = AugmentClassEvents<DateMaskedInput, typeof safDateMaskedInputConfig, SafDateMaskedInputEventDetails>;

type SafDateMaskedInputProps = SafReactComponentProps<SafDateMaskedInputInstance, typeof safDateMaskedInputConfig, SafDateMaskedInputEventDetails>;
declare const SafReactDateMaskedInput: ComponentType<SafDateMaskedInputProps>;

/**
 * A class for DatePicker
 */
declare class DatePicker extends FASTElement {
    /**
     * The name of the datePicker.
     * @public
     */
    name: string;
    /**
     * The id attribute of the date picker element.
     * @public
     */
    id: string;
    /**
     * Text that describes the input.
     * @public
     * @passedTo DateMaskedInput
     */
    label?: string;
    /**
     * The text appended to the label for the `aria-label` of the dialog.
     * @public
     * @passedTo Calendar
     */
    datePickerAriaLabel: string;
    /**
     * Provides additional instructional text that provides extra guidance for the input.
     * @remarks
     * Paragraph element that takes instructional text.
     * @public
     * @passedTo DateMaskedInput
     */
    instructionalText?: string;
    /**
     * Prevents the user from interacting with the input.
     * @public
     */
    disabled: boolean;
    /**
     * A value is required or must be checked for the form to be submittable.
     * @public
     * @passedTo DateMaskedInput
     */
    required: boolean;
    /**
     * Adds additional character to the label when text-field is required.
     * @remarks
     * Text to indicate required field. By default, it is '*'.
     * @public
     * @passedTo DateMaskedInput
     */
    requiredText: string;
    /**
     * When true, the control will be immutable by user interaction.
     * @public
     * @passedTo DateMaskedInput
     */
    readOnly: boolean;
    /**
     * Provides additional optional text to the label. Accepts any text but intended to indicate `(Required)` or `(Optional)`.
     * @remarks
     * For accessibility purposes, allows author to mentions in text next to label
     * whether the field is optional '(Optional)' or '(Required)'.
     * @public
     * @passedTo DateMaskedInput
     */
    optionalText?: string;
    /**
     * Locale used for date-picker. If value is not provided or is invalid, locale will be `navigator.language`.
     * @public
     * @defaultValue navigator.language
     */
    locale: string;
    get fnsLocale(): Locale;
    /**
     * Default date format. If value is not provided or is invalid, the format will be based on the locale.
     * @public
     * @defaultValue computed from locale
     */
    format: string;
    /**
     * Retrieves the effective date format.
     *
     * Returns the consumer-provided format if available; otherwise, falls back to the default `en-US` format.
     * This computed format is used when parsing default, minimum, and maximum dates.
     */
    private get resolvedFormat();
    /**
     * SQL database format, used to parse consumer passed dates
     */
    static dbFormat: string;
    /**
     * Minimum selectable date. Defaults to 'yyyy-MM-dd' format unless a custom format is specified using the 'format' attribute.
     * @public
     */
    minDate: string;
    /**
     * Maximum selectable date. Defaults to 'yyyy-MM-dd' format unless a custom format is specified using the 'format' attribute.
     * @public
     */
    maxDate: string;
    /**
     * Determines whether the component automatically corrects invalid dates
     * @public
     *
     * @passedTo DateMaskedInput
     */
    autocorrect: boolean;
    /**
     * Default value for the date picker. Defaults to 'yyyy-MM-dd' format unless a custom format is specified using the 'format' attribute.
     * @public
     */
    defaultDate: string;
    /**
     * Default picker view month and date to focus in
     * the format "yyyy-MM-dd".
     * @public
     * @passedTo Calendar
     */
    defaultPickerDate?: string;
    /**
     * Specifies that the control is valid and that a success message should display.
     * @remarks
     * Validation state. If true and invalid is false,
     * Date Picker is in success state.
     * If false, DatePicker is in indeterminate state.
     * @public
     * @passedTo DateMaskedInput
     */
    isSuccess: boolean | undefined;
    /**
     * Indicates the entered value does not conform to the format expected by the application.
     * @remarks
     * Validation state. If true, DatePicker is invalid.
     * If false, DatePicker is indeterminate.
     * Initializes as false.
     * @public
     * @passedTo DateMaskedInput
     */
    invalid: boolean;
    /**
     * The message displayed when the control is valid or invalid.
     * @remarks
     * Text message to show when invalid is true (error)
     * or isSuccess is true (success).
     * @public
     * @passedTo DateMaskedInput
     */
    validationMessage: string;
    /**
     * aria-label for the icon button that opens the picker.
     * @public
     */
    openPickerAriaLabel?: string;
    /**
     * aria-label for the previous month icon button.
     * @public
     * @passedTo Calendar
     */
    prevMonthAriaLabel?: string;
    /**
     * aria-label for the next month icon button.
     * @public
     * @passedTo Calendar
     */
    nextMonthAriaLabel?: string;
    /**
     * aria-label for the month select dropdown.
     * @public
     * @passedTo Calendar
     */
    monthSelectAriaLabel?: string;
    /**
     * aria-label for the year select dropdown.
     * @public
     * @passedTo Calendar
     */
    yearSelectAriaLabel?: string;
    /**
     * Determines the day shown at the beginning of date picker.
     * Takes a value from 0 to 6, representing Sunday to Saturday.
     * If value is not provided or is invalid, the first day of the week will be based on the locale.
     *
     * @defaultValue computed from locale
     *
     * @remarks
     * Determines the day shown at beginning of each row in picker.
     * Takes a value from 0 to 6, representing Sunday to Saturday.
     *
     * @public
     * @passedTo Calendar
     */
    firstDayOfTheWeek?: DatePickerDayOfWeek;
    /**
     * Represents the input value. Readonly. See `setValue()` for setting the value.
     * @public
     * @readonly
     */
    inputValue: string;
    onInput(e: InputEvent): void;
    valueChanged(prev: Date, next: Date): void;
    /**
     * Abbreviated names for weekdays. Override to change the weekdays letters shown in the picker.
     *
     * @defaultValue computed from locale
     * @public
     * @passedTo Calendar
     */
    weekdaysShort: string[];
    weekdaysShortChanged(): void;
    /**
     * Full names for weekdays. Override to change the weekdays aria-label.
     *
     * @defaultValue computed from locale
     * @public
     * @passedTo Calendar
     */
    weekdaysFull: string[];
    weekdaysFullChanged(): void;
    onSectionsChanged(event: CustomEvent<SafDateMaskedInputEventDetails['sections-changed']['detail']>): void;
    /**
     * Public function to set value of the date picker
     * and the input.
     * @public
     * @defaultValue setValue(date: Date): void
     */
    setValue(date: Date): void;
    /**
     * Bind this function to be able to disable specific dates i.e. disable weekends.
     *
     * @remarks
     * Public function to know if a date is disabled.
     * Returns true if date is disabled.
     * @public
     */
    getDateDisabled(_date: Date): boolean;
    /**
     * @public
     * Public method for opening the picker.
     */
    openPicker(): void;
    /**
     * @public
     * Public method for closing the picker.
     */
    closePicker(focusOnCalendarButton?: boolean): void;
    /**
     * Function to initialize the date picker.
     * @private
     */
    private initializeDatePicker;
    connectedCallback(): void;
}

declare const safDatePickerConfig: {
    readonly events: {
        readonly onInput: "input";
        readonly onChange: "change";
        readonly onOpen: "open";
        readonly onClose: "close";
    };
};
type SafDatePickerEventDetails = {
    change: {
        detail: string | null;
    };
    input: {
        detail: string;
    };
};
type SafDatePickerInstance = AugmentClassEvents<DatePicker, typeof safDatePickerConfig, SafDatePickerEventDetails>;

type SafDatePickerProps = SafReactComponentProps<SafDatePickerInstance, typeof safDatePickerConfig, SafDatePickerEventDetails>;
declare const SafReactDatePicker: ComponentType<SafDatePickerProps>;

declare const DescriptionListOrientationEnum: {
    readonly horizontal: "horizontal";
    readonly vertical: "vertical";
};
type DescriptionListOrientation = (typeof DescriptionListOrientationEnum)[keyof typeof DescriptionListOrientationEnum];

/**
 * A class derived from the FASTElement foundation component
 */
declare class DescriptionList extends FASTElement {
    /**
     * Determine if the bullets are going to be displayed or not.
     *
     * @public
     */
    bulletPoint: boolean;
    /**
     * Determine the orientation of the description list.
     *
     * @public
     */
    orientation: DescriptionListOrientation;
    /**
     * Determine the number of columns for the description list.
     *
     * @public
     */
    colNumber: number;
    connectedCallback(): void;
    private createDescriptionListGroups;
    private setColumnNumber;
}

type SafDescriptionListInstance = AugmentClassEvents<DescriptionList>;

type SafDescriptionListProps = SafReactComponentProps<SafDescriptionListInstance>;
declare const SafReactDescriptionList: ComponentType<SafDescriptionListProps>;

/**
 * A class derived from the FASTElement foundation component
 */
declare class DescriptionDetails extends FASTElement {
    /**
     * Determine if the bullets are going to be displayed or not.
     *
     * @public
     */
    bulletPoint: boolean;
}

type SafDescriptionDetailsInstance = AugmentClassEvents<DescriptionDetails>;

type SafDescriptionDetailsProps = SafReactComponentProps<SafDescriptionDetailsInstance>;
declare const SafReactDescriptionDetails: ComponentType<SafDescriptionDetailsProps>;

/**
 * A class derived from the FASTElement foundation component
 */
declare class DescriptionTerm extends FASTElement {
}

type SafDescriptionTermInstance = AugmentClassEvents<DescriptionTerm>;

type SafDescriptionTermProps = SafReactComponentProps<SafDescriptionTermInstance>;
declare const SafReactDescriptionTerm: ComponentType<SafDescriptionTermProps>;

/**
 * A Dialog Custom HTML Element, based on FASTDialog class.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#dialog | ARIA dialog }.
 *
 * @slot - The default slot for the dialog content
 * @csspart positioning-region - A wrapping element used to center the dialog and position the modal overlay
 * @csspart overlay - The modal dialog overlay
 * @csspart control - The dialog element
 * @fires cancel - Fires a custom 'cancel' event when the modal overlay is clicked
 * @fires close - Fires a custom 'close' event when the dialog is hidden
 *
 * @public
 */
declare abstract class DialogBase extends FASTElement {
    /**
     * The id of the trigger element, so the focus can return to this element when the dialog is closed.
     *
     * @public
     */
    triggerId: string;
    /**
     * Indicates whether or not the component should trap focus.
     * @remarks
     * Dialog and drawer trap focus by default, but have attribute to disable it.
     * Side-nav traps focus only when in fullscreen mode.
     * @public
     */
    abstract get noFocusTrap(): boolean;
    /**
     * The method to show the dialog.
     * Basic functionality for showing the dialog.
     * Inheriting classes are expected to implement the show() function
     * either by using this logic (Dialog/Drawer), or overriding it (SideNav)
     *
     * @public
     * @protected
     */
    protected _show(): void;
    /**
     * The method to hide the dialog.
     * Basic functionality for hiding the dialog.
     * Inheriting classes are expected to implement the hide() function
     * either by using this logic (Dialog/Drawer), or overriding it (SideNav)
     *
     * @public
     * @protected
     */
    protected _hide(): void;
    protected handleDocumentKeydown: (e: KeyboardEvent) => void;
    protected handleDocumentFocus(e: Event): void;
    protected handleTabKeyDown(e: KeyboardEvent): void;
    protected getTabQueueBounds(): (HTMLElement | SVGElement)[];
    /**
     * Should be active trapping focus
     */
    protected shouldTrapFocus(): boolean;
}

/**
 * A class derived from the Dialog foundation component
 */
declare class Dialog extends DialogBase {
    /**
     * Use to label the dialog if it does not have a title.
     *
     * @a11y
     * @public
     */
    a11yAriaLabel: string;
    /**
     * The aria-label for the close button.
     *
     * @a11y
     * @public
     */
    closeAriaLabel: string;
    /**
     * Determines whether dialog is an alert with `role="alertdialog"`.
     *
     * @public
     */
    isAlert: boolean;
    /**
     * Determines whether header appears in dialog.
     *
     * @public
     */
    isHeader: boolean;
    /**
     * Determines whether footer appears in dialog.
     *
     * @public
     */
    isFooter: boolean;
    /**
     * The title of the dialog.
     *
     * @public
     */
    dialogTitle: string;
    /**
     * Configures the {@link https://www.w3.org/TR/wai-aria-1.1/#aria-level | aria-level} of the heading element.
     *
     * @public
     */
    ariaTitleLevel: 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * Dialog subtitle heading
     *
     * @public
     */
    dialogSubtitle: string;
    /**
     * Configures the {@link https://www.w3.org/TR/wai-aria-1.1/#aria-level | aria-level} of the subtitle element.
     *
     * @public
     */
    ariaSubtitleLevel: 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * Indicates the element is modal. When modal, user mouse interaction will be limited to the contents of the element by a modal overlay. Clicks on the overlay will cause the dialog to emit a "dismiss" event.
     *
     * @public
     */
    modal: boolean;
    /**
     * The hidden state of the element.
     *
     * @public
     */
    hidden: boolean;
    protected get closeButtonElement(): Element | null | undefined;
    protected get titleElement(): Element | null | undefined;
    protected get isHidden(): boolean;
    protected set isHidden(value: boolean);
    protected get hideStateAttribute(): string;
    protected get isModal(): boolean;
    protected get hasCancelEvent(): boolean;
    protected get openEventName(): string;
    protected get hideEventName(): string;
    protected get preventTriggerFocus(): boolean;
    hide(): void;
    show(): void;
    /**
     * Indicates whether or not the dialog should trap focus.
     */
    noFocusTrap: boolean;
    protected noFocusTrapChanged: () => void;
}

declare const safDialogConfig: {
    readonly events: {
        readonly onCancel: "cancel";
        readonly onClose: "close";
        readonly onHide: "hide";
        readonly onShow: "show";
    };
};
type SafDialogInstance = AugmentClassEvents<Dialog, typeof safDialogConfig>;

type SafDialogProps = SafReactComponentProps<SafDialogInstance, typeof safDialogConfig>;
declare const SafReactDialog: ComponentType<SafDialogProps>;

/**
 * A Disclosure Custom HTML Element.
 * Based largely on the {@link https://w3c.github.io/aria-practices/#disclosure | disclosure element }.
 *
 * @slot start - Content which can be provided before the summary content
 * @slot end - Content which can be provided after the summary content
 * @slot title - The summary content
 * @slot - The default slot for the disclosure content
 * @fires toggle - fires a toggle event when the summary is toggled
 *
 * @public
 */
declare class Disclosure extends FASTElement {
    /**
     * Whether the disclosure is expanded or not.
     *
     * @public
     */
    expanded: boolean;
    /**
     * The label of the disclosure button.
     *
     * @public
     */
    summary: string;
    /**
     * Show extra content.
     */
    show(): void;
    /**
     * Hide extra content.
     */
    hide(): void;
    /**
     * Toggle the current(expanded/collapsed) state.
     */
    toggle(): void;
    /**
     * Register listener and set default disclosure mode
     */
    protected setup(): void;
    /**
     * Update the aria attr and fire `toggle` event
     */
    protected onToggle(): void;
    /**
     * Used to had content show and hide the caret.
     *
     * @public
     */
    hideCaret: boolean;
}
interface Disclosure extends StartEnd {
}

type SafDisclosureInstance = AugmentClassEvents<Disclosure>;

type SafDisclosureProps = SafReactComponentProps<SafDisclosureInstance>;
declare const SafReactDisclosure: ComponentType<SafDisclosureProps>;

/**
 * Divider roles
 * separator: The divider semantically separates content
 * presentation: The divider has no semantic value and is for visual presentation only.
 *
 * @public
 */
declare const DividerRoleEnum: {
    readonly separator: "separator";
    readonly presentation: "presentation";
};
/**
 * The types for Divider roles
 * @public
 */
type DividerRole = (typeof DividerRoleEnum)[keyof typeof DividerRoleEnum];

/**
 * A Divider Custom HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#separator | ARIA separator }
 * or {@link https://www.w3.org/TR/wai-aria-1.1/#presentation | ARIA presentation}.
 *
 * @public
 */
declare class Divider extends FASTElement {
    /**
     * The permitted roles of the divider.
     *
     * @public
     * @remarks
     * HTML Attribute: role
     */
    role: DividerRole;
    /**
     * The orientation of the divider.
     *
     * @public
     * @remarks
     * HTML Attribute: orientation
     */
    orientation: Orientation;
}

type SafDividerInstance = AugmentClassEvents<Divider>;

type SafDividerProps = SafReactComponentProps<SafDividerInstance>;
declare const SafReactDivider: ComponentType<SafDividerProps>;

/**
 * Drawer placement values.
 *
 * @public
 */
declare const DrawerPlacementEnum: {
    readonly right: "right";
    readonly bottom: "bottom";
};
/**
 * Type for drawer placement values.
 *
 * @public
 */
type DrawerPlacement = (typeof DrawerPlacementEnum)[keyof typeof DrawerPlacementEnum];

declare class Drawer extends DialogBase {
    /**
     * The aria label for screen reader saf-sr-only element in the close icon button.
     *
     * @a11y
     * @public
     */
    closeAriaLabel: string;
    /**
     * Determines whether header appears in the drawer.
     *
     * @public
     */
    isHeader: boolean;
    /**
     * Determines whether footer appears in the drawer.
     *
     * @public
     */
    isFooter: boolean;
    /**
     * Drawer title heading
     *
     * @public
     */
    drawerTitle: string;
    /**
     * Configures the {@link https://www.w3.org/TR/wai-aria-1.1/#aria-level | aria-level} of the heading element.
     *
     * @public
     */
    ariaTitleLevel: 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * Drawer subtitle heading
     *
     * @public
     */
    drawerSubtitle: string;
    /**
     * Configures the {@link https://www.w3.org/TR/wai-aria-1.1/#aria-level | aria-level} of the heading element.
     *
     * @public
     */
    ariaSubtitleLevel: 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * Indicates the element is modal. When modal, user mouse interaction will be limited to the contents of the element by a modal overlay.  Clicks on the overlay will cause the drawer to emit a "dismiss" event.
     *
     * @public
     */
    modal: boolean;
    /**
     * The hidden state of the element.
     *
     * @public
     */
    hidden: boolean;
    /**
     * Determines the drawer placement.
     *
     * @public
     */
    placement: DrawerPlacement;
    /**
     * Attribute used to pass aria label to drawer when a drawer-title is not present.
     *
     * @public
     */
    a11yAriaLabel: string;
    ariaLabelledbyIds(): string | undefined;
    protected get closeButtonElement(): Element | null | undefined;
    protected get titleElement(): Element | null | undefined;
    protected get isHidden(): boolean;
    protected set isHidden(value: boolean);
    protected get hideStateAttribute(): string;
    protected get isModal(): boolean;
    protected get hasCancelEvent(): boolean;
    protected get openEventName(): string;
    protected get hideEventName(): string;
    protected get preventTriggerFocus(): boolean;
    show(): void;
    hide(): void;
    dismiss(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private handleKeyDown;
    /**
     * Indicates whether or not the drawer should trap focus.
     */
    noFocusTrap: boolean;
    protected noFocusTrapChanged: () => void;
}

declare const safDrawerConfig: {
    readonly events: {
        readonly onDismiss: "dismiss";
        readonly onHide: "hide";
        readonly onShow: "show";
    };
};
type SafDrawerInstance = AugmentClassEvents<Drawer, typeof safDrawerConfig>;

type SafDrawerProps = SafReactComponentProps<SafDrawerInstance, typeof safDrawerConfig>;
declare const SafReactDrawer: ComponentType<SafDrawerProps>;

/**
 * A class for EmptyState
 */
declare class EmptyState extends FASTElement {
    /**
     * The title of the empty state.
     *
     * @a11y
     * @public
     */
    emptyStateTitle: string;
    /**
     * Whether the content is centered or not.
     *
     * @public
     */
    isCenter: boolean;
    /**
     * The heading level for the title.
     *
     * @a11y
     * @public
     */
    ariaTitleLevel: 1 | 2 | 3 | 4 | 5 | 6;
}

type SafEmptyStateInstance = AugmentClassEvents<EmptyState>;

type SafEmptyStateProps = SafReactComponentProps<SafEmptyStateInstance>;
declare const SafReactEmptyState: ComponentType<SafEmptyStateProps>;

declare class FacetedFilter extends FASTElement {
    /**
     * Heading for filtering.
     *
     * @public
     */
    filterTitle: string;
    /**
     * Label for the reset button.
     *
     * @public
     */
    resetButtonLabel: string;
    /**
     * Hierarchical level of the Title element.
     *
     * @a11y
     * @public
     * @defaultValue 2
     */
    ariaTitleLevel: 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * Secondary heading for filtering.
     *
     * @public
     */
    filterSubtitle: string;
    /**
     * Hierarchical level of the Subtitle element.
     *
     * @a11y
     * @public
     * @defaultValue 3
     */
    ariaSubtitleLevel: 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * Provides additional instructional text for extra guidance for filtering.
     *
     * @public
     */
    instructionalText: string;
    /**
     * Determines whether or not the selected items counter badges should be displayed.
     *
     * @public
     */
    showCounterBadges: boolean;
    showCounterBadgesChanged(prev: boolean | undefined, next: boolean): void;
    slottedFacetsChanged(_prev: HTMLElement[] | undefined, next: HTMLElement[]): void;
    private updateChildItemsCounter;
}

declare const safFacetedFilterConfig: {
    readonly events: {
        readonly onClear: "clear";
    };
};
type SafFacetedFilterInstance = AugmentClassEvents<FacetedFilter, typeof safFacetedFilterConfig>;

type SafFacetedFilterProps = SafReactComponentProps<SafFacetedFilterInstance, typeof safFacetedFilterConfig>;
declare const SafReactFacetedFilter: ComponentType<SafFacetedFilterProps>;

declare class FacetCategory extends FASTElement {
    /**
     * The label of the disclosure button representing the facet category.
     *
     * @public
     */
    summary: string;
    /**
     *
     * Whether the disclosure is expanded or not.
     *
     * @public
     *
     */
    expanded: boolean;
    /**
     * Option to hide caret if is not required.
     *
     * @public
     */
    hideCaret: boolean;
    private _currentChildrenSelected;
    get childrenSelected(): number;
}

type SafFacetCategoryInstance = AugmentClassEvents<FacetCategory>;

type SafFacetCategoryProps = SafReactComponentProps<SafFacetCategoryInstance>;
declare const SafReactFacetCategory: ComponentType<SafFacetCategoryProps>;

declare class FacetItem extends FASTElement {
    /**
     * The name of the facet item. This is used to label the checkbox.
     *
     * @public
     */
    facetName: string;
    /**
     * The indeterminate state of the facet item
     *
     * @public
     */
    indeterminate: boolean;
    indeterminateChanged(): void;
    /**
     * The number of items in the facet.
     *
     * @public
     */
    itemCount: number;
    /**
     * Whether the facet item is checked.
     *
     * @public
     */
    checked: boolean;
    checkedChanged(): void;
    /**
     * Whether the facet item is disabled.
     *
     * @public
     */
    disabled: boolean;
    protected childItemsChanged(): void;
    /**
     * Whether the facet item is expanded.
     *
     * @public
     */
    expanded: boolean;
    /**
     * The aria-label for the expand button.
     *
     * @a11y
     * @public
     */
    expandAriaLabel: string;
    /**
     * The aria-label for the collapse button.
     *
     * @a11y
     * @public
     */
    collapseAriaLabel: string;
    get treeWhollySelected(): boolean;
    get treeWhollyUnselected(): boolean;
    updateCheckedState(): void;
    emitToggle(): void;
    check(): void;
    uncheck(): void;
    selectAllChildren(): void;
    deselectAllChildren: () => void;
    get itemTotal(): number;
    get childrenSelected(): number;
    /**
     * Toggles expand and collapsing on a parent facet with children facets
     */
    toggleExpand(e: MouseEvent): void;
    get hasChildItems(): boolean | 0;
}

declare const safFacetItemConfig: {
    readonly events: {
        readonly onToggle: "toggle";
        readonly onExpandedChange: "expanded-change";
    };
};
type SafFacetItemEventDetails = {
    toggle: {
        detail: SafFacetItemInstance;
    };
};
type SafFacetItemInstance = AugmentClassEvents<FacetItem, typeof safFacetItemConfig, SafFacetItemEventDetails>;

type SafFacetItemProps = SafReactComponentProps<SafFacetItemInstance, typeof safFacetItemConfig, SafFacetItemEventDetails>;
declare const SafReactFacetItem: ComponentType<SafFacetItemProps>;

/**
 * Appearance Values
 *
 * @public
 */
declare const FileUploadStatusEnum: {
    readonly paused: "paused";
    readonly info: "info";
    readonly error: "error";
    readonly success: "success";
    readonly warning: "warning";
};
/**
 * Text for Appearance Values
 *
 * @public
 */
type FileUploadStatus = (typeof FileUploadStatusEnum)[keyof typeof FileUploadStatusEnum];

/**
 * A class for FileUpload
 */
declare class FileUpload extends FASTElement {
    /**
     * The status of the file upload
     * @public
     */
    status: FileUploadStatus;
    /**
     * Name of the file(s) being uploaded
     * @public
     */
    fileName: string;
    /**
     * The progress value of the file upload.
     * @public
     */
    progressValue: number;
    /**
     * The message displayed when the file is uploaded or not.
     * @public
     */
    validationMessage: string;
    /**
     * The text describing the allowed file types.
     * @public
     */
    fileTypesText: string;
    /**
     * Provides additional instructional text that provides extra guidance for the `file upload`
     * @public
     */
    instructionalText: string;
}

type SafFileUploadInstance = AugmentClassEvents<FileUpload>;

type SafFileUploadProps = SafReactComponentProps<SafFileUploadInstance>;
declare const SafReactFileUpload: ComponentType<SafFileUploadProps>;

/**
 * Flipper appearance values.
 *
 * @public
 */
declare const FlipperDirectionEnum: {
    readonly next: "next";
    readonly previous: "previous";
};
type FlipperDirection = (typeof FlipperDirectionEnum)[keyof typeof FlipperDirectionEnum];

/**
 * A Flipper Custom HTML Element.
 * Flippers are a form of button that implies directional content navigation, such as in a carousel.
 *
 * @slot next - The next flipper content
 * @slot previous - The previous flipper content
 * @csspart next - Wraps the next flipper content
 * @csspart previous - Wraps the previous flipper content
 * @fires click - Fires a custom 'click' event when Enter or Space is invoked via keyboard
 * and the flipper is exposed to assistive technologies.
 *
 * @public
 */
declare class Flipper extends FASTElement {
    /**
     * Disables the flipper component.
     * @public
     */
    disabled: boolean;
    /**
     * Indicates the flipper should be hidden from assistive technology.
     * Because flippers are often supplementary navigation, they are often hidden from assistive technology.
     *
     * @public
     * @defaultValue - true
     * @remarks
     * HTML Attribute: aria-hidden
     */
    hiddenFromAT: boolean;
    /**
     * Sets the direction of the flipper
     *
     * @public
     *  @defaultValue previous
     * @remarks
     * HTML Attribute: direction
     */
    direction: FlipperDirection;
    /**
     * Simulate a click event when the flipper has focus and the user hits enter or space keys
     * Blur focus if the user hits escape key
     * @param e - Keyboard event
     * @public
     */
    keyupHandler(e: Event & KeyboardEvent): void;
}

type SafFlipperInstance = AugmentClassEvents<Flipper>;

type SafFlipperProps = SafReactComponentProps<SafFlipperInstance>;
declare const SafReactFlipper: ComponentType<SafFlipperProps>;

declare class Footer extends FASTElement {
    /**
     * The name of the product.
     * @public
     */
    productName: string;
    /**
     * The aria label for the anchor group section. This appears on the `nav` element for anchor group links.
     * @public
     */
    a11yAriaLabelAnchorGroup: string;
    /**
     * The aria label for the social icons section. This appears on the `nav` element for social icons.
     * @public
     */
    a11yAriaLabelSocialIcons: string;
    /**
     * Gets the current year as a string.
     * This property is marked as volatile, meaning it may change frequently.
     * @public
     * @returns {string} The current year.
     */
    get currentYear(): string;
}

type SafFooterInstance = AugmentClassEvents<Footer>;

type SafFooterProps = SafReactComponentProps<SafFooterInstance>;
declare const SafReactFooter: ComponentType<SafFooterProps>;

declare class LayoutGrid extends FASTElement {
    /**
     * Justify the grid contents horizontally. Styling default is `start`.
     * @public
     */
    justifyContent: 'start' | 'center' | 'end';
}

type SafLayoutGridInstance = AugmentClassEvents<LayoutGrid>;

type SafLayoutGridProps = SafReactComponentProps<SafLayoutGridInstance>;
declare const SafReactLayoutGrid: ComponentType<SafLayoutGridProps>;

declare const LayoutGridItemSizeEnum: {
    readonly undefined: undefined;
    readonly 0: 0;
    readonly 1: 1;
    readonly 2: 2;
    readonly 3: 3;
    readonly 4: 4;
    readonly 5: 5;
    readonly 6: 6;
    readonly 7: 7;
    readonly 8: 8;
    readonly 9: 9;
    readonly 10: 10;
    readonly 11: 11;
    readonly 12: 12;
    readonly auto: "auto";
    readonly fit: "fit";
};
type LayoutGridItemSize = (typeof LayoutGridItemSizeEnum)[keyof typeof LayoutGridItemSizeEnum];

declare class LayoutGridItem extends FASTElement {
    /**
     * Auto height for the grid-item to allow it to grow to the tallest grid-item in the row.
     * @public
     */
    autoHeight: boolean;
    /**
     * Justify the grid-item horizontally. Styling default is `start`.
     * @public
     */
    justifyContent: 'start' | 'center' | 'end';
    /**
     * The number of columns the grid column should span at the `xs` breakpoint
     * @public
     */
    xs: LayoutGridItemSize;
    /**
     * The number of columns the grid column should span at the `sm` breakpoint
     * @public
     */
    sm: LayoutGridItemSize;
    /**
     * The number of columns the grid column should span at the `md` breakpoint
     * @public
     */
    md: LayoutGridItemSize;
    /**
     * The number of columns the grid column should span at the `lg` breakpoint
     * @public
     */
    lg: LayoutGridItemSize;
    /**
     * The number of columns the grid column should span at the `xl` breakpoint
     * @public
     */
    xl: LayoutGridItemSize;
    /**
     * The number of columns the grid column should span at the `xxl` breakpoint
     * @public
     */
    xxl: LayoutGridItemSize;
    /**
     * The number of columns the grid column should span at the `xxxl` breakpoint
     * @public
     */
    xxxl: LayoutGridItemSize;
    /**
     * The number of columns the grid column should span at the `xxxxl` breakpoint
     * @public
     */
    xxxxl: LayoutGridItemSize;
}

type SafLayoutGridItemInstance = AugmentClassEvents<LayoutGridItem>;

type SafLayoutGridItemProps = SafReactComponentProps<SafLayoutGridItemInstance>;
declare const SafReactLayoutGridItem: ComponentType<SafLayoutGridItemProps>;

declare const IconColorEnum: {
    readonly fill: "fill";
    readonly outline: "outline";
};
type IconColor = (typeof IconColorEnum)[keyof typeof IconColorEnum];
declare const IconAppearanceEnum: {
    readonly light: "light";
    readonly solid: "solid";
    readonly brands: "brands";
};
type IconAppearance = (typeof IconAppearanceEnum)[keyof typeof IconAppearanceEnum];

/**
 * A class for Icon
 */
declare class Icon extends FASTElement {
    /**
     * The appearance of the icon. This will be applied to the `fa-` class. `light`, `solid`, `brands`. When `light` or `solid` is selected, `fa-` and `fa-sharp` classes will be added.
     *
     * @public
     */
    appearance: IconAppearance;
    /**
     * The font awesome icon name value indicated by the `icon-name` attribute. This will be applied to the `fa-` class.
     * @public
     */
    iconName: string;
    /**
     * The size in pixels of the icon. This only applies to SVG icons.
     * @defaultValue 16
     * @public
     */
    size: number;
    sizeChanged(): void;
    /**
     * Determines the unit of the size attribute.
     *
     * @public
     */
    sizeUnit: 'em' | 'px' | 'rem';
    /**
     * Color of the icon. Uses `currentColor` to inherit the parent value by default. Override with a CSS value like keyword, HEX, RGB, RGBA, HSL, HSLA.
     * @public
     */
    color: string;
    colorChanged(): void;
    private iconSizeStyles;
    private iconColorStyles;
    /**
     *
     * @public
     * HTML Attribute: color
     */
    colorType: IconColor;
    /**
     * Identifies the element (or elements) that labels the current element.
     *
     * @public
     */
    ariaLabelledBy: string;
    /**
     * Defines a string value that labels the current element.
     * @public
     */
    ariaLabel: string;
    /**
     * Controls the `role` and `aria-hidden` attributes
     * If set to `true`, `role` will be set to `presentation`, and `aria-hidden` will be set to `true`
     * If set to `false`, `role` will be set to `img`, and `aria-hidden` will be set to `false`
     *
     * @a11y
     * @public
     */
    presentation: boolean;
}

type SafIconInstance = AugmentClassEvents<Icon>;

type SafIconProps = SafReactComponentProps<SafIconInstance>;
declare const SafReactIcon: ComponentType<SafIconProps>;

declare const ListOrderEnum: {
    readonly UNORDERED: "unordered";
    readonly ORDERED: "ordered";
};
type ListOrder = (typeof ListOrderEnum)[keyof typeof ListOrderEnum];
declare const ListSizeEnum: {
    readonly LARGE: "large";
    readonly MEDIUM: "medium";
    readonly SMALL: "small";
};
type ListSize = (typeof ListSizeEnum)[keyof typeof ListSizeEnum];
declare const ListStyleEnum: {
    readonly CIRCLE: "circle";
    readonly DECIMAL: "decimal";
    readonly DISC: "disc";
    readonly LOWERALPHA: "lower-alpha";
    readonly NONE: "none";
    readonly ROMAN: "lower-roman";
    readonly SQUARE: "square";
    readonly TICKED: "ticked";
};
type ListStyle = (typeof ListStyleEnum)[keyof typeof ListStyleEnum];

/**
 * A class for List
 */
declare class List extends FASTElement {
    /**
     * The type of list.
     *
     * @public
     */
    order: ListOrder;
    /**
     * The size of the list text.
     *
     * @public
     */
    size: ListSize;
    /**
     * The visual style for the list.
     *
     * @public
     */
    listStyle: ListStyle;
    /**
     * Determines if the list is inline.
     *
     * @public
     */
    inline: boolean;
}

type SafListInstance = AugmentClassEvents<List>;

type SafListProps = SafReactComponentProps<SafListInstance>;
declare const SafReactList: ComponentType<SafListProps>;

/**
 * List item
 */
declare class ListItem extends FASTElement {
}

type SafListItemInstance = AugmentClassEvents<ListItem>;

type SafListItemProps = SafReactComponentProps<SafListItemInstance>;
declare const SafReactListItem: ComponentType<SafListItemProps>;

type SafOptionInstance = AugmentClassEvents<Option>;

type SafOptionProps = SafReactComponentProps<SafOptionInstance>;
declare const SafReactOption: ComponentType<SafOptionProps>;

/**
 * A Listbox Custom HTML Element.
 * Implements the {@link https://w3c.github.io/aria/#listbox | ARIA listbox }.
 *
 * @public
 */
declare class Listbox extends ListboxAbstract {
    /**
     * Indicates if the listbox is in multi-selection mode.
     *
     * @remarks
     * HTML Attribute: `multiple`
     *
     * @public
     */
    multiple: boolean;
    /**
     * The maximum number of options to display.
     *
     * @remarks
     * HTML Attribute: `size`.
     *
     * @public
     */
    size: number;
    /**
     * Sets an option as selected and gives it focus.
     *
     * @override
     * @public
     */
    protected setSelectedOptions(): void;
    /**
     * Identifies the element (or elements) that labels the current element.
     *
     * @a11y
     * @public
     */
    ariaLabelledBy: string;
    /**
     * Defines a string value that labels the current element.
     *
     * @a11y
     * @public
     */
    ariaLabel: string | null;
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
    private computedStylesheet?;
    protected updateComputedStylesheet(): void;
}

declare const safListboxConfig: {
    readonly events: {
        readonly onClick: "click";
    };
};
type SafListboxInstance = AugmentClassEvents<Listbox, typeof safListboxConfig>;

type SafListboxProps = SafReactComponentProps<SafListboxInstance, typeof safListboxConfig>;
declare const SafReactListbox: ComponentType<SafListboxProps>;

declare const LogoAppearanceEnum: {
    readonly FULL_COLOR: "full-color";
    readonly COLOR_REVERSED_2: "2-color-reversed";
    readonly COLOR_REVERSED_1: "1-color-reversed";
    readonly COLOR_BLACK_1: "1-color-black";
    readonly COLOR_ORANGE_1: "1-color-orange";
};
type LogoAppearance = (typeof LogoAppearanceEnum)[keyof typeof LogoAppearanceEnum];

/**
 * A class for Logo
 */
declare class Logo extends FASTElement {
    /**
     * Determines the visual appearance of the logo.
     *
     * @public
     */
    appearance: LogoAppearance;
    /**
     * Text for the product name.
     *
     * @public
     */
    productName: string;
}

type SafLogoInstance = AugmentClassEvents<Logo>;

type SafLogoProps = SafReactComponentProps<SafLogoInstance>;
declare const SafReactLogo: ComponentType<SafLogoProps>;

/**
 * A Menu Custom HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#menu | ARIA menu }.
 *
 * @slot - The default slot for the menu items
 *
 * @public
 */
declare class Menu extends FASTElement {
    protected itemsChanged(_oldValue: HTMLElement[], _newValue: HTMLElement[]): void;
    protected menuItems: Element[] | undefined;
    private expandedItem;
    /**
     * The index of the focusable element in the items array
     * defaults to -1
     */
    private focusIndex;
    private static focusableElementRoles;
    /**
     * Focuses the first item in the menu.
     *
     * @public
     */
    focus(): void;
    /**
     * Collapses any expanded menu items.
     *
     * @public
     */
    collapseExpandedItem(): void;
    private handleItemFocus;
    private handleExpandedChanged;
    private removeItemListeners;
    protected setItems(): void;
    handleChange(source: any, propertyName: string): void;
    /**
     * handle change from child element
     */
    private changeHandler;
    /**
     * check if the item is a menu item
     */
    protected isMenuItemElement: (el: Element) => el is HTMLElement;
    /**
     * check if the item is focusable
     */
    private isFocusableElement;
    private setFocus;
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
    /**
     * Whether the menu is hidden or not
     *
     * @public
     */
    hidden: boolean;
    onFocusOut(): void;
}

type SafMenuInstance = AugmentClassEvents<Menu>;

type SafMenuProps = SafReactComponentProps<SafMenuInstance>;
declare const SafReactMenu: ComponentType<SafMenuProps>;

/**
 * Menu items roles.
 * @public
 */
declare const MenuItemRoleEnum: {
    /**
     * The menu item has a "menuitem" role
     */
    readonly menuitem: "menuitem";
    /**
     * The menu item has a "menuitemcheckbox" role
     */
    readonly menuitemcheckbox: "menuitemcheckbox";
    /**
     * The menu item has a "menuitemradio" role
     */
    readonly menuitemradio: "menuitemradio";
};
/**
 * The types for menu item roles
 * @public
 */
type MenuItemRole = (typeof MenuItemRoleEnum)[keyof typeof MenuItemRoleEnum];

/**
 * A Switch Custom HTML Element.
 * Implements {@link https://www.w3.org/TR/wai-aria-1.1/#menuitem | ARIA menuitem },
 * {@link https://www.w3.org/TR/wai-aria-1.1/#menuitemcheckbox | ARIA menuitemcheckbox},
 * or {@link https://www.w3.org/TR/wai-aria-1.1/#menuitemradio | ARIA menuitemradio }.
 *
 * @slot checked-indicator - The checked indicator
 * @slot radio-indicator - The radio indicator
 * @slot start - Content which can be provided before the menu item content
 * @slot end - Content which can be provided after the menu item content
 * @slot - The default slot for menu item content
 * @slot expand-collapse-indicator - The expand/collapse indicator
 * @slot submenu - Used to nest menu's within menu items
 * @csspart input-container - The element representing the visual checked or radio indicator
 * @csspart checkbox - The element wrapping the `menuitemcheckbox` indicator
 * @csspart radio - The element wrapping the `menuitemradio` indicator
 * @csspart content - The element wrapping the menu item content
 * @csspart expand-collapse-glyph-container - The element wrapping the expand collapse element
 * @csspart expand-collapse - The expand/collapse element
 * @csspart submenu-region - The container for the submenu, used for positioning
 * @fires expanded-change - Fires a custom 'expanded-change' event when the expanded state changes
 * @fires change - Fires a custom 'change' event when a non-submenu item with
 * a role of `menuitemcheckbox`, `menuitemradio`, or `menuitem` is invoked
 *
 * @public
 */
declare class MenuItem extends FASTElement {
    id: string;
    /**
     * The disabled state of the element.
     *
     * @public
     * @remarks
     * HTML Attribute: disabled
     */
    disabled: boolean;
    /**
     * The expanded state of the element.
     *
     * @public
     * @remarks
     * HTML Attribute: expanded
     */
    expanded: boolean;
    /**
     * When a submenu is closed we need to remove all side effects, that means we need to remove
     * the added `selected` class from the DOM.
     *
     * @protected
     */
    protected expandedChanged(prev: boolean | undefined, next: boolean): void;
    /**
     * The role of the element.
     *
     * @public
     * @remarks
     * HTML Attribute: role
     */
    role: MenuItemRole;
    /**
     * Cleanup function for the submenu positioner.
     *
     * @public
     */
    cleanup: () => void;
    /**
     * The checked value of the element.
     *
     * @public
     * @remarks
     * HTML Attribute: checked
     */
    checked: boolean;
    protected checkedChanged(_oldValue: boolean, _newValue: boolean): void;
    /**
     * `Deprecated`. Doesn't do anything. Will be removed in v4.
     *
     * @public
     * @remarks TODO: remove in v4
     */
    hidden: boolean;
    anchorElement: HTMLAnchorElement | undefined;
    private focusSubmenuOnLoad;
    connectedCallback(): void;
    /**
     * A function that is called when the menu item is clicked when `router-link` is `true`
     */
    navigate: (path: string) => void;
    handleAnchorClick: (e: MouseEvent) => boolean;
    /**
     * Calculate and apply submenu positioning.
     *
     * @public
     */
    updateSubmenu(): void;
    /**
     * The URL the hyperlink references.
     *
     * @public
     */
    url?: string;
    /**
     * Whether the menu-item is a link. Typically used in side nav.
     * When `true`, the menu-item will render an anchor tag. Provide a `url` that the anchor tag should link to.
     *
     * @see url
     * @public
     */
    hasLink: boolean;
    /**
     * Indicates whether the menu-item is used as a router link.
     * When `true`, the menu-item will render an anchor tag but when invoked, it will invoke the `navigate` method.
     * You need to provide a `url` and `navigate()` method for the router link to work.
     *
     * @see navigate
     * @see url
     * @public
     */
    routerLink: boolean;
    get hasLinkOrRouterLink(): boolean;
    /**
     * Determines where a link will open in browsing context.
     * @public
     * @defaultValue `_self` if `router-link` is `true`, `_blank` otherwise
     */
    target: AnchorTarget;
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
    handleMenuItemMouseDown(e: MouseEvent): void;
    handleMenuItemMouseup(e: MouseEvent): true | undefined;
    handleMenuItemChange(e: MouseEvent): void;
    private forwardEventToAnchor;
}
interface MenuItem extends StartEnd {
}

declare const safMenuItemConfig: {
    readonly events: {
        readonly onExpandedChange: "expanded-change";
        readonly onChange: "change";
        readonly onClick: "click";
    };
};
type SafMenuItemInstance = AugmentClassEvents<MenuItem, typeof safMenuItemConfig>;

type SafMenuItemProps = SafReactComponentProps<SafMenuItemInstance, typeof safMenuItemConfig>;
declare const SafReactMenuItem: ComponentType<SafMenuItemProps>;

declare const MessageBoxAppearanceEnum: {
    readonly AGENT: "agent";
    readonly USER: "user";
};
type MessageBoxAppearance = (typeof MessageBoxAppearanceEnum)[keyof typeof MessageBoxAppearanceEnum];

/**
 * A class for MessageBox
 */
declare class MessageBox extends FASTElement {
    /**
     * Determines the appearance of the message box user.
     *
     * @public
     */
    appearance: MessageBoxAppearance;
    /**
     * Hides default `agent` and `user` avatar components in message. It doesn't affect any slotted custom avatar.
     *
     * @public
     */
    hideAvatar: boolean;
    /**
     * Sets the label for the avatar or user image. If appearance is agent then, the default value Thomson Reuters.
     *
     * @public
     */
    userLabel: string;
    /**
     * The option to enable or disable presentation in the contained Avatar component.
     *
     * @a11y
     * @public
     */
    avatarPresentation: boolean;
    slottedNodes: Node[];
    private hideProcessingAvatar;
    private handleProgressTextPresence;
    slottedNodesChanged(): void;
}

declare const safMessageBoxConfig: {
    readonly events: {
        readonly onClick: "click";
    };
};
type SafMessageBoxInstance = AugmentClassEvents<MessageBox, typeof safMessageBoxConfig>;

type SafMessageBoxProps = SafReactComponentProps<SafMessageBoxInstance, typeof safMessageBoxConfig>;
declare const SafReactMessageBox: ComponentType<SafMessageBoxProps>;

/**
 * An object representing the available sizes for the Metadata component.
 *
 * @remarks
 * This object is a constant that contains the available size options for the Metadata component.
 *
 * @public
 */
declare const MetadataSizeEnum: {
    readonly small: "sm";
    readonly xSmall: "xs";
};
/**
 * A union type representing the available size values for the Metadata component.
 *
 * @public
 */
type MetadataSize = (typeof MetadataSizeEnum)[keyof typeof MetadataSizeEnum];

/**
 * A class for Metadata, based on concepts in FASTBreadcrumb
 */
declare class Metadata extends FASTElement {
    /**
     * Determines metadata text size.
     * @public
     */
    size: MetadataSize;
    protected slottedMetadataItemsChanged(): void;
    private setItemSeparator;
}

type SafMetadataInstance = AugmentClassEvents<Metadata>;

type SafMetadataProps = SafReactComponentProps<SafMetadataInstance>;
declare const SafReactMetadata: ComponentType<SafMetadataProps>;

/**
 * A class for Metadata item, based on concepts in FASTBreadcrumbItem
 */
declare class MetadataItem extends FASTElement {
    /**
     * Determines if there is a divider between items.
     * @public
     */
    separator: boolean;
}
interface MetadataItem extends StartEnd {
}

type SafMetadataItemInstance = AugmentClassEvents<MetadataItem>;

type SafMetadataItemProps = SafReactComponentProps<SafMetadataItemInstance>;
declare const SafReactMetadataItem: ComponentType<SafMetadataItemProps>;

declare class _NumberField extends FASTElement {
}
interface _NumberField extends FormAssociated {
}
declare const FormAssociatedNumberField_base: typeof _NumberField;
/**
 * A form-associated base class for the {@link @saffron/core-components#(NumberField:class)} component.
 *
 * @beta
 */
declare class FormAssociatedNumberField extends FormAssociatedNumberField_base {
    proxy: HTMLInputElement;
}

/**
 * A class derived from the NumberField foundation component
 */
declare class NumberField extends FormAssociatedNumberField {
    /**
     * When true, the control will be immutable by user interaction.
     * @public
     * @remarks
     * See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute} for more information.
     * HTML Attribute: readonly
     */
    readOnly: boolean;
    /**
     * Indicates that this element should get focus after the page finishes loading.
     * See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautofocus | autofocus HTML attribute}
     * for more information.
     * @public
     * @remarks
     * HTML Attribute: autofocus
     */
    autofocus: boolean;
    /**
     * When true, spin buttons will not be rendered
     * @public
     * @remarks
     * HTML Attribute: autofocus
     */
    hideStep: boolean;
    /**
     * Sets the placeholder value of the element, generally used to provide a hint to the user.
     * @public
     * @remarks
     * HTML Attribute: placeholder
     * Using this attribute does is not a valid substitute for a labeling element.
     */
    placeholder: string;
    /**
     * Allows associating a {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist | datalist}
     * to the element by {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/id}.
     * @public
     * @remarks
     * HTML Attribute: list
     */
    list: string;
    /**
     * The maximum number of characters a user can enter.
     * @public
     * @remarks
     * HTMLAttribute: maxlength
     */
    maxlength: number;
    /**
     * The minimum number of characters a user can enter.
     * @public
     * @remarks
     * HTMLAttribute: minlength
     */
    minlength: number;
    /**
     * Sets the width of the element to a specified number of characters.
     * @public
     * @remarks
     * HTMLAttribute: size
     */
    size: number;
    /**
     * Amount to increment or decrement the value by
     * @public
     * @remarks
     * HTMLAttribute: step
     */
    step: number;
    /**
     * The maximum the value can be
     * @public
     * @remarks
     * HTMLAttribute: max
     */
    max: number;
    /**
     * The minimum the value can be
     * @public
     * @remarks
     * HTMLAttribute: min
     */
    min: number;
    /**
     * The value property, typed as a number.
     *
     * @public
     */
    get valueAsNumber(): number;
    set valueAsNumber(next: number);
    validate(): void;
    /**
     * Increments the value using the step value
     *
     * @public
     */
    stepUp(): void;
    /**
     * Decrements the value using the step value
     *
     * @public
     */
    stepDown(): void;
    /**
     * Selects all the text in the number field
     *
     * @public
     */
    select(): void;
    supportsElementInternal: boolean;
    /**
     * Text that describes the input.
     *
     * @public
     */
    label?: string;
    /**
     * Provides additional instructional text that provides extra guidance for the input.
     *
     * @public
     */
    instructionalText?: string;
    /**
     * Provides additional optional text to the label. Accepts any text but intended to indicate `(Required)` or `(Optional)`.
     *
     * @public
     */
    optionalText?: string;
    /**
     * Indicates the entered value does not conform to the format expected by the application.
     *
     * @public
     */
    invalid: boolean;
    /**
     * The message displayed when the control is valid or invalid.
     *
     * @public
     */
    validationMessage: string;
    /**
     * Specifies that the control is valid and that a success message should display.
     *
     * @public
     * @remarks
     * This boolean value exists as an api for taking in async behaviours
     * (i.e. uploading or password validation) that need success state reflected
     * in tandem with isValid
     */
    isSuccess: boolean | undefined;
    /**
     * Defines a string value that labels the success icon, when icons are not just presentational but used to communicate status.
     *
     * @public
     * @a11y
     */
    successAriaLabel: string;
    /**
     * Defines a string value that labels the error icon, when icons are not just presentational but used to communicate status.
     *
     * @public
     * @a11y
     */
    errorAriaLabel: string;
    /**
     * Adds additional character to the label when number-field is required.
     *
     * @public
     */
    requiredText?: string;
    /**
     * A description for the number input that is only visible to screen readers, passed to a hidden span element, connected to the input via aria-describedby.
     *
     * @public
     * @a11y
     */
    a11yAriaDescription: string;
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
    /**
     * Controls <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete">browser autofill</a> behavior.
     *
     * @public
     */
    autocomplete?: string;
    disconnectedCallback(): void;
    prevValue: string;
    protected canAnnounceValidation: boolean;
    isSuccessChanged(): void;
    invalidChanged(): void;
    validationMessageChanged(): void;
    protected announceValidation(): void;
}
interface NumberField extends StartEnd, DelegatesARIATextbox {
}

declare const safNumberFieldConfig: {
    readonly events: {
        readonly onChange: "change";
        readonly onInput: "input";
        readonly onInvalid: "invalid";
        readonly onClick: "click";
    };
};
type SafNumberFieldInstance = AugmentClassEvents<NumberField, typeof safNumberFieldConfig>;

type SafNumberFieldProps = SafReactComponentProps<SafNumberFieldInstance, typeof safNumberFieldConfig>;
declare const SafReactNumberField: ComponentType<SafNumberFieldProps>;

/**
 * Enumerates possible aria-live values
 *
 * @public
 */
declare const PaginationAriaLiveEnum: {
    readonly off: "off";
    readonly polite: "polite";
    readonly assertive: "assertive";
};
/**
 * The possible aria-live values
 *
 * @public
 */
type PaginationAriaLive = (typeof PaginationAriaLiveEnum)[keyof typeof PaginationAriaLiveEnum];

/**
 * A class for Pagination
 */
declare class Pagination extends FASTElement {
    /**
     * The aria label for the region called pagination.
     *
     * @public
     * @a11y
     */
    ariaLabel: string;
    /**
     * Text for the results label.
     *
     * @public
     */
    pageResultsLabel: string;
    /**
     * Text for the page **of** label.
     *
     * @public
     */
    pageOfLabel: string;
    /**
     * Text for the previous button.
     *
     * @public
     */
    previousButton: string;
    /**
     * Text for the next button.
     *
     * @public
     */
    nextButton: string;
    /**
     * Text for the **results** label.
     *
     * @public
     */
    resultsLabel: string;
    /**
     * Text for the **to** label.
     *
     * @public
     */
    toLabel: string;
    /**
     * Text for select items field.
     *
     * @public
     * @remarks Text for select items field
     */
    itemsInputLabel: string;
    /**
     * Text for the page input label.
     *
     * @public
     */
    pageInputLabel: string;
    /**
     * Text for the page button.
     *
     * @public
     */
    pageButton: string;
    /**
     * Whether or not the component has a border, showing by default.
     *
     * @public
     */
    hasBorder: boolean;
    /**
     * Total number of results.
     *
     * @public
     */
    totalItemCount: number;
    /**
     * The current page index.
     *
     * @public
     */
    currentPageIndex: number;
    /**
     * Option for the items per page number selection.
     *
     * @public
     */
    itemsArray: number[];
    /**
     * Number of items per page.
     *
     * @public
     */
    itemsPerPage: number;
    /**
     * Indicates that an element will be updated, and describes the types of updates the user agents, assisitve technologies, and user can expect from the live region.
     *
     * @public
     * @a11y
     */
    dataAriaLive: PaginationAriaLive;
    /**
     * Text to describe the results.
     *
     * @public
     */
    itemsLabel: string;
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
    /**
     * The `controlled` mode will make the component to just read attributes and emit events. The state
     * should be handled by the end user. This is also known as `stateless` components in React
     * or `Props down, Events up` in Vue.
     *
     * @public
     *
     */
    controlled: boolean;
    disconnectedCallBack(): void;
    buttonPageValue(): void;
    /**
     * Go to previous page
     *
     * @public
     */
    previous(): void;
    /**
     * Go to next page
     *
     * @public
     */
    next(): void;
}

declare const safPaginationConfig: {
    readonly events: {
        readonly onChange: "change";
        readonly onItemsPerPageChange: "items-per-page-change";
        readonly onPrevious: "previous";
        readonly onNext: "next";
    };
};
type SafPaginationEventDetailAugment = {
    detail: number;
};
type SafPaginationEventDetails = {
    change: SafPaginationEventDetailAugment;
    'items-per-page-change': SafPaginationEventDetailAugment;
    previous: SafPaginationEventDetailAugment;
    next: SafPaginationEventDetailAugment;
};
type SafPaginationInstance = AugmentClassEvents<Pagination, typeof safPaginationConfig, SafPaginationEventDetails>;

type SafPaginationProps = SafReactComponentProps<SafPaginationInstance, typeof safPaginationConfig, SafPaginationEventDetails>;
declare const SafReactPagination: ComponentType<SafPaginationProps>;

/**
 * A class for ProductHeader
 */
declare class ProductHeader extends FASTElement {
    /**
     * The text of `aria-label` for the global navigation (right).
     *
     * @public
     * @a11y
     */
    globalAriaLabel: string;
    /**
     * The text of `aria-label` for the product navigation (left).
     *
     * @public
     * @a11y
     */
    tasksAriaLabel: string;
    isMenuOpen: boolean;
    _showDivider: boolean;
    _hasMenuItems: boolean;
    prodHeaderMenuItems: HTMLElement[];
    menuButton: HTMLElement;
    anchoredRegion: HTMLElement;
    /**
     * Define the components that should receive the header-item attribute
     */
    private readonly productHeaderItems;
    private addProductHeaderItemAttribute;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private checkMenuItems;
    private checkDivider;
    private checkLogo;
    handleClickOutside(event: any): void;
    handleButtonKeyDown(event: any): true | undefined;
    removeSelectedClass(): void;
    handleBackgroundKeyDown(event: any): true | undefined;
    handleMenuButtonClick(): void;
    private closeMenu;
}

type SafProductHeaderInstance = AugmentClassEvents<ProductHeader>;

type SafProductHeaderProps = SafReactComponentProps<SafProductHeaderInstance>;
declare const SafReactProductHeader: ComponentType<SafProductHeaderProps>;

/**
 * A class for ProductHeaderItem
 */
declare class ProductHeaderItem extends FASTElement {
}

type SafProductHeaderItemInstance = AugmentClassEvents<ProductHeaderItem>;

type SafProductHeaderItemProps = SafReactComponentProps<SafProductHeaderItemInstance>;
declare const SafReactProductHeaderItem: ComponentType<SafProductHeaderItemProps>;

declare const ProgressStatusEnum: {
    readonly ERROR: "error";
    readonly LOADING: "loading";
    readonly PAUSED: "paused";
    readonly SUCCESS: "success";
};
type ProgressStatus = (typeof ProgressStatusEnum)[keyof typeof ProgressStatusEnum];

/**
 * An Progress HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#progressbar | ARIA progressbar }.
 *
 * @slot indeterminate - The slot for a custom indeterminate indicator
 * @csspart progress - Represents the progress element
 * @csspart determinate - The determinate indicator
 * @csspart indeterminate - The indeterminate indicator
 *
 * @public
 */
declare class Progress extends FASTElement {
    static INDETERMINATE_INTERVAL: number;
    static INDETERMINATE_DELAY: number;
    static ANNOUNCEMENT_DEBOUNCE: number;
    /**
     * The value of the progress
     * @public
     * @remarks
     * HTML Attribute: value
     */
    value: number | null;
    protected valueChanged(): void;
    /**
     * The minimum value
     * @public
     * @remarks
     * HTML Attribute: min
     */
    min: number;
    protected minChanged(): void;
    /**
     * The maximum value
     * @public
     * @remarks
     * HTML Attribute: max
     */
    max: number;
    protected maxChanged(): void;
    private updatePercentComplete;
    /**
     * Applies status appearance colors matching status component
     * @public
     */
    statusColor: ProgressStatus;
    /**
     * `Deprecated`. Doesn't do anything. Will be removed in v4.
     * @public
     *
     */
    message: string;
    /**
     * `Deprecated`. Doesn't do anything. Will be removed in v4.
     * @public
     */
    color: string;
    /**
     * Determines if the progress bar is indeterminate.
     * @public
     */
    indeterminate: boolean;
    /**
     * The text that appears beside the % loading complete number - Useful for translations.
     * @public
     */
    completeLabel: string;
    /**
     * `Deprecated`. Doesn't do anything. Will be removed in v4.
     * @public
     */
    headinglabel: string;
    /**
     * Defines a string value that labels the current element.
     * @public
     * @a11y
     */
    ariaLabel: string;
    /**
     * Optional text to show kind of request being processed, should reflect the state of the progress.
     * @public
     */
    label: string;
    /**
     * Represents the current value of the progress indicator for accessibility purposes.
     * @public
     * @a11y
     */
    ariaValueNow: string;
    /**
     * Represents the minimum value of the progress indicator for accessibility purposes.
     * @public
     * @a11y
     */
    ariaValueMin: string;
    /**
     * Represents the maximum value of the progress indicator for accessibility purposes.
     * @public
     * @a11y
     */
    ariaValueMax: string;
    /**
     * The ID of the element that labels the progress component.
     * This is used to set the `aria-labelledby` attribute for accessibility purposes.
     * @public
     * @a11y
     */
    ariaLabelledBy?: string;
    /**
     * Indicates whether the progress component is paused.
     * When set to true, the progress animation will be paused.
     * @public
     * @type {boolean}
     */
    paused: boolean;
    /**
     * Cause progress to be announced dynamically by assistive technologies.
     * @public
     * @a11y
     */
    announce: boolean;
    /**
     * Message to be announced by assistive technology when the progress is complete. This will be announced when the `complete` property is set to true or when the progress value reaches the max value.
     * @public
     * @a11y
     */
    completionMessage: string;
    /**
     * Indicates that the progress is complete. Setting this to true manually triggers completion announcement for assistive technologies. (user must also set `completion-message` attribute).
     * @public
     * @a11y
     */
    complete: boolean;
    protected completeChanged(oldValue: boolean, newValue: boolean): void;
    protected previousValue: number | null;
    protected announcementTimeout: ReturnType<typeof setTimeout> | null;
    protected announcementInterval: ReturnType<typeof setInterval> | null;
    protected valueAnnounced: boolean;
    protected setupIndeterminateAnnouncements(): void;
    protected clearIndeterminateAnnouncements(): void;
    protected announceValue(): void;
    disconnectedCallback(): void;
    isIndeterminate(): boolean;
}

declare const ProgressRingSizeEnum: {
    readonly small: "small";
    readonly medium: "medium";
    readonly large: "large";
};
type ProgressRingSize = (typeof ProgressRingSizeEnum)[keyof typeof ProgressRingSizeEnum];

/**
 * An circular Progress HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#progressbar | ARIA progressbar }.
 *
 * @slot indeterminate - The slot for a custom indeterminate indicator
 * @slot determinate - The slot for a custom determinate indicator
 * @csspart progress - Represents the progress element
 * @csspart determinate - The determinate indicator
 * @csspart background - The background
 *
 * @public
 */
declare class ProgressRing extends Progress {
    /**
     * Determines progress ring size.
     * @public
     */
    progressSize: ProgressRingSize;
    /**
     * The text that follows the loading complete number % in message announcements - Useful for translations
     * @public
     * @a11y
     * @remarks This attr is duplicated here just to change the description and category
     */
    completeLabel: string;
    protected announceValue(): void;
}

type SafProgressRingInstance = AugmentClassEvents<ProgressRing>;

type SafProgressRingProps = SafReactComponentProps<SafProgressRingInstance>;
declare const SafReactProgressRing: ComponentType<SafProgressRingProps>;

/**
 * A class for ProgressText component
 */
declare class ProgressText extends FASTElement {
}

type SafProgressTextInstance = AugmentClassEvents<ProgressText>;

type SafProgressTextProps = SafReactComponentProps<SafProgressTextInstance>;
declare const SafReactProgressText: ComponentType<SafProgressTextProps>;

type SafProgressInstance = AugmentClassEvents<Progress>;

type SafProgressProps = SafReactComponentProps<SafProgressInstance>;
declare const SafReactProgress: ComponentType<SafProgressProps>;

/**
 * An Radio Group Custom HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#radiogroup | ARIA radiogroup }.
 *
 * @slot label - The slot for the label
 * @slot - The default slot for radio buttons
 * @csspart positioning-region - The positioning region for laying out the radios
 * @fires change - Fires a custom 'change' event when the value changes
 *
 * @public
 */
declare class RadioGroup extends FASTElement {
    /**
     * When true, the child radios will be immutable by user interaction.
     * See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute} for more information.
     * @public
     * @remarks
     * HTML Attribute: readonly
     */
    readOnly: boolean;
    /**
     * Disables the radio group and child radios.
     *
     * @public
     * @remarks
     * HTML Attribute: disabled
     */
    disabled: boolean;
    protected disabledChanged(): void;
    /**
     * The name of the radio group. Setting this value will set the name value
     * for all child radio elements.
     *
     * @public
     * @remarks
     * HTML Attribute: name
     */
    name: string;
    protected nameChanged(): void;
    /**
     * The initial checked value of the control.
     *
     * @public
     * @remarks
     * HTML Attribute: value
     */
    value: string;
    protected valueChanged(): void;
    /**
     * The orientation of the group
     *
     * @public
     * @remarks
     * HTML Attribute: orientation
     */
    orientation: Orientation;
    childItems: HTMLElement[];
    protected slottedRadioButtonsChanged(_oldValue: unknown, _newValue: HTMLElement[]): void;
    private selectedRadio;
    private focusedRadio;
    private direction;
    private get parentToolbar();
    private get isInsideToolbar();
    private get isInsideFoundationToolbar();
    disconnectedCallback(): void;
    private setupRadioButtons;
    private radioChangeHandler;
    private moveToRadioByIndex;
    private moveRightOffGroup;
    private moveLeftOffGroup;
    private shouldMoveOffGroupToTheRight;
    private shouldMoveOffGroupToTheLeft;
    private checkFocusedRadio;
    private moveRight;
    private moveLeft;
    supportsElementInternals: boolean;
    inputs: HTMLInputElement[];
    /**
     * Indicates the radio group must have a selected value before the form will submit.
     *
     * @public
     */
    required: boolean;
    /**
     * Text that describes the radio group.
     *
     * @public
     */
    label?: string;
    /**
     * Define the accessible name of the radio group. Overrides the visible label for assistive technologies.
     *
     * @public
     * @a11y
     */
    a11yAriaLabel: string;
    /**
     * Adds additional character to the label when radio-group is required.
     *
     * @public
     */
    requiredText?: string;
    /**
     * Provides additional instructional text for extra guidance for the radio group.
     *
     * @public
     */
    instructionalText?: string;
    /**
     * Provides additional optional text to the label. Accepts any text but intended to indicate `(Required)` or `(Optional)`
     *
     * @public
     */
    optionalText?: string;
    /**
     * Indicates the optional text should be rendered visible or just availble to screen readers
     *
     * @public
     */
    optionalTextVisible: boolean;
    /**
     * Indicates the entered value does not conform to the format expected by the application.
     *
     * @public
     */
    invalid: boolean;
    /**
     * The message displayed when the control is valid or invalid.
     *
     * @public
     */
    validationMessage: string;
    /**
     * Defines a string value that labels the error icon, when icons are not just presentational but used to communicate status.
     *
     * @public
     * @a11y
     */
    errorAriaLabel: string;
    protected canAnnounceValidation: boolean;
    requiredChanged(): void;
    invalidChanged(): void;
    validationMessageChanged(): void;
    protected announceValidation(): void;
}

declare const safRadioGroupConfig: {
    readonly events: {
        readonly onChange: "change";
        readonly onClick: "click";
        readonly onKeyDown: "keydown";
        readonly onFocusOut: "focusout";
        readonly onReset: "reset";
    };
};
type SafRadioGroupInstance = AugmentClassEvents<RadioGroup, typeof safRadioGroupConfig>;

type SafRadioGroupProps = SafReactComponentProps<SafRadioGroupInstance, typeof safRadioGroupConfig>;
declare const SafReactRadioGroup: ComponentType<SafRadioGroupProps>;

declare class _Radio extends FASTElement {
}
interface _Radio extends CheckableFormAssociated {
}
declare const FormAssociatedRadio_base: typeof _Radio;
/**
 * A form-associated base class for the {@link @saffron/core-components#(FASTRadio:class)} component.
 *
 * @beta
 */
declare class FormAssociatedRadio extends FormAssociatedRadio_base {
    proxy: HTMLInputElement;
}

/**
 * A structure representing a {@link @saffron/core-components#(Radio:class)} element
 * @public
 */
type RadioControl = Pick<HTMLInputElement, 'checked' | 'disabled' | 'focus' | 'setAttribute' | 'getAttribute'>;
/**
 * A Radio Custom HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#radio | ARIA radio }.
 *
 * @slot checked-indicator - The checked indicator
 * @slot - The default slot for the label
 * @csspart control - The element representing the visual radio control
 * @csspart label - The label
 * @fires change - Emits a custom change event when the checked state changes
 *
 * @public
 */
declare class Radio extends FormAssociatedRadio implements RadioControl {
    /**
     * The name of the radio.
     * See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname | name attribute} for more info.
     */
    name: string;
    private get radioGroup();
    constructor();
    private isInsideRadioGroup;
    /**
     * Handles key presses on the radio.
     * @beta
     */
    keypressHandler(e: KeyboardEvent): boolean | void;
    /**
     * When set to `true`, the radio button cannot be interacted with by the user.
     *
     */
    readOnly: boolean;
    /**
     * Pass through the input element.
     *
     * @public
     */
    id: string;
    get internalId(): string;
    /**
     * Pass through for a div that adds additional information for the button, which uses aria-describedby to associate the two
     *
     * @public
     * @a11y
     */
    a11yAriaDescription: string | undefined;
    /**
     * attr for passing aria-label to the radio input without also being applied to the component element
     *
     * @public
     * @a11y
     */
    a11yAriaLabel: string;
    /**
     * The unique IDs of the label and validation messages (if defined)
     *
     * @public
     * @a11y
     * Volatile decorator needed here because of the computed properties/conditionals
     */
    get ariaLabelledbyIds(): string;
    get tabIndex(): number;
    set tabIndex(value: number);
    tabIndexProp: number;
    tabIndexAttr: string | null;
    setAttribute(qualifiedName: string, value: string): void;
    removeAttribute(qualifiedName: string): void;
    getAttribute(qualifiedName: string): string | null;
    hasAttribute(qualifiedName: string): boolean;
    focus(): void;
    getInputEl(): HTMLInputElement | undefined | null;
    clickHandler(e: MouseEvent): void;
}

declare const safRadioConfig: {
    readonly events: {
        readonly onClick: "click";
    };
};
type SafRadioInstance = AugmentClassEvents<Radio, typeof safRadioConfig>;

type SafRadioProps = SafReactComponentProps<SafRadioInstance, typeof safRadioConfig>;
declare const SafReactRadio: ComponentType<SafRadioProps>;

/**
 * Enumerates possible tooltip positions
 *
 * @public
 */
declare const TooltipPositionEnum: {
    /**
     * The tooltip is positioned above the element
     */
    readonly top: "top";
    /**
     * The tooltip is positioned above and to the right of the element
     */
    readonly topStart: "top-start";
    /**
     * The tooltip is positioned above and to the left of the element
     */
    readonly topEnd: "top-end";
    /**
     * The tooltip is positioned below the element
     */
    readonly bottom: "bottom";
    /**
     * The tooltip is positioned below and to the left of the element
     */
    readonly bottomStart: "bottom-start";
    /**
     * The tooltip is positioned below and to the right of the element
     */
    readonly bottomEnd: "bottom-end";
    /**
     * The tooltip is positioned to the right of the element
     */
    readonly right: "right";
    /**
     * The tooltip is positioned to the left of the element
     */
    readonly left: "left";
};
/**
 * The possible tooltip positions
 *
 * @public
 */
type TooltipPosition = (typeof TooltipPositionEnum)[keyof typeof TooltipPositionEnum];

declare class _Search extends FASTElement {
}
interface _Search extends FormAssociated {
}
declare const FormAssociatedSearch_base: typeof _Search;
/**
 * A form-associated base class for the {@link @saffron/core-components#(Search:class)} component.
 *
 * @beta
 */
declare class FormAssociatedSearch extends FormAssociatedSearch_base {
    proxy: HTMLInputElement;
}

/**
 * Includes ARIA states and properties relating to the ARIA textbox role
 *
 * @public
 */
declare class DelegatesARIASearch {
}
interface DelegatesARIASearch extends ARIAGlobalStatesAndProperties {
}
/**
 * A Search Custom HTML Element.
 * Based largely on the {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search | <input type="search" /> element }.
 *
 * @slot start - Content which can be provided before the search input
 * @slot end - Content which can be provided after the search clear button
 * @slot - The default slot for the label
 * @slot clear-button - The clear button
 * @slot clear-icon - The clear icon
 * @csspart label - The label
 * @csspart control - The logical control, the element wrapping the input field, including start and end slots
 * @csspart field - The element representing the input field
 * @csspart clear-button - The button to clear the input
 *
 * @public
 */
declare class SearchField extends FormAssociatedSearch {
    /**
     * When true, the control will be immutable by user interaction.
     * See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute} for more information.
     * @public
     * @remarks
     * HTML Attribute: readonly
     */
    readOnly: boolean;
    protected readOnlyChanged(): void;
    /**
     * Indicates that this element should get focus after the page finishes loading.
     * See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautofocus | autofocus HTML attribute}
     * for more information.
     * @public
     * @remarks
     * HTML Attribute: autofocus
     */
    autofocus: boolean;
    protected autofocusChanged(): void;
    /**
     * Sets the placeholder value of the element, generally used to provide a hint to the user.
     * @public
     * @remarks
     * HTML Attribute: placeholder
     * Using this attribute does is not a valid substitute for a labeling element.
     */
    placeholder: string;
    protected placeholderChanged(): void;
    /**
     * Allows associating a {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist | datalist}
     * to the element by {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/id}.
     * @public
     * @remarks
     * HTML Attribute: list
     */
    list: string;
    protected listChanged(): void;
    /**
     * The maximum number of characters a user can enter.
     * @public
     * @remarks
     * HTMLAttribute: maxlength
     */
    maxlength: number;
    protected maxlengthChanged(): void;
    /**
     * The minimum number of characters a user can enter.
     * @public
     * @remarks
     * HTMLAttribute: minlength
     */
    minlength: number;
    protected minlengthChanged(): void;
    /**
     * A regular expression that the value must match to pass validation.
     * @public
     * @remarks
     * HTMLAttribute: pattern
     */
    pattern: string;
    protected patternChanged(): void;
    /**
     * Sets the width of the element to a specified number of characters.
     * @public
     * @remarks
     * HTMLAttribute: size
     */
    size: number;
    protected sizeChanged(): void;
    /**
     * Controls whether or not to enable spell checking for the input field, or if the default spell checking configuration should be used.
     * @public
     * @remarks
     * HTMLAttribute: size
     */
    spellcheck: boolean;
    protected spellcheckChanged(): void;
    validate(): void;
    /**
     * Clears the value, focuses the input field and emits a `clear` event.
     * @public
     */
    handleClearInput(): void;
    /**
     * The item ID
     *
     * @public
     * @remarks
     * HTML Attribute: id
     */
    id: string;
    /**
     * Text that describes the input
     *
     * @public
     */
    label?: string;
    /**
     * Provides additional instructional text for extra guidance for the search field.
     * @public
     * @remarks
     * paragraph element that takes instructional text
     */
    instructionalText?: string;
    /**
     * 'Label for the search button tooltip.
     *
     * @public
     */
    searchButtonLabel: string;
    /**
     * Label for the clear button tooltip.
     *
     * @public
     */
    clearButtonLabel: string;
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
    /**
     * A description for the search field that is only visible to screen readers.
     *
     * @public
     */
    a11yAriaDescription: string;
    /**
     * Position of the clear button tooltip.
     *
     * @public
     */
    clearButtonTooltipPlacement: TooltipPosition;
    /**
     * Position of the search button tooltip.
     *
     * @public
     */
    searchButtonTooltipPlacement: TooltipPosition;
    /**
     * Whether or not the search button tooltip is shown.
     *
     * @public
     */
    hideSearchButtonTooltip: boolean;
    /**
     * Controls <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete">browser autofill</a> behavior. (Ex: `off`, `on`, `name`, `email`) `string`
     *
     * @public
     */
    autocomplete?: string;
    get ariaDescribedbyIds(): string;
    preFilterSlot: HTMLElement[] | null;
    /**
     * Handle click on search
     * @public
     */
    search(): void;
    dataLists: HTMLDivElement;
    slottedDataChanged(): void;
}
interface SearchField extends StartEnd, DelegatesARIASearch {
}

declare const safSearchFieldConfig: {
    readonly events: {
        readonly onSearch: "search";
        readonly onClear: "clear";
        readonly onInput: "input";
        readonly onChange: "change";
    };
};
type SafSearchFieldInstance = AugmentClassEvents<SearchField, typeof safSearchFieldConfig>;

type SafSearchFieldProps = SafReactComponentProps<SafSearchFieldInstance, typeof safSearchFieldConfig>;
declare const SafReactSearchField: ComponentType<SafSearchFieldProps>;

declare class _Select extends Listbox {
}
interface _Select extends FormAssociated {
}
declare const FormAssociatedSelect_base: typeof _Select;
/**
 * A form-associated base class for the {@link @saffron/core-components#(Select:class)} component.
 *
 * @beta
 */
declare class FormAssociatedSelect extends FormAssociatedSelect_base {
    proxy: HTMLSelectElement;
}

/**
 * Enumerates possible labels positions
 *
 * @public
 */
declare const SelectLabelPositionEnum: {
    /**
     * The labels are positioned above the element
     */
    readonly top: "top";
    /**
     * The labels are positioned to the right of the element
     */
    readonly right: "right";
    /**
     * The labels are positioned to the left of the element
     */
    readonly left: "left";
};
/**
 * The possible labels positions
 *
 * @public
 */
type SelectLabelPosition = (typeof SelectLabelPositionEnum)[keyof typeof SelectLabelPositionEnum];

/**
 * Includes ARIA states and properties relating to the ARIA select role.
 *
 * @public
 */
declare class DelegatesARIASelect {
    /**
     * See {@link https://www.w3.org/TR/wai-aria-1.2/#combobox} for more information
     * @public
     * @remarks
     * HTML Attribute: `aria-controls`
     */
    ariaControls: string | null;
}
interface DelegatesARIASelect extends DelegatesARIAListbox {
}
/**
 * A Select Custom HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#select | ARIA select }.
 *
 * @slot start - Content which can be provided before the button content
 * @slot end - Content which can be provided after the button content
 * @slot button-container - The element representing the select button
 * @slot selected-value - The selected value
 * @slot indicator - The visual indicator for the expand/collapse state of the button
 * @slot - The default slot for slotted options
 * @csspart control - The element representing the select invoking element
 * @csspart selected-value - The element wrapping the selected value
 * @csspart indicator - The element wrapping the visual indicator
 * @csspart listbox - The listbox element
 * @fires input - Fires a custom 'input' event when the value updates
 * @fires change - Fires a custom 'change' event when the value updates
 *
 * @public
 */
declare class Select extends FormAssociatedSelect {
    /**
     * Whether or not the listbox is open.
     *
     * @public
     * @remarks
     * HTML Attribute: open
     */
    open: boolean;
    /**
     * The initial value of the control.
     * @category Attributes
     * @type string
     * @public
     */
    get value(): string;
    set value(next: string);
    /**
     * Sets the multiple property on the proxy element.
     *
     * @param prev - the previous multiple value
     * @param next - the current multiple value
     */
    multipleChanged(prev: boolean | undefined, next: boolean): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * The id attribute of the input element.
     *
     * @public
     */
    id: string;
    /**
     * A value is required or must be checked for the form to be submittable.
     *
     * @public
     */
    required: boolean;
    /**
     * Text that describes the select component.
     *
     * @public
     */
    label?: string;
    /**
     * The combobox aria label.
     *
     * @public
     */
    selectAriaLabel?: string;
    /**
     * Provides additional instructional text that provides extra guidance for the select component.
     *
     * @public
     */
    instructionalText?: string;
    /**
     * Adds additional character to the label when select is required.
     *
     * @public
     */
    requiredText?: string;
    /**
     * Set the position of the label.
     */
    placement: SelectLabelPosition;
    /**
     * Provides additional optional text to the label. Accepts any text but intended to indicate `(Required)` or `(Optional)`.
     *
     * @public
     */
    optionalText?: string;
    /**
     * Indicates the entered value does not conform to the format expected by the application.
     *
     * @public
     */
    invalid: boolean;
    /**
     * The message displayed when the control is valid or invalid.
     *
     * @public
     */
    validationMessage: string;
    /**
     * Specifies that the control is valid and that a success message should display.
     *
     * @public
     */
    isSuccess: boolean | undefined;
    /**
     * 'Defines a string value that labels the success icon, when icons are not just presentational but used to communicate status.
     *
     * @public
     */
    successAriaLabel: string;
    /**
     * Defines a string value that labels the error icon, when icons are not just presentational but used to communicate status.
     * @public
     */
    errorAriaLabel: string;
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
    /**
     * Indicates if this select is used as a prefilter in a search component.
     *
     * @public
     */
    prefilter: boolean;
    /**
     * Controls <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete">browser aut
     *
     * @public
     */
    autocomplete?: string;
    /**
     * Timeout ms for keydown event capture string and select value.
     * @public
     */
    typedTimeout: number;
    private accessibilityElementsToParent;
    protected canAnnounceValidation: boolean;
    isSuccessChanged(): void;
    invalidChanged(): void;
    validationMessageChanged(): void;
    protected announceValidation(): void;
}
interface Select extends StartEnd, DelegatesARIASelect {
}

declare const safSelectConfig: {
    readonly events: {
        readonly onChange: "change";
        readonly onInput: "input";
    };
};
type SafSelectInstance = AugmentClassEvents<Select, typeof safSelectConfig>;

type SafSelectProps = SafReactComponentProps<SafSelectInstance, typeof safSelectConfig>;
declare const SafReactSelect: ComponentType<SafSelectProps>;

/**
 * Sidenav state values.
 *
 * @public
 */
declare const SideNavStateEnum: {
    readonly closed: "closed";
    readonly open: "open";
};
/**
 * Type for button type values.
 *
 * @public
 */
type SideNavState = (typeof SideNavStateEnum)[keyof typeof SideNavStateEnum];

/**
 * A class for Sidebar navigation
 */
declare class SideNav extends DialogBase {
    /**
     * Tracks most recently active index;
     * initializes to 0 and changes on click
     */
    activeIndex: number;
    protected itemsChanged(_oldValue: HTMLElement[], _newValue: HTMLElement[]): void;
    /**
     * @public
     * @remarks - Title in the header of side-nav, used to set aria-labelledBy if no aria-label is set
     */
    titleNodes: HTMLElement[];
    /**
     * Whether the side nav is expanded or collapsed.
     *
     * @public
     */
    state: SideNavState;
    /**
     * The `icon-name` for the expand button when side nav is open.
     * @public
     */
    openIconName: string;
    /**
     * The `icon-name` for the expand button when side nav is closed.
     * @public
     */
    closeIconName: string;
    /**
     * Defines a string value that labels the current element.
     * @public
     */
    ariaLabel: string;
    /**
     * The label for the expand button when side nav is open.
     * @public
     */
    closeAriaLabel: string;
    /**
     * The label for the expand button when side nav is closed.
     * @public
     */
    openAriaLabel: string;
    /**
     * Reflects the value of aria-expanded
     * @public
     */
    ariaExpanded: 'false' | 'true';
    protected menuItems: Element[] | undefined;
    private menuFocusIndex;
    private static readonly menuFocusableElementRoles;
    private resizeObserver;
    private adaptiveBreakpoint;
    constructor();
    private _resizeTimeout;
    private handleResize;
    /**
     * Determines if the sidenav is adaptive
     * @public
     */
    fullscreen: boolean;
    /**
     * The method to open/expand the side-nav
     * @public
     */
    open(): void;
    /**
     * The method to close/collapse the side-nav
     * @public
     */
    close(): void;
    showHideTooltip(): void;
    showHideIcon(): void;
    private getAnimationDurationMs;
    /**
     * @public
     * @remarks Identifies which menu item was clicked,
     */
    handleClick(e: MouseEvent): boolean;
    /**
     * @public
     * @param element - event.target of keydown or click event
     * Updates the selected item index and toggles selected icon styles
     */
    updateSelectedItem(element: HTMLElement): void;
    protected setItems(): void;
    /**
     * Check if the item is a menu item
     */
    protected isMenuItemElement: (el: Element) => el is HTMLElement;
    /**
     * Check if the item is focusable
     */
    private readonly focusableElement;
    private setMenuFocus;
    protected get closeButtonElement(): Element | null | undefined;
    protected get titleElement(): Element | null | undefined;
    protected get isHidden(): boolean;
    protected set isHidden(value: boolean);
    protected get hideStateAttribute(): string;
    protected get isModal(): boolean;
    protected get hasCancelEvent(): boolean;
    protected get openEventName(): string;
    protected get hideEventName(): string;
    get noFocusTrap(): boolean;
    get preventTriggerFocus(): boolean;
    protected initialize(): void;
    protected destroy(): void;
    show(): void;
    hide(): void;
}

declare const safSideNavConfig: {
    readonly events: {
        readonly onClose: "close";
        readonly onOpen: "open";
    };
};
type SafSideNavInstance = AugmentClassEvents<SideNav, typeof safSideNavConfig>;

type SafSideNavProps = SafReactComponentProps<SafSideNavInstance, typeof safSideNavConfig>;
declare const SafReactSideNav: ComponentType<SafSideNavProps>;

/**
 * A label element intended to be used with the {@link @saffron/core-components#(Slider:class)} component.
 *
 * @slot - The default slot for the label content
 * @csspart container - The element wrapping the label mark and content
 * @csspart mark - The element wrapping the label mark
 * @csspart content - The element wrapping the label content
 *
 * @public
 */
declare class SliderLabel extends FASTElement {
    /**
     * The position of the label relative to the min and max value of the parent Slider.
     *
     * @see {@link @saffron/core-components#(Slider:class)}.
     * @public
     * @remarks
     * HTML Attribute: position
     */
    position: string;
    protected positionChanged(): void;
    /**
     * Hides the tick mark.
     *
     * @public
     * @remarks
     * HTML Attribute: hide-mark
     */
    hideMark: boolean;
    /**
     * The disabled state of the label. This is generally controlled by the parent Slider.
     * @see {@link @saffron/core-components#(Slider:class)}.
     *
     * @public
     * @remarks
     * HTML Attribute: disabled
     */
    disabled: boolean;
    private notifier;
    private isSliderConfig;
    private getSliderConfiguration;
    private positionAsStyle;
}

type SafSliderLabelInstance = AugmentClassEvents<SliderLabel>;

type SafSliderLabelProps = SafReactComponentProps<SafSliderLabelInstance>;
declare const SafReactSliderLabel: ComponentType<SafSliderLabelProps>;

declare class _Slider extends FASTElement {
}
interface _Slider extends FormAssociated {
}
declare const FormAssociatedSlider_base: typeof _Slider;
/**
 * A form-associated base class for the {@link @saffron/core-components#(Slider:class)} component.
 *
 * @beta
 */
declare class FormAssociatedSlider extends FormAssociatedSlider_base {
    proxy: HTMLInputElement;
}

/**
 * The selection modes of a {@link @saffron/core-components#(Slider:class)}.
 * @public
 */
declare const SliderModeEnum: {
    readonly singleValue: "single-value";
};
/**
 * The types for the selection mode of the slider
 * @public
 */
type SliderMode = (typeof SliderModeEnum)[keyof typeof SliderModeEnum];

/**
 * The configuration structure of {@link @saffron/core-components#(Slider:class)}.
 * @public
 */
interface SliderConfiguration {
    max: number;
    min: number;
    orientation?: Orientation;
    direction?: Direction$1;
    disabled?: boolean;
}
/**
 * A Slider Custom HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#slider | ARIA slider }.
 *
 * @slot track - The track of the slider
 * @slot track-start - The track-start visual indicator
 * @slot thumb - The slider thumb
 * @slot - The default slot for labels
 * @csspart positioning-region - The region used to position the elements of the slider
 * @csspart track-container - The region containing the track elements
 * @csspart track-start - The element wrapping the track start slot
 * @csspart thumb-container - The thumb container element which is programmatically positioned
 * @fires change - Fires a custom 'change' event when the slider value changes
 *
 * @public
 */
declare class Slider extends FormAssociatedSlider implements SliderConfiguration {
    /**
     * The value property, typed as a number.
     *
     * @public
     */
    get valueAsNumber(): number;
    set valueAsNumber(next: number);
    /**
     * Custom function that generates a string for the component's "aria-valuetext" attribute based on the current value.
     *
     * @public
     */
    valueTextFormatter: (value: string) => string | null;
    /**
     * When set to `true`, the user cannot interact with the slider.
     * @public
     */
    readOnly: boolean;
    readOnlyChanged(): void;
    /**
     * The minimum allowed value.
     *
     * @defaultValue - 0
     * @public
     * @remarks
     * HTML Attribute: min
     */
    min: number;
    protected minChanged(): void;
    /**
     * The maximum allowed value.
     *
     * @defaultValue - 10
     * @public
     * @remarks
     * HTML Attribute: max
     */
    max: number;
    protected maxChanged(): void;
    /**
     * Value to increment or decrement via arrow keys, mouse click or drag.
     *
     * @public
     * @remarks
     * HTML Attribute: step
     */
    step: number | undefined;
    protected stepChanged(): void;
    /**
     * The orientation of the slider.
     *
     * @public
     * @remarks
     * HTML Attribute: orientation
     */
    orientation: Orientation;
    protected orientationChanged(): void;
    /**
     * The selection mode.
     *
     * @public
     * @remarks
     * HTML Attribute: mode
     */
    mode: SliderMode;
    /**
     * Increment the value by the step
     *
     * @public
     */
    increment(): void;
    /**
     * Decrement the value by the step
     *
     * @public
     */
    decrement(): void;
    protected keypressHandler: (e: KeyboardEvent) => void;
    /**
     * Gets the actual step value for the slider
     *
     */
    private get stepValue();
    /**
     * Places the thumb based on the current value
     *
     * @public
     * @param direction - writing mode
     */
    private setThumbPositionForOrientation;
    /**
     * Update the step multiplier used to ensure rounding errors from steps that
     * are not whole numbers
     */
    private updateStepMultiplier;
    private setupTrackConstraints;
    private setupListeners;
    private get midpoint();
    private setupDefaultValue;
    /**
     *  Handle mouse moves during a thumb drag operation
     *  If the event handler is null it removes the events
     */
    private handleThumbMouseDown;
    /**
     *  Handle mouse moves during a thumb drag operation
     */
    private handleMouseMove;
    /**
     * Handle a window mouse up during a drag operation
     */
    private handleWindowMouseUp;
    private stopDragging;
    /**
     *
     * @param e - MouseEvent or null. If there is no event handler it will remove the events
     */
    private handleMouseDown;
    private convertToConstrainedValue;
    /**
     * Text that describes the slider.
     * @public
     */
    label?: string;
    /**
     * 'Provides additional instructional text that provides extra guidance for the input.
     * @public
     */
    instructionalText?: string;
    /**
     * Controls <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete">browser autofill</a> behavior. (Ex: `off`, `on`, `name`, `email`)
     * @public
     */
    autocomplete?: string;
    /**
     * Indicates the slider must have a value before the form will submit.
     * @public
     */
    required: boolean;
    /**
     * Adds additional character to the label when slider is required.
     * @public
     */
    requiredText?: string;
}

declare const safSliderConfig: {
    readonly events: {
        readonly onChange: "change";
    };
};
type SafSliderInstance = AugmentClassEvents<Slider, typeof safSliderConfig>;

type SafSliderProps = SafReactComponentProps<SafSliderInstance, typeof safSliderConfig>;
declare const SafReactSlider: ComponentType<SafSliderProps>;

declare const SplitterOrientationEnum: {
    readonly horizontal: "horizontal";
    readonly vertical: "vertical";
};
type SplitterOrientation = (typeof SplitterOrientationEnum)[keyof typeof SplitterOrientationEnum];

/**
 * A class for Splitter
 */
declare class Splitter extends FASTElement {
    /**
     * 'Screen reader title for splitter indicator.
     * @public
     */
    srOnlyTitle: string;
    /**
     * Initial Size for splitter in percentage.
     * @public
     */
    initialSize?: number;
    /**
     * Whether or not primary panel should be scrollable.
     * @public
     */
    scrollablePrimary: boolean;
    /**
     * Whether or not secondary panel should be scrollable.
     * @public
     */
    scrollableSecondary: boolean;
    /**
     * Tracking the changes from the initialSize
     *
     */
    initialSizeChanged(prev?: number, next?: number): void;
    /**
     * Controls the visual orientation of the splitter.
     * @public
     */
    orientation: SplitterOrientation;
    /**
     * Tooltip text for splitter.
     * @public
     */
    tooltipText: string;
    valuenow: string;
    /**
     * Current value of the width in percentage 0 - 100
     * @public
     */
    width: string;
    widthChanged(): void;
    isHorizontal: () => boolean;
    private sizeChanged;
    private primaryChild;
    private secondaryChild;
    private handle;
    private isDragging;
    private startSize;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * Change splitter width
     * @public
     * @param {number} percentageSize - percentage number between 0 and 100%
     */
    changeSplitterSize(percentageSize: number, emitEvent?: boolean): void;
    /**
     * Set primary and secondary slots
     */
    private processChildren;
    /**
     * Sets size of primary section of splitter with given percentage
     */
    private setSplitterSize;
    /**
     * Increase or decrease the primary panel size
     */
    private keyDownHandler;
    private setValueNow;
    private getNextValue;
    private getNextEvent;
    /**
     * Handle arrow key events
     */
    private isValidEl;
    protected onKeyDown: (e: KeyboardEvent) => void;
    /**
     * Set flex basis
     */
    private setFlexBasis;
    private setStartSize;
}

declare const safSplitterConfig: {
    readonly events: {
        readonly onSizeChange: "size-change";
    };
};
type SafSplitterInstance = AugmentClassEvents<Splitter, typeof safSplitterConfig>;

type SafSplitterProps = SafReactComponentProps<SafSplitterInstance, typeof safSplitterConfig>;
declare const SafReactSplitter: ComponentType<SafSplitterProps>;

/**
 * A class for SrOnly
 */
declare class SrOnly extends FASTElement {
}

type SafSrOnlyInstance = AugmentClassEvents<SrOnly>;

type SafSrOnlyProps = SafReactComponentProps<SafSrOnlyInstance>;
declare const SafReactSrOnly: ComponentType<SafSrOnlyProps>;

declare const StatusTypeEnum: {
    readonly PAUSED: "paused";
    readonly INFO: "info";
    readonly SUCCESS: "success";
    readonly ERROR: "error";
    readonly WARNING: "warning";
};
type StatusType = (typeof StatusTypeEnum)[keyof typeof StatusTypeEnum];

/**
 * A class for Status
 */
declare class Status extends FASTElement {
    /**
     * The message to display.
     *
     * @public
     */
    message: string;
    /**
     * Determines the status type.
     *
     * @public
     */
    status: StatusType;
    /**
     * Used to create an accessible name by referencing other elements.
     *
     * @public
     */
    ariaLabelledBy: string;
    /**
     * Whether the item is focusable.
     *
     * @public
     */
    focusable: boolean;
    /**
     * Used to provide semantic meaning to assistive technologies.
     *
     * @public
     */
    ariaRole: string;
    /**
     * The label for the paused icon to communicate status.
     *
     * @a11y
     * @public
     */
    pausedAriaLabel: string;
    /**
     * 	The label for the info icon to communicate status.
     *
     * @a11y
     * @public
     */
    infoAriaLabel: string;
    /**
     * The label for the success icon to communicate status.
     *
     * @a11y
     * @public
     */
    successAriaLabel: string;
    /**
     * The label for the error icon to communicate status.
     *
     * @a11y
     * @public
     */
    errorAriaLabel: string;
    /**
     * The label for the warning icon to communicate status.
     *
     * @a11y
     * @public
     */
    warningAriaLabel: string;
}

type SafStatusInstance = AugmentClassEvents<Status>;

type SafStatusProps = SafReactComponentProps<SafStatusInstance>;
declare const SafReactStatus: ComponentType<SafStatusProps>;

declare const StepperOrientationEnum: {
    readonly horizontal: "horizontal";
    readonly vertical: "vertical";
};
type StepperOrientation = (typeof StepperOrientationEnum)[keyof typeof StepperOrientationEnum];

/**
 * Step status
 *
 * @public
 */
declare const StepStatusEnum: {
    readonly active: "active";
    readonly completed: "completed";
    readonly inactive: "inactive";
};
/**
 * Type for step status type values.
 *
 * @public
 */
type StepStatus = (typeof StepStatusEnum)[keyof typeof StepStatusEnum];

declare class Step extends FASTElement {
    /**
     * The status of the step.
     *
     * @public
     */
    status: StepStatus;
    statusChanged(prev: StepStatus | undefined, next: StepStatus): void;
    /**
     * status label of the step to be used for assistive technologies.
     *
     * @public
     * @a11y
     */
    statusLabel: string;
    /**
     * The title of the step.
     *
     * @public
     */
    stepTitle: string;
    /**
     * The step number.
     *
     * @public
     */
    stepNumber: number;
    /**
     * The total number of steps.
     *
     * @public
     */
    totalSteps: number;
    private orientationObserver;
    connectedCallback(): void;
    addObserver(): void;
    changeClasses(o: string): void;
    disconnectedCallback(): void;
    get stepHeader(): string;
    stepHeaderSlot: HTMLElement[] | null;
    defaultSlottedContent: HTMLElement[] | null;
}

type SafStepInstance = AugmentClassEvents<Step>;

type CreateResizeObserverConfig = {
    threshold?: number;
    breakpoint?: number;
};
/**
 * A base class for creating responsive elements.
 * Meant to be used as a mixin
 * @public
 */
declare class ResponsiveElement extends FASTElement {
    createResizeObserver(config?: CreateResizeObserverConfig): ResizeObserver;
    private _mode;
    _modeChanged: (prev: string, next: string) => void;
    resizeObserver: ResizeObserver | undefined;
    set mode(_: "desktop" | "mobile");
    initializeResponsiveness(config?: CreateResizeObserverConfig): void;
    disconnectResizeObserver(): void;
}

/**
 * A class for Stepper
 */
declare class Stepper extends FASTElement {
    /**
     * The visual orientation of the stepper.
     *
     * @public
     */
    orientation: StepperOrientation;
    /**
     * Defines a string value that labels the current element.
     *
     * @public
     * @a11y
     */
    ariaLabel: string;
    /**
     * Whether the stepper should observe resizing of the parent element (be responsive).
     *
     * @public
     */
    observeResize: boolean;
    observeResizeChanged(prev: boolean, next: boolean): void;
    /**
     * Represents the currently active step in the stepper component.
     *
     * @public
     */
    activeStep: number;
    activeStepChanged(): void;
    steps: SafStepInstance[];
    findSteps(): void;
    private updateStepNumbers;
    addOrientationClass(step: Element): void;
    updateStepper(step: number): void;
    private updateStepStatus;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
interface Stepper extends ResponsiveElement {
}

declare const safStepperConfig: {
    readonly events: {
        readonly updateStepper: "update-stepper";
        readonly onStepChange: "step-change";
    };
};
type SafStepperEventDetails = {
    'step-change': {
        detail: number;
    };
};
type SafStepperInstance = AugmentClassEvents<Stepper, typeof safStepperConfig, SafStepperEventDetails>;

type SafStepperProps = SafReactComponentProps<SafStepperInstance, typeof safStepperConfig>;
declare const SafReactStepper: ComponentType<SafStepperProps>;

type SafStepProps = SafReactComponentProps<SafStepInstance>;
declare const SafReactStep: ComponentType<SafStepProps>;

declare class _Switch extends FASTElement {
}
interface _Switch extends CheckableFormAssociated {
}
declare const FormAssociatedSwitch_base: typeof _Switch;
/**
 * A form-associated base class for the {@link @saffron/core-components#(Switch:class)} component.
 *
 * @beta
 */
declare class FormAssociatedSwitch extends FormAssociatedSwitch_base {
    proxy: HTMLInputElement;
}

/**
 * A Switch Custom HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#switch | ARIA switch }.
 *
 * @slot - The default slot for the label
 * @slot switch - For content inside of the thumb
 * @csspart label - The label element
 * @csspart switch - The container for the switch
 * @csspart checked-indicator - The checked indicator element
 * @csspart checked - The checked icon
 * @csspart unchecked - The unchecked icon
 * @fires change - Emits a custom change event when the checked state changes
 *
 * @public
 */
declare class Switch extends FormAssociatedSwitch {
    /**
     * When true, the control will be immutable by user interaction.
     * See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute} for more information.
     * @public
     * @remarks
     * HTML Attribute: readonly
     */
    readOnly: boolean;
    protected readOnlyChanged(): void;
    constructor();
}

declare const safSwitchConfig: {
    readonly events: {
        readonly onChange: "change";
    };
};
type SafSwitchInstance = AugmentClassEvents<Switch, typeof safSwitchConfig>;

type SafSwitchProps = SafReactComponentProps<SafSwitchInstance, typeof safSwitchConfig>;
declare const SafReactSwitch: ComponentType<SafSwitchProps>;

declare const HeaderBackgroundEnum: {
    readonly subtle: "subtle";
    readonly default: "default";
    readonly strong: "strong";
};
type HeaderBackground = (typeof HeaderBackgroundEnum)[keyof typeof HeaderBackgroundEnum];

/**
 * A class for Table
 */
declare class Table extends FASTElement {
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
    /**
     * Controls zebra striping, which alternates background colors in every other row.
     *
     * @public
     */
    alternatingRows: boolean;
    /**
     * Determines if vertical column borders will be visible.
     *
     * @public
     */
    inlineBorders: boolean;
    /**
     * Used to change the background of the table header.
     *
     * @public
     */
    headerBackground: HeaderBackground;
    connectedCallback(): void;
    disconnectedCallback(): void;
}

type SafTableInstance = AugmentClassEvents<Table>;

type SafTableProps = SafReactComponentProps<SafTableInstance>;
declare const SafReactTable: ComponentType<SafTableProps>;

/**
 * A Tabs Custom HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#tablist | ARIA tablist }.
 *
 * @slot start - Content which can be provided before the tablist element
 * @slot end - Content which can be provided after the tablist element
 * @slot tab - The slot for tabs
 * @slot tabpanel - The slot for tabpanels
 * @csspart tablist - The element wrapping for the tabs
 * @fires change - Fires a custom 'change' event when a tab is clicked or during keyboard navigation
 *
 * @public
 */
declare class Tabs extends FASTElement {
    /**
     * Controls the visual orientation of the Tabs list.
     * @public
     * @remarks
     * HTML Attribute: orientation
     */
    orientation: Orientation;
    /**
     * The id of the active tab
     *
     * @public
     * @remarks
     * HTML Attribute: activeid
     */
    activeid: string;
    /**
     * A reference to the active tab
     * @public
     */
    activetab: HTMLElement;
    private prevActiveTabIndex;
    private activeTabIndex;
    private tabIds;
    private tabpanelIds;
    private change;
    private isDisabledElement;
    private isHiddenElement;
    private isFocusableElement;
    private getActiveIndex;
    /**
     * Function that is invoked whenever the selected tab or the tab collection changes.
     *
     * @public
     */
    protected setTabs(): void;
    private setTabPanels;
    private getTabIds;
    private getTabPanelIds;
    private setComponent;
    private handleTabClick;
    private isHorizontal;
    private handleTabKeyDown;
    /**
     * This method allows the active index to be adjusted programmatically by numerical increments.
     * @public
     */
    adjust(adjustment: number): void;
    private adjustForward;
    private adjustBackward;
    private moveToTabByIndex;
    private focusTab;
    /**
     * A description for the tablist
     *
     * @public
     */
    a11yAriaLabel: string | undefined;
}
interface Tabs extends StartEnd {
}

declare const safTabsConfig: {
    readonly events: {
        readonly onChange: "change";
    };
};
type SafTabsEventDetails = {
    change: {
        detail: HTMLElement;
    };
};
type SafTabsInstance = AugmentClassEvents<Tabs, typeof safTabsConfig, SafTabsEventDetails>;

type SafTabsProps = SafReactComponentProps<SafTabsInstance, typeof safTabsConfig, SafTabsEventDetails>;
declare const SafReactTabs: ComponentType<SafTabsProps>;

/**
 * A TabPanel Component to be used with {@link @saffron/core-components#(Tabs:class)}
 *
 * @slot - The default slot for the tabpanel content
 *
 * @public
 */
declare class TabPanel extends FASTElement {
    connectedCallback(): void;
}

declare const safTabPanelConfig: {
    readonly events: {
        readonly onChange: "change";
    };
};
type SafTabPanelInstance = AugmentClassEvents<TabPanel, typeof safTabPanelConfig>;

type SafTabPanelProps = SafReactComponentProps<SafTabPanelInstance, typeof safTabPanelConfig>;
declare const SafReactTabPanel: ComponentType<SafTabPanelProps>;

/**
 * A Tab Component to be used with {@link @saffron/core-components#(FASTTabs:class)}
 *
 * @slot start - Content which can be provided before the tab content
 * @slot end - Content which can be provided after the tab content
 * @slot - The default slot for the tab content
 *
 * @public
 */
declare class Tab extends FASTElement {
    /**
     * When true, the control will be immutable by user interaction.
     * See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled | disabled HTML attribute} for more information.
     * @public
     * @remarks
     * HTML Attribute: disabled
     */
    disabled: boolean;
}
interface Tab extends StartEnd {
}

declare const safTabConfig: {
    readonly events: {
        readonly onChange: "change";
    };
};
type SafTabInstance = AugmentClassEvents<Tab, typeof safTabConfig>;

type SafTabProps = SafReactComponentProps<SafTabInstance, typeof safTabConfig>;
declare const SafReactTab: ComponentType<SafTabProps>;

declare class _TextArea extends FASTElement {
}
interface _TextArea extends FormAssociated {
}
declare const FormAssociatedTextArea_base: typeof _TextArea;
/**
 * A form-associated base class for the {@link @saffron/core-components#(TextArea:class)} component.
 *
 * @beta
 */
declare class FormAssociatedTextArea extends FormAssociatedTextArea_base {
    proxy: HTMLTextAreaElement;
}

/**
 * Resize mode for a TextArea
 * @public
 */
declare const TextAreaResizeEnum: {
    readonly none: "none";
    readonly both: "both";
    readonly horizontal: "horizontal";
    readonly vertical: "vertical";
};
/**
 * Types for the Text Area resize mode
 * @public
 */
type TextAreaResize = (typeof TextAreaResizeEnum)[keyof typeof TextAreaResizeEnum];

/**
 * A Text Area Custom HTML Element.
 * Based largely on the {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea | <textarea> element }.
 *
 * @slot start - Content which can be provided before the text area input
 * @slot end - Content which can be provided after the text area input
 * @slot - The default slot for the label
 * @csspart root - The element wrapping the control
 * @csspart control - The textarea element
 * @fires change - Emits a custom 'change' event when the textarea emits a change event
 *
 * @public
 */
declare class TextArea extends FormAssociatedTextArea {
    /**
     * When true, the control will be immutable by user interaction.
     * See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly | readonly HTML attribute} for more information.
     * @public
     * @remarks
     * HTML Attribute: readonly
     */
    readOnly: boolean;
    protected readOnlyChanged(): void;
    /**
     * The resize mode of the element.
     * @public
     * @remarks
     * HTML Attribute: resize
     */
    resize: TextAreaResize;
    /**
     * Indicates that this element should get focus after the page finishes loading.
     * @public
     * @remarks
     * HTML Attribute: autofocus
     */
    autofocus: boolean;
    protected autofocusChanged(): void;
    /**
     * The {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id | id}
     * of the {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form | form} the element is associated to
     * @public
     */
    formId: string;
    /**
     * Allows associating a {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist | datalist}
     * to the element by {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/id | id}.
     * @public
     * @remarks
     * HTML Attribute: list
     */
    list: string;
    protected listChanged(): void;
    /**
     * The maximum number of characters a user can enter.
     * @public
     * @remarks
     * HTMLAttribute: maxlength
     */
    maxlength: number;
    protected maxlengthChanged(): void;
    /**
     * The minimum number of characters a user can enter.
     * @public
     * @remarks
     * HTMLAttribute: minlength
     */
    minlength: number;
    protected minlengthChanged(): void;
    /**
     * The name of the element.
     * @public
     * @remarks
     * HTML Attribute: name
     */
    name: string;
    /**
     * Sets the placeholder value of the element, generally used to provide a hint to the user.
     * @public
     * @remarks
     * HTML Attribute: placeholder
     * Using this attribute does is not a valid substitute for a labeling element.
     */
    placeholder: string;
    /**
     * Sizes the element horizontally by a number of character columns.
     *
     * @public
     * @remarks
     * HTML Attribute: cols
     */
    cols: number;
    /**
     * Sizes the element vertically by a number of character rows.
     *
     * @public
     * @remarks
     * HTML Attribute: rows
     */
    rows: number;
    /**
     * Controls whether or not to enable spell checking for the input field, or if the default spell checking configuration should be used.
     * @public
     * @remarks
     * HTML Attribute: spellcheck
     */
    spellcheck: boolean;
    protected spellcheckChanged(): void;
    /**
     * Selects all the text in the text area
     *
     * @public
     */
    select(): void;
    validate(): void;
    /**
     * Indicates the entered value does not conform to the format expected by the application.
     * @public
     */
    invalid: boolean;
    /**
     * Text that describes the input.
     *
     * @public
     */
    label?: string;
    /**
     * Provides additional instructional text that provides extra guidance for the input.
     *
     * @public
     */
    instructionalText?: string;
    /**
     * Provides additional optional text to the label. Accepts any text but intended to indicate `(Required)` or `(Optional)`.
     *
     * @public
     */
    optionalText?: string;
    /**
     * A description for the textarea that is only visible to screen readers.
     *
     * @public
     * @a11y
     */
    a11yAriaDescription: string;
    /**
     * The message displayed when the control is valid or invalid.
     *
     * @public
     * @remarks
     * validation-message accepts the custom validation that shows up
     * when isSuccess is true or invalid is true
     * otherwise, the default Constraint Validation message should show up
     */
    validationMessage: string;
    /**
     * Defines a string value that labels the error icon, when icons are not just presentational but used to communicate status.
     *
     * @public
     * @a11y
     */
    errorAriaLabel: string;
    /**
     * A value is required or must be checked for the form to be submittable.
     *
     * @public
     */
    required: boolean;
    /**
     * Adds additional character to the label when text-area is required.
     *
     * @public
     */
    requiredText?: string;
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
    /**
     * Controls whether or not to enable display of remaining character count.
     *
     * @public
     */
    showRemainingText: boolean;
    get remainingCharactersTextDefault(): string;
    private remainingCharactersCountDelay;
    get remainingCharactersCounter(): number;
    remainingCharactersCounterReader: number;
    /**
     * Controls <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete">browser autofill</a> behavior.
     *
     * @public
     */
    autocomplete?: string;
    private _keypressHandler;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private remainingCharacterCountTimeout;
    keyupHandler(): void;
    updateCharactersCounterReader(delay: number): void;
    protected canAnnounceValidation: boolean;
    invalidChanged(): void;
    validationMessageChanged(): void;
    protected announceValidation(): void;
}
interface TextArea extends StartEnd, DelegatesARIATextbox {
}

declare const safTextAreaConfig: {
    readonly events: {
        readonly onChange: "change";
        readonly onInput: "input";
    };
};
type SafTextAreaInstance = AugmentClassEvents<TextArea, typeof safTextAreaConfig>;

type SafTextAreaProps = SafReactComponentProps<SafTextAreaInstance, typeof safTextAreaConfig>;
declare const SafReactTextArea: ComponentType<SafTextAreaProps>;

declare const safTextFieldConfig: {
    readonly events: {
        readonly onChange: "change";
        readonly onInput: "input";
        readonly onValidate: "validate";
        readonly onInvalid: "invalid";
        readonly onReset: "reset";
    };
};
type SafTextFieldInstance = AugmentClassEvents<TextField, typeof safTextFieldConfig>;

type SafTextFieldProps = SafReactComponentProps<SafTextFieldInstance, typeof safTextFieldConfig>;
declare const SafReactTextField: ComponentType<SafTextFieldProps>;

/**
 * Appearance Values
 *
 * @public
 */
declare const TextAppearanceEnum: {
    readonly displayLg: "display-lg";
    readonly displaySm: "display-sm";
    readonly heading4xl: "heading-4xl";
    readonly heading3xl: "heading-3xl";
    readonly heading2xl: "heading-2xl";
    readonly headingXl: "heading-xl";
    readonly headingLg: "heading-lg";
    readonly headingMd: "heading-md";
    readonly bodyDefaultLg: "body-default-lg";
    readonly bodyStrongLg: "body-strong-lg";
    readonly bodyDefaultMd: "body-default-md";
    readonly bodyStrongMd: "body-strong-md";
    readonly bodyDefaultSm: "body-default-sm";
    readonly bodyStrongSm: "body-strong-sm";
    readonly bodyDefaultXs: "body-default-xs";
    readonly bodyStrongXs: "body-strong-xs";
    readonly eyebrowHeavyMd: "eyebrow-heavy-md";
    readonly eyebrowHeavySm: "eyebrow-heavy-sm";
};
/**
 * Text for Appearance Values
 *
 * @public
 */
type TextAppearance = (typeof TextAppearanceEnum)[keyof typeof TextAppearanceEnum];

/**
 * A class for Text
 */
declare class Text extends FASTElement {
    /**
     * Applies the visual style of the text.
     *
     * @public
     */
    appearance: TextAppearance;
    /**
     * Used to change the spacing in and around the component.
     *
     * @public
     */
    density: ComponentDensity;
}

type SafTextInstance = AugmentClassEvents<Text>;

type SafTextProps = SafReactComponentProps<SafTextInstance>;
declare const SafReactText: ComponentType<SafTextProps>;

/**
 * A class for Toolbar
 */
declare class Toolbar extends FASTElement {
    /**
     * The aria-label, the unique accessible name for the toolbar
     * @public
     * @a11y
     * @remarks Give the toolbar a descriptive, unique accessible name using the aria-label attribute
     */
    ariaLabel: string;
    /**
     * Used to change the spacing in and around the component.
     * @public
     */
    density: ComponentDensity;
    /**
     * Make the toolbar function as a single interactive UI control with
     * arrow key navigation
     *
     * @public
     */
    arrowNav: boolean;
    connectedCallback(): void;
    focus(): void;
}

type SafToolbarInstance = AugmentClassEvents<Toolbar>;

type SafToolbarProps = SafReactComponentProps<SafToolbarInstance>;
declare const SafReactToolbar: ComponentType<SafToolbarProps>;

/**
 * A class derived from the FASTTooltip foundation component
 */
declare class Tooltip extends FASTElement {
    /**
     * The id of the element the tooltip is anchored to.
     *
     * @defaultValueValue - undefined
     * @public
     * @remarks
     * HTML Attribute: `anchor`
     */
    anchor: string;
    /**
     * Specifies whether the tooltip should be triggered on click.
     * @public
     * @remarks - the popover variant of the tooltip will be triggered on click
     */
    triggerOnClick: boolean;
    private _mouseOver;
    /**
     * The placement of the tooltip relative to the anchor element.
     *
     * @public
     * @remarks
     * HTML Attribute: `placement`
     */
    placement: TooltipPosition;
    /**
     * The visibility state of the tooltip.
     *
     * @public
     * @remarks
     * HTML Attribute: `show`
     */
    show: boolean | undefined;
    /**
     * Gets the visibility state of the tooltip.
     * @returns A boolean value indicating whether the tooltip is visible or not.
     * @readonly
     * @public
     */
    get visible(): boolean | undefined;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * Sets the positioning of the tooltip based on the anchor element and the specified placement.
     * @public
     * @defaultValue setPositioning(): void
     * @remarks
     * If triggerOnClick is enabled, it announces the tooltip content for accessibility.
     * It also updates the position styles of the tooltip based on the computed position.
     */
    setPositioning(): void;
}

declare const safTooltipConfig: {
    readonly events: {
        readonly onDismiss: "dismiss";
    };
};
type SafTooltipInstance = AugmentClassEvents<Tooltip, typeof safTooltipConfig>;

type SafTooltipProps = SafReactComponentProps<SafTooltipInstance, typeof safTooltipConfig>;
declare const SafReactTooltip: ComponentType<SafTooltipProps>;

/**
 * A Tree item Custom HTML Element.
 *
 * @slot start - Content which can be provided before the tree item content
 * @slot end - Content which can be provided after the tree item content
 * @slot - The default slot for tree item text content
 * @slot item - The slot for tree items (fast tree items manage this assignment themselves)
 * @slot expand-collapse-button - The expand/collapse button
 * @csspart positioning-region - The element used to position the tree item content with exception of any child nodes
 * @csspart content-region - The element containing the expand/collapse, start, and end slots
 * @csspart items - The element wrapping any child items
 * @csspart expand-collapse-button - The expand/collapse button
 * @fires expanded-change - Fires a custom 'expanded-change' event when the expanded state changes
 * @fires selected-change - Fires a custom 'selected-change' event when the selected state changes
 *
 * @public
 */
declare class TreeItem extends FASTElement {
    /**
     * When true, the control will be appear expanded by user interaction.
     * @public
     * @remarks
     * HTML Attribute: expanded
     */
    expanded: boolean;
    protected expandedChanged(_prev: boolean | undefined, _next: boolean): void;
    /**
     * When true, the control will appear selected by user interaction.
     * @public
     * @remarks
     * HTML Attribute: selected
     */
    selected: boolean;
    protected selectedChanged(_prev: boolean | undefined, _next: boolean): void;
    /**
     * When true, the control will be immutable by user interaction.
     * See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled | disabled HTML attribute} for more information.
     * @public
     * @remarks
     * HTML Attribute: disabled
     */
    disabled: boolean;
    /**
     * Places document focus on a tree item
     *
     * @public
     * @param el - the element to focus
     */
    static focusItem(el: HTMLElement): void;
}
interface TreeItem extends StartEnd {
}

/**
 * A Tree view Custom HTML Element.
 * Implements the {@link https://w3c.github.io/aria-practices/#TreeView | ARIA TreeView }.
 *
 * @slot - The default slot for tree items
 *
 * @public
 */
declare class TreeView extends FASTElement {
    /**
     * The currently selected tree item
     * @public
     */
    currentSelected: HTMLElement | TreeItem | null;
    protected slottedTreeItemsChanged(): void;
    connectedCallback(): void;
    /**
     * Move focus to a tree item based on its offset from the provided item
     */
    private focusNextNode;
    /**
     * Updates the tree view when slottedTreeItems changes
     */
    private setItems;
    /**
     * checks if there are any nested tree items
     */
    private getValidFocusableItem;
    /**
     * check if the item is focusable
     */
    private isFocusableElement;
    private isSelectedElement;
    private getVisibleNodes;
}

type SafTreeViewInstance = AugmentClassEvents<TreeView>;

type SafTreeViewProps = SafReactComponentProps<SafTreeViewInstance>;
declare const SafReactTreeView: ComponentType<SafTreeViewProps>;

declare const safTreeItemConfig: {
    readonly events: {
        readonly expandedChange: "expanded-change";
        readonly selectedChange: "selected-change";
    };
};
type SafTreeItemInstance = AugmentClassEvents<TreeItem, typeof safTreeItemConfig>;

type SafTreeItemProps = SafReactComponentProps<SafTreeItemInstance, typeof safTreeItemConfig>;
declare const SafReactTreeItem: ComponentType<SafTreeItemProps>;

/**
 * A class derived from the FASTTab foundation component
 */
declare class Windows extends Tabs {
    /**
     * Indicates whether the windows are addable.
     * @public
     */
    addable: boolean;
    /**
     * The accessible label for the add button.
     * @public
     * @remarks The label for the add button
     */
    addAriaLabel: string;
    /**
     * A label that is passed from the component to the `role="tablist"` element.
     * @public
     */
    a11yAriaLabel: string;
    /**
     * Emits a custom 'add' event when the window add button is clicked
     * @public
     * @remarks Fired when the window added
     */
    add(): void;
}

declare const safWindowsConfig: {
    readonly events: {
        readonly onAdd: "add";
    };
};
type SafWindowsInstance = AugmentClassEvents<Windows, typeof safWindowsConfig>;

type SafWindowsProps = SafReactComponentProps<SafWindowsInstance, typeof safWindowsConfig>;
declare const SafReactWindows: ComponentType<SafWindowsProps>;

/**
 * A class derived from the Tab Panel foundation component
 */
declare class WindowPanel extends TabPanel {
    /**
     * Determines whether panel is full-width without padding.
     * @public
     */
    isFullWidth: boolean;
}

type SafWindowPanelInstance = AugmentClassEvents<WindowPanel>;

type SafWindowPanelProps = SafReactComponentProps<SafWindowPanelInstance>;
declare const SafReactWindowPanel: ComponentType<SafWindowPanelProps>;

/**
 * A class derived from the Tab foundation component
 */
declare class Window extends Tab {
    /**
     * The accessible label for the close button.
     * @public
     * @a11y
     * @remarks The label for the close button
     */
    closeAriaLabel: string;
    /**
     * Indicates whether the window has close button.
     * @public
     * @remarks Indicates whether the window is closeable
     */
    closeable: boolean;
    /**
     * The value of the `aria-selected` attribute for the window.
     * @public
     * @remarks This attribute indicates whether the window is selected or not.
     */
    ariaSelectedAttr: string | null;
    /**
     * The tab index prop for the window.
     * @public
     * @remarks
     * A negative value (typically -1) removes the element from the tab order, making it focusable only programmatically.
     */
    tabIndexProp: number;
    /**
     * The tab index property for the window.
     * @public
     * @remarks This property indicates the tab index of the window element.
     */
    tabIndexAttr: string | null;
    /**
     * Emits a custom 'close' event when the window close button is clicked
     * @public
     * @remarks Fired when the window closed
     */
    close(): void;
    setAttribute(qualifiedName: string, value: string): void;
    getAttribute(qualifiedName: string): string | null;
    hasAttribute(qualifiedName: string): boolean;
    removeAttribute(qualifiedName: string): void;
}

declare const safWindowConfig: {
    readonly events: {
        readonly onClose: "close";
    };
};
type SafWindowInstance = AugmentClassEvents<Window, typeof safWindowConfig>;

type SafWindowProps = SafReactComponentProps<SafWindowInstance, typeof safWindowConfig>;
declare const SafReactWindow: ComponentType<SafWindowProps>;

/**
 * A class for WizardStepContent
 */
declare class WizardStepContent extends FASTElement {
    /**
     * Denotes the step number of the wizard step
     */
    step: number;
    /**
     * Denotes the hidden state of the wizard step
     */
    hidden: boolean;
}

type SafWizardStepContentInstance = AugmentClassEvents<WizardStepContent>;

/**
 * A class for Wizard
 */
declare class Wizard extends FASTElement {
    /**
     * Define the accessible name of the complementary region of the wizard.
     *
     * @public
     * @a11y
     */
    a11yAriaLabel: string;
    /**
     * Indicates the heading level used for each step title.
     *
     * @public
     */
    headingLevel: number;
    slottedStepperElements: (SafStepperInstance | null)[];
    slottedStepperElementsChanged(): void;
    currentOrientation: 'horizontal' | 'vertical';
    updateCurrentActiveStep(event: {
        detail: number;
    }): void;
    stepper: SafStepperInstance | null;
    stepperChanged(prev: SafStepperInstance | null | undefined, next: SafStepperInstance | null | undefined): void;
    currentActiveStep: SafStepInstance | undefined;
    currentActiveStepChanged(_prev: SafStepInstance, next: SafStepInstance): void;
    steps: SafWizardStepContentInstance[];
    stepsChanged(): void;
    headingLevelChanged(_prev: any, next: any): void;
    get currentActiveStepText(): string | null | undefined;
    get currentActiveStepDescription(): string | null | undefined;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
interface Wizard extends ResponsiveElement {
}

type SafWizardInstance = AugmentClassEvents<Wizard>;

type SafWizardProps = SafReactComponentProps<SafWizardInstance>;
declare const SafReactWizard: ComponentType<SafWizardProps>;

type SafWizardStepContentProps = SafReactComponentProps<SafWizardStepContentInstance>;
declare const SafReactWizardStepContent: ComponentType<SafWizardStepContentProps>;

/**
 * A class for SkipLink
 */
declare class SkipLink extends AnchorBase {
    /**
     * Determines the positioning of the skip link.
     * If set to 'absolute', the skip link will be positioned absolutely within its container.
     * If set to 'fixed', it will be fixed relative to the viewport.
     */
    positioning: 'absolute' | 'fixed';
    positioningChanged(): void;
    /**
     * Determines the [scroll alignment](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#block) when the skip link is activated.
     */
    scrollAlignToTop: 'start' | 'center' | 'nearest';
    private focusOnTarget;
    connectedCallback(): void;
    setTabIndex(): void;
}

type SafSkipLinkInstance = AugmentClassEvents<SkipLink>;

type SafSkipLinkProps = SafReactComponentProps<SafSkipLinkInstance>;
declare const SafReactSkipLink: ComponentType<SafSkipLinkProps>;

/**
 * A class for SkipLinkGroup
 */
declare class SkipLinkGroup extends FASTElement {
    /**
     * The aria label for the skip link group.
     *
     * @a11y
     * @public
     */
    ariaLabel: string;
    slottedSkipLinks: SafSkipLinkInstance[];
    slottedSkipLinksChanged(): void;
}

type SafSkipLinkGroupInstance = AugmentClassEvents<SkipLinkGroup>;

type SafSkipLinkGroupProps = SafReactComponentProps<SafSkipLinkGroupInstance>;
declare const SafReactSkipLinkGroup: ComponentType<SafSkipLinkGroupProps>;

declare const ActionCardActionModeEnum: {
    /**
     * Render as a button
     */
    readonly button: "button";
    /**
     * Render as an anchor
     */
    readonly a: "a";
};
type ActionCardActionMode = (typeof ActionCardActionModeEnum)[keyof typeof ActionCardActionModeEnum];

/**
 * A class for ActionCardAction
 */
declare class ActionCardAction extends FASTElement {
    /**
     * The density of the action card action
     * @public
     */
    density: ComponentDensity;
    /**
     * Mode of the action, can be 'a' or 'button'.
     * @public
     * @defaultValue button
     */
    mode: ActionCardActionMode;
    modeChanged(): void;
    slottedCardTitleElements: Element[];
    slottedCardTitleElementsChanged(): void;
    cardTitle: string;
    slottedDescriptionElements: Element[];
    slottedDescriptionElementsChanged(): void;
}
interface ActionCardAction extends Omit<AnchorBase, 'control' | 'ariaDisabled'>, Omit<ButtonBase, 'disabled' | 'ariaDisabled' | 'control'> {
}

type SafActionCardActionInstance = AugmentClassEvents<ActionCardAction>;

/**
 * A class for ActionCard
 */
declare class ActionCard extends FASTElement {
    /**
     * The density of the action card
     * @public
     */
    density: ComponentDensity;
    /**
     * Defines a string value that labels the `action-card`.
     *
     * @a11y
     * @public
     */
    ariaLabel: string;
    slottedActionElements: SafActionCardActionInstance[];
    slottedControlsElements: Element[];
    slottedActionElementsChanged(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
}

type SafActionCardInstance = AugmentClassEvents<ActionCard>;

type SafActionCardProps = SafReactComponentProps<SafActionCardInstance>;
declare const SafReactActionCard: ComponentType<SafActionCardProps>;

type SafActionCardActionProps = SafReactComponentProps<SafActionCardActionInstance>;
declare const SafReactActionCardAction: ComponentType<SafActionCardActionProps>;

export { SafReactAccordion as SafAccordion, SafReactAccordionItem as SafAccordionItem, SafAccordionItemProps, SafAccordionProps, SafReactActionCard as SafActionCard, SafReactActionCardAction as SafActionCardAction, SafActionCardActionProps, SafActionCardProps, SafReactActivity as SafActivity, SafReactActivityNote as SafActivityNote, SafActivityNoteProps, SafActivityProps, SafReactAlert as SafAlert, SafAlertProps, SafReactAnchor as SafAnchor, SafAnchorProps, SafReactAnchoredRegion as SafAnchoredRegion, SafAnchoredRegionProps, SafReactAvatar as SafAvatar, SafAvatarProps, SafReactBackToTop as SafBackToTop, SafBackToTopProps, SafReactBadge as SafBadge, SafBadgeProps, SafReactBreadcrumb as SafBreadcrumb, SafReactBreadcrumbItem as SafBreadcrumbItem, SafBreadcrumbItemProps, SafBreadcrumbProps, SafReactButton as SafButton, SafReactButtonEmbedded as SafButtonEmbedded, SafButtonEmbeddedProps, SafReactButtonGroup as SafButtonGroup, SafButtonGroupProps, SafButtonProps, SafReactCalendar as SafCalendar, SafCalendarProps, SafReactCard as SafCard, SafCardProps, SafReactCarousel as SafCarousel, SafCarouselProps, SafReactChat as SafChat, SafChatProps, SafReactCheckbox as SafCheckbox, SafReactCheckboxGroup as SafCheckboxGroup, SafCheckboxGroupProps, SafCheckboxProps, SafReactChip as SafChip, SafChipProps, SafReactClickAwayListener as SafClickAwayListener, SafClickAwayListenerProps, SafReactCombobox as SafCombobox, SafComboboxProps, SafReactCommentField as SafCommentField, SafCommentFieldProps, SafReactContainer as SafContainer, SafContainerProps, SafReactDateMaskedInput as SafDateMaskedInput, SafDateMaskedInputProps, SafReactDatePicker as SafDatePicker, SafDatePickerProps, SafReactDescriptionDetails as SafDescriptionDetails, SafDescriptionDetailsProps, SafReactDescriptionList as SafDescriptionList, SafDescriptionListProps, SafReactDescriptionTerm as SafDescriptionTerm, SafDescriptionTermProps, SafReactDialog as SafDialog, SafDialogProps, SafReactDisclosure as SafDisclosure, SafDisclosureProps, SafReactDivider as SafDivider, SafDividerProps, SafReactDrawer as SafDrawer, SafDrawerProps, SafReactEmptyState as SafEmptyState, SafEmptyStateProps, SafReactFacetCategory as SafFacetCategory, SafFacetCategoryProps, SafReactFacetItem as SafFacetItem, SafFacetItemProps, SafReactFacetedFilter as SafFacetedFilter, SafFacetedFilterProps, SafReactFileUpload as SafFileUpload, SafFileUploadProps, SafReactFlipper as SafFlipper, SafFlipperProps, SafReactFooter as SafFooter, SafFooterProps, SafReactIcon as SafIcon, SafIconProps, SafReactLayoutGrid as SafLayoutGrid, SafReactLayoutGridItem as SafLayoutGridItem, SafLayoutGridItemProps, SafLayoutGridProps, SafReactList as SafList, SafReactListItem as SafListItem, SafListItemProps, SafListProps, SafReactListbox as SafListbox, SafListboxProps, SafReactLogo as SafLogo, SafLogoProps, SafReactMenu as SafMenu, SafReactMenuItem as SafMenuItem, SafMenuItemProps, SafMenuProps, SafReactMessageBox as SafMessageBox, SafMessageBoxProps, SafReactMetadata as SafMetadata, SafReactMetadataItem as SafMetadataItem, SafMetadataItemProps, SafMetadataProps, SafReactNumberField as SafNumberField, SafNumberFieldProps, SafReactOption as SafOption, SafOptionProps, SafReactPagination as SafPagination, SafPaginationProps, SafReactProductHeader as SafProductHeader, SafReactProductHeaderItem as SafProductHeaderItem, SafProductHeaderItemProps, SafProductHeaderProps, SafReactProgress as SafProgress, SafProgressProps, SafReactProgressRing as SafProgressRing, SafProgressRingProps, SafReactProgressText as SafProgressText, SafProgressTextProps, SafReactRadio as SafRadio, SafReactRadioGroup as SafRadioGroup, SafRadioGroupProps, SafRadioProps, SafReactSearchField as SafSearchField, SafSearchFieldProps, SafReactSelect as SafSelect, SafSelectProps, SafReactSideNav as SafSideNav, SafSideNavProps, SafReactSkipLink as SafSkipLink, SafReactSkipLinkGroup as SafSkipLinkGroup, SafSkipLinkGroupProps, SafSkipLinkProps, SafReactSlider as SafSlider, SafReactSliderLabel as SafSliderLabel, SafSliderLabelProps, SafSliderProps, SafReactSplitter as SafSplitter, SafSplitterProps, SafReactSrOnly as SafSrOnly, SafSrOnlyProps, SafReactStatus as SafStatus, SafStatusProps, SafReactStep as SafStep, SafStepProps, SafReactStepper as SafStepper, SafStepperProps, SafReactSwitch as SafSwitch, SafSwitchProps, SafReactTab as SafTab, SafReactTabPanel as SafTabPanel, SafTabPanelProps, SafTabProps, SafReactTable as SafTable, SafTableProps, SafReactTabs as SafTabs, SafTabsProps, SafReactText as SafText, SafReactTextArea as SafTextArea, SafTextAreaProps, SafReactTextField as SafTextField, SafTextFieldProps, SafTextProps, SafReactToolbar as SafToolbar, SafToolbarProps, SafReactTooltip as SafTooltip, SafTooltipProps, SafReactTreeItem as SafTreeItem, SafTreeItemProps, SafReactTreeView as SafTreeView, SafTreeViewProps, SafReactWindow as SafWindow, SafReactWindowPanel as SafWindowPanel, SafWindowPanelProps, SafWindowProps, SafReactWindows as SafWindows, SafWindowsProps, SafReactWizard as SafWizard, SafWizardProps, SafReactWizardStepContent as SafWizardStepContent, SafWizardStepContentProps, SafReactWorkspacePattern as SafWorkspacePattern, SafWorkspacePatternProps };
