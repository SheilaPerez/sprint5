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
        joke.innerHTML = "\n            <p>".concat(data.joke, "</p>\n            <div class=\"pointsBtns mb-4\">\n                <button type=\"button\" onclick=\"onePoint()\" class=\"pointBtn me-3 rounded\"><img class=\"starBtn pb-1\" src=\"/images/estrella.png\" alt=\"\"></button>\n                <button type=\"button\" onclick=\"twoPoints()\" class=\"pointBtn me-3 rounded\"><img class=\"starBtn pb-1\" src=\"/images/estrella.png\" alt=\"\"><img class=\"starBtn pb-1\" src=\"/images/estrella.png\" alt=\"\"></button>\n                <button type=\"button\" onclick=\"threePoints()\" class=\"pointBtn me-3 rounded\"><img class=\"starBtn pb-1\" src=\"/images/estrella.png\" alt=\"\"><img class=\"starBtn pb-1\" src=\"/images/estrella.png\" alt=\"\"><img class=\"starBtn pb-1\" src=\"/images/estrella.png\" alt=\"\"></button>\n            </div>\n            ");
    })["catch"](function (error) { return console.log(error); });
}
function onePoint() {
    reportJokes = reportJokes.map(function (saveJoke) {
        if (saveJoke.joke === currentJoke) {
            saveJoke.score = 1;
        }
        return saveJoke;
    });
    console.log(reportJokes);
}
function twoPoints() {
    reportJokes = reportJokes.map(function (saveJoke) {
        if (saveJoke.joke === currentJoke) {
            saveJoke.score = 2;
        }
        return saveJoke;
    });
    console.log(reportJokes);
}
function threePoints() {
    reportJokes = reportJokes.map(function (saveJoke) {
        if (saveJoke.joke === currentJoke) {
            saveJoke.score = 3;
        }
        return saveJoke;
    });
    console.log(reportJokes);
}
