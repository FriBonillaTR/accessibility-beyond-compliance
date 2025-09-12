import type { AugmentClassEvents } from '../../utils/types.js';
import { SearchField } from './search-field.js';
export declare const safSearchFieldConfig: {
    readonly events: {
        readonly onSearch: "search";
        readonly onClear: "clear";
        readonly onInput: "input";
        readonly onChange: "change";
    };
};
declare const SafSearchField: () => typeof SearchField;
export default SafSearchField;
export type SafSearchFieldInstance = AugmentClassEvents<SearchField, typeof safSearchFieldConfig>;
