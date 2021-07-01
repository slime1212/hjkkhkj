canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

rX = 10;
rY = 10;
rW = 100;
rH = 90;

backgroundImage = "marsg1.jpg"
roverImage = "rover.png";

function add() {
    backgroundImageTag = new Image();
    backgroundImageTag.onload = uploadBackground;
    backgroundImageTag.src = backgroundImage;

    roverImageTag = new Image();
    roverImageTag.onload = uploadRover;
    roverImageTag.src = roverImage;
};

function uploadBackground() {
    ctx.drawImage(backgroundImageTag, 0, 0, canvas.width, canvas.height);
};

function uploadRover() {
    ctx.drawImage(roverImageTag, rX, rY, rW, rH);
};

window.addEventListener("keydown", mykeydown);

function mykeydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (keyPressed == "38") {
        up();

        console.log("up");
    };

    if (keyPressed == "40") {
        down();

        console.log("down");
   }

   if (keyPressed == "37") {
       left();

       console.log("left");
   }

   if (keyPressed == "39") {
       right();

       console.log("right");
   }


};

function up() {
    if (rY >= 0) {
        rY = rY - 10;
        console.log("when up arrow is pressed, x = " + rX + ", y = " + rY);
        uploadBackground();
        uploadRover();
    }
}

function down() {
    if (rY <= 500) {
        rY = rY + 10;
        console.log("when up arrow is pressed, x = " + rX + ", y = " + rY);
        uploadBackground();
        uploadRover();
    }
}

function left() {
    if (rX >= 0) {
        rX = rX - 10;
        console.log("when up arrow is pressed, x = " + rX + ", y = " + rY);
        uploadBackground();
        uploadRover();
    }
}

function right() {
    if (rX <= 700) {
        rX = rX + 10;
        console.log("when up arrow is pressed, x = " + rX + ", y = " + rY);
        uploadBackground();
        uploadRover();
    }
}