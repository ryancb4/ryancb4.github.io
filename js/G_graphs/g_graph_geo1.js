google.charts.load('current', {
    'packages':['geochart'],
    // Note: Because this chart requires geocoding, you'll need mapsApiKey.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
 ['State', 'Education'],
['US-MD', 100],

    ]);
    // {width: 556, height: 347, region: "US", resolution: "provinces"}
    var options = {
        region: "US", resolution: "provinces",
      colorAxis: {colors: [ 'black', '#00853f']},
      backgroundColor: '#81d4fa',
      datalessRegionColor: '#e0e0c7',
      defaultColor: '#f5f5f5',
      legend:null,
    };

    var chart = new google.visualization.GeoChart(document.getElementById('geochart-colors'));
    chart.draw(data, options);

  };