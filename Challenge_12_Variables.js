/* =========== *
* Challenge 12 *
* ============ */

function disemvowel(string) {
    // your code here...
    let regEx = /(a|e|i|o|u)/ig
    return string.replace(regEx,"");
  }
  
  
  //Uncomment the lines below to test your function:
  
  console.log(disemvowel('CodeSmith')); // => 'CdSmth'
  console.log(disemvowel('BANANA')); // => 'BNN'
  console.log(disemvowel('hello world')); // => 'hll wrld'
  