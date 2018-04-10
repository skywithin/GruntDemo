// https://gruntjs.com/getting-started
// https://gruntjs.com/configuring-tasks

// The "wrapper" function, which encapsulates your Grunt configuration.
module.exports = function(grunt) {

    // Project configuration.
    var config = {
        pkg: grunt.file.readJSON('package.json'),  

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },

        watch: {
            scripts: {
                files: ['C:/Source/CustApps/Wng.Admin/Codebase/Presentation/Wng.Admin.Presentation.BulkLoadToolExe/ExcelScenarios/NomadsScenarios.xlsx'],
                tasks: ['copy'],
                options: {
                    spawn: false,
                },
            },
        },

        copy: {
            main: {
                files: [
                    // includes files within path 
                    {
                        expand: true,
                        cwd: 'C:/Source/CustApps/Wng.Admin/Codebase/Presentation/Wng.Admin.Presentation.BulkLoadToolExe/ExcelScenarios/',
                        src: ['NomadsScenarios.xlsx'],
                        dest: 'C:/Source/CustApps/Wng.Admin/Codebase/Presentation/Wng.Admin.Presentation.BulkLoadToolGui/bin/LOC-WN/ExcelScenarios/',
                        filter: 'isFile'
                    },

                ],
            },
        },
    }

    // Within this function we can initialize our configuration object.
    grunt.initConfig(config);

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['watch']);
};