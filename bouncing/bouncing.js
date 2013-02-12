var xPos = 1;
var yPos = 1;
x = 0;
y = 0;

function update() {
	var box = document.getElementById("box");
    if(x >= document.documentElement.clientWidth-108){
        xPos = -1 * (Math.random()+0.5);
    }
    if(x <= -1){ xPos = 1 * (Math.random()+0.5); }
    if(y >= document.documentElement.clientHeight-108){
        yPos = -1 * (Math.random()+0.5);
    }
    if(y <= -1){
        yPos = 1 * (Math.random()+0.5);
    }
    x+=xPos;
    y+=yPos;
	box.style.marginLeft = x + "px";
	box.style.marginTop = y + "px";
}


setInterval(update,1000/300); // 1000/30 means try to update 30 times a second.