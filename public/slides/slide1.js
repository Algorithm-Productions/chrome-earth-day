index = 1;

let ring1, plant1;

slideFuncs[index] = function (container){

    ring1 = new Ring(container, 0, 0, 300, 12, 0.005);
    plant1 = new Plant(container, 0, height/2);

    app.ticker.add((delta) => {
      plant1.update(delta);
      ring1.update(delta);
    });
}

arriveTriggers[index] = function (){
    ring1.animateIn(2000);
    plant1.animateIn(1000);
}

leaveTriggers[index] = function (){
    ring1.animateOut(2000);

    arrive(index+1);
}