

var monkey , monkey_running,ground,invisibleGround;
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var r;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,600);

ground = createSprite(200,580,6000,20);
  ground.velocityX = -5;
  ground.x = ground.width/2;
   
//  console.log(ground.x)
  monkey = createSprite(25,550,25,25);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale= 0.2
  invisibleGround = createSprite(200,600,600,20);
  invisibleGround.visible=false;
  foodGroup = createGroup();
  obstacleGroup  = createGroup();
  fill(15)
 //text("Sorry but bananas aren't getting displayed")
 
}


function draw() {
  background(180)
if(keyDown("space")&& monkey.y >= 100) {
    monkey .velocityY = -10;
  }
   monkey.velocityY = monkey.velocityY + 0.8 
   monkey.collide(invisibleGround);
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  food()
drawSprites();

}

function food(){
   if(World.frameCount%80===0){
    banana=createSprite(400,200,20,20);
     banana.addImage(bananaImage)
     banana.velocityX=-5
    banana.scale=0.2;
      banana.y=Math.round(random(120,200));
     
     foodGroup.add(banana);
   }
}