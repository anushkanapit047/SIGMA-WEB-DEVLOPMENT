/* Create a faultu calculator using Javascript

This faulty calculator does following :
1.It takes two numbers as input from the user
2. It performs wrong operations as follows:

+ ----> -
* ----> +
- ----> /
/ ----> **

it performs wrong operation 10% of the times

*/

let random = math.random()
let a = prompt("Enter first number: ")
let b = prompt("Enter second number: ")
let c = prompt("Enter operation you want to perform: ")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"



}

if (random > 0.1) {
    // perform correct operation
    alert('The result is ${a} ${c} ${b}');
}

else {
    // perform wrong calculation
    c = obj[c]
     alert('the result is ${a} ${c} ${b}');
    }