var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
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

// TODO do I need this at all? It was causing issues on heroku due to bower
//gulp.task('install', ['git-check'], function() {
//  return bower.commands.install()
//    .on('log', function(data) {
//      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
//    });
//});

//gulp.task('git-check', function(done) {
//  if (!sh.which('git')) {
//    console.log(
//      '  ' + gutil.colors.red('Git is not installed.'),
//      '\n  Git, the version control system, is required to download Ionic.',
//      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
//      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
//    );
//    process.exit(1);
//  }
//  done();
//});

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
