var score = 0 



function preload(){
  blueImg = loadImage("BlueB.png")
  pinkImg = loadImage("PinkB.png")
  purpleImg = loadImage("PurpleB.png")
  orangeImg = loadImage("OrangeB.png")
  arrowImg = loadImage("Arrow1.png")
  bowImg = loadImage("Bow.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight-160);
  bow = createSprite(displayWidth/2,displayHeight-270)
  bow.addImage(bowImg)
  bow.scale = 0.4
  bow.rotation=-90
  blueG = createGroup()
  pinkG = createGroup()
  purpleG = createGroup()
  orangeG = createGroup()
  arrowG = createGroup()
}

function draw() {
  background("green");
  bow.x = mouseX
  if (frameCount%50===0) {
    switch(Math.round(random(1,4))){
      case 1 : blueb()
      break
      case 2 : pinkb()
      break
      case 3 : purpleb()
      break
      case 4 : orangeb()
      break
    }
  }

if(keyDown("space")&&frameCount%3===0){
  arrows()
}
for(var i = 0 ; i < blueG.length;i++){
if(arrowG.isTouching(blueG.get(i))){
  arrowG.destroyEach()
  blueG.get(i).destroy()
  score++
}
}
for(var i = 0 ; i < pinkG.length;i++){
  if(arrowG.isTouching(pinkG.get(i))){
    arrowG.destroyEach()
    pinkG.get(i).destroy()
    score++
  }
  }
  for(var i = 0 ; i < purpleG.length;i++){
    if(arrowG.isTouching(purpleG.get(i))){
      arrowG.destroyEach()
      purpleG.get(i).destroy()
      score++
    }
    }
    for(var i = 0 ; i < orangeG.length;i++){
      if(arrowG.isTouching(orangeG.get(i))){
        arrowG.destroyEach()
        orangeG.get(i).destroy()
        score++
      }
      }
      textSize(20)
      fill("black")
      text("Score: "+score,displayWidth-200,50)
  drawSprites();
}

function blueb(){
  blue = createSprite(random(100,displayWidth-200),0)
  blue.setCollider("circle",0,-40,100)
  blue.velocityY = 2+score/5
  blue.addImage(blueImg)
  blue.scale = 0.3
  blueG.add(blue)
}
function pinkb(){
  pink = createSprite(random(100,displayWidth-200),0)
  pink.setCollider("circle",0,-40,100)
  pink.velocityY = 2+score/5
  pink.addImage(pinkImg)
  pink.scale = 0.5
  pinkG.add(pink)
}
function purpleb(){
  purple = createSprite(random(100,displayWidth-200),0)
  purple.setCollider("circle",0,-40,100)
  purple.velocityY = 2+score/5
  purple.addImage(purpleImg)
  purple.scale = 0.3
  purpleG.add(purple)
}
function orangeb(){
  orange = createSprite(random(100,displayWidth-200),0)
  orange.setCollider("circle",0,-40,100)
  orange.velocityY = 2+score/5
  orange.addImage(orangeImg)
  orange.scale = 0.25
  orangeG.add(orange)
}
function arrows(){
  arrow = createSprite(bow.x,displayHeight-230)
  arrow.velocityY = -4
  arrow.addImage(arrowImg)
  arrow.rotation=-45
  arrow.scale = 0.25
  arrowG.add(arrow)
}