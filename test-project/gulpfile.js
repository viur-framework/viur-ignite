// Variables and requirements

var gulp = require('gulp');
var VIUR = require('viur-ignite-css')


// compilation and postproduction of LESS to CSS
gulp.task('css', function () {
	return VIUR.buildCSS()
});


// create source folder with prototype style.less
gulp.task('init', function () {
	return VIUR.init()
});