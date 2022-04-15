index = 3;

slideFuncs[index] = function (container){

    icon2 = new Icon(container, -100, -300, "plug", 1);
    sun2 = new Sun(container, 300, 250, 100);
    shape4 = new Shape(container, 200, 400, "bigleaf", 0.9);
    branch2 = new Branch(container, -100, 650);
    shape5 = new Shape(container, 200, 600, "flower", 0.7);
    bird5 = new Bird5(container, 200, 550);
    
    
    
	
}

arriveTriggers[index] = function (){

        icon2.animateIn(1000);
        shape4.animateIn(1000);
        shape5.animateIn(500);
        branch2.animateIn(1000);
        sun2.animateIn(1000);
        bird5.animateIn(1500);
    
        //re-enable swiping
        setTimeout(function(){
            updateText();
            slide();
        }, 4000);
}

leaveTriggers[index] = function (){
    
    icon2.animateOut(0);
    shape4.animateOut(0);
    shape5.animateOut(500);
    branch2.animateOut(0);
    sun2.animateOut(0);
    bird5.animateOut(0);
    

    //once complete
    arrive(index+1);
}