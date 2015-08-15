module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")
    express:
      dev:
        options:
          script: "server.js"
    watch:
      express:
        files: "index.html"
        tasks: "express:dev"
        options:
          spawn: false
          livereload: true
      scripts:
        files: "resources/scripts/*.js"
        tasks: "uglify"
      styles:
        files: "resources/styles/site.css"
        tasks: "cssmin"
    uglify:
      target:
        files: "resources/scripts/app.min.js": "resources/scripts/*.js"
    cssmin:
      target:
        files: "resources/styles/site.min.css": "resources/styles/site.css"
    jsbeautifier:
      pretty:
        src: "logs/*.log"
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
      "express:dev"
      "watch:express"
    ]
    grunt.registerTask "pretty", [
      "jsbeautifier"
    ]
