var gulp = require('gulp');
var gutil = require("gulp-util");

var postcss = require('gulp-postcss');
var atImport = require("postcss-import")
var autoprefixer = require('autoprefixer');

var webpack = require("webpack");

var watch = require('gulp-watch');


gulp.task('default', ['css', 'js']);

gulp.task('css', function () {
  var processors = [
    atImport(),
    autoprefixer({browsers: ['last 1 version']})
  ];
  return gulp.src('./src/css/app.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./static/css'));
});

gulp.task('js', function () {
  webpack(require('./webpack.config.js'), function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      // output options
    }));
  });
});

gulp.task('watch', function() {
  gulp.watch('./src/css/**/*.css', ['css']);
  gulp.watch('./src/js/**/*.jsx', ['js']);
  gulp.watch('./src/js/**/*.js', ['js']);
});
