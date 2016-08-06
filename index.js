'use strict';

const PLUGIN_NAME = 'viur-ignite-css';

const path = require('path');
const isThere = require('is-there');

const gulp = require('gulp');
const gutil = require('gulp-util');
const rename = require('gulp-rename');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const nano = require('gulp-cssnano');
const postcss = require('gulp-postcss');
const zindex = require('postcss-zindex');
const focus = require('postcss-focus');
const nocomments = require('postcss-discard-comments');
const stylelint = require('stylelint');
const stylelintConfig = require('stylelint-config-standard');

module.exports = {
	build: function (options) {
		// Set Default Options
		var defaultOptions = {
			src: path.join(__dirname, 'less/viur.less'),
			dest: './appengine/static/css/'
		};

		if (typeof options === 'undefined') {
			options = {};
		}
		for (var key in defaultOptions) {
			if (typeof options[key] === 'undefined') {
				options[key] = defaultOptions[key];
			}
		}

		// Options for postcss
		var processors = [
			nocomments, // discard comments
			focus, // add focus to hover-states
			zindex, // reduce z-index values
			stylelint(stylelintConfig), // lint the css
			require('postcss-font-magician')({
				hosted: path.join(options.dest, '..', 'fonts'), // import fonts
				formats: 'local eot woff2'
			})
		];

		return gulp.src(options.src)
			.pipe(less({
				paths: [path.join(__dirname, 'less', 'includes')]
			})) // compile less to css
			.pipe(autoprefixer({
				browsers: ['last 2 versions'],
				cascade: false
			})) // add vendor prefixes
			.pipe(postcss(processors)) // clean up css
			.pipe(rename('style.css'))
			.pipe(gulp.dest(options.dest)) // save cleaned version
			.pipe(nano()) // minify css
			.pipe(rename('style.min.css'))
			.pipe(gulp.dest(options.dest)); // save minified version
	},

	init: function (options) {
		// Set Default Options
		var defaultOptions = {
			dest: './sources/less/style.less',
			overwrite: false
		};

		if (typeof options === 'undefined') {
			options = {};
		}
		for (var key in defaultOptions) {
			if (typeof options[key] === 'undefined') {
				options[key] = defaultOptions[key];
			}
		}

		if (isThere(options.dest) && (options.overwrite === false || options.overwrite === 'false')) {
			throw new gutil.PluginError(
				PLUGIN_NAME,
				'\'' + options.dest + '\' already exists\n\tcall function with option overwrite: true'
			);
		} else {
			return copyPrototype(options.dest);
		}
	}
};

function copyPrototype(dest) {
	return gulp.src(path.join(__dirname, 'prototype/style.less'))
		.pipe(rename(path.basename(dest)))
		.pipe(gulp.dest(path.dirname(dest)));
}
