#!/usr/bin/env node
const commander = require('commander')
const program = new commander.Command()
const PressCraft = require('../src/PressCraft')

program
  .option('-f, --file [string]', 'file')
  .option('-p, --port [string]', 'port')
  .parse(process.argv)

PressCraft(program.file, program.port)
