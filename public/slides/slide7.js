index = 7;

slideFuncs[index] = function (container){

    let textN = 'Did you know that end-user computing devices such as laptops, desktops and notebooks generate 1% of global greenhouse gas emissions?';
    text3 = new Text(container, -100, -height/2+300, textN, 1);
    vine2 = new Vine(container, 0, 0, 200, -height/2+400, height/2+200, 100, 4);
    flowerB = new Shape(container, 200, 200, "flower", 1);

    app.ticker.add((delta) => {
        text3.update(delta);
        vine2.update(delta);
	});
}

arriveTriggers[index] = function (){
        text3.animateIn(1000);
        vine2.animateIn(500);
        flowerB.animateIn(1500);

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

    arrive(index+1);
}