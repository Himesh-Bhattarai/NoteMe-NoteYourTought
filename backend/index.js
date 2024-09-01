const connectToMongoose = require('./database.js');
const express = require('express');

connectToMongoose();

const app = express()
const port = 5000;

app.use(express.json());

app.use('/api/auth', require('./routes/auth'))
app.use('/api/note', require('./routes/note'))




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

