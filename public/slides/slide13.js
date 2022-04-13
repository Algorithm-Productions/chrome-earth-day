index = 13;

slideFuncs[index] = function (container){

    let textN13 = 'Let’s ask you a couple of quick questions. You can then find out your estimated savings in greenhouse gas emissions by using Chrome OS*';
    text13 = new Text(container, -200, -300, textN13, 1, 300, "right");
    windmill13 = new Windmill(container, 300, 400, 0.05, 1, 1);
    vine13 = new Vine(container, 0, 0, 100, -200, 300, 100, 4);
    
    app.ticker.add((delta) => {
        vine13.update(delta);
        text13.update(delta);
        windmill13.update(delta);
	});
}

arriveTriggers[index] = function (){
        //re-enable swiping after 3000 milliseconds

        vine13.animateIn(1500);
        text13.animateIn(2000);
        windmill13.animateIn(2500);

        setTimeout(function(){
            canSwipe = true;
            updateText();
        }, 3000);
}

leaveTriggers[index] = function (){

    vine13.animateOut(0);
    text13.animateOut(0);
    windmill13.animateOut(0);
    
    arrive(index+1);
}