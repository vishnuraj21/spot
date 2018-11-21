
function startGame(){
  makeFaces();
}


function winner() {
  alert("Winner! Winner!");
}

function gameOver(){
  alert("Game Over!");
  theBody = document.getElementById("theBody");
  
  while(theBody.firstChild){
    theBody.removeChild(theBody.firstChild);
  }
}

function removeOddOne(){
  odd_one = document.getElementById("oddOne");
  odd_one.parentNode.removeChild(odd_one);
}
function makeFaces(level){
    let count = 1;
    var level = 10;
    box_one = document.getElementById("box1");
    box_two = document.getElementById("box2");

    while(count < level) {
        let smiley = document.createElement("IMG");
        smiley.setAttribute("src", "https://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png");
        let smiley_two = document.createElement("IMG");
        smiley_two.setAttribute("src", "https://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png");
        top_position = Math.floor(Math.random()*500);
        left_position = Math.floor(Math.random()*500);

        smiley.setAttribute("style", "position: absolute; ");
        smiley.setAttribute("id", "wrong_choice")
        smiley_two.setAttribute("style", "position: absolute; ");
        smiley.style.left = left_position+"px";
        smiley.style.top = top_position+"px";

        smiley_two.style.left = left_position+"px";
        smiley_two.style.top = top_position+"px";

        box_one.appendChild(smiley);
        box_two.appendChild(smiley_two);

        count++;
    }

    let odd_one = document.createElement("IMG");
    odd_one.setAttribute("src", "https://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png");
    odd_one.setAttribute("id", "oddOne");
    odd_one.setAttribute("style", "position: absolute; ");
    top_position = Math.floor(Math.random()*500);
    left_position = Math.floor(Math.random()*500);
    odd_one.style.left = left_position+"px";
    odd_one.style.top = top_position+"px";


    box_one.appendChild(odd_one);
    odd_one.addEventListener("click", winner);
    odd_one.addEventListener("click", removeOddOne);
    odd_one.addEventListener("click", makeFaces);
    wrong_choice.addEventListener("click", gameOver);


}
