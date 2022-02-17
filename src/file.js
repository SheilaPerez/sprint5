var currentJoke;
var reportJokes = [];
var date = new Date();
function btnNextJoke() {
    fetch('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(function (response) { return response.json(); })
        .then(function (data) {
        reportJokes.push({
            joke: data.joke,
            score: 0,
            date: date.toISOString()
        });
        currentJoke = data.joke;
        console.log(data.joke);
        var joke = document.getElementById('jokes');
        joke.innerHTML = "\n            <p>".concat(data.joke, "</p>\n            <div class=\"pointsBtns mb-4\">\n                <button type=\"button\" onclick=\"sumPoints(1)\" class=\"pointBtn me-3 rounded\"><img class=\"starBtn pb-1\" src=\"/images/estrella.png\" alt=\"\"></button>\n                <button type=\"button\" onclick=\"sumPoints(2)\" class=\"pointBtn me-3 rounded\"><img class=\"starBtn pb-1\" src=\"/images/estrella.png\" alt=\"\"><img class=\"starBtn pb-1\" src=\"/images/estrella.png\" alt=\"\"></button>\n                <button type=\"button\" onclick=\"sumPoints(3)\" class=\"pointBtn me-3 rounded\"><img class=\"starBtn pb-1\" src=\"/images/estrella.png\" alt=\"\"><img class=\"starBtn pb-1\" src=\"/images/estrella.png\" alt=\"\"><img class=\"starBtn pb-1\" src=\"/images/estrella.png\" alt=\"\"></button>\n            </div>\n            ");
    })["catch"](function (error) { return console.log(error); });
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
    console.log(data);
    var weather = document.getElementById('weather');
    weather.innerHTML = "\n        <p>".concat(data.weather[0].description, "</p>\n        <img src=\"https://openweathermap.org/img/wn/").concat(data.weather[0].icon, ".png\">");
})["catch"](function (error) { return console.log(error); });
