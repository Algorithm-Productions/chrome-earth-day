index = 7;

slideFuncs[index] = function (container){
    windmillL = new Windmill(container, -width/2+150, height/2, 0.05, 1, 0.9);
    windmillR = new Windmill(container, width/2-150, height/2, 0.05, 2, 0.9);
    sunM = new Sun(container, 0, 0, width/2-50);

    chrome7 = new Shape(container, 0, -100, "chrome", 0.05);

    copy7oneText = "chrome OS";
    copy7one = new Copy(container, 0, 0, copy7oneText, width, 'center', 'googleSans', '#5F6368', 50);

    copy7twoText = "Sustainability Calculator";
    copy7two = new Copy(container, 0, 100, copy7twoText, width, 'center', 'googleSans', '#5F6368', 50);

    app.ticker.add((delta) => {
  		windmillL.update(delta);
        windmillR.update(delta);
	});
}

arriveTriggers[index] = function (){

    anime({
        targets: bush6.container,
        x: 0,
        easing: 'easeInOutExpo',
        duration: 1000,
        delay: 0
    });

    anime({
        targets: bush6.bush.scale,
        x: 1,
        y: 1,
        easing: 'easeInOutExpo',
        duration: 1000,
        delay: 0
    });

    anime({
        targets: bird6.container,
        x: 0,
        easing: 'easeInOutExpo',
        duration: 1000,
        delay: 0
    });

    anime({
        targets: bird6.container.scale,
        x: 0.5,
        y: 0.5,
        easing: 'easeInOutExpo',
        duration: 1000,
        delay: 0
    });

    windmillL.animateIn(0);
    windmillR.animateIn(0);
    sunM.animateIn(0);
    copy7one.animateIn(500);
    copy7two.animateIn(1000);
    chrome7.animateIn(0);

        //re-enable swiping after 3000 milliseconds
        setTimeout(function(){
            slide();
            updateText();
        }, 4000);
}

leaveTriggers[index] = function (){
    windmillL.animateOut();
    windmillR.animateOut();
    sunM.animateOut(0);
    bush6.animateOut(0);
    bird6.animateOut(0);
    copy7one.animateOut(0);
    copy7two.animateOut(0);
    chrome7.animateOut(0);

    arrive(index+1);
}