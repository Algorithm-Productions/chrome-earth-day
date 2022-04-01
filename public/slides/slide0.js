index = 0;

let hoverbird, windmill2, vine1;

slideFuncs[index] = function (container){

	app.loader
    .add('images/spritesheet/birdy-0.json')
    .load(onAssetsLoaded);

    function onAssetsLoaded() {
        hoverbird = new HoverBird(container);
        // console.log(hoverbird);

        windmill2 = new Windmill(container, 0, height/2, 0.05, 1);
        vine1 = new Vine(container, 0, 0, 300, 0, 400, 100, 4);

	    app.ticker.add((delta) => {
	  		windmill2.update(delta);
            vine1.update(delta);
		});

		arriveTriggers[0]();
    }

    

}

arriveTriggers[index] = function (){
    windmill2.animateIn();
    vine1.animateIn();
}

leaveTriggers[index] = function (){
    windmill2.animateOut();
    vine1.animateOut();

    //once complete
    arrive(index+1);
}