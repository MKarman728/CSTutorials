/* ========== *
* Challenge 4 *
* =========== */


function buildGreeting(time, name) {
    //your code goes here...
    if(0<=time && time<=11){
        console.log(`Good Morning, ${name}!`);
    }
    else if(12<=time && time<=16){
        console.log(`Good Afternoon, ${name}!`);
    }
    else if(17<=time && time <= 24){
        console.log(`Good Evening, ${name}!`);
    }
    else{
        console.log(`That's not a real time, ${name}. Maybe you need some sleep!`);
    }
  }
  
  
  buildGreeting(8, "Maggie") //=> "Good Morning, Maggie!"
  buildGreeting(12, "John") //=> "Good Afternoon, John!"
  buildGreeting(22, "Stacey") //=> "Good Evening, Stacey!"
  buildGreeting(31, "Derrick") //=> "That's not a real time, Derrick. Maybe you need some sleep!"