console.log('it works')


function sayHallo(username){
    // let myName = username --> dieser srit ist nicht nötig. da 'username' schon im paharameter ist
    // console.log('Hallo ' + username + geburtstag + Heimat)

    // return beendet eine Funktion und liefert den angegebenen Wert zurück
    return 74387 
    return 'Hall0 ' + username  //--> graut es aus, da er nur der ersten 'return Wert' ausgiebt (beendet eine funktion)

}

let name = sayHallo('Magda')  // funktion muss hier noch aufgerufen werde
console.log(name)


function sayWhereYouFrom(land = 'Germany'){
    console.log('Nice, you are from ' + land)
}

sayWhereYouFrom('USA')
sayWhereYouFrom()


// hoisting --> Funktionsdeklarationene werden automatisch nach ganz oben verschoben 
greed()
function greed(){
    console.log('Hello')
}


// hier gibt es kein hoisting 
// function as variable
let myNumber = function (){
    // diese Funktion ist anonym
    return (82839492)
}

myNumber()
console.log(myNumber())

// seit 2015 ES6
// Arrow Functions
const theNumber = () => {return 3334}
console.log(theNumber())

// der name 'zahl' ist ein pahrameter
const theNumberA = (zahl) => {
    console.log('first')
    return zahl
}
console.log(theNumberA(9999))



function adder(sumA, sumB){
    return sumA + sumB
}

let summe = adder(19,23) // --> so geht es auch
console.log(adder(5,6))
console.log(summe)  // --> dann das noch hinzufügen 


let adderB = (a, b) => {
    return a+b
}

console.log('als arrowfunction', adderB(29,3))

function multi(zahlA) {
    return zahlA*2
}
console.log(multi(5))

let multiA = (zahlA) =>{
    return zahlA
}
console.log(multiA(5))

let superCalc = (zahlA,zahlB) =>{
    return (zahlA+zahlB)*2   // --> js kann punkt vor strichrechnung 
}
console.log(superCalc(5,5))




let multiLang = (zahlA) => {
    return zahlA*2
}

// das geht nur weil wir einen Parameter haben und nur ein return statment nutzen
let multiKurz = zahlA => zahlA*2
console.log(multiKurz(8))



let myName = (name) => {
    name = 'Heat'
    return 'Hey ' + name
}
console.log(myName(name))



let stringKurz = name => 'Hallo ' + name
console.log(stringKurz('Heat'))