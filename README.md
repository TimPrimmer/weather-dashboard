# Weather Dashboard

## Purpose
A weather tracking dashboard using the OpenWeather API, in which users can enter a city name and get a 5 day forecast for that city! Previously searched cities will show up in a list and are saved to local storage, so the next time you access the site you can view all the previoous searches

## Built With
* HTML
* CSS
* Javscript

# Website
https://timprimmer.github.io/weather-dashboard/
# Github Repo
https://github.com/TimPrimmer/weather-dashboard

# Screenshot
![Screenshot of Main Page](/assets/imgs/screenshot.png "Main Page")

# Challenges
This project was a fairly challenging one, whether it was getting the data or creating all the boxes and formatting said data. One complication was getting the correct dates to showup. I had to use moment to get the time data, but also use an additional moment API called moment-timezone to get some functions to calculate the difference in time zones. Sounds easy enough but it took me a while to figure out how to even do it, I intially tried making the function myself to convert the timezones but that was not the most efficient way to go.

Another challenge was displaying icons for the given weather (aka sun icon if its sunny, cloud icon if its overcast etc). Openweather sends back icon names in some of the API data, and I intially designed a function to return a HTML emoji based on that icon name. However I realized they actually have direct img urls of each icon that only differs with the icon name, so I converted the function into simply returning the correct image url of the icon. However the openweather icons mixed with the mock-up provided really looked bad, so I went with the initial emoji method instead.

The final complication was saving. I didnt know what we wanted to save, so I went with it saving the search history. I first programmed it to simply save the actual payload package (the data itself) and then load it along with all the previously searched options. However this method meant that if I were to load the page a day later, it should show a days-late weather forecast. I rewired the saving to simply be the search results itself, which upon clicking will re-fetch and display the data

## Contribution
Made with ❤️ by Tim Primmer


