module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")

    express:
      dev:
        options:
          script: "./timesince.js"
    watch:
      express:
        files: [
          "./app/views/*.html"
          "./app/config/*.js"
          "./public/scripts/*.js"
          "./app/controllers/*.js"
          "./app/config/*.js"
          "./app/*.js"
          "./timesince.js"
        ]
        tasks: "express:dev"
        options:
          spawn: false
          livereload: true
      scripts:
        files: "./public/scripts/*.js"
        tasks: "uglify"
      styles:
        files: "./public/styles/site.css"
        tasks: "cssmin"
      tests:
        files: [
          "./test/*.js"
          "./app/config/*.js"
          "./public/scripts/*.js"
          "./app/controllers/*.js"
          "./app/config/*.js"
          "./app/*.js"
          "./timesince.js"
        ]
        tasks: "simplemocha"
      logs:
        files: "./app/logs/*.json"
        tasks: "jsbeautifier:pretty"
    uglify:
      target:
        files: "./public/scripts/clientApp.min.js": [
          "./public/scripts/clientApp.js"
          "./public/scripts/listeners.js"
        ]
    cssmin:
      target:
        files: "./public/styles/site.min.css": "public/styles/site.css"
    jsbeautifier:
      pretty:
        src: "./app/logs/*.json"
        options:
          json:
            indentSize: 2
    simplemocha:
      all:
        src: "test/*.js"

    grunt.loadNpmTasks "grunt-simple-mocha"
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
      "watch"
    ]
    grunt.registerTask "pretty", [
      "jsbeautifier"
    ]
