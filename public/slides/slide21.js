index = 21;

slideFuncs[index] = function (container){

    chrome21 = new Shape(container, 0, -100, "chrome", 0.05);

    copy21oneText = "chrome OS";
    copy21one = new Copy(container, 0, 0, copy21oneText, width, 'center', 'googleSans', '#5F6368', 50);


    let copy21twoText;
    if (lang == 'de') {
        copy21twoText = "Nachhaltigkeitsrechner";
    } else if (lang == 'fr') {
        copy21twoText = "Calculateur de durabilité";
    } else {
        copy21twoText = "Sustainability Calculator";
    }

    copy21two = new Copy(container, 0, 100, copy21twoText, width, 'center', 'googleSans', '#5F6368', 50);

    app.ticker.add((delta) => {
        windmill21L.update(delta);
        windmill21R.update(delta);
    });

}

arriveTriggers[index] = function (){

    // windmill21L.animateIn(1000);
    // windmill21R.animateIn(1000);
    copy21one.animateIn(500);
    copy21two.animateIn(1000);
    chrome21.animateIn(0);


        //re-enable swiping after 3000 milliseconds
        setTimeout(function(){
            // canSwipe = true;
            updateText();
            slide();
        }, 4000);
}

leaveTriggers[index] = function (){
    // windmill21L.animateOut(0);
    // windmill21R.animateOut(0);
    copy21one.animateOut(0);
    copy21two.animateOut(0);
    chrome21.animateOut(0);

    bush20.animateOut(2000);
    plant20L.animateOut(0);
    plant20R.animateOut(0);
    bird20.animateOut(1000);

    arrive(index+1);
}