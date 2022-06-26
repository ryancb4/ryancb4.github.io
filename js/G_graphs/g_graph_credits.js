google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

var data = new google.visualization.DataTable();
data.addColumn('date', 'Semester');
  
data.addColumn('number', 'Semester Total');
data.addColumn('number', 'Undergraduate credits');
 
data.addColumn('number', 'Graduate credits');
 
data.addRows([
  [ new Date(2016, 12, 1),   0,     0,   null],
  [ new Date(2017, 2, 1),   12,     12,   null],
  [ new Date(2017, 5, 1),   6,     6,   null],
  [ new Date(2017, 8, 1),   18,     18,   null],
  [ new Date(2017, 12, 1),   3,     3,   null],
  [ new Date(2018, 2, 1),   11,     11,   null],
  [ new Date(2018, 5, 1),   6,     6,   null],
  [ new Date(2018, 8, 1),   19,     19,   null],
  [ new Date(2018, 12, 1),   4,     4,   null],
  [ new Date(2019, 2, 1),   20,     20,   null],
  [ new Date(2019, 5, 1),   13,     13,   null],
  [ new Date(2019, 8, 1),   23,     23,   null],
  [ new Date(2019, 12, 1),   6,     6,    0],
  [ new Date(2020, 2, 1),   21,     19,   3],
  [ new Date(2020, 5, 1),   3,     3,    0],
  [ new Date(2020, 8, 1),   16,     10,    6],
  [ new Date(2020, 12, 1),   3,     3,    0],
  [ new Date(2021, 2, 1),   9,     null, 9],
  [ new Date(2021, 5, 1),   3,     null, 3],
  [ new Date(2021, 8, 1),   12,     null, 12,  ],
  [ new Date(2021, 12, 1),   0,     null, 0,  ],
  [ new Date(2022, 2, 1),   9,     null, 9,  ],
  [ new Date(2022, 5, 1),   0,     null, 0,  ],
  [ new Date(2022, 8, 1),   9,     null, 9,  ],

]);

var options = {
  chart: {
    title: 'Credits Per Semester',
    subtitle: '42 Graduate Credits, 173 Undergraduate Credits'
  },
  hAxis: {
    displayAnnotations: true,
    
    slantedText:true,
    slantedTextAngle:45,
    
  },
   height: 400
};

var chart = new google.charts.Line(document.getElementById('chart_div_credits'));

chart.draw(data, google.charts.Line.convertOptions(options));
}
