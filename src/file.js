function btnNextJoke() {
    fetch('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var joke = document.getElementById('jokes');
        joke.innerHTML = "\n            <p>".concat(data.joke, "</p>\n            ");
    })["catch"](function (error) { return console.log(error); });
}
