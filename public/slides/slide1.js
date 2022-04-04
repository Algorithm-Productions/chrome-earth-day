index = 1;

let ring1, plant1;

slideFuncs[index] = function (container){

    let text = 'Imagine if every device used less energy \n and could even have a second life';
    text2 = new Text(container, 0, 0, text, 2);
    ring1 = new Ring(container, 0, 0, 300, 12, 0.005);
    plant1 = new Plant(container, 0, height/2);

    app.ticker.add((delta) => {
        text2.update(delta);
        plant1.update(delta);
        ring1.update(delta);
    });
}

arriveTriggers[index] = function (){
    text2.animateIn();
    ring1.animateIn(2000);
    plant1.animateIn(1000);
}

leaveTriggers[index] = function (){
    text2.animateOut();
    ring1.animateOut(0);

    arrive(index+1);
}


