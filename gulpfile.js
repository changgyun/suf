/***********************************************************************************
 1. DEPENDENCIES
 /***********************************************************************************/

var gulp = require ('gulp'),
    jade = require ('gulp-jade'),
    sass = require ('gulp-sass'),
    del = require ('del'),
    browserSync = require ('browser-sync'),
    reload = browserSync.reload;

/*********************************************************************************
 2. FILE DESTINATIONS (RELATIVE TO ASSETS FOLDER)
 **********************************************************************************/

var target = {
    jadeSrc : 'app/public/*.jade',
    htmlDest : 'app/dist',
    sassSrc : 'app/public/sass/*.scss',
    cssDest : 'app/dist/css',
    dest : 'app/dist'
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
    var YOUR_LOCALS = {};

gulp.src(target.jadeSrc)
        .pipe(jade({
            locals: YOUR_LOCALS,
            pretty: true
        }))
        .pipe(gulp.dest(target.htmlDest))
});
gulp.task('jade-watch', ['jade'], reload);

/**********************************************************************************
 6. CLEAN
 **********************************************************************************/

gulp.task('clean', function(){
    del([target.dest]);
});

/**********************************************************************************
 5. BUILD SEQUENCES
 **********************************************************************************/

gulp.task('default', ['clean', 'sass', 'jade'], function(){
    browserSync({server: target.htmlDest});
    gulp.watch(target.sassSrc, ['sass']);
    gulp.watch(target.jadeSrc, ['jade-watch']);
});