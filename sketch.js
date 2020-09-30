
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score , ground, invisibleGround;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 monkeyCollided = loadImage("sprite_0.png")
}


 

function setup() {
 createCanvas(400, 400); 

  
  // creating monkey
  monkey = createSprite(80, 315, 40, 40);
  monkey.addAnimation("monkey",monkey_running );
  monkey.scale = 0.1; 

  
  //creating ground
  ground = createSprite(400,350, 900, 10)
  ground.velocityX = -9;
  ground.x = ground.width/2;
  

  
  
  
  
  
  
  FoodGroup = new Group();
  obstaclesGroup = new Group();
  
  
 
}


function draw() {
  background('blue')
  
  
  if(ground.x < 0){
  ground.x = ground.width/2;
   
  }
  
  if(keyDown("space")){
     monkey.velocityY = -6;
     
     
     }
  
   monkey.velocityY = monkey.velocityY+ 0.5;
  obstacles();
  spawnBanana();
  drawSprites();
  if(obstaclesGroup.isTouching(monkey)){ 
    ground.velocityX = 0; 
    monkey.velocityY = 0; obstaclesGroup.setVelocityXEach(0); FoodGroup.setVelocityXEach(0); obstaclesGroup.setLifetimeEach(-1); FoodGroup.setLifetimeEach(-1);
  
  }
   
  
   monkey.setCollider("rectangle",0,0, 400,width ,height = 200);
   monkey.debug = true;
 
  monkey.collide(ground)
 

  
}

function spawnBanana(){
 // creating Banana
 if(frameCount % 80 === 0 ){
  banana = createSprite(400, 250); 
  banana.addImage("banana",bananaImage);
  banana.scale = 0.09
  banana.velocityX = -6; 
  banana.lifetime = 300 
  FoodGroup.add(banana) 
 }

}
function obstacles(){
  // creating Obstacles
 if(frameCount % 300 === 0 ){
  obstacle = createSprite(200, 330, 10, 40);
   obstacle.velocityX = -6 ; 
  obstacle.addImage("rock",obstacleImage);
  obstacle.scale = 0.1;
  obstacle.setCollider("rectangle", 0, 0, 405, obstacle.width, heigth = 91);
 
   obstacle.lifetime = 300;
obstaclesGroup.add(obstacle) 
}

  
}


