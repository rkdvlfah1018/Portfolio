class App{
    constructor(){
        this.canvas = document.createElement("canvas");
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
    }
}

window.onload = () => {
    new App()
}