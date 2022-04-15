
var socket = io();

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
if(isDesktop){
    $("#desktop").fadeIn(1000);
} else {
let text = ''
const basicText = new PIXI.Text(text);
basicText.x = 10;
basicText.y = 100;
basicText.width = width/4;
app.stage.addChild(basicText);



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
    .add('images/spritesheet/sitting-0.json')
    .add('images/spritesheet/globe-0.json')
    .add('images/spritesheet/bubbletwo.json')
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
    // basicText.text ='Slide: '+ currSlide + '\n Can Swipe: '+canSwipe + '\n Region: '+region + '\n Num Comps: '+ numComps+ '\n Percent Comps: '+percComps +'\n finVal: '+finalValue;
    // basicText.text ='';
}

//user interaction functions

function submitRegion(){
    var inputs, index, val;

    inputs = document.getElementsByTagName('input');
    for (index = 0; index < inputs.length; ++index) {
        if(inputs[index].checked == true){
            region=inputs[index].value;
        } else {
            console.log('please choose a country');
        }
    }
    updateText();

    if(region !='default'){
        document.getElementById('b2').disabled = true;
        slide();
    }
}

function submitEmail(){
    if(ValidateEmail(document.getElementById('inpE').value) == true && document.getElementById('rad').checked){
        //store email
        email = document.getElementById('inpE').value;
        let data = [userName, email, companyName];
        socket.emit("store", data);
        document.getElementById('b5').disabled = true;
        slide();
    }

    function ValidateEmail(input) {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (input.match(validRegex)) {
          return true;
        } else {
          return false;
        }
    }
}

function submitComps(){
    numComps = document.getElementById('inp').value;
    if(isNaN(numComps) == false && numComps!= 'Enter Count' && numComps!= 'Entrez le nombre' && numComps!= 'Anzahl eingeben'){
        document.getElementById('b3').disabled = true;
        slide();
    } else {
        console.log('please enter a value');
    }
}

function submitPerc(){
    percComps = document.getElementById('input-slider-green').value;
    document.getElementById('b4').disabled = true;
    slide();
    finalValue = calculate(region, numComps, percComps);
}

function submitName(){
    if(document.getElementById('inp3').value!='' && document.getElementById('inp3').value!='Enter Company' && document.getElementById('inp3').value!='Name des Unternehmens eingeben' && document.getElementById('inp3').value!='Nom de votre entreprise'){
        document.getElementById('b1').disabled = true;
        slide();
    } else {
        console.log('please enter company name')
    };
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

function calculate(b2, b3, b4){

    // country value, number of computers, percentage of computers

    let c3 = (b3/100)*35;
    let d3 = (b3/100)*65;
    let c4 = (c3/100)*b4;
    let d4 = (d3/100)*b4;

    let c5 = 23.52;
    let c6 = 12.88;
    let c7 = 22.01;
    let c8 = 11.75;
    let c9 = 230;
    let c10 = 256;
    let c11 = 19;

    let value1 = (((c4/2)*(c5-c6)+(c4/2)*((c5/100)*c11))+((d4/2)*(c7-c8)+(d4/2)*((c7/100)*c11)))*b2;
    let value2 = ((c4/2)*c9)+((d4/2)*c10);

    return parseInt(value1+value2);
}

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

function isNum(val){
    return !isNaN(val)
}

}