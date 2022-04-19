index = 14;

//how many computers 

slideFuncs[index] = function (container){
    globe14 = new Globe(container, 0, 0, false);
    circle14 = new Circle(container, 0, 0, 260, 2);
    container.sortableChildren = true;


    let copy14oneText;
    let copy14twoText;

    if (lang == 'de') {
        copy14oneText = 'Legen wir los';
        copy14twoText = 'Erstens, in welchem ​​Land sind Sie?';
    } else if (lang == 'fr') {
        copy14oneText = 'Commençons';
        copy14twoText = "Premièrement, dans quel pays êtes-vous ?";
    } else {
        copy14oneText = "Let's start";
        copy14twoText = "Firstly, what country are you in?";
    }


    copy14one = new Copy(container, 0, 350, copy14oneText, width, 'center', 'googleSansBold', '#34A853', 50);

    copy14two = new Copy(container, 0, 420, copy14twoText, width, 'center', 'googleSans', '#3C4043', 50);
    
    app.ticker.add((delta) => {
        circle14.update(delta);
    });
}

arriveTriggers[index] = function (){

    globe14.animateIn(1500);
    circle14.animateIn(1500);
    copy14one.animateIn(1500);
    copy14two.animateIn(1800);

    
    setTimeout(function(){
        $("#regCont").fadeIn(1000);
        updateText();
    }, 3000);
    
    
}

leaveTriggers[index] = function (){

    globe14.animateOut(0);
    circle14.animateOut(0);
    copy14one.animateOut(0);
    copy14two.animateOut(0);

    $("#regCont").fadeOut(1000);
    

    arrive(index+1);
}