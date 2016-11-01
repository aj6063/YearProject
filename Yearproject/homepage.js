google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      var data = getData("year");
      var options = {
          title: 'Apple Stock Chart',
          hAxis: {title: 'Date',  titleTextStyle: {color: '#333', fontName: 'GillSans', fontSize: '30'}},
          vAxis: {title: 'Stock Price', titleTextStyle: {color: '#333', fontName: 'GillSans', fontSize: '30'},   minValue: 80}
        };
      function drawChart() {
        var chartData = google.visualization.arrayToDataTable(data);
       
        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(chartData, options);
      }

      function getData(dataRange) {

        var dataArray = [
        ['Date', 'Stock Value']

        ];

        var Base_URL = 'http://query.yahooapis.com/v1/public/yql?q=';
        var yql_query;  

        if (dataRange === "year") {
               yql_query= 'select * from yahoo.finance.historicaldata where symbol = "AAPL" and startDate= "2014-11-03" and endDate = "2015-11-03"';
      } else if (dataRange === "halfyear") {
        yql_query= 'select * from yahoo.finance.historicaldata where symbol = "AAPL" and startDate= "2015-05-03" and endDate = "2015-11-03"';
      };
      var yql_query_str = encodeURI(Base_URL+yql_query);
      var query_str_final = yql_query_str + "&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

      $.getJSON(query_str_final, function(data) {
      var stockArray = data.query.results.quote; 
      for (var i = stockArray.length; i > 0; i--) {
          var currentObject = stockArray[i-1];
          console.log(currentObject.Close);
          var pushedArray = [currentObject.Date, parseFloat(currentObject.Close)];
          dataArray.push(pushedArray);
        }
        var chartData = google.visualization.arrayToDataTable(dataArray);
        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(chartData, options);
    });
  };
      
      function buttonPressed(buttonTitle) {
        data = getData(buttonTitle)
        var chartData = google.visualization.arrayToDataTable(data);
        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(chartData, options);