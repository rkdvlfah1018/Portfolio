var canvas = $("canvas")[0];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.beginPath();
c.arc(100, 100, 10, 0, Math.PI*2, false);
c.fillStyle = "white";
c.fill();

// var img = $("img")[0];

// c.drawImage(img, 100, 100, 75, 100)
