/* global __dirname, process */
'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _when = require('when');

var _when2 = _interopRequireDefault(_when);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _elegantSpinner = require('elegant-spinner');

var _elegantSpinner2 = _interopRequireDefault(_elegantSpinner);

var _logUpdate = require('log-update');

var _logUpdate2 = _interopRequireDefault(_logUpdate);

var _dir = require('./dir');

var _dir2 = _interopRequireDefault(_dir);

require('source-map-support/register');

var frame = (0, _elegantSpinner2['default'])();
/**  
 * The class that locates themes  
 * @class Theme  
 */

var Theme = (function () {
  function Theme(options) {
    _classCallCheck(this, Theme);

    var resolved = {
      theme: options.template ? undefined : Theme.findTheme(options.theme)
    };
    this.options = {
      theme: {
        name: !options.template ? resolved.theme.name : undefined,
        path: !options.template ? resolved.theme.path : undefined
      },
      target: {
        path: options.target
      },
      template: {
        name: options['package'].name,
        path: options.template,
        isKit: function isKit() {
          return options.kit;
        }
      }
    };
  }

  /**    
   * Returns the tasks that install the theme    
   * @private    
   * @param options The options to install the themes    
   * @return {object}    
   */

  _createClass(Theme, [{
    key: 'install',

    /**    
     * Copies the theme specified (reverting to default)    
     * over to the target directory. (Async)  
     * @return {Function} The promise.    
     */
    value: function install() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? this.options : arguments[0];

      var final = _when2['default'].defer();
      // Check if the template is enabled (legacy)      
      if (options.template && !options.kit) {
        final.resolve({
          template: _fsExtra2['default'].readFileSync(_path2['default'].resolve(__dirname, options.template.path)).toString()
        });
      } else {
        (function () {
          var tasks = Theme.tasks(options);
          (function (notify) {
            return tasks.copyAssets().tap(function () {
              notify('Copying Assets.');
            }).then(tasks.stringifyTemplate).tap(function () {
              notify('Rendering template.');
            }).then(final.resolve);
          })(tasks.showProgress);
        })();
      }
      return final.promise;
    }

    /**      
     * Copies the theme specified (reverting to default)    
     * over to the target directory. (Sync)
     * @return The template    
     */
  }, {
    key: 'installSync',
    value: function installSync() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? this.options : arguments[0];

      if (options.template && options.template.path) {
        return {
          template: _fsExtra2['default'].readFileSync(_path2['default'].resolve(__dirname, options.template.path)).toString()
        };
      } else {
        var tasks = Theme.tasks(options);
        tasks.copyAssetsSync();
        tasks.showProgress('Copying assets.');
        tasks.stringifyTemplateSync();
        tasks.showProgress('Reading template.');
        tasks.showProgress('Done.');
      }
      return {
        template: ''
      };
    }
  }], [{
    key: 'tasks',
    value: function tasks(options) {
      // Sources    
      var config = {
        src: options.template ? options.template.path : options.theme.path,
        dest: options.target.path,
        paths: {
          css: {
            src: 'assets/css',
            dest: 'css'
          },
          js: {
            src: 'assets/js',
            dest: 'js'
          }
        }
      };
      return {
        /**        
         * Shows the progress for each command        
         */
        showProgress: function showProgress(command) {
          var max = arguments.length <= 1 || arguments[1] === undefined ? 200 : arguments[1];

          var count = 0;
          while (count < max) {
            (0, _logUpdate2['default'])('Mr. Doc [info]: ' + frame() + ' ' + command);
            count++;
          }
        },
        /**
         * Create necessary paths to destination folder (Async)        
         */
        copyAssets: function copyAssets() {
          var types = _lodash2['default'].keys(config.paths);
          var m = _when2['default'].map(types, function (type) {
            var d = _when2['default'].defer();
            var src = _path2['default'].join(config.src, config.paths[type].src);
            var dest = _path2['default'].join(config.dest, config.paths[type].dest);
            _fsExtra2['default'].copy(src, dest, {
              clobber: true
            }, function (error) {
              if (error) d.reject(error);else {
                d.resolve();
              }
            });
            return d.promise;
          });
          return m;
        },
        /**        
         * Create necessary paths to destination folder (Sync)       
         */
        copyAssetsSync: function copyAssetsSync() {
          var types = _lodash2['default'].keys(config.paths);
          _lodash2['default'].forEach(types, function (type) {
            var src = _path2['default'].join(config.src, config.paths[type].src);
            var dest = _path2['default'].join(config.dest, config.paths[type].dest);
            _fsExtra2['default'].copySync(src, dest, {
              clobber: true
            });
          });
        },
        /**        
         * Reads the template from the source and strigifies it. (Async)        
         */
        stringifyTemplate: function stringifyTemplate() {
          var d = _when2['default'].defer();
          var file = _path2['default'].join(config.src, 'template/index.jade');
          _fsExtra2['default'].readFile(file, function (error, data) {
            if (error) d.reject(error);else d.resolve({
              template: data.toString()
            });
          });
          return d.promise;
        },
        /**        
         * Reads the template from the source and strigifies it. (Sync)        
         */
        stringifyTemplateSync: function stringifyTemplateSync() {
          var file = _path2['default'].join(config.src, 'template/index.jade');
          return _fsExtra2['default'].readFileSync(file);
        }
      };
    }

    /**    
     * Find the theme specified    
     * @param {String} theme The theme to find    
     * @return {Object} The theme.    
     */
  }, {
    key: 'findTheme',
    value: function findTheme(theme) {
      var DEFAULT_THEME = 'mr-doc-theme-default';
      var mrDocPath = _path2['default'].resolve(__dirname, '..');
      var projectPath = process.cwd();
      var locations = {
        // Path to the project's node_modules dir + theme      
        project: _path2['default'].join(projectPath, 'node_modules', theme),
        // Path to Doc's node_modules dir + theme      
        mrDoc: _path2['default'].join(mrDocPath, 'node_modules', theme),
        // Path to the Doc's default theme dir      
        'default': _path2['default'].join(mrDocPath, 'node_modules', DEFAULT_THEME)
      };
      if (_dir2['default'].exists(locations.mrDoc)) {
        console.log('Mr. Doc [info]: Using theme [' + theme + ']');
        return {
          name: theme,
          path: locations.mrDoc
        };
      }
      if (_dir2['default'].exists(locations.project)) {
        console.log('Mr. Doc [info]: Using theme [' + theme + ']');
        return {
          name: theme,
          path: locations.project
        };
      }
      console.log('Mr. Doc [warn]: Theme "' + theme + '" not found, reverting to default.');
      return {
        name: DEFAULT_THEME,
        path: locations['default']
      };
    }
  }]);

  return Theme;
})();

exports['default'] = Theme;
module.exports = exports['default'];
//# sourceMappingURL=source maps/theme.js.map