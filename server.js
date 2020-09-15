const express = require('express');
const mongoose = require('mongoose')

const app = express();

const PORT = 4300;
const DB = "mongodb://localhost:27017/corona-virus-db-v2";

mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("Database is connected."));


app.listen(PORT, () => console.log(`Server has started at ${PORT}`));
