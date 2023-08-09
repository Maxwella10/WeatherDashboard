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
var currentData = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;
var forecastData = `https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}`;