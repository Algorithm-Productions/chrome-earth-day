index = 9;

slideFuncs[index] = function (container){
    let text = 'Imagine if every device used less energy \n and could even have a second life';
    text2 = new Text(container, 0, 0, text, 2);

    app.ticker.add((delta) => {
        text2.update(delta);
    });
}

arriveTriggers[index] = function (){

    text2.animateIn(1000);

        //re-enable swiping after 3000 milliseconds
        setTimeout(function(){
            canSwipe = true;
            updateText();
        }, 3000);
}

leaveTriggers[index] = function (){

    text2.animateOut();

   // document.getElementById('dropdown').fadeOut();
   arrive(index+1);
}