
function startGame(){
  makeFaces();

}

function winner() {
  alert("winner!")
}
function removeOddOne(){
  odd_one = document.getElementById("oddOne");
  odd_one.parentNode.removeChild(odd_one);
}
function makeFaces(level){
    let count = 1;
    //console.log(level);
    //level++;
    var level = 10;
    box_one = document.getElementById("box1");
    box_two = document.getElementById("box2");

    while(count < level) {
        // let smiley = document.createElement("IMG");
        // smiley.setAttribute("src", "smiley.jpeg");
        let smiley = document.createElement("div");
        let smiley_two = document.createElement("div");
        top_position = Math.floor(Math.random()*500);
        left_position = Math.floor(Math.random()*500);

        smiley.setAttribute("style", "background-color: yellow; position: absolute; border: solid; height: 15px; width: 15px;");
        smiley_two.setAttribute("style", "background-color: yellow; position: absolute; border: solid; height: 15px; width: 15px;");
        smiley.style.left = left_position+"px";
        smiley.style.top = top_position+"px";

        smiley_two.style.left = left_position+"px";
        smiley_two.style.top = top_position+"px";

        box_one.appendChild(smiley);
        box_two.appendChild(smiley_two);

        count++;
    }

    let odd_one = document.createElement("div");
    odd_one.setAttribute("id", "oddOne");
    odd_one.setAttribute("style", "background-color: yellow; position: absolute; border: solid; height: 15px; width: 15px;");
    top_position = Math.floor(Math.random()*500);
    left_position = Math.floor(Math.random()*500);
    odd_one.style.left = left_position+"px";
    odd_one.style.top = top_position+"px";


    box_two.appendChild(odd_one);
    odd_one.addEventListener("click", winner);
    odd_one.addEventListener("click", removeOddOne);
    odd_one.addEventListener("click", makeFaces);

}
