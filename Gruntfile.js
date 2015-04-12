module.exports = function(grunt) {
  "use strict";
  
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.initConfig({
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'material-design-iconfont.min.css': ['material-design-iconfont.css']
        }
      }
    }
  });

  grunt.registerTask("default", ["cssmin"]);

};
