console.log("empieza");
fetch('https://icanhazdadjoke.com/', {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
})
    .then(function (response) { return response.json(); })
    .then(function (data) { return console.log(data); });
console.log("acaba");
/*
export interface User {
    name: string;
    age: number;
}

let myNumber: number = 0;
let myString: string = "asdfsdf";
let isTrue: boolean = false;
let myNull: null = null;
let myUndefined: undefined = undefined;

let myStringArrary: Array<string> = ["primero", "segundo"];
let myNumbersArray: Array<any> = [{}];


let myObject: User = {
    name: "Sheila",
    age: 23
}

function myFunction(age: number): void { }

function myTrueFunction(): boolean {
    return true;
}*/
