const { Worker } = require('worker_threads')

const bindings = require('./examples/napi/index.node')

console.log(bindings)

const w = new Worker('./worker_thread.js')
