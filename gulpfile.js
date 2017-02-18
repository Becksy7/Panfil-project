var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    autoprefixer = require('autoprefixer'),
    browserSync = require('browser-sync'),
    pngquant = require('imagemin-pngquant'),
    less = require('gulp-less'),
    rename = require("gulp-rename"),
    shell = require('gulp-shell'),
    config = {
        'minify': true,
        'sourcemaps': false,
        'browsers': [
            'last 2 versions'
        ],
        'browserSync': {
            server: {
                baseDir: "./build",
                index: "build/lk.html"
            },
            tunnel: false,
            host: 'localhost',
            port: 9000,
            logPrefix: ""
        }
    };

var path = {
    src: {
        html: 			'src/views/**/*.phtml',
        style: 			'src/styles/styles.less',
        img: 			'src/images/**/*.*',
        js:             'src/js/**/*.js'
    },
    build:{
        html: 	'build/*.html',
        img:	'build/images',
        css:	'build/css',
        js:     'build/js/*.js'
    },
    watch: {
        html: 	'src/views/**/*.phtml',
        style: 	'src/styles/**/*.less',
        img: 	'src/images/**/*.*',
        js:     'src/js/**/*.js'
    },
    shell: {
        html_template : {
            command : 'php sys/html_build.php'
        },

        html_fixpaths : {
            command : 'php sys/html_fixpaths.php'
        }
    },
    clean: 'src'
};
gulp.task('clean', function (cb) {
    $.rimraf(path.clean, cb);
});

gulp.task('webserver', function () {
    browserSync(config.browserSync);
});

/*gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe($.cached('htmling'))
        .pipe($.typograf({
            lang: 'ru'
        }))
        .pipe($.rigger())
        .pipe(gulp.dest('build/'))
        .pipe(browserSync.stream());
});*/

gulp.task('less', function () {
    gulp.src(path.src.style)
        .pipe($.plumber())
        .pipe($.if(config.sourcemaps, $.sourcemaps.init()))
        .pipe(less())
        .pipe($.autoprefixer({browsers: config.browsers}))
        .pipe($.if(config.minify, $.cleanCss({compatibility: 'ie8'})))
        .pipe($.if(config.sourcemaps, $.sourcemaps.write()))
        .pipe($.plumber.stop())
        .pipe($.if(config.minify, rename({suffix: '.min'})))
        .pipe(gulp.dest(path.build.css))
        .pipe(browserSync.stream());
});

gulp.task('shell', function () {
        shell.task('php sys/html_build.php');
        shell.task('php sys/html_fixpaths.php');
});

gulp.task('watch', function(){
    gulp.watch([path.watch.style], ['less']);
    gulp.watch([path.watch.html], ['shell']);
    //gulp.start('webserver');
});