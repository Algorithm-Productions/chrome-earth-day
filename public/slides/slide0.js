index = 0;

let logo;

slideFuncs[index] = function (container){

    // logo = PIXI.Sprite.from('images/chrome.png');
    // container.addChild(logo);
    // logo.anchor.set(0.5);
    // logo.scale.set(0.15);
	arriveTriggers[0]();

    // setTimeout(function(){
    //     arriveTriggers[19]();
    // }, 1000);


}

arriveTriggers[index] = function (){
    
    
    
        //re-enable swiping after 3000 milliseconds
        setTimeout(function(){
            $("#landing").fadeIn(1000);
            canSwipe = true;
            updateText(); 
        }, 500);
}

leaveTriggers[index] = function (){

    $("#landing").fadeOut(1000);
    name = document.getElementById('inp2').value;
    companyName = document.getElementById('inp3').value;
    //once complete
    arrive(index+1);
}