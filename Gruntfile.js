module.exports = function (grunt) {
    'use strict';

    var jsFiles = [
        'Gruntfile.js',
        'src/**/*.js',
        'src/**/*.json',
        'test/**/*.spec.js'
    ];

    grunt.initConfig({
        jshint: {
            all: jsFiles,
            options: {
                jshintrc: '.jshintrc'
            }
        },

        watch: {
            js: {
                files: jsFiles,
                tasks: [
                    'jshint',
                    'browserify',
                    'karma'
                ]
            }
        },

        browserify: {
            js: {
                src: 'src/bavaria-ipsum.js',
                dest: 'dist/bavaria-ipsum.js',
                options: {
                    browserifyOptions: {
                        standalone: 'BavariaIpsum'
                    }
                }
            }
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', [
        'jshint',
        'karma',
        'browserify'
    ]);
};
