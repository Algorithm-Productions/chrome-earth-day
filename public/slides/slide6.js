index = 6;

slideFuncs[index] = function (container){
    windmillL = new Windmill(container, -width/2+200, height/2, 0.05, 1);
    windmillR = new Windmill(container, width/2-200, height/2, 0.05, 2);
    sunM = new Sun(container, 0, 0, width/2-50);

    app.ticker.add((delta) => {
  		windmillL.update(delta);
        windmillR.update(delta);
	});
}

arriveTriggers[index] = function (){
    windmillL.animateIn(0);
    windmillR.animateIn(0);
    sunM.animateIn(0);

        //re-enable swiping after 3000 milliseconds
        setTimeout(function(){
            canSwipe = true;
            updateText();
        }, 3000);
}

leaveTriggers[index] = function (){
    windmillL.animateOut();
    windmillR.animateOut();
    sunM.animateOut(0);

    arrive(index+1);
}