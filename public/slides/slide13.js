index = 13;

slideFuncs[index] = function (container){

}

arriveTriggers[index] = function (){
        //re-enable swiping after 3000 milliseconds

        $("#dropdown").fadeIn(1000);
}

leaveTriggers[index] = function (){
    $("#dropdown").fadeOut(1000);
    arrive(index+1);
}