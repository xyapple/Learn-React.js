"use strict";
var gulp = require('gulp');
var connect = require('gulp-connect'); //runs a local dev server
var open = require('gulp-open'); //open url in web browser
var config={
  port: 9000,
  devBaseUrl:'http://localhost',
  paths:{
    html: './src/*.html',
    output: './output'
  }
}
//start a local development Server-side
gulp.task('connect', function(){
  connect.server({
    root:['output'],
    port:config.port,
    base:config.devBaseUrl,
    livereload:true
  });
});

gulp.task('open', ['connect'],function(){
  gulp.src('output/index.html')
      .pipe(open({url:config.devBaseUrl+':'+config.port+'/'}));
});

gulp.task('html', function(){
  gulp.src(config.paths.html)
      .pipe(gulp.dest(config.paths.output))
      .pipe(connect.reload());
});

gulp.task('watch', function(){
  gulp.watch(config.paths.html, ['html']);

});
gulp.task('default', ['html', 'open']);
