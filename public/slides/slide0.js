index = 0;

slideFuncs[index] = function (container){

    //add sprites
    let sprite = PIXI.Sprite.from('images/chrome.png');
    container.addChild(sprite);
sprite.anchor.set(0.5);
//sprite.y = window.innerHeight/2;
sprite.scale.x = 0.1;
sprite.scale.y = 0.1;
//sprite.interactive = true;
//sprite.buttonMode = true;
//sprite.on('pointerdown', onClick1);

    //trigger anims
}