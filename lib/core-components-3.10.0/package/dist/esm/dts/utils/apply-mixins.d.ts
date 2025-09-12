/**
 * @param targetConstructor base to apply mixins to
 * @param mixinConstructors mixins to apply, with possibility to remove properties
 * @dependency commentParser.ts script
 */
export declare function applyMixins(targetConstructor: Function, ...mixinConstructors: (Function | {
    ctor: Function;
    exclude?: string[];
})[]): void;
