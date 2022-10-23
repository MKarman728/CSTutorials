/* =========== *
* Challenge 13 *
* ============ */

function divisibleByFivePairSum(array){
    // your code here...
    let results = [];
    for(let i = 0; i < array.length-1; i++){
      for(let j=i+1; j<array.length; j++){
        if((array[i]+array[j])%5 === 0){
          results.push([i,j]);
        }
      }
    }
    return results;
  }
  
  
  //Uncomment the lines below to test your function:
  
  console.log(divisibleByFivePairSum([1, 5, 2, 0, 4])); // => [ [ 0, 4 ], [ 1, 3 ] ]
  console.log(divisibleByFivePairSum([13, 22, 8, -3, 12])); // => [[ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ]]
  