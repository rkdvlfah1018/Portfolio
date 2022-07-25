var canvas = $("canvas")[0];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var mouse = {
    x: null,
    y: null
}

$(window).mousemove(function(event){
    mouse.x = event.originalEvent.x;
    mouse.y = event.originalEvent.y;
});

$(window).resize(function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

$(window).click(function(){
    location = "../../projects.html";
});

var maxRadius = 40;

class Circle{
    constructor(x, y, dx, dy, radius, color){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.color = color;
    }
    draw(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
        c.strokeStyle = color;
        c.stroke();
        c.fillStyle = this.color;
        c.fill();
    }
    update(){
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -1 * this.dx;
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -1 * this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        //if distance less then 50 from curser, increase size
        if (Math.sqrt(Math.pow(mouse.x - this.x, 2) + Math.pow(mouse.y - this.y, 2)) < 75){
            if (this.radius < maxRadius){
                this.radius++;
            }
        }
        else if (this.radius > this.minRadius){
            this.radius--;
        }
        this.draw();
    }
}

var circles = [];
var colors = [
    '#F0EBE3',
    '#E4DCCF',
    '#7D9D9C',
    '#576F72'
];

for (let i = 0; i < 300; i++){
    var x = Math.random() * (window.innerWidth - radius * 2) + radius;
    var y = Math.random() * (window.innerHeight - radius * 2) + radius;

    var dx = (Math.random() - 0.5) * 2;
    var dy = (Math.random() - 0.5) * 2;

    //var radius = Math.random() * 50 + 1;
    var radius = Math.random() * 3 + 1;

    var color = colors[i%4];

    let temp = new Circle(x, y, dx, dy, radius, color);
    temp.draw();
    circles.push(temp);
}

function animate(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 300; i++){
        circles[i].update();
    }
    requestAnimationFrame(animate);
}

animate();
