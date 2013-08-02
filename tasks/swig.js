'use strict';

module.exports = function(grunt) {

  var fs = require('fs'),
      swig = require('swig');

  grunt.registerMultiTask('swig', 'swig templater', function(context) {
    var config = this,
        context = context || '',
        file_re = /(.*)\.([A-Za-z]+)/i,
        pages = [],
        d = new Date;
        d = d.toISOString()

    swig.init(config.data.init);

    config.filesSrc.forEach(function(filename) {

      var file = file_re.exec(filename)[1],
          tpl = swig.compileFile(filename),
          destFile = config.data.dest + file,
          tplVars = {},
          contextVars = {},
          globalVars = {};

          destFile.replace(/\.[^/.]+$/, "")

      try {
        var globalIncVars = grunt.file.readJSON(config.data.init.root + "global.json");
        globalVars = grunt.util._.extend(config.data, globalIncVars);
      } catch (err) {
        globalVars = grunt.util._.clone(config.data);
      }

      try {
        tplVars = grunt.file.readJSON(config.data.init.root + file + ".json");
      } catch(err) {
        tplVars = {};
      }

      try {
        contextVars = grunt.file.readJSON(config.data.init.root + file + "." + context + ".json");
      } catch(err) {
        contextVars = {};
      }

      tplVars.context = context;

      grunt.log.writeln('Writing file to ' + destFile);

      grunt.file.write(destFile, tpl.render(grunt.util._.extend(globalVars, tplVars, contextVars)));

    });

  });
}
