// Challenge 5
function mapWith(array, callback) {
    let results = [];
    array.forEach(element => {
        results.push(callback(element));
    });
    return results;
}

let arr=[1, 2, 3, 4, 5];
const multiByTwo = (element)=>{return element*2};

console.log(mapWith(arr, multiByTwo));