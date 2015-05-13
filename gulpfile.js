var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var replace = require('gulp-replace-task');
var args = require('yargs').argv;
var fs = require('fs');

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('constants', function () {
  // Get the environment from the command line
  var env = args.env || 'development';

  // Read the settings from the right file
  var filename = env + '.json';
  var settings = JSON.parse(fs.readFileSync('./config/' + filename, 'utf8'));
  gutil.log(settings);

  // Replace each placeholder with the correct value for the variable.
  gulp.src('config/constants.js')
  .pipe(replace({
    patterns: [
      {
        match: 'apiUrl',
        replacement: settings.apiUrl
      }
    ]
  }))
  .pipe(gulp.dest('www/js/'));
});

gulp.task('credentials', function () {
  // Replace each placeholder with the correct value for the variable.
  gulp.src('config/credentials.js')
  .pipe(replace({
    patterns: [
      {
        match: 'parseAppId',
        replacement: process.env.EGGTIMER_PARSE_APP_ID
      },
      {
        match: 'parseClientKey',
        replacement: process.env.EGGTIMER_PARSE_CLIENT_KEY
      }
    ]
  }))
  .pipe(gulp.dest('www/js/'));
});
