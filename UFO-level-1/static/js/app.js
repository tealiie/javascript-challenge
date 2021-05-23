// the data from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(tableData);

// populate the data into a table
tableData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// select the button
var button = d3.select("#filter-btn");

// create event handlers
button.on("click", runEnter);

function runEnter() {
    var inputDate = d3.select("#datetime").property("value");
    console.log(inputDate);

    filteredtable = tableData.filter(row =>  row.datetime === inputDate);
    console.log(filteredtable);

    // clear table 
    tbody.html("");

    // return filtered data
    filteredtable.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
  };
