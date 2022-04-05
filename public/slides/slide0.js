index = 0;

slideFuncs[index] = function (container){

    
    shape3 = new Shape(container, width/2, 0, "hex", 1);

	arriveTriggers[0]();


}

arriveTriggers[index] = function (){
    shape3.animateIn(0);

    //document.getElementById('dropdown').hidden = false;
    //document.getElementById('dropdown').addClass('fade-in');
    
        //re-enable swiping after 3000 milliseconds
        setTimeout(function(){
            canSwipe = true;
            updateText();
        }, 3000);
}

leaveTriggers[index] = function (){
    shape3.animateOut(2000);
    //once complete
    arrive(index+1);
}