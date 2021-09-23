exports.getTodayDate = () => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  today = `${dd}-${mm}-${yyyy}`;

  return today;
};

exports.processTableRow = (tableRow) => {
  const state = {};
  const columns = tableRow.querySelectorAll("td");

  const rowTitles = [
    "serialNo.",
    "name",
    "totalActive",
    "increaseActive",
    "totalRecovered",
    "increaseRecovered",
    "totalDeaths",
    "increaseDeaths",
  ];

  columns.forEach((column, colIndex) => {
    if (colIndex === 1) {
      state[rowTitles[colIndex]] = col.textContent;
    } else if (colIndex === 3 || colIndex === 5 || colIndex === 7) {
      let num = parseInt(column.textContent) || 0;

      if (column.querySelector(".down") !== null) num *= -1;

      state[rowTitles[colIndex]] = num;
    } else if (colIndex === 2 || colIndex === 4 || colIndex === 6) {
      state[rowTitles[colIndex]] = parseInt(column.textContent);
    }
  });

  return state;
};

exports.findAggregateData = (stateWiseData) => {
  const aggregateData = {
    totalActive: 0,
    increaseActive: 0,
    totalRecovered: 0,
    increaseRecovered: 0,
    totalDeaths: 0,
    increaseDeaths: 0,
  };

  stateWiseData.forEach((el, index) => {
    aggregateData.totalActive += el.totalActive;
    aggregateData.increaseActive += el.increaseActive;
    aggregateData.totalRecovered += el.totalRecovered;
    aggregateData.increaseRecovered += el.increaseRecovered;
    aggregateData.totalDeaths += el.totalDeaths;
    aggregateData.increaseDeaths += el.increaseDeaths;
  });
};
