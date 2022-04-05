index = 9;

slideFuncs[index] = function (container){

}

arriveTriggers[index] = function (){

    $("#dropdown").fadeIn(1000);

        //re-enable swiping after 3000 milliseconds
        setTimeout(function(){
            canSwipe = true;
            updateText();
        }, 3000);
}

leaveTriggers[index] = function (){

    $("#dropdown").fadeOut(1000);

   // document.getElementById('dropdown').fadeOut();
}