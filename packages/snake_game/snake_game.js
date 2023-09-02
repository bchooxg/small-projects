const board_border = 'black';
const board_background = "white";
const snake_col = 'lightblue';
const snake_border = 'darkblue';
let game = false;

let snake = [
  {x: 200, y: 200},
  {x: 190, y: 200},
  {x: 180, y: 200},
  {x: 170, y: 200},
  {x: 160, y: 200}
]
let food = {x: 0, y: 0};
let direction = "right";
let score = 0;

const snakeboard = document.getElementById("snakeboard");
// Return a two dimensional drawing context
const snakeboard_ctx = snakeboard.getContext("2d");
// Start Game

// Listen for key presses
document.onkeydown = checkKey;
function checkKey(e) {

  e = e || window.event;

  if (e.keyCode == '38') {
      // up arrow
      direction = "up";
  }
  else if (e.keyCode == '40') {
      // down arrow
      direction = "down";
  }
  else if (e.keyCode == '37') {
     // left arrow
    direction = "left";
  }
  else if (e.keyCode == '39') {
     // right arrow
    direction = "right";
  }

}

// main()

function main (){
  createFood();
  tick()
}

function tick(){
  if (!game) return;
  clearCanvas();
  drawSnake();
  drawFood()
  checkFoodCollision();
  checkCollision();
  moveSnake();
  setTimeout(tick, 100)
}

function checkCollision(){
  // Check if snake collided with border
  if(snake[0].x < 0 || snake[0].x > 390 || snake[0].y < 0 || snake[0].y > 390){
    stopGame();
  }

  // Check if snake collided with itself
  for(let i = 1; i < snake.length; i++){
    if(snake[0].x === snake[i].x && snake[0].y === snake[i].y){
      stopGame();
    }
  }
}
function checkFoodCollision(){
  if(snake[0].x === food.x && snake[0].y === food.y){
    score += 1;
    updateScore();
    snake.push({x: snake[snake.length - 1].x, y: snake[snake.length - 1].y});
    createFood();
  }
}

function drawFood(){
  snakeboard_ctx.fillStyle = "red";
  snakeboard_ctx.fillRect(food.x, food.y, 10, 10);
  snakeboard_ctx.strokeRect(food.x, food.y, 10, 10);
}


function clearCanvas(){
  snakeboard_ctx.fillStyle = board_background;
  snakeboard_ctx.strokestyle = board_border;
  snakeboard_ctx.fillRect(0, 0, snakeboard.width, snakeboard.height);
  snakeboard_ctx.strokeRect(0, 0, snakeboard.width, snakeboard.height);
}

function drawSnake(){
  snake.forEach(drawSnakePart)
}

function drawSnakePart(snakePart){
  snakeboard_ctx.fillStyle = snake_col;
  snakeboard_ctx.strokestyle = snake_border;
  snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function moveSnake(){
  const head = {x: snake[0].x, y: snake[0].y};
  switch (direction) {
    case "up":
      head.y -= 10;
      break;
    case "down":
      head.y += 10;
      break;
    case "left":
      head.x -= 10;
      break;
    case "right":
      head.x += 10;
      break;
  }
  snake.unshift(head);
  snake.pop();
}

function createFood(){
  food.x = Math.floor(Math.random() * 40) * 10;
  food.y = Math.floor(Math.random() * 40) * 10;
}

function startGame(){
  // Retart Snake position
  score = 0
  snake = [
    {x: 200, y: 200},
    {x: 190, y: 200},
    {x: 180, y: 200},
    {x: 170, y: 200},
    {x: 160, y: 200}
  ]
  game = true;
  main();
}
function stopGame(){
  game = false;
}

function updateScore(){
  console.log(score);
  document.getElementById("score").innerHTML = score;
}