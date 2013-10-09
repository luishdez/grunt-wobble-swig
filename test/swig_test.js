/*global describe, it */
'use strict';

var assert       = require('assert');
var fs           = require('fs');

var helpers = module.exports;
helpers.assertFile = function (file, reg) {
  var here = fs.existsSync(file);
  assert.ok(here, file + ', no such file or directory');

  if (!reg) {
    return assert.ok(here);
  }

  var body = fs.readFileSync(file, 'utf8');
  assert.ok(reg.test(body), file + ' exists but is invalid');
};

describe('grunt-swig', function() {

  it('should create dest/index html', function(){
    helpers.assertFile('test/dest/index.html', /^Hello short path file, Hello world\n/);
  });

  it('should create dest/dest/path/to/index.html', function(){
    helpers.assertFile('test/dest/path/to/index.html', /^Hello long path file\n/);
  });

});
