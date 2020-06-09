const { pipeline } = require("stream")

/**
 * Represents single pipeline with no branches
 */
class Pipeline {
    nodes = []
    constructor() {

    }

    add(...nodes) {
        this.nodes.push(...nodes)
    }

    run() {
        pipeline(...this.nodes, (err) => {
            if (err) {
                console.error('Pipeline failed.', err);
            } else {
                console.log('Pipeline succeeded.');
            }
        })
    }
}

module.exports = Pipeline