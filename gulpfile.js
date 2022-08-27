const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const autoprefixer = require('gulp-autoprefixer');

// собирает scss файлы
gulp.task("buildCss",
  function () {
    return gulp.src("public/css/*.scss")
      .pipe(sass())
      .pipe(autoprefixer({ cascade: true }))
      .pipe(gulp.dest("public/css"))
})

gulp.task('watchCss', function() {
	gulp.watch('public/**/*.scss', gulp.parallel("buildCss"));
});