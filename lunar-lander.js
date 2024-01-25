let spacex = 10;
let spacey = 10;

function spaceShip() {
    fill (100);
    triangle(spacex + 100, spacey, spacex, spacey + 100, spacex + 100, spacey + 300);
    triangle(spacex + 230, spacey, spacex + 330, spacey + 100, spacex + 230, spacey + 300);
    ellipse(spacex + 165, spacey + 65, 130);
}

spaceShip();