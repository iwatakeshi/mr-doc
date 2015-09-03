'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _walkdir = require('walkdir');

var _walkdir2 = _interopRequireDefault(_walkdir);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

/**
 * The class that manages directories.
 * @class Dir
 */

var Dir = (function () {
  function Dir() {
    _classCallCheck(this, Dir);
  }

  /**
   * Create an array of all the right files in the source dir
   * @param  {String}   source source path
   * @param  {Object}   options option object
   * @returns {Array}
   */

  _createClass(Dir, null, [{
    key: 'collectFiles',
    value: function collectFiles(source, options) {
      var dirtyFiles = _walkdir2['default'].sync(source),
          // tee hee!
      ignore = options.ignore || [],
          files = [];

      dirtyFiles.forEach(function (file) {
        file = _path2['default'].relative(source, file);

        var doNotIgnore = _lodash2['default'].all(ignore, function (d) {
          // return true if no part of the path is in the ignore/black list
          return file.indexOf(d) === -1;
        });

        if (file.substr(-2) === 'js' && doNotIgnore) {
          files.push(file);
        }
      });

      return files;
    }
  }]);

  return Dir;
})();

exports['default'] = Dir;
module.exports = exports['default'];
//# sourceMappingURL=source maps/dir.js.map