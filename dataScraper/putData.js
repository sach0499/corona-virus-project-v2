const scrapeData = require('./scraper')



const putDataIntoDatabase = async ()=> {

     const data = await scrapeData();

     console.log(data)

}


putDataIntoDatabase();