index = 17;

//energy saved

slideFuncs[index] = function (container){

}

arriveTriggers[index] = function (){
        //re-enable swiping after 3000 milliseconds
        setTimeout(function(){
            canSwipe = true;
            updateText();
        }, 3000);
}

leaveTriggers[index] = function (){
    arrive(index+1);
}