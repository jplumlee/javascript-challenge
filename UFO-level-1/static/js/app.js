// from data.js
let tableData = data,

button = d3.select("#filter-btn");
// form = d3.select("#form");

// Get a reference to the table body
const tbody = d3.select("tbody");

tableData.forEach((ufoSighting) => {
let row = tbody.append("tr");
Object.values(ufoSighting).forEach(value => {
    let cell = row.append("td");
    cell.text(value);
});
});

// Complete the event handler function for the form
// Create event handlers 

button.on("click", function() {

// remove any children from the list
tbody.html("");

// Prevent the page from refreshing
d3.event.preventDefault();

// Select the input element and get the raw HTML node
// Get the value property of the input element
let inputElement = d3.select("#datetime"), 
    inputValue = inputElement.property("value");
    // filteredData = tableData;
    // if (inputElement) {
        filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    // }

console.log(filteredData);

filteredData.forEach((ufoSighting) => {
let row = tbody.append("tr");
Object.values(ufoSighting).forEach(value => {
    let cell = row.append("td");
    cell.text(value);
});
});


// let filteredData = tableData;

// d3.select(tableData).text(filteredData);

});