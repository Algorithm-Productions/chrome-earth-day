index = 0;

let hoverbird;

slideFuncs[index] = function (container){

	app.loader
    .add('images/spritesheet/birdy-0.json')
    .load(onAssetsLoaded);

    function onAssetsLoaded() {
        hoverbird = new HoverBird(container);
        // console.log(hoverbird);
    }

    //add sprites
    let sprite = PIXI.Sprite.from('images/chrome.png');
    container.addChild(sprite);
    sprite.anchor.set(0.5);
    //sprite.y = window.innerHeight/2;
    sprite.scale.x = 0.1;
    sprite.scale.y = 0.1;

}

arriveTriggers[index] = function (){
    console.log(hoverbird);
}

leaveTriggers[index] = function (){
    console.log(hoverbird);

    //once complete
    arrive(index+1);
}