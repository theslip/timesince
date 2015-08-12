module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")
    uglify:
      target:
        files: "resources/scripts/min/app.min.js": "resources/scripts/*.js"
    cssmin:
      target:
        files: "resources/styles/min/site.min.css": "resources/styles/site.css"

    grunt.loadNpmTasks "grunt-contrib-uglify"
    grunt.loadNpmTasks "grunt-contrib-cssmin"
    grunt.registerTask "default", [
      "uglify"
      "cssmin"
    ]
