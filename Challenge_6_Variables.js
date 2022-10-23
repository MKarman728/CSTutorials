function letterExists(word, letter) {
    let Regex = new RegExp(letter);
    return Regex.test(word);
  }
  
console.log(letterExists("superman", "e")) //=> true
  console.log(letterExists("starship", "S")) //=> false
  console.log(letterExists("th1s", "1")) //=> true
  console.log(letterExists("he!lo", "!")) //=> true
  