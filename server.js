const express = require("express");
const mongoose = require("mongoose");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const compression = require("compression");

const { getStatesData, getHistory } = require("./routes");
const putDataIntoDatabase = require("./dataScraper/putData");

const app = express();

// Set security HTTTP headers
app.use(helmet());

// Limit requests from same IP
const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message: "Too many request from the same IP. Please try again in one hour.",
});

app.use("/api", limiter);

// Data Sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data Sanitization against XSS attacks
app.use(xss());

// for compressing the text responses to client
app.use(compression());

mongoose.connect(
  `mongodb+srv://KillerSachin1999:Remu%24lup1n@cluster0-ntjqw.mongodb.net/corona-virus-db?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const PORT = process.env.PORT;

app.get("/api/v1/states", getStatesData);
app.get("/api/v1/histories", getHistory);

app.listen(PORT, () => console.log(`Server has started at ${PORT}`));

setInterval(putDataIntoDatabase, 24 * 3600 * 1000);
