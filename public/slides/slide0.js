index = 0;

slideFuncs[index] = function (container){

    
    shape3 = new Shape(container, width/2, 0, "hex", 1);

	arriveTriggers[0]();


}

arriveTriggers[index] = function (){
    shape3.animateIn(0);
}

leaveTriggers[index] = function (){
    shape3.animateOut(2000);
    //once complete
    arrive(index+1);
}