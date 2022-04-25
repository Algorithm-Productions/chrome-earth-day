index = 22;

//enter email

slideFuncs[index] = function (container){
    chrome23 = new Shape(container, 0, -500, "chrome", 0.05);

    let copy23twoText;
    let copy23threeText;
    if (lang == 'de') {
        copy23twoText = "Nachhaltigkeitsrechner";
        copy23threeText = "Danke für Ihre Teilnahme 😀";
        copy23fourText = "Für weitere Informationen, besuchen Sie bitte https://chromeenterprise.google/os/sustainability";
    } else if (lang == 'fr') {
        copy23twoText = "Calculateur de durabilité";
        copy23threeText = "Merci de nous avoir rejoint 😀";
        copy23fourText = "Pour en savoir plus, visitez notre page web https://chromeenterprise.google/os/sustainability";
    } else {
        copy23twoText = "Sustainability Calculator";
        copy23threeText = "Thanks for joining 😀";
        copy23fourText = "For more information, please visit https://chromeenterprise.google/os/sustainability";
    }

    copy23oneText = "chrome OS";
    copy23one = new Copy(container, 0, -400, copy23oneText, width, 'center', 'googleSans', '#5F6368', 50);

    
    copy23two = new Copy(container, 0, -300, copy23twoText, width, 'center', 'googleSansBold', '#5F6368', 58);

    copy23three = new Copy(container, 0, -200, copy23threeText, width, 'center', 'googleSansBold', '#34A853', 42);

    copy23four = new Copy(container, 0, -100, copy23fourText, width-200, 'center', 'googleSans', '#5F6368', 38, "https://chromeenterprise.google/os/sustainability");

    
}

arriveTriggers[index] = function (){

    chrome23.animateIn(500);
    copy23one.animateIn(800);
    copy23two.animateIn(1000);
    copy23three.animateIn(1200);

    
    // copy23four.animateIn(1500);

    // bush20.animateIn(500);
    // plant20L.animateIn(1500);
    // plant20R.animateIn(1500);
    // bird20.animateIn(1000);

        //re-enable swiping after 3000 milliseconds
        setTimeout(function(){
            // canSwipe = true;
            $("#info").fadeIn(1000);
            updateText();
        }, 3000);
}

leaveTriggers[index] = function (){
    arrive(index+1);
}