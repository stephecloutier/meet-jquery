/* stephe/meet-jquery
 *
 * /gulpfile.js - Gulp tasks
 *
 * coded by stephecloutier@gmail.com
 * started at 09/02/2017
 */

var gulp = require( "gulp" ),
    babel = require( "gulp-babel" );

// --- Tasks for js

gulp.task( "js", function(){
    gulp.src( "src/js/**/*.js" )
        .pipe( babel() )
        .pipe( gulp.dest( "scripts" ) )
} )

// --- Watch tasks

gulp.task( "watch", function(){
    gulp.watch( "src/js/**/*.js", [ "js" ] );
} )

// --- Aliases

gulp.task( "default", [ "js" ] );
gulp.task( "work", [ "default", "watch" ] );
