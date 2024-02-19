let spacex = 10;
let spacey = 10;

function spaceShip() {
    fill (100);
    triangle(spacex + 100, spacey, spacex, spacey + 100, spacex + 100, spacey + 300);
    triangle(spacex + 230, spacey, spacex + 330, spacey + 100, spacex + 230, spacey + 300);
    ellipse(spacex + 165, spacey + 65, 130);
}

//Stole from Garrit's site
function spaceBackground(){
    push();
    noStroke();
    background(0);
    for (let index in starX) {
        fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
        ellipse(starX[index], starY[index], 2);
        starAlpha[index] = starAlpha[index] + 0.008;
    }
    pop();
}



let starX = [];
let starY = [];
let starAlpha = [];

for (let i = 0; i < 1000; i++) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    const alpha = Math.random();

    starX.push(x);
    starY.push(y);
    starAlpha.push(alpha);
}

function draw() {
    spaceBackground();
}