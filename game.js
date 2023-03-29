var canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 700;

c.fillRect(0, 0, canvas.width, canvas.height);

class car{
    constructor(posX,posY,velocity,color, height, width){
        this.positionX = posX;
        this.positionY = posY;
        this.height = height;
        this.width = width;
        this.velocity = velocity;
        this.color = color;
    };

    draw(){
        c.fillStyle = "green";
        c.fillRect(this.positionX, this.positionY, this.width, this.height);
        console.log("draw");
    }

    update(){
        this.draw();
    }

}


const Car1 = new car(50, 50, 0, 'blue', 100, 25);
Car1.draw();

function animate(){
    window.requestAnimationFrame(animate); // makes a function that calls itself and will run infinitely 
    c.fillStyle = 'black' // sets background color
    c.fillRect(0, 0, canvas.width, canvas.height); // redraws background
    Car1.update();
}

animate();
