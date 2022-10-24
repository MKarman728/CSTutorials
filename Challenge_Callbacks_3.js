function map(array, callback) {
    results =[]
    for(let i = 0; i < array.length; i++){
        results.push(callback(array[i]))
    }
    return results;
}
const addTwo = (num) => {return num + 2};
console.log(map([1, 2, 3], addTwo)); // [3, 4, 5]
