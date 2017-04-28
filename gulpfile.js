// Project data
var srcpaths = {
  less: './sources/less/**/*.less',
  images: './sources/images/**/*',
  icons: './sources/icons/**/*',
};

var destpaths = {
  css: './appengine/static/css',
  html: './appengine/html',
  webfonts: './appengine/static/webfonts',
  images: './appengine/static/images',
  icons: './appengine/html/icons'
};

// Variables and requirements
const gulp = require('gulp');
const rename = require('gulp-rename');

const less = require('gulp-less');
const path = require('path');

const postcss = require('gulp-postcss');
const zindex = require('postcss-zindex');
const autoprefixer = require('gulp-autoprefixer');
const focus = require('postcss-focus');
const nocomments = require('postcss-discard-comments');
const nano = require('gulp-cssnano');
const mmq = require('gulp-merge-media-queries');

const stylelint = require('stylelint');
const stylelintConfig = require('stylelint-config-standard');

const svgmin = require('gulp-svgmin');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

// compilation and postproduction of LESS to CSS
gulp.task('css', function () {
    var processors = [
    	nocomments, // discard comments
    	focus, // add focus to hover-states
    	zindex, // reduce z-index values
        require('stylelint')(stylelintConfig), // lint the css
        require('postcss-font-magician')({
   			hosted: destpaths.webfonts,
			formats: 'local eot woff2'
		}) // import fonts
    ];
    return gulp.src('../appengine/static/css/style.less')
        .pipe(less({
      		paths: [ path.join(__dirname, 'less', 'includes') ]
    	})) // compile less to css
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        })) // add vendor prefixes
		.pipe(postcss(processors)) // clean up css
		.pipe(mmq({
			log: true
		}))
        .pipe(gulp.dest(destpaths.css)) // save cleaned version
        .pipe(nano()) // minify css
        .pipe(rename('style.min.css')) // save minified version
    	.pipe(gulp.dest(destpaths.css));
});


// reduce images for web
gulp.task ('images', function () {
	return gulp.src(srcpaths.images)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(destpaths.images));
});

// reduce icons for web
gulp.task ('icons', function () {
	return gulp.src(srcpaths.icons)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(destpaths.icons));
});


gulp.task('watch', function () {
   gulp.watch(srcpaths.less, ['css']);
   gulp.watch(srcpaths.icons, ['icons']);
   gulp.watch(srcpaths.images, ['images']);
});

gulp.task('default', ['css', 'images', 'icons']);
