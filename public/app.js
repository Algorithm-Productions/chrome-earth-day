//create app and resize to fit device
let app = new PIXI.Application({ 
    resizeTo: window,
    backgroundColor: 0xFFFFFF,
    antialias: true });

document.body.appendChild(app.view);

//empty arrays and vars
let slides = []
//let numSlides = 3;
let currSlide = 1;

//sometext
const style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
    lineJoin: 'round',
});

const basicText = new PIXI.Text('Slide: '+ currSlide);
basicText.x = 20;
basicText.y = 100;

app.stage.addChild(basicText);
basicText.zIndex= 10;


//call function for each slide
for(var i = 0; i<numSlides; i++){

    const container = new PIXI.Container();
    container.x = window.innerWidth/2 + (window.innerWidth * i);
    container.y = window.innerHeight/2;
    slides.push(container);
    app.stage.addChild(container);

    slideFuncs[i](container);
}

function getRandomArbitrary(min, max) {
return Math.random() * (max - min) + min;
}

// slides.forEach(function (slide, i) {
//     console.log(slide.children);
// });

let sliding = false;
let distanceTravelled = 0;

function slide(){
  
  console.log('Leaving in 1 second');
  distanceTravelled = slides[0].x - window.innerWidth;
  //setTimeout(function () {
      sliding = true;
      progressInc();
  //}, 1000);
}

let active = true;
let speed  = 30;

function arrive(){
  if(active){
      active = false
      sliding=false;
      currSlide++;
      console.log('ARRIVED at slide'+currSlide);
      basicText.text ='Slide: '+ currSlide;
  }
  setTimeout(function () {
      active = true;
  }, 1000);
}

app.ticker.add((delta) => {
if(sliding)(
slides.forEach(function (slide, i) {
  slide.x -= speed * delta;
  if(slides[0].x <= distanceTravelled){
      
      arrive();
  }
 })
)
});

// swipe logic

document.addEventListener('swiped-right', function(e) {
    console.log('right'); // the element that was swiped
});

document.addEventListener('swiped-left', function(e) {
    console.log('left'); // the element that was swiped
    slide();
});

// logic

function degrees_to_radians(degrees) {
    var pi = Math.PI;
    return degrees * (pi/180);
  }

  function calcFrame(frame) {
    return frame * window.innerWidth;
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
