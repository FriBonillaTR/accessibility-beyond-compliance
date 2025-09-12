/* Component density
 * compact - enables compact mode
 * standard - disables compact mode, the standard display
 * inherit - conditionally sets compact mode if parent/wrapping element is compact
 */
const ComponentDensityEnum = {
    compact: 'compact',
    standard: 'standard',
    inherit: 'inherit',
};
const ComponentDensityWithExtraCompactEnum = Object.assign(Object.assign({}, ComponentDensityEnum), { 'extra-compact': 'extra-compact' });
const BreakpointEnum = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
    xxl: 'xxl',
    xxxl: 'xxxl',
    xxxxl: 'xxxxl',
};

export { BreakpointEnum, ComponentDensityEnum, ComponentDensityWithExtraCompactEnum };
