'use strict';

class Extension {
  static find(language) {
    return Extension.extensions()[language];
  }
  static extensions() {
    return {
      javascript: '.js',
      json: '.json',
      html: '.html',
      typescript: '.ts',
    };
  }
}

module.exports = Extension;