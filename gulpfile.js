const { src, dest, watch, parallel, series } = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify-es').default;
const del = require('del');
const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const cache = require('gulp-cache');


function browsersync() {
    browserSync.init({
        server: {
            baseDir: "dist/"
        },
        files: ["dist/*.html", "dist/js/main.js", "dist/**/*.css"],
        notify: false,
        open: "local",
        ghostMode: {
            clicks: true,
            forms: true,
            scroll: false,
        },
    });
};

function buildhtml() {
    return src('app/pages/*.html')
        .pipe(fileinclude({
            prefix: "@@",
            basepath: "@file",
        }))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('dist/'))
}

function buildStyles() {
    return src('app/scss/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            cascade: true,
            flex: true,
            grid: true,
            overrideBrowserslist: ['last 40 version']
        }))
        .pipe(dest('dist/css/'))
};

function scripts() {
    return src('app/js/*.js')
        // .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('dist/js'))
}

function watching() {
    watch(['app/scss/**/*.scss'], buildStyles);
    watch(['app/js/*.js', '!app/js/main.min.js'], scripts);
    watch(['app/pages/**/*.html'], buildhtml);
    watch("app/img/", imageMin);
}

function imageMin() {
    return src('app/img/*.{jpg,png,svg,webp,jpeg}')
        .pipe(cache(imagemin()))
        .pipe(dest("dist/img"));
};



exports.buildhtml = buildhtml
exports.buildStyles = buildStyles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.imageMin = imageMin
exports.scripts = scripts

exports.start = parallel(buildStyles, watching, browsersync, scripts, imageMin, buildhtml)