index = 15;

//how many replaced slider

slideFuncs[index] = function (container){

    running = new Running(container, 50, 300);
    ring1 = new Ring(container, 0, 0, 400, 12, 0.01);

    let copy15oneText;
    let copy15twoText;

    if (lang == 'de') {
        copy15oneText = 'Wie viele Endnutzergeräte gibt es in Ihrem Unternehmen?';
        copy15twoText = 'Eine Schätzung reicht aus, wir verwenden eine typische Zusammensetzung aus Desktop- und mobilen Geräten als Basis für unsere Berechnung.';
    } else if (lang == 'fr') {
        copy15oneText = 'Combien d’appareils utilisateurs possède votre entreprise ?';
        copy15twoText = "Une estimation suffit ; nous baserons nos calculs sur un pourcentage d'ordinateurs de bureau et portables typique";
    } else {
        copy15oneText = "How many end-user devices does your company have?";
        copy15twoText = "Estimates are fine; we'll base our calculations on a typical percentage of desktop and mobile devices.";
    }

    copy15one = new Copy(container, 0, -180, copy15oneText, 600, 'center', 'googleSansBold', '#202124', 36);
    copy15two = new Copy(container, 0, height/3, copy15twoText, 800, 'center', 'googleSans', '#80868B', 28);

    app.ticker.add((delta) => {
        ring1.update(delta);
    });

}

arriveTriggers[index] = function (){
    //re-enable swiping after 3000 milliseconds
    ring1.animateIn(1000);
    running.animateIn(1000);
    copy15one.animateIn(1000);
    copy15two.animateIn(1000);
    
        
        setTimeout(function(){
            $("#input").fadeIn(1000);
            updateText();
        }, 3000);

}

leaveTriggers[index] = function (){
    ring1.animateOut(0);
    running.animateOut(0);
    copy15one.animateOut(0);
    copy15two.animateOut(0);

    $("#input").fadeOut(1000);
    

    arrive(index+1);
}