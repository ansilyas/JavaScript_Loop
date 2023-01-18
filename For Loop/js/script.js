//For Loop:
/*
for(let i=1; i<5; i++){
    console.log(i)
}
*/
// Add Two Number::::
/*
let sum=0
let n=prompt("Enter the Value of n")
n=Number.parseInt(n)
for(let i=1; i<n; i++){
    sum +=(i)
}
console.log(" sum of first "+ n + " Natural Number is "+ sum)
*/

// For-in-loop:
let obj={
    ans:89,
    ali:50,
    ahmed:34,
    rafay:67,
}
for (let a in obj) {
    console.log ("marks of "+ a + " are " + obj[a])
    }
