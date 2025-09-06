const express = require('express');
// const { MongoClient } = require('mongodb');
// require('dotenv').config();
// const uri = process.env.MONGODB_URI;
// const client = new MongoClient(uri);
const app = express();
const port = process.env.PORT || 3000;

app.use('/', require('./routes'))
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
