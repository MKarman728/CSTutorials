/* =========== *
* Challenge 14 *
* ============ */

function highestScore(students) {
    // your code here...
    let max = -Infinity;
    let results = "";
    for(let i = 0; i < students.length; i++){
        let RegEx =/[A-Z]/g
        if(max < students[i]["score"]){
            max = students[i]["score"];
            let initials = students[i]["name"].match(RegEx);
            results = initials[0] + initials[1] +students[i]["id"].toString();
        }
    }
    return results;
  }
  
  //Uncomment the lines below to test your function:
  
  var students = [
  {name: 'Will Sentance', id: 128, score: 100},
  {name: 'Jamie Bradshaw', id: 32, score: 57},
  {name: 'Lisa Simpson', id: 2, score: 99},
  {name: 'Luke Skywalker', id: 256, score: 94}
  ];
  
  console.log(highestScore(students)); //=> 'LS2'
  
  