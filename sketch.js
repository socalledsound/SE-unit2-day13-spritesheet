// Daniel Shiffman
// http://youtube.com/thecodingtrain
// https://thecodingtrain.com/CodingChallenges/111-animated-sprite.html

// Horse Spritesheet from
// https://opengameart.org/content/2d-platformer-art-assets-from-horse-of-spring

// Animated Sprite
// https://youtu.be/3noMeuufLZY

let spritesheet;
let spritedata;
let counter = 0;
let animation = [];

// let abstract;
let abstractions = [];
let abstractions2D = [];
let numRows = 20, numColumns = 20;
function preload() {
  spritedata = loadJSON('abstract/abstract.json');
  spritesheet = loadImage('abstract/abstract.png');
}

function setup() {
  createCanvas(640, 640);
  
  //this is the array from our JSON file
  let frames = spritedata.frames;

//now we loop over the array data and load each image into an array called animation
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }

  //make an instance of the Sprite class
  // abstract = new Sprite(animation, 100, 100, 320, 0.25);


  abstractions2D = make2darray(numColumns, numRows);

  for(let i = 0; i < numColumns; i++){
    for(let j = 0; j < numRows; j++){

      abstractions2D[i][j] = new Sprite(animation, i * 32, j * 32, 32, random(0.1,0.4));
    }
  }
  console.log(abstractions2D);
}

function draw() {
  background(0);
  // translate(width/4, height/2);
  //use the sprite class to show and animate the spritesheet
  // abstract.show();
  // abstract.animate();


  for(let i = 0; i < numColumns; i++){
    for(let j = 0; j < numRows; j++){
      abstractions2D[i][j].show();
      abstractions2D[i][j].animate();
    }
  
  }

  counter++

  }




  function make2darray(cols, rows){

    let array = new Array(cols);
    
    for(let i=0; i < array.length; i++){
    
      array[i] = new Array(rows);
    
    }
    return array
  }