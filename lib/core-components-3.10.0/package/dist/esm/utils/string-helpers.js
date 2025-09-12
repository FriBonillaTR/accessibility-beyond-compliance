/**
 * {@function}
 * @param id unique id on the form input element
 * @param label label text value
 * @param status boolean value of the invalid or isSuccess
 * @returns {string} element ids in a string
 */
const concatLabelIds = (id, elements) => {
    const { label, optionalText, status } = elements;
    const labelId = label ? `label-${id}` : null;
    const optionalTextId = optionalText ? `optional-${id}` : null;
    const statusId = status ? `status-${id}` : null;
    const labelIds = [labelId, optionalTextId, statusId].filter(Boolean).join(' ');
    return labelIds;
};
/**
 * capitalizes the first letter of a string
 * @param str string to capitalize
 * @returns string with first letter capitalized
 */
const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export { capitalizeFirstLetter, concatLabelIds };
