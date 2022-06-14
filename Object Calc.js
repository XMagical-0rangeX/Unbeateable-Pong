function initObjects(w, h) {
    cnv.width = w;
    cnv.height = h;


    ctx.fillCircle = function (x, y, r) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.fill();
    }
    ctx.strokeCircle = function (x, y, r) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.stroke();
    }
    ctx.strokeLine = function (x1,y1,x2,y2,x3,y3,x4,y4,x5,y5){
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.lineTo(x3,y3);
        ctx.lineTo(x4,y4);
        ctx.lineTo(x5,y5);
        ctx.stroke();
    }
}
Math.randomDec = function (small,big){
    return Math.random()*big+small;
}
Math.randomInt = function (small, big){
    return Math.floor(Math.random()*big)+small;
}
