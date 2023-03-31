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

    getXCenter(){
        let x = this.positionX + (this.width / 2);
        return x;
    }

    getYCenter(){
        let y = this.positionY + (this.height / 2);
        return y;
    }

    draw(){
        c.fillStyle = "green";
        c.fillRect(this.positionX, this.positionY, this.width, this.height);
    }

    update(){
        this.draw();
    }

}


const Car1 = new car(50, 50, 0, 'blue', 100, 25);
console.log(Car1.getXCenter());
console.log(Car1.getYCenter());

Car1.draw();

function animate(){
     // makes a function that calls itself and will run infinitely 
    setTimeout(() =>{
        window.requestAnimationFrame(animate);
    }, 25);
    c.fillStyle = 'black' // sets background color
    c.fillRect(0, 0, canvas.width, canvas.height); // redraws background
    Car1.update();
}

animate();
