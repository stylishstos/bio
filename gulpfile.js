var gulp = require('gulp'),
    server = require('browser-sync'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    precss = require('precss'),
    cssnano = require('cssnano'),
    webpack = require('webpack');

var webpackConfig = require('./webpack.config');
var webpackCompiler = webpack(webpackConfig);


gulp.task('js', function(callback){
    webpackCompiler.run(function(err, stats) {
        if (err) callback(err);

        callback();
    });

});

gulp.task('css', function () {
    var plugins = [
        autoprefixer({browsers: ['last 2 version']}),
        // cssnano(),
        precss()
    ];

    return gulp.src('./src/css/*.css')
        // .pipe( sourcemaps.init() )
        .pipe( postcss(plugins).on('error', function(error) {
            console.log(error);
        }) )
        // .pipe( sourcemaps.write('.') )
        .pipe(gulp.dest('./.build/css'));
});

gulp.task('default', function(){
    server.init({
        server: {
            baseDir: "./.build"
        },
        ui: {
            port: 8000
        }
    });

    gulp.watch("./src/js/*.js",['js']);
    gulp.watch("./src/css/*.css",['css']);

    gulp.watch("./.build/index.html").on('change', server.reload);
    gulp.watch("./.build/css/style.css").on('change', server.reload);
    gulp.watch("./build/js/main.js").on('change', server.reload);
});