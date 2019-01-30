'use strict'

const portscanner = require('portscanner')

module.exports = function (grunt) {
  grunt.registerTask('livereload-server', 'Start a livereload server on a free port.', function () {
    const done = this.async()

    const startLivereloadServerOnPort = (port) => {
      const lrserver = require('tiny-lr')()
      lrserver.listen(port, function (err) {
        if (err) {
          grunt.fail.warn(`Failed to start livereload server: ${err.toString()}`)
        }
        grunt.log.writeln(`Started livereload server on port ${port}`)
        grunt.config.set('_internal.livereload.server', lrserver)
        grunt.config.set('_internal.livereload.port', port)
        done()
      })
    }

    if (grunt.option('lr-server-port')) {
      startLivereloadServerOnPort(grunt.option('lr-server-port'))
    } else {
      const min = 35729

      const max = 60000

      const hostname = '127.0.0.1'
      portscanner.findAPortNotInUse(min, max, hostname, function (err, port) {
        if (err) {
          return done(err)
        }
        startLivereloadServerOnPort(port)
      })
    }
  })
}