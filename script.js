const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

let cell = 20;
const x0 = 19;
const y0 = 19;
let x = x0;
let y = y0;

let count = 0;

let interval = setInterval(function() {

    colorSwap();
    ctx.fillRect(cell*x, cell*y, cell ,cell);

    if ((x < x0 + count + 1) && (y < y0 - count + 1)) {
        x++;
    } //move right

    else if ((y < y0 + count + 1) && (x == x0 + count + 1)) {
        y++;
    } //move down

    else if ((x >= x0 - count) && (y == y0 + count + 1)) {
        x--;
    } //move left

    else if ((y > y0 - count) && (x == x0 - count)){
        y--;
    } //move up
    
    if ((y == y0 + count + 1) && (x == x0 - count - 1)){ //new layer
        count++;
    }

    if (count == 20) clearInterval(interval); //exit cycle
}, 0)


function colorSwap() { //change color on transition
    switch (count % 7) {
        case 0:
            ctx.fillStyle = "#ffbe0b";
            break;
        case 1:
            ctx.fillStyle = "#fb5607";
            break;
        case 2:
            ctx.fillStyle = "#ff006e";
            break;
        case 3:
            ctx.fillStyle = "#8338ec";
            break;
        case 4:
            ctx.fillStyle = "#147df5";
            break;
        case 5:
            ctx.fillStyle = "#0ead69";
            break;
        case 6:
            ctx.fillStyle = "#8ac926";
            break;
    }
}