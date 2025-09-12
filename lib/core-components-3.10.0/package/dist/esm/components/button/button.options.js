/**
 * Button type values.
 *
 * @public
 */
const ButtonTypeEnum = {
    submit: 'submit',
    reset: 'reset',
    button: 'button',
};
/**
 * Button appearance values.
 *
 * @public
 */
const ButtonAppearanceEnum = {
    primary: 'primary',
    secondary: 'secondary',
    tertiary: 'tertiary',
    inline: 'inline',
};
/**
 * Button shape values.
 * rectangle is set to undefined so if shape isn't set, it defaults to rectangle, without adding the attribute to the button element
 *
 * @public
 */
const ButtonShapeEnum = {
    rectangle: undefined,
    circle: 'circle',
};

export { ButtonAppearanceEnum, ButtonShapeEnum, ButtonTypeEnum };
