let spacex = 0;
let spacey = 0;
let state = "game-over";
gameIsRunning = true;

function startScreen(){
    spaceBackground();
    fill("white");
    textSize(100);
    text("Start", 450, 500);
}

function gameScreen(){
    spaceBackground();
    moonSurface();
    shadow();
    spaceShip(spaceShipX, spaceShipY);
    
    spaceShipY = spaceShipY + velocity;
    if (keyIsDown(32)){
        velocity = velocity - acceleration; 
    }
    else if(!keyIsDown(32) && velocity < maxVelocity){
        velocity = velocity + acceleration;

    }

    if(spaceShipY > groundLevel && velocity > landingVelocity){
        state = "game-over"; 
        gameIsRunning = false;
    }
    else if(spaceShipY > groundLevel && velocity < landingVelocity){
        state = "you-won"; 
        gameIsRunning = false;
    }
}

function endScreen(){
    spaceBackground();
    fill("white");
    textSize(100);
    text("Game Over", 320, 500);
   

}

function successScreen(){
    spaceBackground();
    fill("white");
    textSize(100);
    text("You won!", 360, 500);
    

}

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

function moonSurface(){
    push();
    noStroke();
    fill(184, 174, 163);
    rect (0, 800, 2000, 1000);
    pop();
}

function shadow(){
    let r = 0.2*spaceShipY;
    let shadowFill = 0.2 * spaceShipY;
    push();
    noStroke();
    fill(0, 0, 0, shadowFill);
    ellipse(535, 900, r, r/2);
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
const landingVelocity = 10;
const groundLevel = 850;

function mouseClicked(){
    if(state === "game-over" || "you-won"){
        state = "start";
    }
}

function draw() {


   if (state === "start"){
    startScreen();
    gameIsRunning = true;
    if(keyIsDown(32)){
        state = "game";
    }
   }
   else if(state === "game"){
    gameScreen();
   }
   else if(state === "game-over"){
    endScreen();
    spaceShipY = 0;
    velocity = 1;
   }
   else if(state === "you-won"){
    successScreen();
    spaceShipY = 0;
    velocity = 1;
   }
}