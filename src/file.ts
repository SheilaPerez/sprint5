function btnNextJoke() :void {
    fetch('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
        .then((response) => response.json())
        .then(data => { console.log(data.joke) })
        .catch(error => console.log(error))
}



