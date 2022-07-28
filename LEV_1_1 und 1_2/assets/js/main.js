
/* 
function intro(){
    console.log("Hello Magnus")
}
intro() */

/* const intro = () => {
    console.log('Hello Magnus')
}
intro() */

/* intro = () => console.log('Hello Magnus')

intro () */

// **************************** //


/* function intro (numA) {
    return 'das Ergebnis ist: ' + numA *5
}

console.log(intro(1+3)) */

/* const intro = (numB) => {
    console.log('das Ergebnis ist: ' + (numB + 32) )
}
intro(5)
 */

/* l

// klick = () => console.log(myName.value)


let x = 5 // --> wert 'x' ist ein assigment
console.log(x)

x = 7  // --> wert 'x' re-assigmet
console.log(x)

 */



/* let myName = document.querySelector('#my_name')

const klick = () => {
    console.log(myName.value)
}
console.log(myName)
 */

let headlineTest = document.getElementById('headline')
console.log(headlineTest)

headlineTest.innerHTML = 'test' 


// ---------------

let headline = document.getElementById('headline')
console.log(headline)


function me(){
    console.log('Hello World')
    headline.innerHTML = 'Hello Wolrd'
}    
me()


// ---------------


function zahl (x,y){
    console.log(x + y)
}
zahl(2,3)


zahl = (x,y) => console.log(x + y)

zahl (2,3)


// ---------------

function multi (zahlA, zahlB){
    alert(zahlA * zahlB)
}
/* multi(25,34) */

let multiA = (zahlC, zahlD) => alert(zahlC * zahlD)

/* multiA(3, 9) */


// ---------------

function type1 (i){
    console.log(typeof i)
}
type1(true)
// der typ ist "boolean"

type1 = i => console.log(typeof i)
type1(true)
// der typ ist "boolean"


// ---------------

function type2 (j) {
    console.log(typeof j)
}
type2('Hi')
// der typ ist "string"

type2 = j => console.log(typeof j)
type2('Hi')
// der typ ist "string"


// ---------------

function type3 (k) {
    console.log(typeof k)
}
type3(1)
// der typ ist "number"

type3 = k => console.log(typeof k)
type3(1)
// der typ ist "number"


// ---------------

function type4 (l){
    name = 'Magda'
    console.log(typeof l)
}
type4({name:'Magda'})
// der typ ist "objekt"

type4 = l => console.log(typeof l)
type4({name:'Magda'})
// der typ ist "objekt"



// ---------------

function type5 (a){
    console.log(typeof a)
}
type4([0.1])
// der typ ist "objekt"

type4 = a => console.log(typeof a)
type4([0.1])
// der typ ist "objekt"
