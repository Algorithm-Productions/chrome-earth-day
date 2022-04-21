index = 22;

slideFuncs[index] = function (container){

}

arriveTriggers[index] = function (){

    
        //re-enable swiping after 3000 milliseconds
        setTimeout(function(){
            $("#email").fadeIn(1000);
            updateText();
        }, 2000);
}

leaveTriggers[index] = function (){
    $("#email").fadeOut(1000);
    arrive(index+1);
}