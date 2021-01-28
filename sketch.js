var canvas;
var music;
var box,edges,random;
var surface1,surface2,surface3,surface4;

function  preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
     
    random=Math.round(random(20,750));

    //create 4 different surfaces
    surface1=createSprite(750,590,200,15);
    surface1.shapeColor="blue";

    surface2=createSprite(530,590,200,15);
    surface2.shapeColor="pink";

    surface3=createSprite(310,590,200,15);
    surface3.shapeColor="yellow";

    surface4=createSprite(80,590,200,15);
    surface4.shapeColor="red";

    


    //create box sprite and give velocity
     box=createSprite(random,300,100,30);
     box.velocityX=3;
     box.velocityY=3;
    box.height=20;
}

function draw() {
    background("green");
    //create edgeSprite
    edges=createEdgeSprites();
    
    box.bounceOff(edges);

 //add condition to check if box touching surface and make it box
   if(surface1.isTouching(box)&&box.bounceOff(surface1)){
       box.shapeColor="blue";
       //additional task
       music.play();
   }

   if(surface2.isTouching(box)&&box.bounceOff(surface2)){
    box.shapeColor="pink";
    music.stop();
    box.velocityY=0;
    box.velocityX=0;
}


if(surface3.isTouching(box)&&box.bounceOff(surface3)){
     box.shapeColor="yellow";
     music.play();
}

if(surface4.isTouching(box)&&box.bounceOff(surface4)){
    box.shapeColor="red";
    music.stop();
    box.velocityY=0;
    box.velocityX=0;
}


    drawSprites();
}
