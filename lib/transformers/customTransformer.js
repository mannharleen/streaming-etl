// @flow
const { Transform } = require('stream');

class CustomTransformer extends Transform {
    constructor(func, options) {
        super(options);
        this.func = func        
    }

    _transform(chunk, encoding, callback) {
        let result
        try {
            result = this.func(chunk)
            callback(null, result)
        } catch (e) {
            callback(e)
        }        
    }
}

module.exports = CustomTransformer;