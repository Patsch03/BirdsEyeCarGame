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
        // scraping the rotation idea for now just drawing a car that can move left, right, up, down.
        // adding rotation in the future after further research, changing update function into 2D non dynamic movement

		// Define the initial position and dimensions of the rectangle
		let rectX = 50;
		let rectY = 50;
		let rectWidth = 100;
		let rectHeight = 50;

		// Set the rotation angle in degrees
		let rotationAngle = 0;

		// Draw the rectangle
		function drawRect() {
			c.clearRect(0, 0, canvas.width, canvas.height);
			c.save();
			c.translate(rectX + rectWidth / 2, rectY + rectHeight / 2);
			c.rotate((rotationAngle * Math.PI) / 180);
			c.fillStyle = "#FF0000";
			c.fillRect(-rectWidth / 2, -rectHeight / 2, rectWidth, rectHeight);
			c.restore();
		}

		// Rotate the rectangle by a given angle
		function rotateRect(angle) {
			rotationAngle += angle;
			drawRect();
		}

		// Set an interval to rotate the rectangle continuously
		setInterval(() => rotateRect(1), 10);
    }

}


const Car1 = new car(35, 35, 0, 'blue', 100, 25);

Car1.draw();

function animate(){
     // makes a function that calls itself and will run infinitely 
    window.requestAnimationFrame(animate);
    c.fillStyle = 'black'; // sets background color
    c.fillRect(0, 0, canvas.width, canvas.height); // redraws background
    Car1.update();
}

animate();
