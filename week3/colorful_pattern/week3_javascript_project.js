function colorfulPattern(){
    let top_position = 50, left_position = 350, width = 700, height = 700;
    let color_list = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];
    let the_body = document.getElementById("theBody");

    while(width > 50){
        let random_color = Math.floor(Math.random()*7)
        let the_div = document.createElement("div");
        the_div.style.top = top_position+"px";
        the_div.style.left = left_position+"px";
        the_div.style.width = width+"px";
        the_div.style.height = height+"px";
        //the_div.style.border = "solid black";
        the_div.style.backgroundColor = color_list[random_color];
        the_body.appendChild(the_div)
        top_position += 10;
        left_position += 10;
        width -= 20;
        height -= 20;
    }
}