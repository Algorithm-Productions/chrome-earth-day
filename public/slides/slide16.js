index = 16;


//tons GHG saved

slideFuncs[index] = function (container){


    let copy16Text;
    if (lang == 'de') {
        copy16Text = "Ungefähr wie viel Prozent dieser Geräte würden Sie normalerweise jedes Jahr austauschen lassen?";
    } else if (lang == 'fr') {
        copy16Text = "Approximativement, quel pourcentage de ces appareils sont généralement remplacés chaque année ?";
    } else {
        copy16Text = "Approximately, what percentage of these devices would normally be replaced each year?";
    }


    laptop16 = new Shape(container, 0, -450, "laptop", 1);
    sun16 = new Sun(container, 0, height/3, 400);
    windmill16L = new Windmill(container, -width/3, height/2-150, 0.05, 2, 1);
    windmill16R = new Windmill(container, width/3, height/2-150, 0.05, 2, 1);
    bush16L = new Bush(container, -width/4, height/2, 3, 1);
    bush16R = new Bush(container, width/4, height/2, 4, 1);

    
    copy16 = new Copy(container, 0, -300, copy16Text, 600, 'center', 'googleSansBold', '#202124', 36);

    app.ticker.add((delta) => {
        windmill16L.update(delta);
        windmill16R.update(delta);
    });

}

arriveTriggers[index] = function (){

    laptop16.animateIn(1500);
    windmill16L.animateIn(1000);
    windmill16R.animateIn(1000);
    sun16.animateIn(500);
    bush16L.animateIn(500);
    bush16R.animateIn(500);
    copy16.animateIn(500);

   

        //re-enable swiping after 3000 milliseconds
        setTimeout(function(){
            // canSwipe = true;
            updateText();
            $("#sliderCont").fadeIn(1000);
        }, 3000);
}

leaveTriggers[index] = function (){

    laptop16.animateOut(0);
    windmill16L.animateOut(0);
    windmill16R.animateOut(0);
    sun16.animateOut(500);
    bush16L.animateOut(500);
    bush16R.animateOut(500);
    copy16.animateOut(0);

    $("#sliderCont").fadeOut(1000);

    arrive(index+1);
}