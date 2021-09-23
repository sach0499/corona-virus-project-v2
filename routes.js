const { State } = require("./models/State");
const History = require("./models/History");

exports.getStatesData = async (req, res) => {
  try {
    const sortParam = req.query.sort || "name";

    const statesData = await State.find({})
      .sort(sortParam)
      .select(["-_id", "-__v"]);

    res.status(200).json({
      status: "success",
      data: statesData,
    });
  } catch {
    res.status(500).json({
      status: "error",
      message: "Try Again Later!",
    });
  }
};

exports.getHistory = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;

    const histories = await History.find({}).sort( [['_id', -1]] )
      .limit(limit)
      .select(["-_id", "-__v"]);

      
    res.status(200).json({
      status: "success",
      data: histories,
    });
  } catch {
    res.status(500).json({
      status: "failure",
      message: "Try Again Later!",
    });
  }
};
