
//create app and resize to fit device
let app = new PIXI.Application({ 
    resizeTo: window,
    backgroundColor: 0xFFFFFF,
    antialias: true });

document.body.appendChild(app.view);

//empty arrays and vars
let slides = []
//let numSlides = 3;
let currSlide = 0;

let width = window.innerWidth;
let height = window.innerHeight;

let text = 'Slide: '+ currSlide + '\n Can Swipe: '+canSwipe;
const basicText = new PIXI.Text(text);
basicText.x = 10;
basicText.y = 100;
basicText.width = width/4;
app.stage.addChild(basicText);
basicText.zIndex= 10;


//call function for each slide
app.loader
    .add('images/spritesheet/bird1-0.json')
    .add('images/spritesheet/bird2-0.json')
    .add('images/spritesheet/bird3-0.json')
    .add('images/spritesheet/bird4.json')
    .add('images/spritesheet/bird5.json')
    .add('images/spritesheet/bird6-0.json')
    .add('images/spritesheet/bird7-0.json')
    .add('images/spritesheet/bird8-0.json')
    .add('images/spritesheet/bird9-0.json')
    .add('images/spritesheet/running-0.json')
    .add('images/spritesheet/globe-0.json')
    .add('images/spritesheet/bubbles-0.json')
    .load(onAssetsLoaded);

    function onAssetsLoaded() {

        function buildContainers(){
            for(var i = 0; i<numSlides; i++){

                const container = new PIXI.Container();
                container.x = window.innerWidth/2;
                container.y = window.innerHeight/2;
                slides.push(container);
                app.stage.addChild(container);

                slideFuncs[i](container);
            }
        }

        buildContainers();

    }


function getRandomArbitrary(min, max) {
return Math.random() * (max - min) + min;
}

function slide(){
  leaveTriggers[currSlide]();
}

function arrive(i){
    canSwipe = false;
    currSlide++;
    console.log('ARRIVED at slide'+currSlide);
    arriveTriggers[currSlide]();
    progressInc();
    updateText();
}

function updateText(){
    basicText.text ='Slide: '+ currSlide + '\n Can Swipe: '+canSwipe + '\n Region: '+region + '\n Num Comps: '+ numComps+ '\n Percent Comps: '+percComps;
}

//user interaction functions

function submitRegion(){
    if(region!=null && region!= 'Choose Region'){
        slide();
    } else {
        console.log('please select a region')
    }
}

function submitComps(){

    numComps = document.getElementById('inp').value;
    if(numComps!=null && numComps!= 'Enter Count'){
        slide();
    } else {
        console.log('please select a region')
    }

    
}


// swipe logic

document.addEventListener('swiped-right', function(e) {
    console.log('right'); // the element that was swiped
});

document.addEventListener('swiped-left', function(e) {
    if(canSwipe){
        console.log('left'); // the element that was swiped
        slide();
        updateText();
    }
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

function map(value, x1, y1, x2, y2) {
    return (value - x1) * (y2 - x2) / (y1 - x1) + x2;
} 

function getRandomIntRange (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
