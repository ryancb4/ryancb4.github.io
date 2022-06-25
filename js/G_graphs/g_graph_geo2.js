google.charts.load('current', {
    'packages':['geochart'],
 
   });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      
      ['Lat', 'Long',  'Name'],
      [39.2904, -76.6122, 'University of Maryland Baltimore County'],
       [39.542622, -76.926941, 'LSA Autonomy'],

      [39.530946, -76.990415, 'Carroll Community College' ],

      [39.584180, -76.997063, 'Door to Virtue #46, AF & AM'],

      [38.9072, -77.0369, 'U.S. House of Representatives Internship'],
      [39.4195, -76.7803, 'Kite Tech. Internship'],
    ]);
    // {width: 556, height: 347, region: "US", resolution: "provinces"}
    var options = {
      displayMode: 'auto',
        region: "US-MD", resolution: "provinces",
      colorAxis: {colors: [ 'black', 'black']},
      backgroundColor: '#81d4fa',
      datalessRegionColor: '#e0e0c7',
      defaultColor: 'black',
      magnifyingGlass: {enable: true, zoomFactor: 2.5},
    };

    var chart = new google.visualization.GeoChart(document.getElementById('geochart-colors2'));
    chart.draw(data, options);

  };