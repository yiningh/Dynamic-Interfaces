var xPos = 3;
var yPos = 3;

var x = 1;
var y = 1;

function update() {
	var box = document.getElementById("box");

    if(x >= document.documentElement.clientWidth-108 || x <= 0){
        xPos *= -1;
    }

    if(y >= document.documentElement.clientHeight-108 || y <= 0){
        yPos *= -1;
    }

    x += xPos;
    y += yPos;

	box.style.marginLeft = x + "px";
	box.style.marginTop = y + "px";
}


setInterval(update,1000/300); 