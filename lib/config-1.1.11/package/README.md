# @saffron/config

This is meant to be a dependency for `@saffron/core-components`

## Custom element registry

`scoped-custom-element-registry.ts` is a fork of the [@webcomponents/scoped-custom-element-registry](https://www.npmjs.com/package/@webcomponents/scoped-custom-element-registry).
Original source code: [scoped-custom-element-registry](https://github.com/webcomponents/polyfills/blob/master/packages/scoped-custom-element-registry/src/scoped-custom-element-registry.ts).

This fork aims fix a few issues:

- Makes the process of running the script idempotent, so it can be run multiple times without issues.
- Makes it react compatible by moving the registry lookup to the `connectedCallback` method.
- Supports web components nested in other web components

See [Making Saffron versioned web components compatible with micro-frontend architectures](https://trten.sharepoint.com/:u:/r/sites/TRdesignsystem/SitePages/Making-Saffron-versioned-web-components-compatible-with-micro-frontend-architectures.aspx?csf=1&web=1&e=r4XvCy) for more details.

## Component namespaces

In `rename.ts`, we define some helper functions that allow consumers to rename components to custom namespaces by adding a prefix or a suffix to the component names

## Steps to publish

- Pump the version in the package.json file
- Run `yarn build`
- Run `yarn pack`
- Run `npm publish`
