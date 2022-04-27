console.log("Hello wikipedia");

// load the airtable library
var Airtable = require('airtable');

// connect to your acct
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyvuw3clkCl03I1i'
});
var base = Airtable.base('appOCWMo9JcDNrYle');

// set up a blank array for all your rows
const rows = [];

// this line of code says to get all the info from AirTable
base('Messages').select({
    // If you want to sort the records, include that here:
    //  sort: [
    //     {field: 'Title', direction: 'asc'}
    // ],
}).eachPage(gotPageofRows, gotAllRows);

// Here, we're going to get batches of rows from the airtable, 
// and add each row to our rows array.
function gotPageofRows(records, fetchNextPage) {
    console.log("gotPageofRows()");

    rows.push(...records);

    fetchNextPage();
}

// once we've got all rows in our array, the following code runs.
function gotAllRows(err) {
    console.log("gotAllRows()");

    // first, if there's an error we're going to log that.
    if (err) {
        console.log("Error loading rows");
        console.error(err);
        return;
    }

    // if no error, we're going to run two more functions.
    consoleLogRows();
    showRows();
}

// consoleLogRows simply logs each row to the console, 
// so you can see it's data and fields.
function consoleLogRows() {
    
    console.log("consoleLogRows()");
    
    rows.forEach((row) => {
        console.log("Row:", row);
    });

}

// showRows is what puts the content onto the HTML page
function showRows() {
    console.log("showRows()");
    rows.forEach((row) => {
        
        if (row.fields.DorisSalcedo) {
            const link = document.createElement("a");
            link.innerText = row.fields.DorisSalcedoDisplay;
            link.href = row.fields.DorisSalcedo;
            $("#DorisSalcedo").append(link);
        }
        

        if (row.fields.NariWard) {
            const link = document.createElement("a");
            link.innerText = row.fields.NariWardDisplay;
            link.href = row.fields.NariWard;
            $("#NariWard").append(link);
        }

        if (row.fields.UrsulavonRydingsvard) {
            const link = document.createElement("a");
            link.innerText = row.fields.UrsulavonRydingsvardDisplay;
            link.href = row.fields.UrsulavonRydingsvard;
            $("#UrsulavonRydingsvard").append(link);
        }

         if (row.fields.FrancisBacon) {
            const link = document.createElement("a");
            link.innerText = row.fields.FrancisBaconDisplay;
            link.href = row.fields.FrancisBacon;
            $("#FrancisBacon").append(link);
        }

        if (row.fields.EsDevlin) {
            const link = document.createElement("a");
            link.innerText = row.fields.EsDevlinDisplay;
            link.href = row.fields.EsDevlin;
            $("#EsDevlin").append(link);
        }

         if (row.fields.AlexanderMcQueen) {
            const link = document.createElement("a");
            link.innerText = row.fields.AlexanderMcQueenDisplay;
            llink.href = row.fields.AlexanderMcQueen;
            $("#AlexanderMcQueen").append(link);
        }
        
        
    })
}
