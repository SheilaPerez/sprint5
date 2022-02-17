var currentJoke;
var reportJokes = [];
var date = new Date();
var randomJoke;
function randomJokes() {
    fetch('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(function (response) { return response.json(); })
        .then(function (data) {
        randomJoke = "randomJokes";
        reportJokes.push({
            joke: data.joke,
            score: 0,
            date: date.toISOString()
        });
        currentJoke = data.joke;
        var joke = document.getElementById('jokes');
        joke.innerHTML = "\n            <p>".concat(data.joke, "</p>\n            <div class=\"pointsBtns mb-4\">\n                <button type=\"button\" onclick=\"sumPoints(1)\" class=\"pointBtn me-3 rounded\"><img class=\"starBtn pb-1\" src=\"/images/estrella.png\" alt=\"\"></button>\n                <button type=\"button\" onclick=\"sumPoints(2)\" class=\"pointBtn me-3 rounded\"><img class=\"starBtn pb-1\" src=\"/images/estrella.png\" alt=\"\"><img class=\"starBtn pb-1\" src=\"/images/estrella.png\" alt=\"\"></button>\n                <button type=\"button\" onclick=\"sumPoints(3)\" class=\"pointBtn me-3 rounded\"><img class=\"starBtn pb-1\" src=\"/images/estrella.png\" alt=\"\"><img class=\"starBtn pb-1\" src=\"/images/estrella.png\" alt=\"\"><img class=\"starBtn pb-1\" src=\"/images/estrella.png\" alt=\"\"></button>\n            </div>\n            ");
    })["catch"](function (error) { return console.log(error); });
}
function randomChuckJokes() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        randomJoke = "randomChuckJokes";
        reportJokes.push({
            joke: data.value,
            score: 0,
            date: date.toISOString()
        });
        currentJoke = data.value;
        var chuckJoke = document.getElementById('jokes');
        chuckJoke.innerHTML = "\n        <p>".concat(data.value, "</p>\n        <div class=\"pointsBtns mb-4\">\n            <button type=\"button\" onclick=\"sumPoints(1)\" class=\"pointBtn me-3 rounded\"><img class=\"starBtn pb-1\" src=\"/images/estrella.png\" alt=\"\"></button>\n            <button type=\"button\" onclick=\"sumPoints(2)\" class=\"pointBtn me-3 rounded\"><img class=\"starBtn pb-1\" src=\"/images/estrella.png\" alt=\"\"><img class=\"starBtn pb-1\" src=\"/images/estrella.png\" alt=\"\"></button>\n            <button type=\"button\" onclick=\"sumPoints(3)\" class=\"pointBtn me-3 rounded\"><img class=\"starBtn pb-1\" src=\"/images/estrella.png\" alt=\"\"><img class=\"starBtn pb-1\" src=\"/images/estrella.png\" alt=\"\"><img class=\"starBtn pb-1\" src=\"/images/estrella.png\" alt=\"\"></button>\n        </div>\n        ");
    })["catch"](function (error) { return console.log(error); });
}
function btnNextJoke() {
    if (randomJoke === "randomJokes") {
        randomChuckJokes();
    }
    else {
        randomJokes();
    }
}
function sumPoints(point) {
    reportJokes = reportJokes.map(function (saveJoke) {
        if (saveJoke.joke === currentJoke) {
            saveJoke.score = point;
        }
        return saveJoke;
    });
    console.log(reportJokes);
}
fetch('http://api.openweathermap.org/data/2.5/weather?lat=41&lon=2&appid=a368acc4079e173d9d9dd14dbc666c54')
    .then(function (response) { return response.json(); })
    .then(function (data) {
    var weather = document.getElementById('weather');
    weather.innerHTML = "\n        <div class=\"weather m-5\">\n            <p class=\"weatherTitle\">".concat('Wheather: ', "</p>\n            <img src=\"https://openweathermap.org/img/wn/").concat(data.weather[0].icon, ".png\">\n        </div>\n        ");
})["catch"](function (error) { return console.log(error); });
