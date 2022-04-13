index = 12;

slideFuncs[index] = function (container){

    sun12 = new Sun(container, 250, -100, 150);
    cloud12 = new Shape(container, width/2, -200, "cloud", 1);
    bush12 = new Bush(container, 150, 400, 2, 1);
    sitting12 = new Sitting(container, 0, 400);
    vine12 = new Vine(container, 0, 0, -250, 0, 300, 100, 4);
    
    app.ticker.add((delta) => {
        vine12.update(delta);
	});
}

arriveTriggers[index] = function (){

    sun12.animateIn(2000);
    cloud12.animateIn(2000);
    vine12.animateIn(1500);
    sitting12.animateIn(2500);
    bush12.animateIn(2700);

        //re-enable swiping after 3000 milliseconds
        setTimeout(function(){
            slide();
            updateText();
        }, 6000);
}

leaveTriggers[index] = function (){
    sun12.animateOut(0);
    cloud12.animateOut(0);
    vine12.animateOut(0);
    sitting12.animateOut(0);
    bush12.animateOut(0);

    arrive(index+1);
}