'use strict'

module.exports = function () {
  var args = Array.isArray(arguments[0])
    ? arguments[0]
    : [].slice.call(arguments)

  var tasks = args.map(function (task) {
    return new Promise(function (res, rej) {
      task
        .on('finish', res)
        .on('error', rej)
    })
  })

  return Promise.all(tasks)
}
