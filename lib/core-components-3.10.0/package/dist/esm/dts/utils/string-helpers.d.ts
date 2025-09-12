/**
 * {@function}
 * @param id unique id on the form input element
 * @param label label text value
 * @param status boolean value of the invalid or isSuccess
 * @returns {string} element ids in a string
 */
export declare const concatLabelIds: (id: string, elements: {
    label?: boolean;
    optionalText?: boolean;
    status?: boolean;
}) => string;
/**
 * capitalizes the first letter of a string
 * @param str string to capitalize
 * @returns string with first letter capitalized
 */
export declare const capitalizeFirstLetter: (str: string) => string;
