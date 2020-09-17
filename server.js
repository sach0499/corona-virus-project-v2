const express = require("express");
const mongoose = require("mongoose");

const { getStatesData, getHistory } = require("./routes");
const putDataIntoDatabase = require('./dataScraper/putData')

mongoose.connect("mongodb://localhost:27017/corona-virus-db-v2", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

const PORT = 4300;

app.get("/api/v1/states", getStatesData);
app.get("/api/v1/histories", getHistory);

app.listen(PORT, () => console.log(`Server has started at ${PORT}`));


setInterval(putDataIntoDatabase, 24*3600*1000);

