index = 18;

slideFuncs[index] = function (container){
    let textN18 = '[Company name] could save approximately [X tons] of greenhouse gas emissions by switching to Chrome OS* ';;
    let copy18oneText;
    let copy18twoText;
    let copy18threeText;


    copy18oneText = "*Sutton-Parker, J. (2021), ‘ Quantifying greenhouse gas abatement delivered by alternative computer operating system displacement strategies.’ Amsterdam, the Netherlands: Science Direct, Elsevier B.V.";
    if (lang == 'de') {
        copy18twoText = "Eingesparte THG";
        copy18threeText = "0";
    } else if (lang == 'fr') {
        copy18twoText = "Émissions de GES économisées";
        copy18threeText = "0";
    } else {  
        copy18twoText = "GHG Saved";
        copy18threeText = "0";
    }

    text18 = new Text(container, 0, 120, textN18, 1, width/2-100, "center");
    gauge18 = new Shape(container, 0, -150, "gauge", 1);

    button18 = new Button(container, 1.6);

    copy18one = new Copy(container, 0, height/3, copy18oneText, 800, 'center', 'googleSans', '#80868B', 28);

    
    copy18two = new Copy(container, 0, 0, copy18twoText, 800, 'center', 'googleSans', '#34A853', 42);

    
    copy18three = new Copy(container, 0, -170, copy18threeText, 800, 'center', 'googleSans', '#34A853', 42);

    app.ticker.add((delta) => {
        text18.update(delta);
    });
}

arriveTriggers[index] = function (){

    if (lang == 'de') {
        text18.textObj.text = companyName +' könnte durch den Wechsel zu Chrome OS etwa ' + finalValue + ' Tonnen Treibhausgasemissionen sparen*';
    } else if (lang == 'fr') {
        text18.textObj.text = companyName +' pourrait économiser environ ' + finalValue + " tonnes d'émissions de gaz à effet de serre en adoptant Chrome OS*";
    } else {
        text18.textObj.text = companyName +' could save approximately ' + finalValue + ' tons of greenhouse gas emissions by switching to Chrome OS*';
    }

    copy18three.textObj.text = finalValue;

    text18.animateIn(500);
    gauge18.animateIn(1000);

    button18.animateIn(3000);
    copy18one.animateIn(1000);
    copy18two.animateIn(1000);
    copy18three.animateIn(1000);

        //re-enable swiping after 3000 milliseconds
        setTimeout(function(){
            // canSwipe = true;
            updateText();
        }, 3000);
}

leaveTriggers[index] = function (){
    text18.animateOut(0);
    bird17.animateOut(0);
    copy18one.animateOut(0);
    gauge18.animateOut(0);
    copy18two.animateOut(0);
    copy18three.animateOut(0);

    button18.animateOut(0);
    arrive(index+1);
}