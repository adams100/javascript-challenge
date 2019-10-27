// from data.js





var tableData = data;
var button = d3.select("#filter-btn");
var input = d3.select("#datetime");
var datefilter = d3.select("#datetimefilter"); 
var cityfilter = d3.select("#city");
var statefilter = d3.select("#state");
var countryfilter = d3.select("#country");
var shapefilter = d3.select("#shape");

function filterchanged() {
    var tbody = d3.select("tbody");
    tbody.selectAll("td").remove();
    var dateval = d3.select("#datetimefilter").property("value");
    var cityval = d3.select("#city").property("value");
    var stateval = d3.select("#state").property("value");
    var countryval = d3.select("#country").property("value");
    var shapeval = d3.select("#shape").property("value");
    data.forEach(element => {
        datetime = element.datetime;
        city = element.city;
        state = element.state;
        country = element.country;
        shape = element.shape;
        duration = element.durationMinutes;
        comments = element.comments;
        if (datetime.includes(dateval) && city.includes(cityval) && state.includes(stateval) && country.includes(countryval) && shape.includes(shapeval)) {
            row = tbody.append("tr");
            row.append("td").text(datetime);
            row.append("td").text(city);
            row.append("td").text(state);
            row.append("td").text(country);
            row.append("td").text(shape);
            row.append("td").text(duration);
            row.append("td").text(comments);           
        }
    })
};



function filterbutton() {
    var tbody = d3.select("tbody");
    tbody.selectAll("td").remove();

    data.forEach(element => {
        var filterdate = input.property("value")

        if (element.datetime == filterdate) {
            row = tbody.append("tr");
            datetime = element.datetime;
            city = element.city;
            state = element.state;
            country = element.country;
            shape = element.shape;
            duration = element.durationMinutes;
            comments = element.comments;
        
            row.append("td").text(datetime);
            row.append("td").text(city);
            row.append("td").text(state);
            row.append("td").text(country);
            row.append("td").text(shape);
            row.append("td").text(duration);
            row.append("td").text(comments);
        }
    });
};







button.on("click", filterbutton);
datefilter.on("change", filterchanged);
cityfilter.on("change", filterchanged);
statefilter.on("change", filterchanged);
countryfilter.on("change", filterchanged);
shapefilter.on("change", filterchanged);


var tbody = d3.select("tbody");
data.forEach(element => {
    row = tbody.append("tr");
    
    datetime = element.datetime;
    city = element.city;
    state = element.state;
    country = element.country;
    shape = element.shape;
    duration = element.durationMinutes;
    comments = element.comments;

    row.append("td").text(datetime);
    row.append("td").text(city);
    row.append("td").text(state);
    row.append("td").text(country);
    row.append("td").text(shape);
    row.append("td").text(duration);
    row.append("td").text(comments);
});
