index = 8;



slideFuncs[index] = function (container){
    globe1 = new Globe(container, 0, 0, true);
}

arriveTriggers[index] = function (){

    globe1.animateIn(1500);

        //re-enable swiping after 3000 milliseconds
        setTimeout(function(){
            canSwipe = true;
            updateText();
        }, 3000);
}

leaveTriggers[index] = function (){

    globe1.animateOut(0);

    arrive(index+1);
}