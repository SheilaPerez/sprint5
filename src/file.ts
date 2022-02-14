function btnNextJoke() :void {
    fetch('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
        .then((response) => response.json())
        .then(data => {
            let joke = document.getElementById('jokes') 
            joke.innerHTML = `
            <p>${data.joke}</p>
            `
         })
        .catch(error => console.log(error))
}



