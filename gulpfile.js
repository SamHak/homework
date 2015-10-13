var gulp = require("gulp"),
	browsersync = require('browser-sync');

gulp.task('server', function () {
	browsersync({
		port: 9000,
		server: {
			baseDir: 'app'
		}
	});
});

gulp.task('watch', function () {
	gulp.watch([
		'app/*.html',
		'app/html/**/*.html',
		'app/js/**/*.js',
		'app/css/**/*.css',
	]) .on ('change', browsersync.reload);
});

gulp.task('default', ['server', 'watch']);