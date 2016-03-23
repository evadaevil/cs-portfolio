var mycanvas = document.getElementById("mycanvas");
var ctx = mycanvas.getContext("2d"); //test in 3D
var box = {
    xPos: 20,
    yPos: 50,
    goLeft: false,
    goRight: false,
    goUp: false,
    goDown: false,
    move: function(){
        console.log(box.goLeft);
        if(box.goLeft && box.xPos > 0) {
            box.xPos = box.xPos - 5;    
        }
        if(box.goRight && box.xPos < 480){
            box.xPos += 5;    
        }
        if(box.goUp && box.yPos > 0){
            box.yPos -= 5;    
        }
        if(box.goDown && box.yPos < 480){
            box.yPos += 5;    
        }
        console.log(box.xPos);
        
    },
    draw: function(){
        ctx.rect(box.xPos,box.yPos,20,20);
        ctx.stroke();
  
    }
}

document.addEventListener("keydown", function(evt){
    if(evt.keyCode === 37){
        box.goLeft = true;
    }
    if(evt.keyCode === 38){
        box.goUp = true;
    }
    if(evt.keyCode === 39){
        box.goRight = true;
    }
    if(evt.keyCode === 40){
        box.goDown = true;        
    }    
    
});

document.addEventListener("keyup", function(evt){
    if(evt.keyCode === 37){
        box.goLeft = false;
    }
    if(evt.keyCode === 38){
        box.goUp = false;
    }
    if(evt.keyCode === 39){
        box.goRight = false;
    }
    if(evt.keyCode === 40){
        box.goDown = false;        
    }    
})

function gameLoop(){
    ctx.beginPath();
   ctx.clearRect(0,0,mycanvas.width,mycanvas.height);
    box.move();
    box.draw();
function changeCanvasSize() {
    var gameCanvas = document.getElementById("gameCanvas");
    var avatarImage = new Image();
         
   gameCanvas.width = 600;
    gameCanvas.height = 600;
    
    avatarImage.src = "img/avatar.png";
   gameCanvas.getContext("2d").drawImage(avatarImage, 0, 0);
   gameCanvas.getContext("2d").drawImage(avatarImage, 100, 50);


}    
window.requestAnimationFrame(gameLoop);
}

gameLoop();