// Challenge 4
function forEach(array, callback) {
    for(let i = 0; i < array.length; i++){
        callback(array[i]);
    }
}

// see for yourself if your forEach works!
let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet); 
