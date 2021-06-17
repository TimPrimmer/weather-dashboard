var sButton = document.querySelector("#s-button");
var iBox = document.querySelector("#input-box");
var weatherBox = document.querySelector("#weather-section");
var currentTime = moment();

$(sButton).click(function () { // Fires when we click on the search button
  var city = iBox.value; // Gets the value of the input box
  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="
    + city
    + "&appid=ffa748d3a02711314373a2d30887317c"
    + "&units=imperial"; // returns the temp in f not kelvin

  console.log(apiUrl);
  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        makeCityBox(data);

      });
    } else {
      alert('Error: City not found');
    }
  });

});


var makeCityBox = function (data) {
  var favorable = 2;
  var moderate = 5;
  // severe I didnt need to add as I just test for over 5
  var lon = parseFloat(data.coord.lon);
  var lat = parseFloat(data.coord.lat);
  var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=ffa748d3a02711314373a2d30887317c";
  console.log(apiUrl);


  var tempDiv = $(document.createElement("div")).addClass("weather-info");
  var temph2 = $(document.createElement("h2"));
  var tempp = $(document.createElement("p")).addClass("info-text");
  temph2.text(data.name + " (" + currentTime.format("MM/DD/YYYY") + ") ");
  tempp.html(
    "Temp: " + data.main.temp + " °F" + "<br>" +
    "Wind: " + data.wind.speed + " MPH" + "<br>" +
    "Humidity: " + data.main.humidity + "%" + "<br>"
  );

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data2) {
        var tempString;
        var uv = parseFloat(data2.current.uvi);
        if (uv <= favorable) {
          tempString = "class='uv-box uv-favorable'";
        }
        else if (uv <= moderate) {
          tempString = "class='uv-box uv-moderate'";
        }
        else {
          tempString = "class='uv-box uv-severe'";
        }
        tempp.append("UV Index: " + "<span " + tempString + ">" + uv + "</span>");
        tempDiv.append(temph2);
        tempDiv.append(tempp);
        weatherBox.appendChild(tempDiv[0]); // The [0] gets the dom element

      });
    } else {
      console.log('Error: Location not found');
    }
  });

}
