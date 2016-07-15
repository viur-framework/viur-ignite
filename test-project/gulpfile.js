// Project data

var appURL = 'http://www.viur.is';
var appName = 'VIUR CSS';
var appDescription = 'This is the first attempt in building a sturdy foundation of CSS (LESS) for ViUR products and Mausbrand projects. ViUR Ignite CSS is built upon the principles of many CSS guides and frameworks.';

var developerName = 'Mausbrand Infosys';
var developerURL = 'http://mausbrand.de/';

var backgroundColor = '#fff'; // Background color of app icons.

var srcpaths = {
	html: './sources/html/**/*',
	less: './sources/less/**/*.less',
	js: './sources/js/**/*.js',
	images: './sources/images/**/*',
	icons: './sources/icons/**/*',
	meta: './sources/meta/*'
};

var destpaths = {
	css: './appengine/static/css',
	js: './appengine/static/js',
	html: './appengine/html',    
	index: './sources/html/_layout.html',
	webfonts: './appengine/static/webfonts',
	images: './appengine/static/images',
	icons: './appengine/static/icons',
	meta: './appengine/static/meta',
	metaRel: '../static/meta'
};

// Variables and requirements

var gulp = require('gulp');
var rename = require('gulp-rename');

var less = require('gulp-less');
var path = require('path');

var postcss = require('gulp-postcss');
var zindex = require('postcss-zindex');
var autoprefixer = require('gulp-autoprefixer');
var focus = require('postcss-focus');
var nocomments = require('postcss-discard-comments');
var nano = require('gulp-cssnano');

var stylelint = require('stylelint');
var stylelintConfig = require('stylelint-config-standard'); 

var css = require('viur-ignite-css')


// compilation and postproduction of LESS to CSS
gulp.task('css', function () {
	css.buildViurCSS('./sources/less/style.less', './appengine/css/')
});

gulp.task('init', function () {
	css.init()
});