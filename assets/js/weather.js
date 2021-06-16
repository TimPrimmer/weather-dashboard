sButton = document.querySelector("#s-button");
iBox = document.querySelector("#input-box");

$(sButton).click(function () { // Fires when we click on the search button
  var city = iBox.value;
  console.log(city);
  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=ffa748d3a02711314373a2d30887317c";
  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayRepos(data.items, language);
      });
    } else {
      alert('Error: City not found');
    }
  });
});