var gulp = require('gulp')
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin')
var css2js = require('gulp-css2js')
var babel = require('gulp-babel')
var clean = require('gulp-clean')
var minify = require('gulp-minify')

//script paths
var jsFiles = ['lib/**/*.js', 'shell.js', 'register.js'],
	cssFiles = ['lib/**/*.css', 'register.css']

gulp.task('styles', function() {
	return gulp.src(cssFiles)
		.pipe(concat('styles.css'))
		.pipe(cssmin())
		.pipe(css2js())
		.pipe(gulp.dest('tmp/'))
})

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('tmp/'));
});

gulp.task('build', ['styles', 'scripts'], function() {
	return gulp.src(['tmp/styles.js', 'tmp/scripts.js'])
		.pipe(concat('register.js'))
		.pipe(babel())
		.pipe(minify())
		.pipe(gulp.dest('dist/'))
})

gulp.task('clean', function () {
	return gulp.src('tmp', { read: false })
	.pipe(clean())
})

gulp.task('default', ['build'], function() {
	gulp.run('clean')
})
