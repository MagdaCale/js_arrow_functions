

/* function born (yearBorn){
    return 2022 - yearBorn
}
console.log(born(1989))
 */



function ageDiff (age1, age2){
    let alterDiff = age1 - age2

    if (age1 >= age2){
        alterDiff = age1 - age2
    } 
    return alterDiff

}

console.log(ageDiff(24, 12))
// age Diff. 412y

console.log(ageDiff(39,34))
// age Diff. 5y

console.log(ageDiff(78,35))
// age Diff. 42y
