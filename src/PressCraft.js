const express = require('express')
const app = new express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const path = require('path')
const chokidar = require('chokidar')
const convertToHtml = require('./lib')
const open = require('open')
const log4js = require('log4js');
const logger = log4js.getLogger();
log4js.configure({
  appenders: { console: { type: 'console' } },
  categories: { default: { appenders: ['console'], level: 'info' } }
})

module.exports = function (file, port) {
  chokidar.watch(file).on('change', () => {
    io.sockets.emit('reload')
    logger.info(`${file} is changed, reloading...`)
  })
  const root = path.resolve(__dirname, '..')
  app.use('/static', express.static(path.resolve(path.join(root, 'public'))))
  app.get('/', (req, res) =>
    res.sendFile(path.resolve(path.join(root, 'public', '/index.html')))
  )

  app.get('/press', (req, res) => res.send({ html: convertToHtml(file) }))

  app.get('/vue.js', (req, res) =>
    res.sendFile(path.resolve('./node_modules/vue/dist/vue.js'))
  )

  app.get('/impress.js', (req, res) =>
    res.sendFile(path.resolve('./node_modules/impress.js/js/impress.js'))
  )
  app.get('/impress.css', (req, res) =>
    res.sendFile(path.resolve('./node_modules/impress.js/css/impress-demo.css'))
  )
  http.listen(port, () => {
    const url = `http://localhost:${port}`
    logger.info(`PressCraft is actived, See ${url}`)
    open(url)
  })
}
