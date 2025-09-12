export declare const ListOrderEnum: {
    readonly UNORDERED: "unordered";
    readonly ORDERED: "ordered";
};
export type ListOrder = (typeof ListOrderEnum)[keyof typeof ListOrderEnum];
export declare const ListSizeEnum: {
    readonly LARGE: "large";
    readonly MEDIUM: "medium";
    readonly SMALL: "small";
};
export type ListSize = (typeof ListSizeEnum)[keyof typeof ListSizeEnum];
export declare const ListStyleEnum: {
    readonly CIRCLE: "circle";
    readonly DECIMAL: "decimal";
    readonly DISC: "disc";
    readonly LOWERALPHA: "lower-alpha";
    readonly NONE: "none";
    readonly ROMAN: "lower-roman";
    readonly SQUARE: "square";
    readonly TICKED: "ticked";
};
export type ListStyle = (typeof ListStyleEnum)[keyof typeof ListStyleEnum];
