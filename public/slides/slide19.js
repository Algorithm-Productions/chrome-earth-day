index = 19;

//enter email

slideFuncs[index] = function (container){
    let textN19 = 'And if you modernise your existing PCs and Macs with Chrome OS Flex, you can make them up to 21% more energy efficient.*';
    text19 = new Text(container, 0, 120, textN19, 1, width/2-100, "center");
    sitting19 = new Sitting(container, -200, 150);
    sitting19.xScale = -0.3;
    flower19 = new Flower(container, 200, 150);

    app.ticker.add((delta) => {
        flower19.update(delta);
    });
}

arriveTriggers[index] = function (){

    text19.animateIn(500);
    sitting19.animateIn(1000);
    flower19.animateIn(1000);

        //re-enable swiping after 3000 milliseconds
        setTimeout(function(){
            canSwipe = true;
            updateText();
        }, 3000);
}

leaveTriggers[index] = function (){
    arrive(index+1);
}