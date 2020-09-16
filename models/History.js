const mongoose = require("mongoose");
const { stateSchema } = require("./State");

const historySchema = new mongoose.Schema({
  createdOn: {
    type: String,
    required: true,
  },

  aggregateData: {
    totalActive: {
      type: Number,
      default: 0,
    },

    increaseActive: {
      type: Number,
      default: 0,
    },
    totalRecovered: {
      type: Number,
      default: 0,
    },
    increaseRecovered: {
      type: Number,
      default: 0,
    },
    totalDeaths: {
      type: Number,
      default: 0,
    },
    increaseDeaths: {
      type: Number,
      default: 0,
    },
  },
});

const History = mongoose.model("History", historySchema);

module.exports = History;
