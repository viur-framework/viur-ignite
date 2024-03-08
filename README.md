[![NPM Version](https://img.shields.io/npm/v/%40viur%2Fignite)](https://www.npmjs.com/package/@viur/ignite) [![License: MIT](https://img.shields.io/npm/l/@viur/ignite)](https://raw.githubusercontent.com/viur-ignite/ignite/master/LICENSE)


# Ignite
> ViUR Ignite is a sizzling PostCSS boilerplate  

Our goal is to create a boilerplate that is sturdy and scalable 
yet lightweight and adaptable to our different customer projects.
Our approach to CSS is influenced by many modern CSS principles: object oriented, functional and structured.
It uses the power of PostCSS. 

For a detailed introduction and examples have a look at [ignite.viur.dev](https://ignite.viur.dev).

## What is this framework for?
* Ignite is a development toolkit for sturdy HTML and CSS
* It is a lightweight collection of helpful CSS 
* It is responsive and adaptable
* It is built with PostCSS
* It is a solid foundation for [Shoelace](https://github.com/viur-framework/vi-shoelace) and [VUEJS](https://github.com/viur-framework/vi-vue-components)

## Foundation
* _basic.css_ – styling of all application basics (body, fonts, headlines, lists etc.).
* _color.css_ – is a collection of color tables.
* _config.css_ – stores all default variables and constants.
* _mediaqueries.css_ – is a really simple solution for media queries.
* _reset.css_ – resets all browsers to the same base state.

## Themes
* _dark.css_ - is a starting point for a dark theme
* _light.css_ - is a starting point for a light theme

## Utilities
* _shoelace.css_ – the ignite shoelace adapter (ISA)
* _utilities.css_ – useful helpers

---

## Usage

**NPM**

Use NPM to install Ignite: 
```bash
npm install @viur/ignite 
```

Please use [postcss-import](https://www.npmjs.com/package/postcss-import) with your PostCSS pipeline.
This way you are able to get rid of ugly `../node_modules/@viur/ignite/ignite.css` imports:

```postcss
@import url('@viur/ignite/ignite.css');
```

**Submodule**

You can add Ignite as submodule to your project as well:
```bash
git submodule add git@github.com:viur-framework/ignite.git
```
or
```bash
git submodule add https://github.com/viur-framework/ignite.git
```
Now you can import Ignite in your projects style.css
```postcss
@import url('ignite/ignite.css');
```

**Builds**

Preprocessed versions of Ignite can be found in `dist` folder:

Bundled: 
```postcss
@import url('@viur/ignite/dist/ignite.css');
```
 
Minified:
```postcss
@import url('@viur/ignite/dist/ignite.min.css');
```

---

## Contribution guidelines
* Available for use under the MIT license

---

## Who do I talk to?
* [@phneutral](https://github.com/phneutral)
* [@sveneberth](https://github.com/sveneberth)
