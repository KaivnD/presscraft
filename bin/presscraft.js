const commander = require('commander')
const program = new commander.Command()

program
  .command('file')
  .alias('f')
  .description('MarkDown文件')
  .action(() => {})

program.parse(process.argv)
