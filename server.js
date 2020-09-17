const express = require("express");
const mongoose = require("mongoose");

const { getStatesData, getHistory } = require("./routes");
const putDataIntoDatabase = require('./dataScraper/putData')


mongoose.connect(`mongodb+srv://KillerSachin1999:Remu%24lup1n@cluster0-ntjqw.mongodb.net/corona-virus-db?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

const PORT = 4300;

app.get("/api/v1/states", getStatesData);
app.get("/api/v1/histories", getHistory);

app.listen(PORT, () => console.log(`Server has started at ${PORT}`));


setInterval(putDataIntoDatabase, 24*3600*1000);

