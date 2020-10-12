const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://yurim:9934@boilerplate.pcwcs.mongodb.net/boilerplate?retryWrites=true&w=majority',{
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello world'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
