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
