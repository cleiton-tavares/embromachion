/*!
 * Consign exclude tests.
 * Autoload your scripts.
 *
 * @author Jarrad Seers <jarrad@seers.me>
 * @license MIT
 */


// Module dependencies.
var path = require('path');

module.exports = function(consign, assert) {

    it('Should ignore files using String', function() {
        // Test setup.
        var options = {
            cwd: 'test/test-app',
            verbose: false,
            ignore: ["four.js"]
        };
        var instance = consign(options).include('models')
            , files = [
                'models/one.js',
                'models/three.js',
                'models/two.js'
            ].map(function(file) {
                return path.resolve(path.join(options.cwd, file));
            })
            ;
        assert.deepEqual(files, instance._files);
    });

    it('Should ignore files using RegExp', function() {
        var options = {
            cwd: 'test/test-app',
            verbose: false,
            ignore: [/four\.js/]
        };
        var instance = consign(options).include('models')
            , files = [
                'models/one.js',
                'models/three.js',
                'models/two.js'
            ].map(function(file) {
                return path.resolve(path.join(options.cwd, file));
            })
            ;
        assert.deepEqual(files, instance._files);
    });

    it('Should ignore files using Mixed Values (RegExp and String)', function() {
        var options = {
            cwd: 'test/test-app',
            verbose: false,
            ignore: ["one.js", /four/]
        };
        var instance = consign(options).include('models')
            , files = [
                'models/three.js',
                'models/two.js'
            ].map(function(file) {
                return path.resolve(path.join(options.cwd, file));
            })
            ;
        console.log(instance._files);
        assert.deepEqual(files, instance._files);
    });
};

