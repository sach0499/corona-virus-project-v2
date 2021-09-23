const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { getStatesData, getHistory } = require("./routes");
const putDataIntoDatabase = require("./dataScraper/putData");

const app = express();

app.use(cors());

const PASSWORD = process.env.PASSWORD;
const PORT = process.env.PORT;

mongoose.connect(
  `mongodb+srv://KillerSachin1999:${PASSWORD}@cluster0-ntjqw.mongodb.net/corona-virus-db?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.get("/api/v1/states", getStatesData);
app.get("/api/v1/histories", getHistory);

app.listen(PORT, () => console.log(`Server has started at ${PORT}`));

setInterval(putDataIntoDatabase, 24 * 3600 * 1000);
