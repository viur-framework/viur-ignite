[![License: MIT](https://img.shields.io/npm/l/@viur/ignite)](https://raw.githubusercontent.com/viur-ignite/ignite/master/LICENSE)

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

**Submodule**

We recommend to add ignite as a submodule in your project:
```bash
git submodule add git@github.com:viur-framework/ignite.git
```
or
```bash
git submodule add https://github.com/viur-framework/ignite.git
```

**PostCSS Import**

Then you can import ignite in your projects style.css
```postcss
@import url('ignite/ignite.css');
```

---

## Contribution guidelines
* Available for use under the GPL-3.0 license

---

## Who do I talk to?
* [@phneutral](https://github.com/phneutral)
* [@sveneberth](https://github.com/sveneberth)
