index = 0;

let logo;

slideFuncs[index] = function (container){

    logo = PIXI.Sprite.from('images/chrome.png');
    container.addChild(logo);
    logo.anchor.set(0.5);
    logo.scale.set(0.15);

    
    

	arriveTriggers[0]();


}

arriveTriggers[index] = function (){
    
        
    
        //re-enable swiping after 3000 milliseconds
        setTimeout(function(){
            canSwipe = true;
            updateText(); 
        }, 1000);
}

leaveTriggers[index] = function (){
    logo.scale.set(0);

    
    
    //once complete
    arrive(index+1);
}