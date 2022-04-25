index = 19;

//enter email

slideFuncs[index] = function (container){

    let textN19;
    if (lang == 'de') {
        textN19 = 'Und wenn Sie Ihre vorhandenen PCs und Macs mit Chrome OS Flex modernisieren, können Sie deren Energieeffizienz um bis zu 21 % steigern.*';
    } else if (lang == 'fr') {
        textN19 = 'Et si vous modernisez vos ordinateurs Windows et Mac existants avec Chrome OS Flex, vous pourrez les rendre jusqu’à 21 % plus écoénergétiques*';
    } else {
        textN19 = 'And if you modernise your existing PCs and Macs with Chrome OS Flex, you can make them up to 21% more energy efficient.*';
    }

    text19 = new Text(container, 0, 120, textN19, 1, width/2-100, "center");
    sitting19 = new Sitting(container, -200, 150);
    sitting19.xScale = -0.3;
    flower19 = new Flower(container, 200, 150);
    chrome19 = new Shape(container, 0, -300, "chrome", 0.08);

    copy19oneText = "chrome OS";
    copy19one = new Copy(container, 0, -180, copy19oneText, width, 'center', 'googleSans', '#5F6368', 50);

    button19 = new Button(container, 1.6);

    copy19Text = "*Sutton-Parker, J. (2022), 'Quantifying greenhouse gas abatement delivered by alternative computer operating system displacement strategies'. Pre-Print for Science Direct. Berlin, Germany: ResearchGate.";
    copy19 = new Copy(container, 0, height/3, copy19Text, 800, 'center', 'googleSans', '#80868B', 28);

    app.ticker.add((delta) => {
        flower19.update(delta);
    });
}

arriveTriggers[index] = function (){

    text19.animateIn(500);
    sitting19.animateIn(1000);
    flower19.animateIn(1000);
    chrome19.animateIn(1000);
    copy19one.animateIn(1300);

    button19.animateIn(3000);
    copy19.animateIn(1000);

        //re-enable swiping after 3000 milliseconds
        setTimeout(function(){
            // canSwipe = true;
            updateText();
        }, 3000);
}

leaveTriggers[index] = function (){
    text19.animateOut(1500);
    sitting19.animateOut(0);
    flower19.animateOut(0);
    chrome19.animateOut(0);
    copy19one.animateOut(0);
    vine17.animateOut(1000);
    sun17.animateOut(0);
    shape17.animateOut(0);

    button19.animateOut(0);
    copy19.animateOut(0);

    arrive(index+1);
}