const express = require('express');
const path = require('path');
const fs = require('fs');
const pug = require('pug');

const app = express();

fs.readdirSync('.', (err, files) => {
  if (err) {throw err;}
  console.log(files);
});
app.use(express.static(__dirname));
app.set('view engine', 'pug');
app.get('/', (req, res, next) => {
  fs.readdir(path.join(__dirname, 'P90X3'), (err, files) => {
    console.log(files);
    files = files
      .map(name => `<a href="http://172.104.145.38/P90X3/${name}">${name}</a>`);
    return res.render('index', {files});
  });
});
app.listen(80, () => console.log('Express server running'));