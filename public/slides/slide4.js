index = 4;

slideFuncs[index] = function (container){
    plantL = new Plant(container, -350, height/2-100);
    plantM = new Plant(container, 20, height/2-250);
    plantR = new Plant(container, 350, height/2-100);
    bush1 = new Bush(container, 0, height/2, 1, 1.5);
    iconR = new Icon(container, width/4, -height/4, "recycle", 1);
    bird3 = new Bird3(container, 0, 200);
    

    app.ticker.add((delta) => {
        plantL.update(delta);
        plantM.update(delta);
        plantR.update(delta);
    });
}

arriveTriggers[index] = function (){

    bush1.animateIn(0);
    plantL.animateIn(1000);
    plantM.animateIn(1000);
    plantR.animateIn(1000);
    iconR.animateIn(500);
    bird3.animateIn();

        //re-enable swiping after 3000 milliseconds
        setTimeout(function(){
            updateText();
            slide();
        }, 4000);
}

leaveTriggers[index] = function (){
    bush1.animateOut(2000);
    plantL.animateOut(0);
    plantM.animateOut(0);
    plantR.animateOut(0);
    iconR.animateOut(0);
    bird3.animateOut();
    
    arrive(index+1);
}