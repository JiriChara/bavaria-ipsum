module.exports = function (grunt) {
    'use strict';

    var jsFiles = [
        'Gruntfile.js',
        'src/**/*.js',
        'src/**/*.json',
        'test/**/*.spec.js'
    ];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            all: jsFiles,
            options: {
                jshintrc: '.jshintrc'
            }
        },

        watch: {
            files: jsFiles,
            tasks: [
                'jshint',
                'browserify',
                'karma',
                'uglify'
            ]
        },

        browserify: {
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'dist/<%= pkg.name %>.js',
                options: {
                    browserifyOptions: {
                        standalone: 'BavariaIpsum'
                    }
                }
            }
        },

        uglify:  {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'dist/<%= pkg.name %>.js',
                dest: 'dist/<%= pkg.name %>.min.js'
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
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', [
        'jshint',
        'karma',
        'browserify',
        'uglify'
    ]);
};
