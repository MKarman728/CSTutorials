/* =========== *
* Challenge 15 *
* ============ */

function leastCommonMultiple(num1, num2) {
    // your code here...
    let max = num1 * num2;
    let array1 = [];
    let array2 = [];
    let newValue = 0;
    let i = 1;
    while(newValue <= max){
        array1.push(i*num1);
        ++i;
        newValue = num1*i;
    }
    newValue = 0;
    let j = 0;
    while(newValue <= max){
        array2.push(num2*j);
        ++j;
        newValue = num2 * j;
    }
    let filtered_Array = array1.filter(value => array2.includes(value));
    return filtered_Array[0];
  }
  
  
  //Uncomment the lines below to test your function:
  
  console.log(leastCommonMultiple(2, 3)); //=> 6
  console.log(leastCommonMultiple(6, 10)); //=> 30
  console.log(leastCommonMultiple(24, 26)); //=> 312
  