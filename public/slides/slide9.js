index = 9;


slideFuncs[index] = function (container){
    let text = 'Imagine if every device used less energy \n and could even have a second life';
    text2 = new Text(container, 0, 0, text, 2);

    cloud9 = new Shape(container, width/2, -height/4, "cloud", 0.6);
    globe1 = new Globe(container, 0, 0, true);
    circle9 = new Circle(container, 0, 0, 300, 2);
    vine9 = new Vine(container, width/2, 0, width, -202, 200, 100, 5);
    bird72 = new Bird7(container, 0, -300);
    

    app.ticker.add((delta) => {
        circle9.update(delta);
        vine9.update(delta);
    });
}

arriveTriggers[index] = function (){

    globe1.animateIn(1500);
    circle9.animateIn(1000);
    bird72.animateIn(1500);
    vine9.animateIn(3000);
    cloud9.animateIn(3000);

        //re-enable swiping after 3000 milliseconds
        setTimeout(function(){
            slide();
            updateText();
        }, 6000);
}

leaveTriggers[index] = function (){

    globe1.animateOut(0);
    vine9.animateOut(0);
    cloud9.animateOut(0);

    arrive(index+1);
}