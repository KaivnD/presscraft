const express = require('express')
const app = new express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const path = require('path')
const chokidar = require('chokidar')
const convertToHtml = require('./lib')
const open = require('open')

module.exports = class {
  constructor(markdownFile, port) {
    this.path = markdownFile
    this.port = port
  }

  watch() {
    chokidar.watch(this.path).on('change', () => {
      io.sockets.emit('reload', convertToHtml('./test.md'))
    })
  }

  express() {
    app.use('/static', express.static('../public'))
    app.get('/', (req, res) => {
      res.sendFile(path.resolve('../public/index.html'))
      setTimeout(() => {
        io.sockets.emit('onload', convertToHtml('./test.md'))
      }, 100)
    })

    app.get('/impress.js', (req, res) => {
      res.sendFile(path.resolve('../node_modules/impress.js/js/impress.js'))
    })
    app.get('/impress.css', (req, res) => {
      res.sendFile(
        path.resolve('../node_modules/impress.js/css/impress-demo.css')
      )
    })
  }

  run() {
    this.express()
    http.listen(this.port, function() {
      open(`http://localhost:${this.port}`)
    })
  }
}
