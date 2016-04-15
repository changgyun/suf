/***********************************************************************************
 1. DEPENDENCIES
 /***********************************************************************************/

var gulp = require ('gulp'),
    jade = require ('gulp-jade'),
    sass = require ('gulp-sass'),
    clean = require("gulp-clean"),
    concat = require("gulp-concat"),
    mainBowerFiles = require("gulp-main-bower-files"),
    filter = require("gulp-filter"),
    flatten = require("gulp-flatten"),
    browserSync = require ('browser-sync'),
    reload = browserSync.reload;

/*********************************************************************************
 2. FILE DESTINATIONS (RELATIVE TO ASSETS FOLDER)
 **********************************************************************************/

var target = {
    jadeSrc : 'app/public/**/*.jade',
    sassSrc : 'app/public/sass/**/*.scss',
    resourceSrc : 'app/public/resource/**/*',
    jsSrc : 'app/public/js/**/*',
    cssDest : 'dist/css',
    jsDest : 'dist/js',
    resourceDest : 'dist/resource',
    fontDest : 'dist/font',
    dest : 'dist'
};

/**********************************************************************************
 3. SASS TASK
 ***********************************************************************************/

gulp.task ('sass', function (){
    gulp.src(target.sassSrc)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest(target.cssDest))
        .pipe(reload({stream:true}));
});

/**********************************************************************************
 4. JADE TASKS
 **********************************************************************************/

gulp.task('jade', function(){
    gulp.src(target.jadeSrc)
            .pipe(jade({
                pretty: true
           }))
            .pipe(gulp.dest(target.dest))
});
gulp.task('jade-watch', ['jade'], reload);

/**********************************************************************************
 5. vendor
 **********************************************************************************/

gulp.task("vendor", function() {
    var jsFilter = filter("**/*.js", {restore: true}),
        cssFilter = filter("**/*.css", {restore: true}),
        fontFilter = filter([ "**/*.eot", "**/*.svg", "**/*.ttf", "**/*.woff", "**/*.woff2" ], {restore: true});
    gulp
        .src("bower.json")
        .pipe(mainBowerFiles())
        .pipe(jsFilter)
        .pipe(concat("vendor.js"))
        .pipe(gulp.dest(target.jsDest))
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        .pipe(concat("vendor.css"))
        .pipe(gulp.dest(target.cssDest))
        .pipe(cssFilter.restore)
        .pipe(fontFilter)
        .pipe(flatten())
        .pipe(gulp.dest(target.fontDest));
});

/**********************************************************************************
 6. RESOURCE
 **********************************************************************************/

gulp.task("resource", function() {
    gulp
        .src(target.resourceSrc)
        .pipe(gulp.dest(target.resourceDest));

});

/**********************************************************************************
 7. javascript
 **********************************************************************************/

gulp.task("javascript", function() {
    gulp
        .src(target.jsSrc)
        .pipe(gulp.dest(target.jsDest));

});

/**********************************************************************************
 8. CLEAN
 **********************************************************************************/

gulp.task("clean", function() {
    gulp
        .src([target.dest + "/**/*.*"], {read: false})
        .pipe(clean({force: true}));
});

/**********************************************************************************
 9. BUILD SEQUENCES
 **********************************************************************************/

gulp.task('default', ['clean', 'resource', 'javascript', 'vendor', 'sass', 'jade'], function(){
    browserSync({server: target.dest});
    gulp.watch(target.sassSrc, ['sass']);
    gulp.watch(target.jadeSrc, ['jade-watch']);
});