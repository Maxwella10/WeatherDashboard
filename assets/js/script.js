var cityInput = document.querySelector(".cityInput");
var submitBtn = document.querySelector(".submitBtn");
var historyUl = document.querySelector(".historyUl");
var cityInfo = document.querySelector(".cityInfo");
var icon = document.querySelector(".icon");
var temp = document.querySelector(".temp");
var wind = document.querySelector(".wind");
var humidity = document.querySelector(".humidity");
var forecastCard = document.querySelector(".forecastCard");

var key = "d025108d5b5bff4e0d318b8b71ba2019";

submitBtn.addEventListener("click", function() {
    var cityName = cityInput.value;
    getCurrentData(cityName);
    getForecastData(cityName);
});

function getCurrentData(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`)
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            console.log(data)
        })
}

function getForecastData(cityName) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}`)
        .then(function(res) {
            return res.json()
        })
        .then(function(data) {
            console.log(data)
        })
}