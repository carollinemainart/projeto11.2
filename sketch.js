var runner, runner_running;
var path, leftBoundary, pathImage;


function preload(){
  runner_running = loadAnimation("Runner-1.png", "Runner-2.png");
  pathImage = loadImage("path.png")
}


function setup(){
  createCanvas(400,400);
  

 path = createSprite(200,180,400,20);
 path.addImage("path",pathImage);
 path.y = path.width /2;
 path.velocityY = 7;



 runner = createSprite(200,300,20,50);
 runner.addAnimation("running", runner_running);
 runner.scale = 0.1;
}


function draw() {
  background(200);

  edges= createEdgeSprites();
  runner.collide(edges);
  runner.x = World.mouseX;

  console.log(path.y);

 if(path.y > 400){
   path.y = height/2;
 }


 if (path.y < 0) {
  path.y = path.width / 2;
 }

  drawSprites();
}
