const express = require('express');
const { connectDB } = require('./config/db.js');
const app = express();
const port = 3000;
connectDB();
app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
