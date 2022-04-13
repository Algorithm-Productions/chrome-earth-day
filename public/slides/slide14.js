index = 14;

//how many computers 

slideFuncs[index] = function (container){
    globe14 = new Globe(container, 0, 0, false);
    circle14 = new Circle(container, 0, 0, 260, 2);
    container.sortableChildren = true;
    
    app.ticker.add((delta) => {
        circle14.update(delta);
    });
}

arriveTriggers[index] = function (){

    globe14.animateIn(500);
    circle14.animateIn(1000);

    

    $("#regCont").fadeIn(1000);
    
}

leaveTriggers[index] = function (){

    globe14.animateOut(0);
    circle14.animateOut(0);

    $("#regCont").fadeOut(1000);
    

    arrive(index+1);
}