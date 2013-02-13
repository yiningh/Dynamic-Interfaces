
function load(){

    var box = document.getElementById("box"); 
    var boxH = document.getElementById("box").clientHeight;

    var xPos = 3;
    var yPos = 0;

    var x = 0;
    var y = 0;

    var grav = 0.1;

    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;

    function update() {
        yPos += grav;
        x += xPos;
        y += yPos;

        if(x >= width-boxH || x <= 0){
            xPos *= -1;
        }

        if(y >= (height-boxH) ){
            y = height-boxH;
            yPos *= -0.8;
        }

        if(y <= (height) && y >=(height-boxH-1)){
            xPos *= 0.99;
        }

    	box.style.marginLeft = x + "px";
    	box.style.marginTop = y + "px";
    }


    setInterval(update,1000/300); 

}