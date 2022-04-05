index = 14;

//how many computers 

slideFuncs[index] = function (container){

}

arriveTriggers[index] = function (){

    $("#input").fadeIn(1000);

}

leaveTriggers[index] = function (){

    $("#input").fadeOut(1000);

    arrive(index+1);
}