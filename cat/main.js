// 后缀名可加可不加
let head = require('./head')
let body = require('./body.js')

exports.create = function (name) {
    return {
        name: name,
        head: head.create(),
        body: body.create()
    }
}