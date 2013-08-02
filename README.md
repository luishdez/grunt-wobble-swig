# grunt-swig

> A static site compiler for grunt based on
[swig templates](http://paularmstrong.github.com/swig/)

This is a fork from https://github.com/rtgibbons/grunt-swig. This is because
that repo makes tasks non related to swig. And doesn't follow de nomenclature
file.{ext}.swig

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out
the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains
how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as
install and use Grunt plugins. Once you're familiar with that process, you
may install this plugin with this command:

```shell
npm install grunt-swig --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with
this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-swig');
```

## The "swig" task

### Overview
In your project's Gruntfile, add a section named `swig` to the data object
passed into `grunt.initConfig()`.

```js
swig: {
  dist: {
    init: {
        root: "source/",
        allowErrors: false,
        autoescape: true
    },
    dest: "www/",
    cwd: "source/",
    src: ['**/*.swig']
  }
}
```

Grunt Swig will loop through files listed in `src`

Ex. `source/index.swig`. It will look for a `source/index.json` and add it to
the rest of the variables provided in `swig:dist` or in `source/global.js`, and then run swig
against `source/index.swig` saving the output to `www/index.html`

Define context
