const twoPI = Math.PI * 2;

export class Dot{
    constructor(x, y, radius, pixelSize, r, g, b){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.pixelSize = pixelSize;
        this.pixelSizeHalf = pixelSize / 2;
        this.r = r;
        this.g = g;
        this.b = b;
    }

    animate(ctx){
        ctx.beginPath();
        ctx.fillStyle = "#000";
        ctx.fillRect(
            this.x - this.pixelSizeHalf,
            this.y - this.pixelSizeHalf,
            this.pixelSize, this, this.pixelSize
        );

        ctx.beginPath();
        ctx.fillStyle = `rgb(${this.r}, ${this.g}, ${this.b})`;
        ctx.arc(this.x, this.y, this.radius, 0, twoPI, false);
        ctx.fill();
    }

    reset(){

    }
}