var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

/*c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(0, 0, 255, 0.5)';
c.fillRect(400, 100, 100, 100);
c.fillStyle = 'rgba(0, 255, 0, 0.5)';
c.fillRect(300, 300, 100, 100);
c.fillStyle = 'rgba(200, 0, 100, 0.5)';
c.fillRect(500, 400, 100, 100);
console.log(canvas);

//Line

c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100)
c.lineTo(400, 300);
c.strokeStyle = "#fa34a2"
c.stroke();
*/
// Arc/ Circle

//c.beginPath();
//c.arc(300, 300,30, 0, Math.PI * 2, false);
//c.strokeStyle = 'blue';
//c.stroke();

/*for (var i = 0; i < 70; i++ ) {
	var x = Math.random() * window.innerWidth;
	var y = Math.random() * window.innerHeight;
	c.beginPath();
	c.arc (x, y, 30, 0, Math.PI * 2, false);
	c.strokeStyle = 'blue';
	c.stroke();
}*/

var mouse = {
	x: undefined,
	y: undefined
}

var maxRadius = 20;
var	minRadius = 4;

var colorArray = [
	'#ffaa33',
	'#99ffaaa',
	'#00ff00',
	'#4411aa',
	'#ff1100',
	'#b2ad7f',
	'#6b5b95',
	'#ff7b25',
	'#4285F4',
	'#EA4335',
	'#FBBC05',
	'#34A853',
	'#7B0099',
];

window.addEventListener('mousemove',
	function(event) {
	mouse.x = event.x;
	mouse.y = event.y;
	})

function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.minRadius = radius;
	this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

	this.draw = function() {
		c.beginPath();
		c.arc (this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.fillStyle = this.color
		c.fill();
	}

	this.update = function() {
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
		    this.dx = -this.dx;
		}

		if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
		    this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;

		//interactivity
		if (mouse.x - this.x < 20 && mouse.x - this.x > -20
			&& mouse.y -this.y < 20 && mouse.y - this.y > -20) {
			this.radius += 1;
		} else if (this.radius > minRadius) {
			if (this.radius < maxRadius){
				this.radius -= 1;
			}
			
		}
		this.draw();
	}

}	



var circleArray = [];

for (var i = 0; i < 500; i++) {
	var radius = Math.random() * 3 + 1;
	var x = Math.random() * (innerWidth -radius * 2) + radius;
	var y = Math.random() * (innerHeight - radius *2) + radius;
	var dx = (Math.random() - 0.5) * 7;
	var dy = (Math.random() - 0.5) * 7;
	
	circleArray.push(new Circle(x, y, dx, dy, radius)); 

}


function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);
	

	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}	

	// c.beginPath();
	// c.arc (x, y, 30, 0, Math.PI * 2, false);
	// c.strokeStyle = 'blue';
	// c.stroke();


}

animate();