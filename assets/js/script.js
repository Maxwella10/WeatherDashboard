var cityInput = document.querySelector(".cityInput");
var submitBtn = document.querySelector("#city-search-btn");
var historyUl = document.querySelector(".historyUl");
var cityInfo = document.querySelector(".cityInfo");
var icon = document.querySelector(".icon");
var temp = document.querySelector(".temp");
var wind = document.querySelector(".wind");
var humidity = document.querySelector(".humidity");
var forecastCard = document.querySelectorAll(".forecastCard");

var key = "d025108d5b5bff4e0d318b8b71ba2019";

submitBtn.addEventListener("click", function() {
    var cityName = cityInput.value;
    getCurrentData(cityName);
    getForecastData(cityName);
});

function getCurrentData(cityName) {
    fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`
        )
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data);
            cityInfo.innerHTML = data.name;
            temp.innerHTML = "Temp: " + data.main.temp + "℃";
            wind.innerHTML = "Wind: " + data.wind.speed + "kph";
            humidity.innerHTML = "Humidity: " + data.main.humidity + "%";
        });
}

function getForecastData(cityName) {
    fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}&units=metric`
        )
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data);
            for (var i = 0; i < forecastCard.length; i++) {
                // var example = document.createElement("p")
                // example.innerHTML = "Hello!"
                // forecastCard[i].append(example)
            }
        });
}