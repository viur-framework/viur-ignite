'use strict';

const PLUGIN_NAME = 'viur-ignite-css';

const path = require('path');
const isThere = require('is-there');

const gulp = require('gulp');
const gutil = require('gulp-util');
const rename = require('gulp-rename');
const clone = require('gulp-clone');
const gulpif = require('gulp-if');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cmq = require('gulp-combine-media-queries');
const nano = require('gulp-cssnano');
const postcss = require('gulp-postcss');
const stylefmt = require('gulp-stylefmt');
const sourcemaps = require('gulp-sourcemaps');
const zindex = require('postcss-zindex');
const focus = require('postcss-focus');
const merge = require('merge-stream');

module.exports = {
	build: function (options) {
		// Set Default Options
		var defaultOptions = {
			src: path.join(__dirname, 'less/viur.less'), // source path of basic less file
			dest: './appengine/static/css/', // destination path of css
			sourceMap: true, // sourcemap for style.css
			minSourceMap: false // sourcemap four style.min.css
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
			focus, // add focus to hover-states
			zindex, // reduce z-index values
			require('postcss-font-magician')({
				hosted: path.join(options.dest, '..', 'fonts'), // import fonts
				formats: 'local eot woff2'
			})
		];
		var source = gulp.src(options.src, {
			// base: path.join(options.src, '..')
		})
			.pipe(sourcemaps.init()) // initial sourcemap
			.pipe(less({
				paths: [path.join(__dirname, 'less', 'includes')] // need for relative @imports
			})) // compile less to css
			.pipe(autoprefixer({
				browsers: ['last 2 versions'],
				cascade: false
			})) // add vendor prefixes
			.pipe(postcss(processors)) // clean up css
			.pipe(cmq({
				log: true
			}))
			.pipe(stylefmt()); // syntax formatting

		var stylesPipe1 = source.pipe(clone()) // Create non-minified sourcemap
			.pipe(rename('style.css')) // rename file -> style.css
			.pipe(gulpif(options.sourceMap, sourcemaps.write('../map', {
				includeContent: false,
				sourceRoot: path.join('../../..', 'node_modules', 'viur-ignite-css', 'less') // #FIXME: this relative path problem sucks
			}))) // create sourcemap
			.pipe(gulp.dest(options.dest)); // save style.css

		var stylesPipe2 = source.pipe(clone()) // Create minified sourcemap
			.pipe(nano()) // minify css
			.pipe(rename('style.min.css')) // rename -> style.min.css
			.pipe(gulpif(options.minSourceMap, sourcemaps.write('../map', {
				includeContent: false,
				sourceRoot: path.join('../../..', 'node_modules', 'viur-ignite-css', 'less') // #FIXME: this relative path problem sucks
			})))
			.pipe(gulp.dest(options.dest)); // save style.min.css

		return merge(stylesPipe1, stylesPipe2);
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
