module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")

    express:
      dev:
        options:
          atBeing: true
          script: "server.js"
    watch:
      express:
        files: [
          "app/views/*.html"
          "app/config/*.js"
          "public/scripts/*.js"
          "app/controllers/*.js"
          "app/config/*.js"
          "server.js"
        ]
        tasks: "express:dev"
        options:
          spawn: false
          livereload: true
      scripts:
        files: "public/scripts/*.js"
        tasks: "uglify"
      styles:
        files: "public/styles/site.css"
        tasks: "cssmin"
    uglify:
      target:
        files: "public/scripts/app.min.js": "public/scripts/*.js"
    cssmin:
      target:
        files: "public/styles/site.min.css": "public/styles/site.css"
    jsbeautifier:
      pretty:
        src: "app/logs/*.log"
        options:
          json:
            indentSize: 3


    grunt.loadNpmTasks "grunt-jsbeautifier"
    grunt.loadNpmTasks "grunt-express-server"
    grunt.loadNpmTasks "grunt-contrib-watch"
    grunt.loadNpmTasks "grunt-contrib-uglify"
    grunt.loadNpmTasks "grunt-contrib-cssmin"
    grunt.loadNpmTasks "grunt-newer"
    grunt.registerTask "default", [
      "newer:uglify"
      "newer:cssmin"
    ]
    grunt.registerTask "server", [
      "watch:express"
    ]
    grunt.registerTask "pretty", [
      "jsbeautifier"
    ]
