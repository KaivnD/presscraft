const path = require('path')
const PressCraft = require('./src/PressCraft')
const app = new PressCraft((path.resolve('./test.md'), 3000))
app.run()
