"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csso = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var del = require("del");
var imagedel = require("del");
var autoImports = require("gulp-auto-imports");
var uglify = require("gulp-uglify");
var gulp = require("gulp");
var gutil = require("gulp-util");
var ftp = require("vinyl-ftp");

gulp.task("del", function(){
  return del("build");
});

gulp.task("copy", function(){
  return gulp.src([
    "source/*.html",
    "source/fonts/**/*.woff2",
    "source/img/**",
    "source/*.ico",
    "source/js/*.js"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("imagedel", function(){
  return del("build/img/**/*.{png,jpg,svg}");
});

gulp.task("images", function() {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"));
});

gulp.task("sass:load", function () {
  var dest = "source/sass"
  return gulp.src("source/sass/blocks/**/*.scss")
    .pipe(autoImports({ preset: "scss", dest: dest }))
    .pipe(gulp.dest(dest))
});

gulp.task('watch', function (done) {
    gulp.watch("source/**/*.scss", gulp.series('sass'))
    done()
  });

gulp.task("norm", function () {
  return gulp.src("source/css/normalize.css")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("normalize.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("buildHTML", function() {
return gulp.src("source/*.html")
  .pipe(gulp.dest("build/"))
  .pipe(server.stream());
})

gulp.task("buildJS", function() {
    return gulp.src("source/js/*.js")
    .pipe(uglify())
    .pipe(rename("index.min.js"))
    .pipe(gulp.dest("build/js/"))
    .pipe(server.stream());
    })

gulp.task("server", function () {
  server.init({
    server: "build/", //source
    notify: false,
    open: true,
    cors: true,
    ui: false,
    browser: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
  });

  // gulp.watch("build/css/**/*.css", gulp.series("css", "norm"));
  // gulp.watch("build/*.html").on("change", server.reload);
});

gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css", "norm"));
gulp.watch("source/*.html", gulp.series("buildHTML"));
gulp.watch("source/js/*.js", gulp.series("buildJS"));
// gulp.watch("source/*.html").on("change", server.reload);


gulp.task("build", gulp.series("del", "copy", "images","sass:load", "css", "norm"))
gulp.task("start", gulp.series("build", "server"));

gulp.task( 'deploy', function () {

    var conn = ftp.create( {
        host:     'server96.hosting.reg.ru',
        user:     'u1198419',
        password: 'cPp_O7Q6',
        parallel: 10,
        log:      gutil.log
    } );

    var globs = [
        'build/**'
    ];

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance

    return gulp.src( globs, {buffer: false } )
        // .pipe( conn.newer( '/public_html' ) ) // only upload newer files
        .pipe( conn.dest( '/www/delivery-town.ru' ) );

} );
