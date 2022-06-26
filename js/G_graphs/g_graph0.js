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
    ['Associate',       'Associate Applied Sci., Computer Sec. - CCC', 'Education',              new Date(2017, 1, 20),    new Date(2018, 5, 20),  null, 100,  null],
    ['Bachelor\'s PS',  'Bachelor\'s Political Science - UMBC',           'Education',              new Date(2019, 1, 15),    new Date(2021, 1, 24),  null, 100,  null],
    ['Bachelor\'s CS',  'Bachelor\'s Computer Science - UMBC',            'Education',              new Date(2018, 6, 3),     new Date(2021, 1, 24),  null, 100,  null],
    ['Master\'s',       'Master\'s Computer Science - UMBC',              'Education',              new Date(2021, 1, 24),    new Date(2023, 5, 15),  null, 70,   null],
    ['PhD',             'PhD Computer Science - UMBC',                    'Education',              new Date(2022, 6, 21),    new Date(2028, 5, 15),  null, 4,    null],
    ['TC',              'College Teaching & Learn. Sci. Cert. - UMBC',  'Education',              new Date(2021, 6, 1),     new Date(2022, 12, 15), null, 82,   null],
    ['LA',              'Congressional Legislative Intern',               'Work History',           new Date(2018, 8, 15),    new Date(2018, 12, 15), null, 100,  null],
    ['TA',              'Teaching Assistant - UMBC',                      'Work History',           new Date(2019, 8, 20),    new Date(2022, 12, 20), null, 91,   null],
    ['SE',              'Software Engineer - LSA',                        'Work History',           new Date(2021, 6, 1),     new Date(2022, 6, 24),  null, 100,  null],
    ['SEI',             'Software Engineer Intern - Sales Warp',          'Work History',           new Date(2020, 6, 1),     new Date(2020, 9, 30),  null, 100,  null],
    ['ITI',             'Information Technology Intern - Kite Tech.',     'Work History',           new Date(2017, 9, 11),    new Date(2018, 6, 15),  null, 100,  null],
    ['InfoSec',         'Info. Sys. Sec. Asso. Student Chap. President','Leadership Experience',  new Date(2017, 3, 1),     new Date(2018, 5, 20),  null, 100,  null],
    ['SGAs',            'Carroll Community College SGA Senator',          'Leadership Experience',  new Date(2017, 11, 10),   new Date(2018, 5, 20),  null, 100,  null],
    ['FB',              'UMBC SGA Finance Board Representative',          'Leadership Experience',  new Date(2019, 3, 10),    new Date(2020, 5, 20),  null, 100,  null],
    ['BD',              'Door To Virtue #46 Holding Corporation',         'Leadership Experience',  new Date(2020, 1, 24),    new Date(2025, 12, 30), null, 44,   null],
    ['LO',              'Door To Virtue #46 Blue Lodge Line Officer',     'Leadership Experience',  new Date(2019, 12, 20),   new Date(2025, 12, 30), null, 45,   null],

  ]);

  var options = {
    height: 510,
    tooltip: {tooltip: {isHtml: true}  },
    gantt: {
      trackHeight: 30
    },
  };

  var chart = new google.visualization.Gantt(document.getElementById('chart_div0'));

  chart.draw(data, options);
}
