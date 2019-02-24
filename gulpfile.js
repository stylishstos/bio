var gulp = require('gulp'),
    server = require('browser-sync'),
    postcss = require('gulp-postcss'),
    postcssCustomMedia = require('postcss-custom-media'),
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
        autoprefixer({browsers: [
                'last 2 versions',
                'ie >= 10',
                'android >= 4',
                'ios >= 8'
            ]}),
        postcssCustomMedia({
            importFrom:[{
                customMedia: {
                    "--small": "screen",
                    "--small-only": "screen and (max-width: 47.9375em)",
                    "--medium": "screen and (min-width: 48em)",
                    "--medium-only": "screen and (min-width: 48em) and (max-width: 64em)",
                    "--large": "screen and (min-width: 64.0625em)",
                    "--large-only": "screen and (min-width: 64.0625em) and (max-width: 90em)",
                    "--xlarge": "screen and (min-width: 90.0625em)",
                    "--xlarge-only": "screen and (min-width: 90.0625em) and (max-width: 120em)",
                    "--xxlarge": "screen and (min-width: 120.0625em)",
                    "--xxlarge-only": "screen and (min-width: 120.0625em) and (max-width: 99999999em)"
                }
            }]
        }),
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

gulp.task('img', function () {
    return  gulp
        .src('./src/img/**/*.{gif,jpg,png,svg}')
        .pipe(gulp.dest('./.build/img/'));
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

    gulp.watch("./src/js/*.js", gulp.series(['js', 'img']));
    gulp.watch("./src/css/*.css",gulp.series(['css', 'img']));

    gulp.watch("./.build/index.html").on('change', server.reload);
    gulp.watch("./.build/css/style.css").on('change', server.reload);
    gulp.watch("./build/js/main.js").on('change', server.reload);
});