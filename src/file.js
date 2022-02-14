function btnNextJoke() {
    fetch('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(function (response) { return response.json(); })
        .then(function (data) { console.log(data.joke); })["catch"](function (error) { return console.log(error); });
}
