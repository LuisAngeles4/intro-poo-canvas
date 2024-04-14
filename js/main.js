const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// Obtiene las dimensiones de la pantalla actual
const window_height = window.innerHeight;
const window_width = window.innerWidth;

// El canvas tiene las mismas dimensiones que la pantalla
canvas.height = window_height;
canvas.width = window_width;

canvas.style.background = "#ff8";

class Circle {
  constructor(x, y, radius, color, text) {
    this.posX = x;
    this.posY = y;
    this.color = color;
    this.radius = radius;
    this.text = text;
  }

  draw(context) {
    context.beginPath();
    context.strokeStyle = this.color;
    context.textAlign = "center";
    context.textBaseLine = "middle";
    context.font = "20px Arial";
    context.fillText(this.text, this.posX, this.posY);
    context.lineWidth = 4;
    context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
    context.stroke();
    context.closePath();
  }
}

let arrayCircle = [];

for (let i = 0; i < 10; i++) {
  let randomX = Math.random() * window_width;
  let randomY = Math.random() * window_height;
  let randomRadius = Math.floor(Math.random() * 100 + 20);
  let myCircle = new Circle(randomX, randomY, randomRadius, "blue", i + 1);
  arrayCircle.push(myCircle);
  arrayCircle[i].draw(ctx);
}

/* let myCircle = new Circle(100, 100, 50, "blue", "Tec");
myCircle.draw(ctx);

let myCircle2 = new Circle(270, 270, 50, "red", "Pachuca");
myCircle2.draw(ctx); */
