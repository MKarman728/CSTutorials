/* ========== *
* Challenge 8 *
* =========== */


function range(start, end, string="") {
    if (start > end){
        console.log("");
    }
    else if(start === end){
        string += start;
        console.log(string);
    }
    else{
        string += start.toString()+", ";
        let value = start+1;
        range(value, end, string);
    }
  }
  
  //Uncomment the lines below to test your code
  range(1,7) //=> 1, 2, 3, 4
  range(4,2) //=>