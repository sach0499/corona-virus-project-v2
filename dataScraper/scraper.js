const puppeteer = require('puppeteer')

const getTodayDate = () => {

     let today = new Date();
     const dd = String(today.getDate()).padStart(2, '0');
     const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
     const yyyy = today.getFullYear();

     today = `${dd}-${mm}-${yyyy}`
     
     return today;

}


const scrapeData = async () => {

  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.goto('https://www.mohfw.gov.in/');

  await page.click('a.open-table');
  await page.waitFor(5000);

  const stateWiseData = await page.evaluate(()=> {
 
  const rows = document.querySelectorAll('table.statetable tbody tr');
  const titles = ['serialNo.' ,'name', 'totalActive', 'increaseActive', 'totalRecovered', 'increaseRecovered', 'totalDeaths', 'increaseDeaths'];
  const data = []; 


  // this gets the statewiseData

  for(let i = 0; i < 35; i++){

    const state = {};
    const row = rows[i];
    const cols = row.querySelectorAll('td');

    cols.forEach((col, index)=> {


         if(index === 1)
             state[titles[index]] = col.textContent;
         
        else if(index === 3 || index === 5 || index === 7){


             let data = parseInt(col.textContent) || 0;

             if(col.querySelector('.down') !== null)
                    data *= -1;
             
             state[titles[index]] = data;
        }

        else if(index === 2 || index === 4 || index === 6){

           state[titles[index]] = parseInt(col.textContent);

        }


    })

    data.push(state)
     
  }

     return data;
   })


 await browser.close();


 const aggregateData = {

     totalActive: 0,
     increaseActive: 0,
     totalRecovered: 0,
     increaseRecovered: 0,
     totalDeaths: 0,
     increaseDeaths: 0
 };

 stateWiseData.forEach((el, index) => {

     aggregateData.totalActive += el.totalActive;
     aggregateData.increaseActive += el.increaseActive;
     aggregateData.totalRecovered += el.totalRecovered;
     aggregateData.increaseRecovered += el.increaseRecovered;
     aggregateData.totalDeaths += el.totalDeaths;
     aggregateData.increaseDeaths += el.increaseDeaths;
 })

 return {

     todayDate: getTodayDate(),
     aggregateData,
     stateWiseData
 };


}



module.exports = scrapeData;

