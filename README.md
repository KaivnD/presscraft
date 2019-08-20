<!-- x=0 y=0 z=0 -->
# Press Craft {.display-2 .text-center}

---
[![npm](https://img.shields.io/npm/v/presscraft.svg)](https://www.npmjs.com/package/presscraft)

You can create impress.js presentations simply with a MarkDown document Dynamicly.  
**Noitic:This very markdown file is also a impress.js presentation**  
Presscraft will handle sync your MarkDown File.  
What is impress.js ? if you are wondering, you can check out this magic repository [impress.js](https://github.com/impress/impress.js), which is why Presscraft can work.  
Just simply press right arrow or space bar

------
<!-- x=0 y=2000 -->
# See ! It's very easy

Just type `-` six times in your markdown file wherever you want, then you can create a presentation step, and put this step location at the beginning of the step like `<!-- x=0 y=2000 -->`, this comment, which will be removed in browser, descrip this step location. For Example:
this markdow file you are reading.

------
<!-- x=2000 y=2000 rotate=90 -->
# Installation

---
```bash
npm install presscraft --save-dev
```

For global install

```bash
npm install -g presscraft
```

In case you're using yarn

```bash
yarn add presscraft -D
```

```Javascript
const express = require('express')
const app = new express()
const http = require('http').createServer(app)
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
  http.listen(port, () => {
    const url = `http://localhost:${port}`
    logger.info(`PressCraft is actived, See ${url}`)
    open(url)
  })
}

```