color_list = ["blue", "cyan", "gold", "gray", "magenta", "orange", "red", "white", "yellow"]
function guess_color() {
  var guess_count = 1;
  var rand_number = Math.floor(Math.random()*8);
  alert(color_list[rand_number]);
  var guess_input = prompt("I'm thinking of one of these colors:\n\nblue, cyan, gold, gray, magenta, orange, red, white, yellow\n\nWhat color am I thinking of?");
  while(guess_input != color_list[rand_number]){
    guess_input = hintUser(guess_input, color_list[rand_number]);
    guess_count++;
  }
  if (guess_count === 1) {
    alert("You guessed right! You took " + guess_count + " guess!");
  }
  else {
    alert("You guessed right! You took " + guess_count + " guesses!");
  }
}

function hintUser(input, target) {
  if (!color_list.includes(input)){
    alert("I don't recogonise that color.");
    input = prompt("I'm thinking of one of these colors:\n\nblue, cyan, gold, gray, magenta, orange, red, white, yellow\n\nWhat color am I thinking of?");
  }
  else if(input > target){
    alert("That color is alphabetically higher than mine.");
    input = prompt("I'm thinking of one of these colors:\n\nblue, cyan, gold, gray, magenta, orange, red, white, yellow\n\nWhat color am I thinking of?");
  }
  else{
    alert("That color is alphabetically lower than mine.");
    input = prompt("I'm thinking of one of these colors:\n\nblue, cyan, gold, gray, magenta, orange, red, white, yellow\n\nWhat color am I thinking of?");
  }
  return input;
}
