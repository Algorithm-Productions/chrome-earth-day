index = 1;

slideFuncs[index] = function (container){
    shape3 = new Shape(container, width/2, 0, "hex", 1);
    bird4 = new Bird4(container, -100, height/2-100);
    
}

arriveTriggers[index] = function (){
    shape3.animateIn(0);
    bird4.animateIn(0);
    

    //re-enable swiping
    setTimeout(function(){
        canSwipe = true;
        updateText();
    }, 3000);
}

leaveTriggers[index] = function (){
    shape3.animateOut(0);
    bird4.animateOut(0);
    

    arrive(index+1);
}


