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
    ['Associate',       'Associate Applied Science - Computer Sec.',      'Associate',    new Date(2017, 1, 20),  new Date(2018, 5, 20),  null, 100,  null],
    ['Bachelor\'s PS',  'Bachelor\'s Political Science',  'Bachelor\'s',  new Date(2019, 1, 15),  new Date(2021, 1, 24),  null, 100,  null],
    ['Bachelor\'s CS',  'Bachelor\'s Computer Science',   'Bachelor\'s',  new Date(2018, 6, 3),   new Date(2021, 1, 24),  null, 100,  null],
    ['Master/Bachelor', 'Joint MS/BS Computer Science',   'MS/BS',        new Date(2020, 1, 15),  new Date(2021, 1, 24),  null, 100,  'Bachelor\'s CS'],
    ['Master\'s',       'Master\'s Computer Science',     'Master\'s',    new Date(2021, 1, 24),  new Date(2023, 5, 15),  null, 70,   'Master/Bachelor'],
    ['PhD',             'PhD Computer Science',           'PhD',          new Date(2022, 6, 21),  new Date(2028, 5, 15),  null, 3.5,   'Master\'s'],
    ['TC',              'College Teaching & Learning Sci. Certificate',           'Tcert',          new Date(2021, 6, 1),  new Date(2022, 12, 15),  null, 82,   null],

  ]);

  var options = {
    height: 250,
    tooltip: {tooltip: {isHtml: true}  },
    gantt: {
      trackHeight: 30
    },
  };

  var chart = new google.visualization.Gantt(document.getElementById('chart_div1'));

  chart.draw(data, options);
}

