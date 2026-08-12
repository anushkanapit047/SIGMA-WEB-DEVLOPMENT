// mfr is asign to map filter reduce
let arr = [1,2,3,4,5,6,7,8,9,10,11,12];

/*let newArr = []
for (let index = 0; index < arr.length; index++){
    const element = arr[index];
    newArr.push(element ** 2)
}
*/ // instead of using for loop we can use map method to do the same thing
let newArr = arr.map((e) => {
    return e ** 2
})


console.log(newArr)
const greaterThanSeven = (e) => {
    if(e > 7) {
        return true
    }
    return false
}

let filteredArr = arr.filter(greaterThanSeven)
console.log(filteredArr)

let arr2 = [ 1,2,3,4,5,6]

const red = (a,b) => {
    return a * b 
}

console.log(arr2.reduce(red))
