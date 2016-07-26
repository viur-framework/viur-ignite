[![npm version](https://badge.fury.io/js/viur-ignite-css.svg)](https://badge.fury.io/js/viur-ignite-css)
[![Dependency Status](https://david-dm.org/viur-ignite/viur-ignite-css.svg)](https://david-dm.org/viur-ignite/viur-ignite-css)
[![Build Status](https://travis-ci.org/viur-ignite/viur-ignite-css.svg?branch=master)](https://travis-ci.org/viur-ignite/viur-ignite-css)
[![GitHub license](https://img.shields.io/badge/license-GPL-blue.svg)](https://raw.githubusercontent.com/viur-ignite/viur-ignite-js/master/LICENSE)

# ViUR Ignite CSS

>The ViUR Ignite Framework is the first attempt in building a sturdy foundation for ViUR products and Mausbrand projects.<br>This CSS toolkit is the very core of ViUR Ignite. It is built upon the principles of many CSS guides and frameworks.

Different projects demand different solutions.
ViUR Ignite CSS is a solution based on the needs of our python/jinja oriented stack.
A lightweight framework for many different customer projects.
For other purposes you may use one of the frameworks or guides below.
Their samples, knowledge and expertise helped us to make ViUR Ignite CSS.

* [Primer CSS](http://primercss.io)
* [Enduring CSS](https://benfrain.com/enduring-css-writing-style-sheets-rapidly-changing-long-lived-projects/)
* [Bulma](http://bulma.io)
* [CSS Guidelin.es](http://cssguidelin.es)
* [Bijou](http://andhart.github.io/bijou)
* [Bedrock](https://github.com/jscarmona/bedrock)
* and others

Thanks guys!

## What is this framework for?
* ViUR Ignite CSS is a development toolkit for sturdy HTML and CSS
* It is a lightweightned collection of helpful CSS components
* It is responsive and adaptable
* It is build in LESS
* ViUR Ignite CSS is JavaScript free as most projects use their own JS implementation (We are stil working on our own JS lib: ViUR Ignite JS).

## Install
```
$ npm install viur-ignite-css
```

## Usage
```js
const gulp = require('gulp');
const css = require('viur-ignite-css');

gulp.task('init', function() {
  return css.init();
});

gulp.task('default', function() {
  return css.build();
});
```

Run first the init task with
```
$ gulp init
```
than you can edit the style.less and compile the css with
```
$ gulp
```


### Be individual
Call the function with an object of options
```js
gulp.task('default', function() {
  return css.build({
    dest: './output/css'
  });
});
```

The Default options are:
```js
src: __dirname + '/less/viur.less',
dest: './appengine/static/css/'
```

## Contribution guidelines
* Available for use under the GPL-3.0 license

## Who do I talk to?
* [@phneutral](https://github.com/phneutral)
* [@sveneberth](https://github.com/sveneberth)
