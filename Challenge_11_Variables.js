/* =========== *
* Challenge 11 *
* ============ */

function longestWord(sentence) {
    // your code here...
    let longestWord = "";
    let max = 0;
    let array = sentence.split(" ");
    for(let i = 0 ; i < array.length; i++){
        if(array[i].length >= max){
            longestWord = array[i];
        }
    }
    return longestWord;
  }
  
  //Uncomment the lines below to test your function:
  
  console.log(longestWord('my JavaScript is exceptional')); // => 'exceptional'
  console.log(longestWord('hate having hungry hippos')); // => 'hippos'
  console.log(longestWord('JavaScript')); // => 'JavaScript'
  console.log(longestWord('')); // => ''
  