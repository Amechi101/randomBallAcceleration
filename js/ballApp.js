/*
@Author: Amechi Egbe
===================================================
RANDOM BALL ACCELERATION
====================================================

Enjoy the randomness of movement using the power 
of Mathematics and Physics!

=====================================================

If you want to chat, comment, or drop a quick note email me: 
amechiegbe@gmail.com

======================================================
Check me out also @ the following places: 

Portfolio: www.fashionidealist.com

Twitter: @FashionIdealist

GitHub: https://github.com/Amechi101

Instagram: http://instagram.com/fashion_idealist
=======================================================

And for all my Trojans in the house --> FIGHT ON!
*/


var canvas = document.getElementById('balling');
var context = canvas.getContext('2d');
var ballClone = [];

// The Properties of the Circle and Position within the Viewport
var currentBall = function (x_coor, y_coor) {

    var extendBall = {
        posBall: {
            x: x_coor,
            y: y_coor
        },
        radius: 40,
        startAngle: 0,
        endAngle: Math.PI * 2,
        anticlockwise: false,
        radians: 0,
        xMove: Math.random(),
        yMove: Math.random(),
        speed: 5,
        angle: 80,
        velocityX: 3,
        velocityY: 3,
        color: 'rgb(142, 68, 173)'
    }

    return extendBall;
}

ballClone.push(currentBall(180, 160));

//Math to make the ball move
function moveBall(currentBall) {
    currentBall.radians = currentBall.angle * Math.PI / 180;
    currentBall.xMove = Math.cos(currentBall.radians) * currentBall.speed * currentBall.velocityX;
    currentBall.yMove = Math.sin(currentBall.radians) * currentBall.speed * currentBall.velocityY;
}

//Function to draw the ball
function DrawOptions() {

    //Reset Canvas
    context.fillStyle = "rgba(0,0,0,0.3)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    //Drawing of the ball
    for (var i = 0; i < ballClone.length; i++) {
        var currentBall = ballClone[i];

        context.fillStyle = currentBall.color;
        context.beginPath();
        context.arc(currentBall.posBall.x, currentBall.posBall.y, currentBall.radius, currentBall.startAngle, currentBall.endAngle, currentBall.anticlockwise);
        context.closePath();
        context.fill();
    }
}

// Animate and call the function to move the ball
setInterval(Move, 20);

//The function to make it move, reset canvas for movement and color/create shape of ball
function Move() {

    //Function call for drawing 
    DrawOptions();

    for (var i = 0; i < ballClone.length; i++) {
        var currentBall = ballClone[i];

        //Power to make it move
        currentBall.posBall.x += currentBall.xMove;
        currentBall.posBall.y += currentBall.yMove;

        //checks for ball hitting the Wall
        if (currentBall.posBall.x > canvas.width || currentBall.posBall.x < 0) {
            currentBall.angle -= 770;
            moveBall(currentBall);
        } else if (currentBall.posBall.y > canvas.height || currentBall.posBall.y < 0) {
            currentBall.angle -= 2760;
            moveBall(currentBall);
        } else if (currentBall.posBall.y == canvas.height || currentBall.posBall.y > canvas.width) {
            currentBall.angle += 90;
            moveBall(currentBall);
        }
    }
}

canvas.addEventListener('click', function (e) {
    var clickedX = e.pageX - this.offsetLeft;
    var clickedY = e.pageY - this.offsetTop;
    ballClone.push(currentBall(clickedX, clickedY));
});

//For cursor style in and out element
canvas.addEventListener('mouseover', function () {
    document.body.style.cursor = "pointer";
});

canvas.addEventListener('mouseout', function () {
    document.body.style.cursor = "default";
});