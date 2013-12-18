var mongoose = require('mongoose'),
    Query = mongoose.Query,
    Model = mongoose.Model,
    Promise = mongoose.Promise;


Query.prototype.migrate = function() {
    var versions = require(process.cwd() + '/migrations/.versions.json');
    var opts = this._mongooseOptions;

    console.log(opts);

    // TODO return if schema does not have a __m field.
    // TODO add query post processing

    this.addBack(function(err, args) {
        // TODO return if dataset is lean

    });

    return this;
};


/**
 * Migration plugin
 */
module.exports = exports = function(schema, options) {
    var versions = require(process.cwd() + '/migrations/.versions.json');
    var opts = options || {},
        migrationVersionField = '__m';  // Hardcoding
        newField = {};

    newField[migrationVersionField] = {type: Number, default: 0};
    schema.add(newField);

    schema.statics.migrate = function(docs, cb) {
    };
};