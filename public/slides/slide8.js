index = 8;

slideFuncs[index] = function (container){

    let textN = 'Did you know that end-user computing devices such as laptops, desktops and notebooks generate 1% of global greenhouse gas emissions?';
    text3 = new Text(container, -100, -height/2+300, textN, 1, 300, "right");
    vine2 = new Vine(container, 0, 0, 200, -height/2+400, height/2+200, 100, 4);
    flowerB = new Shape(container, 200, 200, "flower", 1);
    shape8 = new Shape(container, -200, height/2-200, "laptop", 1);
    bird7 = new Bird7(container, -200, height/2-300);

    app.ticker.add((delta) => {
        text3.update(delta);
        vine2.update(delta);
	});
}

arriveTriggers[index] = function (){
        text3.animateIn(1000);
        vine2.animateIn(500);
        flowerB.animateIn(1500);
        shape8.animateIn(2000);
        bird7.animateIn(2500);

        //re-enable swiping after 3000 milliseconds
        setTimeout(function(){
            canSwipe = true;
            updateText();
        }, 3000);
}

leaveTriggers[index] = function (){
    text3.animateOut();
    vine2.animateOut();
    flowerB.animateOut(0);
    shape8.animateOut(0);
    bird7.animateOut(0);

    arrive(index+1);
}