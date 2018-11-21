let level = 0
function makeAFace(){
  let position_left = Math.floor(Math.random()*500);
  let position_top = Math.floor(Math.random()*500);
  face = document.createElement("IMG");
  face.setAttribute("src", "https://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png");
  face.setAttribute("style","position: absolute;");
  face.style.left = position_left+"px";
  face.style.top = position_top+"px";
  return face;
}

function placeTheFace(level){
  level++;
  var num_faces = level*5
  clearScreen();
  box1 = document.getElementById("box1");
  box2 = document.getElementById("box2");

  for(let count = 0; count < num_faces; count++) {
    let face1 = makeAFace();
    face1.setAttribute("class", "wrong_choice")
    let face2 = face1.cloneNode();
    box1.appendChild(face1);
    box2.appendChild(face2);
  }
  //Place the odd face
  face = makeAFace();
  face.setAttribute("id","right_choice");
  box1.appendChild(face);
}

function gameOver(){
  alert("Game Over!");
  clearScreen();
}

function clearScreen(){
  box1 = document.getElementById("box1");
  box2 = document.getElementById("box2");
  while(box1.firstChild){
    box1.removeChild(box1.firstChild);
  }
  while(box2.firstChild){
    box2.removeChild(box2.firstChild);
  }
}

function winnerMessage(){
  alert("Winner! Winner!");
  let next_level = level+2;
  alert("Level" + next_level+ "!");
}

function startGame(){
  placeTheFace(level);
  right_choice.addEventListener("click", winnerMessage);
  right_choice.addEventListener("click", function(){
    level++;
  })
  right_choice.addEventListener("click", function(){startGame(level)});

  //Cool way to addEventListener to the elements of a class
  let wrong_choices = document.getElementsByClassName("wrong_choice");
  for (var i = 0; i < wrong_choices.length; i++) {
    wrong_choices[i].addEventListener("click", gameOver);
  }

}
