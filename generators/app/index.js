'use strict';
const mkdirp = require('mkdirp');
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('appname', {type: String, required: true});
  }

  paths() {
    this.destinationRoot(this.destinationPath(this.options.appname));
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      this.options
    );
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      this.options
    );

    this.fs.copy(
      this.templatePath('tsconfig.json'),
      this.destinationPath('tsconfig.json')
    );

    this.fs.copy(
      this.templatePath('wallaby.js'),
      this.destinationPath('wallaby.js')
    );

    this.fs.copy(
      this.templatePath('test/**/*'),
      this.destinationPath('test')
    );

    this.fs.copy(
      this.templatePath('.*'),
      this.destinationRoot()
    );

    mkdirp.sync(this.destinationPath('src'));
    mkdirp.sync(this.destinationPath('test/unit'));
    mkdirp.sync(this.destinationPath('test/integration'));
  }

  install() {
    this.yarnInstall();
  }
};
