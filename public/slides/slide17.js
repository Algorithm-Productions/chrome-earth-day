index = 17;

//energy saved

slideFuncs[index] = function (container){
    plant17 = new Plant(container, 0, height/2-80);
    bush17 = new Bush(container, 0, height/2, 5, 1);
    vine17 = new Vine(container, 0, 0, width, 400, 400, 100, 4);
    let textN17 = 'For the following example calculation, we have looked at the number of your devices due for replacement and extended the life of 50% of those with Chrome Flex OS, and replaced 50% with new, energy-efficient Chromebooks';
    text17 = new Text(container, 0, 60, textN17, 1, width/2-100, "center");
    sun17 = new Sun(container, -100, -height/3, 150);
    shape17 = new Shape(container, width/2, -300, "cloud", 1);
    bird17 = new Bird9(container, 0, -300);
    

    app.ticker.add((delta) => {
        plant17.update(delta);
        vine17.update(delta);
    });
}

arriveTriggers[index] = function (){
    bush17.animateIn(500);
    plant17.animateIn(1000);
    vine17.animateIn(0);
    text17.animateIn(500);
    bird17.animateIn(0);
    sun17.animateIn(500);
    shape17.animateIn(800);


        //re-enable swiping after 3000 milliseconds
        setTimeout(function(){
            canSwipe = true;
            updateText();
        }, 3000);
}

leaveTriggers[index] = function (){

    plant17.animateOut(0);
    bush17.animateOut(1000);
    text17.animateOut(0);

    arrive(index+1);
}