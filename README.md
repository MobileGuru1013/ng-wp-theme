# Angular 6 + Wordpress starter theme

Wordpress starter theme with Angular 5 app integration.

This project is prepared to use with Advanced Custom Fields plugin (PRO version is also supported). It provides:
- basic theme configuration
- services to easily using REST API available by default in Wordpress >= 4.7 and ACF REST API provided by ACF to REST API plugin
- structure of components to work with wordpress page templates basing on it's template selector

## WP Setup

1. This theme configuration requires Wordpress with installed plugins:
   - https://wordpress.org/plugins/advanced-custom-fields (or PRO version)
   - https://wordpress.org/plugins/acf-to-rest-api

2. It requires the following custom structure of permalinks: `/post/%postname%/`. You can set them in dashboard (Settings -> Permalinks).

3. Before running app you need to install dependencies by command `npm install` and create `src/config.json` file basing on `src/config.json.dist`.

4. Wordpress has built-in template selector on page edit views in dashboard (attributes metabox on the right side). ACF plugin allows you to display and configure specific fields depending on that selector. You can easily create templates as components in path: `src/app/page-base/templates/` (examples attached). Then they should be registered using component class names in `src/config.json` file ("pageTemplates" key). In this way there will be loaded basing on selected template in dashboard. Nice!

### Development server

Run `npm run start` for a dev server - `http://localhost:4200/`.

### Build

Run `npm run build"` to build the project. 

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Contributions

Pull requests are welcome