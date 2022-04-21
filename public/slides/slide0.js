index = 0;

slideFuncs[index] = function (container){

	arriveTriggers[0]();

    // setTimeout(function(){
    //     arriveTriggers[22]();
    // }, 1000);
}

arriveTriggers[index] = function (){
    
        //re-enable swiping after 3000 milliseconds
        setTimeout(function(){

            //$("#regCont"+lang).fadeIn(1000);
            $("#landing").fadeIn(1000);
            // arriveTriggers[14]();
            updateText(); 
        }, 500);
}

leaveTriggers[index] = function (){

    $("#landing").fadeOut(1000);
    userName = document.getElementById('inp2').value;
    companyName = document.getElementById('inp3').value;
    //once complete
    arrive(index+1);
}