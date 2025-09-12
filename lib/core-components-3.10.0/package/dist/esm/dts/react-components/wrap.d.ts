declare const wrap: {
    <TElement extends HTMLElement, TEvents>(def: import("@microsoft/fast-element").FASTElementDefinition<import("@microsoft/fast-element").Constructable<TElement>>, config?: import("@microsoft/fast-react-wrapper").ReactWrapperConfig<TEvents> | undefined): import("@microsoft/fast-react-wrapper").ReactWrapper<TElement, TEvents>;
    <TElement_1 extends HTMLElement, TEvents_1>(type: import("@microsoft/fast-element").Constructable<TElement_1>, config?: import("@microsoft/fast-react-wrapper").ReactWrapperConfig<TEvents_1> | undefined): import("@microsoft/fast-react-wrapper").ReactWrapper<TElement_1, TEvents_1>;
};
export default wrap;
