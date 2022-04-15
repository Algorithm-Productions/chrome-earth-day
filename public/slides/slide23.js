index = 23;

//enter email

slideFuncs[index] = function (container){
    chrome23 = new Shape(container, 0, -500, "chrome", 0.05);

    copy23oneText = "chrome OS";
    copy23one = new Copy(container, 0, -400, copy23oneText, width, 'center', 'googleSans', '#5F6368', 50);

    copy23twoText = "Sustainability Calculator";
    copy23two = new Copy(container, 0, -300, copy23twoText, width, 'center', 'googleSansBold', '#5F6368', 58);

    copy23threeText = "Thanks for joining 😀";
    copy23three = new Copy(container, 0, -200, copy23threeText, width, 'center', 'googleSansBold', '#34A853', 42);
}

arriveTriggers[index] = function (){

    chrome23.animateIn(500);
    copy23one.animateIn(800);
    copy23two.animateIn(1000);
    copy23three.animateIn(1200);

    bush20.animateIn(500);
    plant20L.animateIn(1500);
    plant20R.animateIn(1500);
    bird20.animateIn(1000);

        //re-enable swiping after 3000 milliseconds
        setTimeout(function(){
            // canSwipe = true;
            updateText();
        }, 3000);
}

leaveTriggers[index] = function (){
    arrive(index+1);
}