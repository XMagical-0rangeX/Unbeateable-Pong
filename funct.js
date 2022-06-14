
function drawback() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.clientWidth, cnv.height);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 10;
    ctx.strokeLine(0, 5, cnv.width - 5, 5, cnv.width - 5, cnv.height - 5, 5, cnv.height - 5, 5, 5);
    ctx.lineWidth = 5;
    for (i = 15; i < 600; i += 50) {
        ctx.strokeLine(cnv.width / 2, i, cnv.width / 2, i + 20);
    }
    ctx.font = "42px Courier New";
    ctx.fillStyle = "white";
    ctx.fillText(score, 325, 50);
    ctx.fillText(score2, 450, 50);
}
function drawmove() {
    ctx.fillStyle = "white";
    ctx.fillCircle(ball.x, ball.y, ball.size);
    if (ball.sy) {
        ball.y += 5;
    } else {
        ball.y -= 5;
    }
    if (ball.sx) {
        ball.x += 5;
    } else {
        ball.x -= 5;
    }
    ctx.lineWidth = 10;
    ctx.strokeLine(75, play.y, 75, play.y + 100);
    ctx.strokeLine(cnv.width-75, play2.y, cnv.width-75, play2.y + 100);
    if (play.uy && play.y > 5) {
        play.y -= 5;
    } if (play.dy && play.y + 100 < cnv.height - 5) {
        play.y += 5;
    }
    if (ball.y>play2.y+50&& play2.y+105<cnv.height){
        play2.y +=5;
    } else if (ball.y<play2.y+50&& play2.y+5>0){
        play2.y -= 5;
    } 

}
function collision() {
    if (ball.y + ball.size / 2 >= cnv.height - 5 || ball.y - ball.size / 2 <= 5) {
        ball.sy = !ball.sy;
    }
    if (ball.x + ball.size / 2 >= cnv.width - 5 || ball.x - ball.size / 2 <= 5) {
        ball.sx = !ball.sx
    }
    if (ball.x - ball.size <= 85 && ball.x + 10 >= 75 && ball.y + 10 >= play.y && ball.y - 10 <= play.y + 100) {
        ball.sx = !ball.sx;
    }
    if (ball.x + 10 > 75 && ball.x - 10 < 85 && ball.y + 10 > play.y && ball.y - 10 < play.y + 100) {
        if (ball.y < play.y + 50) {
            ball.y = play.y - 20;
            ball.sy = !ball.sy;
            ball.sx = !ball.sx;

        } else {
            ball.y = play.y + 120;
            ball.sy = !ball.sy;
            ball.sx = !ball.sx;

        }
    }
    if (ball.x + ball.size / 2 >= cnv.width - 5) {
        score++;
    } else if (ball.x - ball.size / 2 <= 5) {
        score2++;
    }
    if (ball.x - ball.size <= cnv.width-75 && ball.x + 10 >= cnv.width-85 && ball.y + 10 >= play2.y && ball.y - 10 <= play2.y + 100) {
        ball.sx = !ball.sx;
    }
    if (ball.x + 10 > cnv.width-85 && ball.x - 10 < cnv.width-75 && ball.y + 10 > play2.y && ball.y - 10 < play2.y + 100) {
        if (ball.y < play.y + 50) {
            ball.y = play.y - 20;
            ball.sy = !ball.sy;
            ball.sx = !ball.sx;

        } else {
            ball.y = play.y + 120;
            ball.sy = !ball.sy;
            ball.sx = !ball.sx;

        }
    }
}
function keydown(event) {
    console.log(event.code)
    if (event.code === ("ArrowUp" || "KeyW")) {
        play.uy = true;
    } else if (event.code === ("ArrowDown" || "KeyS")) {
        play.dy = true;
    }
}
function keyup(event) {
    if (event.code === ("ArrowUp" || "KeyW")) {
        play.uy = false;
    } else if (event.code === ("ArrowDown" || "KeyS")) {
        play.dy = false;
    }
}