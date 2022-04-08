index = 14;

//how many computers 

slideFuncs[index] = function (container){
    
    running = new Running(container, 50, 300);
    ring1 = new Ring(container, 0, 0, 400, 12, 0.01);

    app.ticker.add((delta) => {
        ring1.update(delta);
    });

}

arriveTriggers[index] = function (){
    
    ring1.animateIn(1000);
    running.animateIn(1000);

    $("#input").fadeIn(1000);


}

leaveTriggers[index] = function (){

    
    ring1.animateOut(0);
    running.animateOut(0);

    $("#input").fadeOut(1000);

    arrive(index+1);
}