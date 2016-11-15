window.onload = function() { init() };

// var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1hMGMJriWaavla_2Pf-NfuL0HRTfhKGkyKLYWZAsrjWI/pubhtml';
// var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/15W-tVoLLIYyaqRwBA9nmkC3_9-Hx_X9SgE-cxGbjdXE/pubhtml?gid=1862368927&single=true';
var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1Cuu3yCxdJicN-YSo2RJB9lzMyDefNcfhJKiALMebPhw/pubhtml?gid=305673636&single=true';

function init() {
  Tabletop.init( {
    key: public_spreadsheet_url,
    callback: drawTable,
    simpleSheet: true
  })
}

function drawTable(sheets, tabletop) {
  var sheet = tabletop.sheets('Form Responses 1');

  sheet.column_names.shift();

  var column_names = sheet.column_names,
      students = sheet.elements,
      table = $("#main-table"),
      tbody = $("<tbody></tbody>");

  for(var i = 0; i < students.length; i++) {
    var student = students[i];
    var html_row = $("<tr></tr>");
    for(var j = 0; j < column_names.length; j++) {
      var column_name = column_names[j];
      if (student[column_name].indexOf('http') > -1) {
        $("<td><a target='_blank' href='" + student[column_name] + "'>" + student[column_name] + "</a></td>").appendTo(html_row);
      } else {
        $("<td></td>").text(student[column_name]).appendTo(html_row);
      }
    }
    tbody.append(html_row);
  }
  table.append(tbody);

  $('#main-table').DataTable({
    paging: false,
    autoWidth: false,
    searching: false,
    info: false
  });
}
