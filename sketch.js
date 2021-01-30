var bgImg,mainImg,rawImg,speedImg
var bg,main
var raw,speed
var rawgroup,speedgroup,octopusgroup
var gameState="Play"
var octopus,octopusImg
var score=0
var wall,wallgroup,invisiblewallGroup;
var flagImg,flag1group,flag2group
var main1
var coin,coinImg,coingroup

function preload(){
    bgImg=loadImage("sea.png");
    mainImg=loadImage("main.png");
    rawImg=loadImage("raw.png");
    speedImg=loadImage("speed.png");
    octopusImg=loadImage("octopus.png")
    flagImg=loadImage("flag.png")
    coinImg=loadImage("coin.png")
  //  bg.velocityY=1+score/100
  }
function setup(){
createCanvas(500,900)

bg= createSprite(250,450)
bg.addImage(bgImg);
bg.scale=2
bg.velocityY=2

main1=createSprite(250,720,1,1)
rawgroup= createGroup();
speedgroup= createGroup();
wallgroup=createGroup();
octopusgroup=createGroup();
invisiblewallGroup=createGroup();
flag1group=createGroup();
flag2group=createGroup();
coingroup=createGroup();

main1=createSprite(250,800)
main1.addImage(mainImg);
main1.scale=0.07
main1.debug=true;
main1.setCollider("rectangle",0,0,60,120)

}
function draw(){
background("white")



if(frameCount<2000){
  level1();
}else{
  level2();
}

drawSprites();


textFont("Georgia")
textSize(25)
text("Score:"+score,20,30) 
} 

function level1(){
  if(gameState==="Play"){
 
    bg.velocityY=2
    if(bg.y>700){
        bg.y=600
    }
    if(keyDown(LEFT_ARROW)){
    main1.x=main1.x-3
    }
    if(keyDown(RIGHT_ARROW)){
    main1.x=main1.x+3
    }
    if(keyDown(LEFT_ARROW)){
      main1.x=main1.x-3
      }
      if(keyDown(RIGHT_ARROW)){
      main1.x=main1.x+3
      }
    raw1();
    speed1();
    coin1();
    

    if(frameCount%550===0){
    
    var flag1=createSprite(30,5,20,20)
    var flag2=createSprite(470,5,20,20)
    flag1.velocityY=2
    flag2.velocityY=2
    flag1.addImage(flagImg);
    flag2.addImage(flagImg);
    flag1.scale=0.02
    flag2.scale=0.02
    flag1group.add(flag1)
    flag2group.add(flag2)
    
    var invisiblewall=createSprite(250,5,500,1)
    invisiblewall.visible=false;
    invisiblewall.velocityY=2
    invisiblewallGroup.add(invisiblewall);

    }
    
    if(main1.isTouching(invisiblewallGroup)){
      console.log("hi")
      score=score+10
    }
    
    main1.isTouching(coingroup,removeCoin)

    if(frameCount%2000===0){
      wall=createSprite(250,5,500,30);
      wall.velocityY=2
      wallgroup.add(wall);
    
    }
   
    
    if(main1.isTouching(wallgroup)){
    text("LEVEL-2",250,450)
    }
    
    
    if(main1.isTouching(rawgroup) || main1.isTouching(speedgroup)){
     
      gameState="End"
    }
    if(gameState==="End"){
      main1.velocityX=0;
      bg.velocityY=0;
      wallgroup.velocityY=0;
      reset();
    }
    }
    function coin1(){
      if(frameCount%70===0){
        coin=createSprite(100,5)
        coin.addImage(coinImg);
        coin.scale=0.02
        //speed.debug=true
        coin.velocityY=2
        coin.x=Math.round(random(50,450))
       coingroup.add(coin)
        coin.depth=main1.depth
        main1.depth=main1.depth+1
       
      
              

      }
        
       
        
        
      
    }

}

function level2(){

  if(gameState==="Play"){
    bg.velocityY=2
    if(bg.y>700){
        bg.y=600
    }
    if(keyDown(LEFT_ARROW)){
    main1.x=main1.x-5
    }
    if(keyDown(RIGHT_ARROW)){
    main1.x=main1.x+5
    }
    raw1();
    speed1();
    octopus1();
    coin1();
    if(frameCount%600===0){
    
    var flag1=createSprite(30,5,20,20)
    var flag2=createSprite(470,5,20,20)
    flag1.velocityY=2
    flag2.velocityY=2
    flag1.addImage(flagImg);
    flag2.addImage(flagImg);
    flag1.scale=0.02
    flag2.scale=0.02
    
    var invisiblewall=createSprite(250,5,500,1)
    invisiblewall.visible=false;
    invisiblewall.velocityY=2
    invisiblewallGroup.add(invisiblewall);
    }
    
    if(main1.isTouching(invisiblewallGroup)){
      console.log("hi")
      score=score+15
    }
    
    if(frameCount%2000===0){
      wall=createSprite(250,5,500,30);
      wall.velocityY=3
      wallgroup.add(wall);
    
    }
    
    
    
    if(main1.isTouching(wallgroup)){
      textSize(30)
    text("LEVEL-2",250,450)
    }
    
    if(main1.isTouching(rawgroup) || main1.isTouching(speedgroup) || main.isTouching(octopusgroup)){
     
      gameState="End"
    }
    if(gameState==="End"){
      main1.velocityX=0;
      bg.velocityY=0;
      wallgroup.velocityY=0;
      reset();
}
  }
  }

function reset(){

//background.setVelocity(3);

rawgroup.setLifetimeEach(-1);
speedgroup.setLifetimeEach(-1);
octopusgroup.setLifetimeEach(-1);
rawgroup.setVelocityEach(0);
octopusgroup.setVelocityEach(0);
speedgroup.setVelocityEach(0);
flag1group.setVelocityEach(0);
flag2group.setVelocityEach(0);
gameState="Play"

}


function raw1(){
  if(frameCount%300===0){
    raw=createSprite(100,5)
    raw.addImage(rawImg);
    raw.scale=0.08
    //raw.debug=true
    raw.velocityY=1
    raw.x=Math.round(random(50,450))
    rawgroup.add(raw)

  }
}
function octopus1(){
  if(frameCount%600===0){
    octopus=createSprite(100,5)
    octopus.addImage(octopusImg);
    octopus.scale=0.08
    //raw.debug=true
    octopus.velocityY=3
    octopus.x=Math.round(random(50,450))
    octopusgroup.add(octopus)

  }
}
function speed1(){
  if(frameCount%700===0){
    speed=createSprite(100,5)
    speed.addImage(speedImg);
    speed.scale=0.09
    //speed.debug=true
    speed.velocityY=2
    speed.x=Math.round(random(50,450))
    speedgroup.add(speed)

  }
}
function removeCoin(sprite,coin){
coin.remove()
}


