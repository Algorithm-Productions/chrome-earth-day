index = 0;

let hoverbird, windmill2;

slideFuncs[index] = function (container){

	app.loader
    .add('images/spritesheet/birdy-0.json')
    .load(onAssetsLoaded);

    function onAssetsLoaded() {
        hoverbird = new HoverBird(container);
        // console.log(hoverbird);
    }
    
    windmill2 = new Windmill(container, 0, height/2, 0.05, 1);

    app.ticker.add((delta) => {
  		windmill2.update(delta);
	});

}

arriveTriggers[index] = function (){
    windmill2.animateIn();
}

leaveTriggers[index] = function (){
    windmill2.animateOut();

    //once complete
    arrive(index+1);
}