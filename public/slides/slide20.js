index = 20;


slideFuncs[index] = function (container){

    windmill21L = new Windmill(container, -width/2+150, height/2, 0.05, 1, 1);
    windmill21R = new Windmill(container, width/2-150, height/2, 0.05, 2, 1);

    globe20 = new Globe(container, 0, -200, true);
    ring20 = new Ring(container, 0, -200, 400, 12, 0.005);
    plant20L = new Plant(container, -220, height/2-80);
    plant20R = new Plant(container, 220, height/2-80);
    bush20 = new Bush(container, 0, height/2, 1, 1);
    bird20 = new Bird6(container, 0, height/2-150, 0, 0, 0.3);

    let copy20Text;
    if (lang == 'de') {
        copy20Text = "Sind Sie bereit?";  
    } else if (lang == 'fr') {
        copy20Text = "Êtes-vous prêt(e) ?";  
    } else {
        copy20Text = "Are you ready?";    
    }

    
    copy20 = new Copy(container, 0, -230, copy20Text, width, 'center', 'googleSans', '#34A853', 50);

    app.ticker.add((delta) => {
        ring20.update(delta);
        plant20L.update(delta);
        plant20R.update(delta);
    });
}

arriveTriggers[index] = function (){

    globe20.animateIn(500);
    ring20.animateIn(1000);
    bush20.animateIn(1500);
    plant20L.animateIn(2000);
    plant20R.animateIn(2000);
    bird20.animateIn(2000);
    copy20.animateIn(1500);

        //re-enable swiping after 3000 milliseconds
        setTimeout(function(){
            // canSwipe = true;
            updateText();
            slide();
        }, 6000);
}

leaveTriggers[index] = function (){
    globe20.animateOut(0);
    ring20.animateOut(0);
    copy20.animateOut(0);

    arrive(index+1);
}