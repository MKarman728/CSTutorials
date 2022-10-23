/* =========== *
* Challenge 7 *
* ============ */

function isPrime(number) {
    // your code here...
    if(number < 0 ){
        return false;
    }
    for(let i = 2; i < number-1; i++){
        if(number%i == 0){
            return false;
        }
    }
    return true;
  }
  
  console.log(isPrime(-7)); // => false
  console.log(isPrime(2)); // => true
  console.log(isPrime(11)); // => true
  console.log(isPrime(15)); // => false
