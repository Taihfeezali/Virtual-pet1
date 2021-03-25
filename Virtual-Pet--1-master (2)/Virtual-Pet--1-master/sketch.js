//Create variables here

var dog,happyDog,database,foodS,foodStock;
var dog1



function preload()
{
  //load images here
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png")


}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  
  dog1 = createSprite(250,300);
    
  dog1.addImage("dogimage",dog);
  
  foodStock = database.ref('food')
  foodStock.on("value",readStock)

}


function draw() { 

background(46,139,87)



if(keyWentDown(UP_ARROW)){
writeStock(foodS)
dog.addImage(dogHappy)
}
  drawSprites();
  //add styles here
textSize(50)
fill('red')
stroke('blue')
text("PressUP_ARROWkeytoFeeddog",10,10)
}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){

if(x<=0){
x = 0;
}else{

   x=x-1;
}

  database.ref('/').update({
    Food:x
  })
}



