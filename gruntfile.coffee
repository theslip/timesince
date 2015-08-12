module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")
    watch:
      scripts:
        files: "resources/scripts/*.js"
        tasks: "uglify"
      styles:
        files: "resources/styles/site.css"
        tasks: "cssmin"
    uglify:
      target:
        files: "resources/scripts/min/app.min.js": "resources/scripts/*.js"
    cssmin:
      target:
        files: "resources/styles/min/site.min.css": "resources/styles/site.css"

    grunt.loadNpmTasks "grunt-contrib-watch"
    grunt.loadNpmTasks "grunt-contrib-uglify"
    grunt.loadNpmTasks "grunt-contrib-cssmin"
    grunt.loadNpmTasks "grunt-newer"
    grunt.registerTask "default", [
      "newer:uglify"
      "newer:cssmin"
    ]
