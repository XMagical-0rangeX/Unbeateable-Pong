//topdown shooter

//setup canvas and graphics conxext
let cnv = document.getElementById("mycanvas");
let ctx = cnv.getContext("2d");
initObjects(800, 600); 

ball = {
    x: cnv.width/2,
    y: cnv.height/2,
    size: 10,
    sx: true,
    sy: true,
}
play = {
    y: 50,
    uy:  false,
    dy: false,
}
play2 = {
    y: 200,
    uy: false,
    dy: false,
}
let goop = true, score = 0, score2 = 0;
requestAnimationFrame(loop);
function loop (){
    drawback();
    drawmove();
    collision();
    requestAnimationFrame(loop);
}

document.addEventListener("keydown", keydown);
document.addEventListener("keyup", keyup);