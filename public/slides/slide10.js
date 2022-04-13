index = 10;

slideFuncs[index] = function (container){
    
    shape10 = new Shape(container, 0, height/2-200, "box", 1);
    bulb10 = new Bulb(container, 200, height/2-200, 1);

    app.ticker.add((delta) => {
        text2.update(delta);
        bulb10.update(delta);
    });
}

arriveTriggers[index] = function (){

    text2.animateIn(1000);
    shape10.animateIn(500);
    bulb10.animateIn(0);

        //re-enable swiping after 3000 milliseconds
        setTimeout(function(){
            canSwipe = true;
            updateText();
        }, 3000);
}

leaveTriggers[index] = function (){

    text2.animateOut();
    shape10.animateOut(500);
    bulb10.animateOut(0);
    circle9.animateOut(0);
    bird72.animateOut(0);

   // document.getElementById('dropdown').fadeOut();
   arrive(index+1);
}