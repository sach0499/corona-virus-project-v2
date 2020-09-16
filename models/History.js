const mongoose = require("mongoose");
const { stateSchema } = require("./stateModels");

const historySchema = new mongoose.Schema({
  createdOn: {
    type: String,
    required: true,
  },

  data: {
    aggregatedData: {
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

    stateWiseList: [stateSchema],
  },
});

const History = mongoose.model("History", historySchema);

module.exports = History;
