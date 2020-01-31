// Require dependeces
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


/**
 * GULP TASKS
 */
// Basic syntax
// gulp.task('task-name', function () {
//     return gulp.src('source-files') // Get source files with gulp.src
//       .pipe(aGulpPlugin()) // Sends it through a gulp plugin
//       .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
//   });

gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'));
});

// gulp.task('sass', function(){
//     return gulp.src('app/scss/**/*.scss')
//         .pipe(sass())
//         .pipe(gulp.dest('app/css'))
//         .pipe(browserSync.reload({
//             stream: true
//         }));
// });

// gulp.task('browserSync', function() {
//     browserSync.init({
//         server: {
//             baseDir: 'app'
//         }
//     });
// });


gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', gulp.series(['sass']));
});