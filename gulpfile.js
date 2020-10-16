// "use strict";

// var gulp = require("gulp");
// var plumber = require("gulp-plumber");
// var sourcemap = require("gulp-sourcemaps");
// var sass = require("gulp-sass");
// var postcss = require("gulp-postcss");
// var autoprefixer = require("autoprefixer");
// var server = require("browser-sync").create();
// var csso = require("gulp-csso");
// var rename = require("gulp-rename");
// var imagemin = require("gulp-imagemin");
// var del = require("del");
// var imagedel = require("del");

// // gulp.task("del", function(){
// //   return del("build");
// // });

// // gulp.task("copy", function(){
// //   return gulp.src([
// //     "source/*.html",
// //     "source/fonts/**/*.woff2",
// //     "source/img/**",
// //     "source/js/**",
// //     "source/*.ico"
// //   ], {
// //     base: "source"
// //   })
// //   .pipe(gulp.dest("build"));
// // });

// // gulp.task("imagedel", function(){
// //   return del("build/img/**/*.{png,jpg,svg}");
// // });

// gulp.task("images", function() {
//   return gulp.src("source/img/**/*.{png,jpg,svg}")
//     .pipe(imagemin([
//       imagemin.optipng({optimizationLevel: 3}),
//       imagemin.jpegtran({progressive: true}),
//       imagemin.svgo()
//     ]))
//     .pipe(gulp.dest("build/img"));
// });

// gulp.task("css", function () {
//   return gulp.src("source/sass/style.scss")
//     .pipe(plumber())
//     .pipe(sourcemap.init())
//     .pipe(sass())
//     .pipe(postcss([
//       autoprefixer()
//     ]))
//     .pipe(csso())
//     .pipe(rename("style.min.css"))
//     .pipe(sourcemap.write("."))
//     .pipe(gulp.dest("build/css"))
//     .pipe(server.stream());
// });

// gulp.task("server", function () {
//   server.init({
//     server: "build/", //build
//     notify: false,
//     open: true,
//     cors: true,
//     ui: false
//   });

//   gulp.watch("build/css/**/*.css", gulp.series("css"));
//   gulp.watch("build/*.html").on("change", server.reload);
// });
// //
// // gulp.task("start", gulp.series("css", "server"));

// //   gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css"));
// //   gulp.watch("source/*.html").on("change", server.reload);
// // });

// gulp.task("build", gulp.series("del", "copy", "images", "css"))
// gulp.task("start", gulp.series("build", "server"));
