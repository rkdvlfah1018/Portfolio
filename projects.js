let colorBlocks = $(".colorBlock");

let hsl = "";
let hslThird = 100;

const length = colorBlocks.length;
const step = 50 / (length + 2);

for (let i = 0; i < length; i++){
    hslThird -= step * (i + 1);
    hsl = "hsl(212, 50%, " + hslThird + "%)";
    colorBlocks[i].style.backgroundColor = hsl;
}