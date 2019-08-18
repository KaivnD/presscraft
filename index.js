const express = require('express')
const app = express()
var marked = require('marked')
var fs = require('fs')

const getMetaData = content => {
  const commentReg = /^\s*<!--\s*(.*?)\s*-->\s*$/gm;
    commentReg.lastIndex = 0;
    var match = commentReg.exec(content);
    if (!match) {
        return '';
    }
    var metaData = [];
    var metaArr = match[1].split(/\s+/);
    metaArr.forEach(function (meta) {
        var kv = meta.split('=');
        metaData.push([
            kv[0].replace(/^data-/, ''),
            kv[1].replace(/^('|")?(.*?)\1$/, '$2')
        ]);
    });
    return metaData.map(function (meta) {
        return 'data-' + meta[0] + '="' + meta[1] + '"';
    }).join(' ');
};

app.get('/', function (req, res) {
  const path = './test.md'
  var contentArr = String(fs.readFileSync(path)).split(/^-{6,}$/m);
  var html = '';
  contentArr.forEach(function (content) {
      var metaData = getMetaData(content);
      var tmp = '<div class="step"';
      if (metaData) {
          tmp += ' ' + metaData;
      }
      tmp += '>';
      tmp += marked(content);
      tmp += '</div>';
      html += tmp;
  });
  res.send(html.replace(/\<\!\-\-.*\-\-\>/g, ''));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
