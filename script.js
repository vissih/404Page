const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "square";
ctx.lineCap = "square";
// ctx.lineJoin = "round";
// ctx.lineCap = "round";
ctx.lineWidth = 100;

let isDrwaing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e){
    if(!isDrwaing) return;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX,lastY] = [e.offsetX,e.offsetY];

    hue++;
    if(hue >= 360){
        hue=0;
    }
}

function clearCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

canvas.addEventListener("mousedown", (e) =>{
    isDrwaing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () =>{
    isDrwaing = false;
    clearCanvas();
});

canvas.addEventListener("mouseout", ()=>{
    isDrwaing = false;
    clearCanvas();
});
