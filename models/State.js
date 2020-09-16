const mongoose = require("mongoose");

exports.stateSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  totalActive: {
    type: Number,
    default: 0
  },

  increaseActive: {

    type: Number,
    default: 0
  }
  ,
  totalRecovered: {
    type: Number,
    default: 0
  },
  increaseRecovered: {

    type: Number,
    default: 0
  },
  totalDeaths: {
    type: Number,
    default: 0
  },
  increaseDeaths: {

    type: Number,
    default: 0
  }
});



exports.State = mongoose.model("State", exports.stateSchema);
