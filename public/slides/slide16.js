index = 16;


//tons GHG saved

slideFuncs[index] = function (container){

    laptop16 = new Shape(container, 0, -300, "laptop", 1);
    sun16 = new Sun(container, 0, height/3, 400);
    windmill16L = new Windmill(container, -width/3, height/2-150, 0.05, 2, 1);
    windmill16R = new Windmill(container, width/3, height/2-150, 0.05, 2, 1);
    bush16L = new Bush(container, -width/4, height/2, 3, 1);
    bush16R = new Bush(container, width/4, height/2, 4, 1);

    app.ticker.add((delta) => {
        windmill16L.update(delta);
        windmill16R.update(delta);
    });

}

arriveTriggers[index] = function (){

    laptop16.animateIn(500);
    windmill16L.animateIn(1000);
    windmill16R.animateIn(1000);
    sun16.animateIn(500);
    bush16L.animateIn(500);
    bush16R.animateIn(500);

    $("#sliderCont").fadeIn(1000);

        //re-enable swiping after 3000 milliseconds
        setTimeout(function(){
            canSwipe = true;
            updateText();
        }, 3000);
}

leaveTriggers[index] = function (){

    $("#sliderCont").fadeOut(1000);

    arrive(index+1);
}