module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            sass: {
                files: [
                    {
                        expand: true,
                        cwd: 'wp/sass/',
                        src: 'resource/**',
                        dest: 'style/'
                    },
                    {
                        expand: true,
                        cwd: 'wp/sass/',
                        src: 'resource/**',
                        dest: 'wp/style/'
                    }
                ]
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'style/stylesheet.css': 'wp/sass/stylesheet.scss',
                    'wp/style/stylesheet.css': 'wp/sass/stylesheet.scss'
                }
            }
        },
        watch: {
            css: {
                files: [
                    'wp/**/*.scss',
                    'wp/**/*.html'
                ],
                tasks: ['sass', 'copy:sass']
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'wp/**/*.html',
                        'wp/**/*.scss',
                        'wp/**/*.css',
                        'wp/**/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './wp'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('wp', ['sass', 'copy:sass']);
    grunt.registerTask('wp_test', ['sass', 'copy:sass', 'browserSync', 'watch']);
}