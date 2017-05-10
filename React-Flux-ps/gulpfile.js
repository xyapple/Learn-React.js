"use strict";
var gulp = require('gulp');
var connect = require('gulp-connect'); //runs a local dev server
var open = require('gulp-open'); //open url in web browser
var browserify = require('browserify'); //Bundles JS
var reactify = require('reactify'); //Transforms React JSX to JS
var source = require('vinyl-source-stream'); //Use conventional text streams with gulp
var concat = require('gulp-concat'); //Concatenates files


var config={
  port: 9000,
  devBaseUrl:'http://localhost',
  paths:{
    html: './src/*.html',
    js:'./src/**/*.js',
    css: [
      		'node_modules/bootstrap/dist/css/bootstrap.min.css',
      		'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
    	],
    output: './output',
    mainJs:'./src/main.js'
  }
}
//start a local development Server
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

gulp.task('js', function(){
  browserify(config.paths.mainJs)
      .transforms(reactify)
      .bundle()
      .on('error', console.error.bind(console))
      .pipe(source('bundle.js'))
      .pipe(gulp.dest(config.paths.dist = '/scripts'))
      .pipe(connect.reload());
});

gulp.task('css', function() {
	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('watch', function(){
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js']);

});
gulp.task('default', ['html', 'open', 'js', 'watch', 'css']);
