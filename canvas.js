var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillStyle = 'rgba(255, 0, 0, 0.5)';
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

// Arc/ Circle

//c.beginPath();
//c.arc(300, 300,30, 0, Math.PI * 2, false);
//c.strokeStyle = 'blue';
//c.stroke();

for (var i = 0; i < 3; i++) {
	c.beginPath();
	c.arc(300, 300,30, 0, Math.PI * 2, false);
	c.strokeStyle = 'blue';
	c.stroke();
}