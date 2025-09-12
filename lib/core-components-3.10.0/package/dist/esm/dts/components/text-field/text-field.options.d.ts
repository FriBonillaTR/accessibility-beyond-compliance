/**
 * Text field sub-types
 * @public
 */
export declare const TextFieldTypeEnum: {
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
export type TextFieldType = (typeof TextFieldTypeEnum)[keyof typeof TextFieldTypeEnum];
