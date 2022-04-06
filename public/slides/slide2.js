index = 2;

slideFuncs[index] = function (container){
    
	sun1 = new Sun(container, 0, 100, 150);
    shape1 = new Shape(container, 200, 0, "bigleaf", 1.3);
    branch1 = new Branch(container, 100, -300);
    shape2 = new Shape(container, 100, -300, "flower", 0.7);
    icon1 = new Icon(container, -200, -500, "wrench", 1);
    
    bird1 = new Bird1(container, 0, 600);

    app.ticker.add((delta) => {

    });


}

arriveTriggers[index] = function (){

    bird1.animateIn();

    shape1.animateIn(2000);
    shape2.animateIn(2000);
    branch1.animateIn(2500);
    sun1.animateIn(1500);
    icon1.animateIn(2000);

        //re-enable swiping
        setTimeout(function(){
            canSwipe = true;
            updateText();
        }, 3000);
}

leaveTriggers[index] = function (){

    bird1.animateOut();

    shape1.animateOut(1000);
    shape2.animateOut(2000);
    branch1.animateOut(500);
    sun1.animateOut(0);
    icon1.animateOut(0);
    
    //once complete
    arrive(index+1);
}