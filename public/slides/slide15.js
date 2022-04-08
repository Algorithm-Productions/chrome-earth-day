index = 15;

//how many replaced slider

slideFuncs[index] = function (container){

   

}

arriveTriggers[index] = function (){
        //re-enable swiping after 3000 milliseconds

        $("#slider").fadeIn(1000);


}

leaveTriggers[index] = function (){

    $("#slider").fadeOut(1000);

    arrive(index+1);
}