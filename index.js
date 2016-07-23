"use strict";

const PLUGIN_NAME = 'viur-ignite-css';

var	gulp = require('gulp'),
	gutil = require('gulp-util'),
	rename = require('gulp-rename');

var	less = require('gulp-less'),
	autoprefixer = require('gulp-autoprefixer'),
	nano = require('gulp-cssnano'),
	postcss = require('gulp-postcss'),
	zindex = require('postcss-zindex'),
	focus = require('postcss-focus'),
	nocomments = require('postcss-discard-comments'),
	stylelint = require('stylelint'),
	stylelintConfig = require('stylelint-config-standard'); 

var	path = require('path'),
	isThere = require("is-there");


module.exports = {
	build: function(options) {

		// Set Default Options
		var defaultOptions = {
			src: __dirname + '/less/viur.less',
			dest: './appengine/static/css/'
		};

		if (typeof(options)==='undefined') options = {};
		for (var key in defaultOptions) {
			if (typeof(options[key])==='undefined') options[key] = defaultOptions[key];
		}

		// Options for postcss
		var processors = [
			nocomments, // discard comments
			focus, // add focus to hover-states
			zindex, // reduce z-index values
			require('stylelint')(stylelintConfig), // lint the css
			require('postcss-font-magician')({
				hosted: path.dirname(options.dest)+'/fonts', // import fonts
				formats: 'local eot woff2'
			})
		];

		return gulp.src(options.src)
			.pipe(less({
				paths: [ path.join(__dirname, 'less', 'includes') ]
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

	init: function(options) {

		// Set Default Options
		var defaultOptions = {
			src: './sources/less/style.less',
			overwrite: false
		};

		if (typeof(options)==='undefined') options = {};
		for (var key in defaultOptions) {
			if (typeof(options[key])==='undefined') options[key] = defaultOptions[key]
		}


		if(isThere(options.src) && (options.overwrite === false || options.overwrite === "false")) {
			throw new gutil.PluginError(PLUGIN_NAME, "'" + options.src + "' already exists\n\tcall function with option overwrite: true");
		} else {
			return copyPrototype();
		}
	}
};

function copyPrototype() {
	return gulp.src(__dirname+'/prototype/style.less')
		.pipe(rename('style.less'))
		.pipe(gulp.dest('./sources/less'));
}