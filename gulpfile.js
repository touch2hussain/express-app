// Dependencies
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');
var open = require('gulp-open');

// Task
gulp.task('default', ['open'], function () {
    // listen for changes
    livereload.listen();
    // configure nodemon
    nodemon({
        // the script to run the app
        script: 'app.js',
        ext: '*'
    }).on('restart', function () {
        // when the app has restarted, run livereload.
        gulp.src('app.js')
            .pipe(livereload())
            .pipe(notify('Reloading page, please wait...'));
    })
});

gulp.task('open', function () {
    var options = {
        uri: 'http://localhost:3000',
        app: 'chrome'
    };
    gulp.src(__filename)
        .pipe(open(options));
});