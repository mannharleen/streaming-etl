// @flow

const { CustomTransformer, Pipeline, ObjectSource } = require("../")

let t = new CustomTransformer((chunk) => {
    return chunk.toString().toUpperCase()
})

let tobjectToString = new CustomTransformer((chunk) => {
    return JSON.stringify(chunk)
}, {"objectMode": true})

let p = new Pipeline()
// p.add(process.stdin, t, process.stdout)
p.add(new ObjectSource([{"a":1}]), tobjectToString, process.stdout)
p.run()