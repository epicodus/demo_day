window.onload = function() { init() };

var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1mOpVH9eJM-EN7he0tQIjNPeceJGncwxUftdYbvG92oo/pubhtml';

function init() {
  Tabletop.init( {
    key: public_spreadsheet_url,
    callback: showInfo,
    simpleSheet: true
  })
}

function showInfo(data, tabletop) {
debugger
  console.log(data);
}
