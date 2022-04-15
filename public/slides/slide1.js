index = 1;

slideFuncs[index] = function (container){
    shape3 = new Shape(container, width/2, 0, "hex", 1);
    bird4 = new Bird4(container, -100, height/2-100);

    
    
}

arriveTriggers[index] = function (){
    shape3.animateIn(0);
    bird4.animateIn(0);
    
    $("#prog").fadeIn(1000);
    //re-enable swiping
    setTimeout(function(){
        slide();
        
        // arriveTriggers[21]();
    }, 2000);
}

leaveTriggers[index] = function (){
    shape3.animateOut(0);
    bird4.animateOut(0);
    

    arrive(index+1);
}


