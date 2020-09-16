const mongoose = require('mongoose')
const scrapeData = require('./scraper')
const {State} = require('./../models/State')
const History = require('./../models/History')


const putDataIntoDatabase = async ()=> {

     const data = await  scrapeData();

     const stateInput = data.stateWiseData;
     const historyInput = {

          createdOn: data.todayDate,
          aggregateData: data.aggregateData
     }

    

     await History.create(historyInput);
     await State.deleteMany({});
     await State.create(stateInput);

}


module.exports = putDataIntoDatabase