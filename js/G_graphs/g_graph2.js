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
    ['TA',   'Teaching Assistant',    'UMBC',      new Date(2019, 8, 20), new Date(2022, 12, 20),   null, 85, null],
    ['SE', 'Software Engineer', 'LSA',   new Date(2021, 6, 1),  new Date(2022, 6, 24),  null, 100, null],
    ['SEI', 'Software Engineer Intern',  'SW',   new Date(2020, 6, 1),  new Date(2020, 9, 30),   null, 100, null],
    ['LA', 'Congressional Legislative Intern', 'USH',   new Date(2018, 8, 15),  new Date(2018, 12, 15),  null, 100, null],
    ['ITI', 'Information Technology Intern', 'KT',    new Date(2017, 9, 11),  new Date(2018, 6, 15),  null, 100, null],

  ]);

  var options = {
    height: 200,
    tooltip: {tooltip: {isHtml: true}  },
    gantt: {
      trackHeight: 30
    },
  };

  var chart = new google.visualization.Gantt(document.getElementById('chart_div2'));

  chart.draw(data, options);
}
