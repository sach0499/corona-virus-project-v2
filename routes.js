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
    res.status(201).json({
      status: "failure",
      message: "Try Again Later!",
    });
  }
};

exports.getHistory = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;

    const histories = await History.find({})
      .limit(limit)
      .select(["-_id", "-__v"]);

    res.status(200).json({
      message: "success",
      data: histories,
    });
  } catch {
    res.status(201).json({
      status: "failure",
      message: "Try Again Later!",
    });
  }
};
