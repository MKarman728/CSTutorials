/* =========== *
* Challenge 9 *
* ============ */


function myIndexOf(array, ele){
    // your code here...
    for(let i = 0; i<array.length; i++){
        if(array[i]=== ele){
            return i;
        }
    }
    return -1;
  }
  
  console.log(myIndexOf([1, 2, 3, 4, 5], 5)) //=> 4
  console.log(myIndexOf(["a", "b", "c"], "a")) //=> 0
  console.log(myIndexOf(["a", "b", "c"], "d")) //=> -1
  