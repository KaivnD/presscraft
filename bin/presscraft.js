const commander = require('commander')
const program = new commander.Command()
const PressCraft = require('../src/PressCraft')

program
  .option('-f, --file [string]', 'file')
  .option('-p, --port [string]', 'port')
  .parse(process.argv)

const app = new PressCraft(program.file, program.port)
app.run()
