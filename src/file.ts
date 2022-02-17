interface Joke {
    joke: string,
    score: number,
    date: string
}
let currentJoke;
let reportJokes: Joke[] = [];
const date = new Date();

function btnNextJoke(): void {
    fetch('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
        .then((response) => response.json())
        .then(data => {
            reportJokes.push({
                joke: data.joke,
                score: 0,
                date: date.toISOString()
            });
            currentJoke = data.joke;
            console.log(data.joke)
            let joke = document.getElementById('jokes') 
            joke.innerHTML = `
            <p>${data.joke}</p>
            <div class="pointsBtns mb-4">
                <button type="button" onclick="sumPoints(1)" class="pointBtn me-3 rounded"><img class="starBtn pb-1" src="/images/estrella.png" alt=""></button>
                <button type="button" onclick="sumPoints(2)" class="pointBtn me-3 rounded"><img class="starBtn pb-1" src="/images/estrella.png" alt=""><img class="starBtn pb-1" src="/images/estrella.png" alt=""></button>
                <button type="button" onclick="sumPoints(3)" class="pointBtn me-3 rounded"><img class="starBtn pb-1" src="/images/estrella.png" alt=""><img class="starBtn pb-1" src="/images/estrella.png" alt=""><img class="starBtn pb-1" src="/images/estrella.png" alt=""></button>
            </div>
            `
         })
        .catch(error => console.log(error))
}

function sumPoints(point: number) {
    reportJokes = reportJokes.map((saveJoke: Joke) => { 
        if (saveJoke.joke === currentJoke) {
            saveJoke.score = point
        }
        return saveJoke;
    })

    console.log(reportJokes);
}

fetch('http://api.openweathermap.org/data/2.5/weather?lat=41&lon=2&appid=a368acc4079e173d9d9dd14dbc666c54')
    .then((response) => response.json())
    .then((data) => { console.log(data)
        let weather = document.getElementById('weather');
        weather.innerHTML = `
        <p>${data.weather[0].description}</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">`
    })
    .catch(error => console.log(error))





