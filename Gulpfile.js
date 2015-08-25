var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var concat = require('gulp-concat'); 
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
	scripts: [
		'public/assets/js/*.js'
	],
	css : [
		'public/assets/css/*.css'
	]
}

//scripts
//==========================================
gulp.task('scripts', function(){
	return gulp.src(paths.scripts)
				.pipe(sourcemaps.init())
					.pipe(uglify())
					.pipe(concat('all.min.js'))
				.pipe(sourcemaps.write())
				.pipe(gulp.dest('public/assets/build/js'));
});

//scripts
//==========================================
gulp.task('css', function () {
  gulp.src(paths.css)
  	.pipe(sourcemaps.init())
    	.pipe(uglifycss())
		.pipe(concat('all.min.css'))
	.pipe(sourcemaps.write())
    .pipe(gulp.dest('public/assets/build/css'));
});


//Watch - Rerun the task when a file changes
//==========================================
gulp.task('watch', function() {
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.css, ['css']);
});


//default
gulp.task('default', ['watch', 'scripts', 'css']);