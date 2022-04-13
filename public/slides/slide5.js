index = 5;

slideFuncs[index] = function (container){

    sun5 = new Sun(container, 200, -200, 150);
    leafRight = new Shape(container, 250, -400, "bigleaf", 0.9);
    f1 = new Shape(container, 150, -400, "flower", 0.7);
    f2 = new Shape(container, -300, -150, "flower", 0.7);
    f3 = new Shape(container, 150, height/2-200, "flower", 0.7);
    bird2 = new Bird2(container, 0, 200);

}

arriveTriggers[index] = function (){

    bird2.animateIn(600);
    sun5.animateIn(600);
    leafRight.animateIn(800);
    f1.animateIn(1000);
    f2.animateIn(1500);
    f3.animateIn(2000);

        //re-enable swiping after 3000 milliseconds
        setTimeout(function(){
            updateText();
            slide();
        }, 4000);
}

leaveTriggers[index] = function (){

    bird2.animateOut(0);
    sun5.animateOut(0);
    leafRight.animateOut(0);
    f1.animateOut(1000);
    f2.animateOut(500);
    f3.animateOut(0);

    arrive(index+1);
}