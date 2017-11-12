const express = require('express');
const path = require('path');

const app = express();
app.get('*', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});
app.listen(80, () => console.log('Express server running'));