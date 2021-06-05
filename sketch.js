var bg, bgImg;
var cat, catImg, catImg1, catImg2;
var mouse, mouseImg1, mouseImg2, mouseImg3;


function preload() {
    bgImg = loadAnimation("images/garden.png");
    catImg = loadAnimation("images/cat1.png");
    catImg1 = loadAnimation("images/cat4.png");
    catImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse2.png");
    
}

function setup(){
    createCanvas(1000, 800);

    bg = createSprite(500, 400);
    bg.addAnimation( "background",bgImg);
    bg.scale = 1.15;
    cat = createSprite(870, 700);
    cat.addAnimation("cat",catImg);
    cat.scale = 0.2;
    mouse = createSprite(150, 750);
    mouse.addAnimation("mouse",mouseImg1);
    mouse.scale = 0.1;
}

function draw() {
    background(0);

    if(mouse.x - cat.x < mouse.width/2 + cat.width/2
        && cat.x - mouse.x < mouse.width/2 + cat.width/2){
            cat.changeAnimation("catWalking",catImg2);
            mouse.changeAnimation("mouseTeasing",mouseImg3);
    }


 drawSprites(); 
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        cat.x += -6;
        mouse.changeAnimation("lastMouse",mouseImg2);
        cat.changeAnimation("lastCat",catImg2);
    }
}
