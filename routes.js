const {State} = require("./models/State");

exports.getStatesData = async (req, res) => {

  const sortParam = req.query.sort || "name";

  const statesData = await State.find({}).sort(sortParam);

  res.status(200).json({

    massage: 'success',
    data: statesData
  })
 

};

exports.getHistory = (req, res) => {};
