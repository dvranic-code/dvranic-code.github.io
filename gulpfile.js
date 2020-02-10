var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var del = require('del');
var runSequence = require('run-sequence');


gulp.task('sass', function() {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ errLogToConsole: true }))
    .pipe(autoprefixer({cascade: false}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('src/css'));
});

gulp.task('concatCss', function() {
  return gulp.src(['src/css/normalize.css', 'src/css/main.css'])
    .pipe(sourcemaps.init())
    .pipe(concat('all.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/'))
});

gulp.task('nano', function() {
  return gulp.src('src/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(cssnano({ discardComments: { removeAll: true } }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('src/css'));
});

gulp.task('style', function(cb) {
  runSequence('sass', 'nano', 'concatCss', cb);
});

// gulp.task('concatJs', function() {

// });

// gulp.task('clean:dist', function() {
//   return del.sync('dist');
// });


/**
 * WATCH TASK
 * 
 * sass
 * concat css
 * concat js
 */
gulp.task('watch', function() {
  gulp.watch('src/sass/**/*.scss', gulp.series(['style']));
});

/**
 * DEFAULT - build for production
 * 
 * del - delete all files
 * sass
 * concat css
 * nano css
 * concat js
 * uglyfie js
 */
// gulp.task('default', function(cb) {
//   runSequence( 'sass', 'concatCss', 'nano', 'concatJs', 'ugly', cb);
// });
