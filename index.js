var gulp = require('gulp');
var rename = require('gulp-rename');
var less = require('gulp-less');

var postcss = require('gulp-postcss');
var zindex = require('postcss-zindex');
var autoprefixer = require('gulp-autoprefixer');
var focus = require('postcss-focus');
var nocomments = require('postcss-discard-comments');
var nano = require('gulp-cssnano');

var stylelint = require('stylelint');
var stylelintConfig = require('stylelint-config-standard'); 

var path = require('path');
var fileExists = require('file-exists');
var prompt = require('prompt');


module.exports = {
	build: function(src, dest) {
		if (typeof(src)==='undefined') src = '/less/viur.less';
		if (typeof(dest)==='undefined') dest = '/appengine/static/css/';

		src = __dirname + src; 
		dest = dirname(dirname(__dirname)) + dest;

		var processors = [
			nocomments, // discard comments
			focus, // add focus to hover-states
			zindex, // reduce z-index values
			require('stylelint')(stylelintConfig), // lint the css
			require('postcss-font-magician')({
				hosted: dirname(dest)+'/fonts', // import fonts
				formats: 'local eot woff2'
			})
		];
		return gulp.src(src)
			.pipe(less({
				paths: [ path.join(__dirname, 'less', 'includes') ]
			})) // compile less to css
			.pipe(autoprefixer({
				browsers: ['last 2 versions'],
				cascade: false
			})) // add vendor prefixes
			.pipe(postcss(processors)) // clean up css
			.pipe(gulp.dest(dest)) // save cleaned version
			.pipe(nano()) // minify css
			.pipe(rename('style.min.css'))
			.pipe(gulp.dest(dest)); // save minified version 
	},

	init: function() {
		if(fileExists('./sources/less/style.less')) { 
			setTimeout(function() {

				prompt.start();

				var property = {
					name: 'yesno',
					message: 'Are you sure to overwrite style.less in sources/less/?',
					validator: /y[es]*|n[o]?/,
					warning: 'Must respond yes or no',
					default: 'no'
				};

				prompt.get(property, function (err, result) {
					console.log('Your Input: ' + result.yesno);

					if(result.yesno == "yes" || result.yesno == "y") {
						prompt.stop();
						return copyPrototype();
					} else {
						prompt.stop();
						return false;
					}
				});

			}, 5);
		} else {
			return copyPrototype();
		}
	}
};

function dirname(path) {
	return path.replace(/\\/g, '/')
		.replace(/\/[^\/]*\/?$/, '');
}
function copyPrototype() {
	return gulp.src(__dirname+'/prototype/style.less')
		.pipe(rename('style.less'))
		.pipe(gulp.dest('./sources/less'));
}
