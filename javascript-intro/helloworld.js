const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

console.log("Hello world")

// Not recommend to use
var x = "hello world"
var x = 10

// Use instead let and const
let var1 = true // Variable
const const1 = "Good by world" // Constant

// Error because const1 cannot be reassing
// const1 = "Hello world"

// Cannot redeclare the same variable inside the same scope
// let var1 = false

// Simple datatypes(Primitives)
const boolean1 = true
const numeric1 = 10.0
const string1 = "Marco"

// Compose data types
const array1 = [1, true, "MoOngy"]
const obj1 = {
    "name": "Marco Mendao",
    "age": 32,
    "gender": "M"
}

console.log("array[1] =", array1[1])

// Use OOP method
console.log("obj1.name =", obj1.name)
// Use Dicitonary method
console.log("obj1['name'] =", obj1['name'])

const rafael = {
    name: "Rafael Oliveira",
    subject: ["Python", "Java", "Javascript"],
    gender: "M"
}

// const subject = rafael.subject
// console.log("subject =",subject)
// Destruct object
const {subject, age} = rafael

console.log("subject =", subject)
console.log("age =", age)


// const array1 = [1, true, "MoOngy"]
// Destruct array
const [value1, value2, value3] = array1

console.log("value1 =", value1)
console.log("value2 =", value2)
console.log("value3 =", value3)

// const subject = ["Python", "Java", "Javascript"]
// Compose object
const luis = {
    name: "Luis",
    subject
}

// Compose List
array2 = [value3, value2, value1]
// Get other array position
// array2 = [value3, , value1]

// ... (Spread operator)
const adhan = {
    ...rafael,
    name: "Adhan"
}

console.log("adhan = ", adhan)

// Mutable
const jonhy = {
    ...rafael,
    name: "Jonhy"
}

jonhy.subject.push("React")
rafael.gender = "F"

console.log("jonhy.sunject =", jonhy.subject)
console.log("rafael.subject =", rafael.subject)
console.log("jonhy.gender =", jonhy.gender)
console.log("rafel.gender =", rafael.gender)

jonhy.hobbies = ["surf", "futebol"]

// Deep clone
const jonhyClone1 = JSON.parse(JSON.stringify(jonhy))
const jonhyClone2 = Object.assign({}, jonhy)
// Suggested native way of deep clone, available only on specific javascript interpreters
// const jonhyClone3 = structuredClone(jonhy)

function circleArea1(r){
    return 3.14 * r * r
}

const circleArea2 = function(r){
    return 3.14 * r * r
}

// Function can be assing to variables
console.log("circleArea1 =",circleArea1(4))
console.log("circleArea2 =", circleArea2(4))

// Arrow functions (params) => {function body}
const circleArea3 = (r) => {
    return 3.14 * r * r
}

// One liners
const circleArea4 = (r) => 3.14 * r * r
// Can be used only if one parameter function 
const cirlceArea5 = r => 3.14 * r * r

// Simple promise
const p1 = new Promise(() => {})

console.log(p1)

// fulfilled: The promise as been resolved
// rejected: The promise as been rejected
// pending:  Default state promise neither resolved or reject

// param resolve and reject are functions
const p2 = new Promise((resolve, reject) => {
    resolve("This is a promise that went fine")
})


console.log("Start my code ...")
// then is a method inside object Promise that receives a function () => {}
// Callback method then and catch
//p2.then((result) => {console.log(result)})
// Never gona be executed because p2 always resolves
// p2.catch((err) => {console.log(err)})

// const p3 = new Promise((resolve, reject) => {
//     reject("This is a promise that went bad")
// })

// Promise that went bad
//p3.catch(err => console.log("Fatal error",err))

console.log("End my code ...")

function circleArea6(r){
    return new Promise((resolve, reject) => {
        if(r <= 0){
            reject("Cannot calculate area with radius <= 0")
        }else{
            resolve(r*r*3.14)
        }
    })
}

// circleArea6(10).then((result) => {console.log(result)})

// circleArea6(-10).catch(err => console.log(err))

const url = "https://api.chucknorris.io/jokes/random"

// const httpRequest = new XMLHttpRequest()
// httpRequest.onreadystatechange = () => {
//     if(httpRequest.readyState === 4 && httpRequest.status === 200){
//         const joke = JSON.parse(httpRequest.responseText)
//         console.log(joke.value)
//     }
// }

// httpRequest.open("GET", url, true)
// httpRequest.send()

function getChuckNorrisJoke(){
    return new Promise((resolve, reject) => {
        const url = "https://api.chucknorris.io/jokes/random"
        const httpRequest = new XMLHttpRequest()
        httpRequest.onreadystatechange = function () {
            if(httpRequest.readyState === 4 && httpRequest.status === 200){
                const joke = JSON.parse(httpRequest.responseText)
                resolve(joke)
            }
        }
        httpRequest.open("GET", url, true)
        httpRequest.send()
    })
}

// Then, catch and finally (callback method)
console.log("Start ...")
getChuckNorrisJoke().then(joke => console.log("Joke 1",joke.value))
getChuckNorrisJoke().then(joke => console.log("Joke 2",joke.value))
getChuckNorrisJoke().then(joke => console.log("Joke 3",joke.value))
console.log("End ...")

// Async away

// Cannot apply sincronious programing rules to async programing
// This is wrong and dont work
/*
function getChuckNorrisJokeList(){
    const jokes = []

    getChuckNorrisJoke().then(joke => {
        jokes.push(joke)
    })
    getChuckNorrisJoke().then(joke => {
        jokes.push(joke)
    })
    getChuckNorrisJoke().then(joke => {
        jokes.push(joke)
    })
    getChuckNorrisJoke().then(joke => {
        jokes.push(joke)
    })

    return jokes
}
*/

// Works but its not recomended
// This is a callback hell
// We are using multiple async function 
// Please use async await method
function getChuckNorrisJokeList(){

    getChuckNorrisJoke().then(joke1 => {
        getChuckNorrisJoke().then(joke2 => {
            getChuckNorrisJoke().then( joke3 => {
                console.log("jokes =", [joke1.value,joke2.value,joke3.value])
            })
        })
    })
}

async function getChuckNorrisJokeList2() {
    const joke1 = await getChuckNorrisJoke()
    const joke2 = await getChuckNorrisJoke()
    const joke3 = await getChuckNorrisJoke()
    const joke4 = await getChuckNorrisJoke()

    console.log("jokes2 =", [joke1.value, joke2.value, joke3.value, joke4.value])
}

async function getChuckNorrisJokeList3() {
    const promises = [getChuckNorrisJoke(), getChuckNorrisJoke(), getChuckNorrisJoke()]

    const result = await Promise.all(promises)

    return result
}

getChuckNorrisJokeList()
getChuckNorrisJokeList2()
getChuckNorrisJokeList3()