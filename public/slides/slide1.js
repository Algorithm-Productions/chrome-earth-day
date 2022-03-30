index = 1;

slideFuncs[index] = function (container){

    //add sprites
    let bird = PIXI.Sprite.from('images/bird2.png');
      container.addChild(bird);
      bird.scale.set(0.5);
      bird.y = 200;


    let bush = PIXI.Sprite.from('images/bush.png');
      container.addChild(bush);
      //bush.anchor.set(0.5,1);
      bush.scale.set(0.5);
      bush.x = window.innerWidth/2;
      bush.y = window.innerHeight;
}