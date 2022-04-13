index = 6;

slideFuncs[index] = function (container){

bush6 = new Bush(container, 200, height/2, 1, 2);
bird6 = new Bird6(container, 200, height/2, 50, -330, 0.4);

}

arriveTriggers[index] = function (){
    
    bush6.animateIn(500);
    bird6.animateIn(1000);
    
        //re-enable swiping after 3000 milliseconds
        setTimeout(function(){
            slide();
            updateText();
        }, 3000);
}

leaveTriggers[index] = function (){

    arrive(index+1);
}