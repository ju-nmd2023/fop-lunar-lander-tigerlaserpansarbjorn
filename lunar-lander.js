let spacex = 0;
let spacey = 0;

function spaceShip(x, y) {
    push();
    translate (x, y);
    rotate (PI);
    fill (100);
    triangle(spacex + 100, spacey, spacex, spacey + 100, spacex + 100, spacey + 300);
    triangle(spacex + 230, spacey, spacex + 330, spacey + 100, spacex + 230, spacey + 300);
    ellipse(spacex + 165, spacey + 65, 130);
    pop();
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

let spaceShipX = 700;
let spaceShipY = 100;
let velocity = 0.5;
let acceleration = 0.8;
const maxVelocity = 100;
const landingVelocity = 20;
const groundLevel = 800;

function draw() {
    spaceBackground();
    spaceShip(spaceShipX, spaceShipY);
    
    spaceShipY = spaceShipY + velocity;
    if (keyIsDown(32)){
        velocity = velocity - acceleration; 
    }
    else if(!keyIsDown(32) && velocity < maxVelocity){
        velocity = velocity + acceleration;

    }

    if(spaceShipY > groundLevel && velocity > landingVelocity){
        console.log("you suck!"); 
    } 
}