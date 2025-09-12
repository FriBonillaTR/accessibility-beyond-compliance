import { AttributeConfiguration } from '../@microsoft/fast-element/dist/esm/index.js';

/**
 * @param targetConstructor base to apply mixins to
 * @param mixinConstructors mixins to apply, with possibility to remove properties
 * @dependency commentParser.ts script
 */
function applyMixins(targetConstructor, ...mixinConstructors) {
    const derivedAttributes = AttributeConfiguration.locate(targetConstructor);
    mixinConstructors.forEach((baseCtorOrConfig) => {
        var _a;
        const baseCtor = typeof baseCtorOrConfig === 'function' ? baseCtorOrConfig : baseCtorOrConfig.ctor;
        const exclude = typeof baseCtorOrConfig === 'object' ? (_a = baseCtorOrConfig === null || baseCtorOrConfig === void 0 ? void 0 : baseCtorOrConfig.exclude) !== null && _a !== void 0 ? _a : [] : [];
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            if (name !== 'constructor' && !exclude.includes(name)) {
                const descriptor = Object.getOwnPropertyDescriptor(baseCtor.prototype, name);
                if (descriptor) {
                    if (!Object.prototype.hasOwnProperty.call(targetConstructor.prototype, name)) {
                        Object.defineProperty(targetConstructor.prototype, name, descriptor);
                    }
                }
            }
        });
        const baseAttributes = AttributeConfiguration.locate(baseCtor);
        const filteredAttributes = baseAttributes.filter((x) => !exclude.includes(x.property));
        filteredAttributes.forEach((x) => derivedAttributes.push(x));
    });
}

export { applyMixins };
