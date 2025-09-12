# Saffron Web Components

Saffron Web Components are built based on FAST. To learn more, about FAST, navigate to [fast.design](https://fast.design).

## Access Saffron Storybook

1. <http://saffron.tr.com>
2. <http://saffron.thomsonreuters.com>

### Contributing

#### Namespaces and MFEs

To support MFEs, Saffron components support being renamed, via adding a prefix, a suffix, or both
For that reason, no static component names should be used in TS files.
Instead, if it's necessary to select Saffron components programmatically, they should be wrapped in `getComponentName()`
Static component name usages in `.scss` and `.template.ts` files are handled automatically by patches to FASTElement
Check code for examples of using `getComponentName()`
