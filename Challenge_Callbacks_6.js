// Challenge 6
function reduce(array, callback, initialValue) {
    let results = initialValue;
    for(let i = 0; i < array.length; i++){
        results = callback(array[i],results);
    }
    return results;
}

let arr = [1, 2, 3, 4, 5];
const cb = (num1, num2) => {return num1+num2;}
console.log(reduce(arr, cb, 0));