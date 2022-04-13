index = 18;

slideFuncs[index] = function (container){
    let textN18 = '[Company name] can save approximately [X tons] of greenhouse gas emissions by switching to Chrome OS. ';
    text18 = new Text(container, 0, 120, textN18, 1, width/2-100, "center");

    app.ticker.add((delta) => {
        text18.update(delta);
    });
}

arriveTriggers[index] = function (){

    text18.textObj.text = companyName +' can save approximately ' + finalValue + ' of greenhouse gas emissions by switching to Chrome OS. ';

    text18.animateIn(500);

        //re-enable swiping after 3000 milliseconds
        setTimeout(function(){
            canSwipe = true;
            updateText();
        }, 3000);
}

leaveTriggers[index] = function (){
    text18.animateOut(0);
    arrive(index+1);
}