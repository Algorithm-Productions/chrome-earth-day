index = 18;

slideFuncs[index] = function (container){
    let textN18 = '[Company name] could save approximately [X tons] of greenhouse gas emissions by switching to Chrome OS* ';;
    let copy18oneText;
    let copy18twoText;
    let copy18threeText;

    if (lang == 'de') {
        copy18oneText = "*Sutton-Parker, J. (2021), „Quantifizierung der Treibhausgasminderung durch alternative Strategien zur Verdrängung von Computerbetriebssystemen.“ Amsterdam, Niederlande: Science Direct, Elsevier B.V.";
        copy18twoText = "Eingesparte THG";
        copy18threeText = "0";
    } else if (lang == 'fr') {
        copy18oneText = "*Sutton-Parker, J. (2021), « Quantification de la réduction des gaz à effet de serre fournie par des stratégies alternatives de déplacement du système d'exploitation informatique. » Amsterdam, Pays-Bas : Science Direct, Elsevier B.V.";
        copy18twoText = "Émissions de GES économisées";
        copy18threeText = "0";
    } else {
        copy18oneText = "*Sutton-Parker, J. (2021), ‘ Quantifying greenhouse gas abatement delivered by alternative computer operating system displacement strategies.’ Amsterdam, the Netherlands: Science Direct, Elsevier B.V.";
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
        text18.textObj.text = companyName +' can save approximately ' + finalValue + ' tons of greenhouse gas emissions by switching to Chrome OS*';
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