var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat'); 
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
	scripts: [
		'public/assets/js/*.js'
	],
	images : 'public/assets/img/*'
}

gulp.task('scripts', function(){
	return gulp.src(paths.scripts)
				.pipe(sourcemaps.init())
					.pipe(uglify())
					.pipe(concat('all.min.js'))
				.pipe(sourcemaps.write())
				.pipe(gulp.dest('build/js'));
});


// Rerun the task when a file changes
gulp.task('watch', function() {
	gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['watch', 'scripts']);