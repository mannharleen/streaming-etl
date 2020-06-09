const { Readable } = require('stream');

class ObjectSource extends Readable {
  constructor(array, options = {objectMode: true}) {    
    super(options);
    array.forEach(value => this.push(value))
    this.push(null)
  }
}

module.exports = ObjectSource;