const fs = require('fs')
const md = require('markdown-it')()
md.use(require('markdown-it-attrs'), {
  leftDelimiter: '{',
  rightDelimiter: '}',
  allowedAttributes: []
})

const getMetaData = content => {
  const commentReg = /^\s*<!--\s*(.*?)\s*-->\s*$/gm
  commentReg.lastIndex = 0
  var match = commentReg.exec(content)
  if (!match) {
    return ''
  }
  var metaData = []
  var metaArr = match[1].split(/\s+/)
  metaArr.forEach(function(meta) {
    var kv = meta.split('=')
    metaData.push([
      kv[0].replace(/^data-/, ''),
      kv[1].replace(/^('|")?(.*?)\1$/, '$2')
    ])
  })
  return metaData
    .map(function(meta) {
      return 'data-' + meta[0] + '="' + meta[1] + '"'
    })
    .join(' ')
}

module.exports = function(path) {
  var contentArr = String(fs.readFileSync(path)).split(/^-{6,}$/m)
  var html = ''
  contentArr.forEach(function(content) {
    var metaData = getMetaData(content)
    var tmp = '<div class="step"'
    if (metaData) {
      tmp += ' ' + metaData
    }
    tmp += '>'
    tmp += md.render(content)
    tmp += '</div>'
    html += tmp
  })
  return html
}
