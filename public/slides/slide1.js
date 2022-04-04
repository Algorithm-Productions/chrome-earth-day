index = 1;

slideFuncs[index] = function (container){
    shape1 = new Shape(container, 200, 0, "bigleaf", 1.3);
    shape2 = new Shape(container, 100, -300, "flower", 0.81);

    

    app.loader
    .add('images/spritesheet/birdy-0.json')
    .load(onAssetsLoaded);

    function onAssetsLoaded() {
        hoverbird = new HoverBird(container, 0, 600);

        app.ticker.add((delta) => {

        });

    }
}

arriveTriggers[index] = function (){
    hoverbird.animateIn();

    shape1.animateIn(2000);
    shape2.animateIn(2000);

    //re-enable swiping
    setTimeout(function(){
        canSwipe = true;
        updateText();
    }, 3000);
}

leaveTriggers[index] = function (){
    hoverbird.animateOut();

    shape1.animateOut(2000);
    shape2.animateOut(2000);

    arrive(index+1);
}


