function guess_number() {
  var guess_count = 1;
  var rand_number = Math.floor(Math.random()*10)+1;
  var guess_input = parseInt(prompt("I'm thinking of a number in the range 1 to 10. Guess the number!"));
  while(guess_input != rand_number){
    guess_input = hintUser(guess_input, rand_number);
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
  if (input > 10 || input < 1){
    input = parseInt(prompt("The number I'm thinking of is in the range 1 to 10!"));
  }
  else if(input > target){
    input = parseInt(prompt("Your number is too large!"));
  }
  else{
    input = parseInt(prompt("Your number is too small!"));
  }
  return input;
}
