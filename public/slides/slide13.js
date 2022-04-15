index = 13;

slideFuncs[index] = function (container){

    let textN13;
    if (lang == 'de') {
        textN13 = 'Wir stellen Ihnen ein paar kurze Fragen, und anschließend erfahren Sie, wie viele Tonnen Treibhausgasemissionen Sie mit Chrome OS sparen könnten.*';
    } else if (lang == 'fr') {
        textN13 = 'Laissez-nous vous poser deux questions rapides. Vous découvrirez ensuite une estimation des économies d’émissions de gaz à effet de serre que vous pourriez générer en utilisant Chrome OS*';
    } else {
        textN13 = 'Let’s ask you a couple of quick questions. You can then find out your estimated savings in greenhouse gas emissions by using Chrome OS*';
    }

    text13 = new Text(container, -200, -300, textN13, 1, 300, "right");
    windmill13 = new Windmill(container, 300, 400, 0.05, 1, 1);
    vine13 = new Vine(container, 0, 0, 100, -200, 300, 100, 4);

    button13 = new Button(container, 1.6);

    let copy13Text;
    if (lang == 'de') {
        copy13Text = '* Schätzungen, basierend auf unabhängigen Forschungen';
    } else if (lang == 'fr') {
        copy13Text = '*Estimations basées sur des recherches indépendantes';
    } else {
        copy13Text = '*Estimates based on  independent research.';
    }

    copy13 = new Copy(container, 0, height/3, copy13Text, width, 'center', 'googleSans', '#80868B', 36);
    
    app.ticker.add((delta) => {
        vine13.update(delta);
        text13.update(delta);
        windmill13.update(delta);
	});
}

arriveTriggers[index] = function (){
        //re-enable swiping after 3000 milliseconds

        vine13.animateIn(1500);
        text13.animateIn(2000);
        windmill13.animateIn(2500);

        button13.animateIn(3000);
        copy13.animateIn(3000);

        setTimeout(function(){
            // canSwipe = true;
            updateText();
        }, 3000);
}

leaveTriggers[index] = function (){

    vine13.animateOut(0);
    text13.animateOut(0);
    windmill13.animateOut(0);

    button13.animateOut(0);
    copy13.animateOut(0);
    
    arrive(index+1);
}