/* =========== *
* Challenge 10 *
* ============ */

function unique(array) {
    //your code goes here...
    let obj = {};
    let results =[];
    array.forEach((element)=>{obj[element]="";});
    for(el in obj){
        results.push(el);
    }
    console.log(results);
  }
  
  unique([1, 1, 2, 3, 3]) //=> [1, 2, 3]
  unique(["a", "a", "c", "aa", "b", "b"]) //=> ["a", "c", "aa", "b"]