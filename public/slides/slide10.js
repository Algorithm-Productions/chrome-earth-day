index = 10;

slideFuncs[index] = function (container){
    let text = 'Lets find out how';
    text1 = new Text(container, 0, 0, text, 1);
    vine1 = new Vine(container, 0, 0, 300, 100, 450, 100, 4);

    app.ticker.add((delta) => {
        text1.update(delta);
        vine1.update(delta);
	});
}

arriveTriggers[index] = function (){
        text1.animateIn(3000);
        vine1.animateIn(2000);

        //re-enable swiping after 3000 milliseconds
        setTimeout(function(){
            canSwipe = true;
            updateText();
        }, 3000);
}

leaveTriggers[index] = function (){
    text1.animateOut();
    vine1.animateOut();
    
    arrive(index+1);
}