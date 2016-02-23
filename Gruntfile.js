/* hepl-mmi/workflow
 *
 * /Gruntfile.js - Grunt configuration file
 *
 * coded by leny@flatLand!
 * started at 11/02/2016
 */

"use strict";

module.exports = function( grunt ) {

    // 1. load tasks
    grunt.loadNpmTasks( "grunt-contrib-watch" );
    grunt.loadNpmTasks( "grunt-cowsay" );
    grunt.loadNpmTasks( "grunt-eslint" );
    grunt.loadNpmTasks( "grunt-browser-sync" );

    // 2. configure tasks
    grunt.initConfig( {
        // browser sync
        "browserSync": {
            "preview": {
                "bsFiles": {
                    "src": "scripts/*.js"
                },
                "options": {
                    "proxy": "localhost:12345", // TODO: adapt to you configuration
                    "watchTask": true
                }
            }
        },
        // cowsay
        "cowsay": {
            "done": {
                "options": {
                    "message": "I'm done!"
                }
            }
        },
        // eslint
        "eslint": {
            "options": {
                "configFile": ".eslintrc.json"
            },
            "scripts": [ "scripts/**/*.js" ]
        },
        // watch
        "watch": {
            "options": {
                "spawn": false
            },
            "scripts": {
                "files": [ "scripts/**/*.js" ],
                "tasks": [ "eslint" ]
            }
        }
    } );

    // 3. aliases
    grunt.registerTask( "default", [
        "analyse",
        "cowsay:done"
    ] );

    grunt.registerTask( "analyse", [ "eslint:scripts" ] );

    grunt.registerTask( "work", [
        "analyse",
        "browserSync",
        "watch"
    ] );
};
