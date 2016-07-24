'use strict';

var gulp = require('gulp'),
		browserSync = require('browser-sync').create();

var buildDir = 'build/';

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: buildDir
        }
    });
});

gulp.task('default', ['serve']);