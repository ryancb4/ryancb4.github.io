google.charts.load('current', {'packages':['gantt']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Task ID');
  data.addColumn('string', 'Task Name');
  data.addColumn('string', 'Resource');
  data.addColumn('date', 'Start Date');
  data.addColumn('date', 'End Date');
  data.addColumn('number', 'Duration');
  data.addColumn('number', 'Percent Complete');
  data.addColumn('string', 'Dependencies');

  data.addRows([
    ['InfoSec',       'Info. Sys. Sec. Asso. Student Chapter President',      'InfoSec',    new Date(2017, 3, 1),  new Date(2018, 5, 20),  null, 100,  null],
    ['SGAs',  'Carroll Community College SGA Senator',  'SGAs',  new Date(2017, 11, 10),  new Date(2018, 5, 20),  null, 100,  null],
    ['FB',  'UMBC SGA Finance Board Representative',   'FB',  new Date(2019, 3, 10),   new Date(2020, 5, 20),  null, 100,  null],
    ['BD',       'Door To Virtue #46 Holding Corporation',     'BD',    new Date(2020, 1, 24),  new Date(2022, 12, 25),  null, 90,   null],
    ['LO',       'Door To Virtue #46 Blue Lodge Line Officer',     'BLLO',    new Date(2019, 12, 20),  new Date(2022, 12, 30),  null, 90,   null],

  ]);

  var options = {
    height: 200,
    tooltip: {tooltip: {isHtml: true}  },
    gantt: {
      trackHeight: 30
    },
  };

  var chart = new google.visualization.Gantt(document.getElementById('chart_div3'));

  chart.draw(data, options);
}
