/*
    --------------------------------
    PLANT
    --------------------------------
    */

    function Plant(slide, x, y) {
      this.slide = slide;
      this.container = new PIXI.Container();
      this.slide.addChild(this.container);

      this.container.x = x;
      this.container.y = y;

      this.stem = new PIXI.Graphics();
      this.container.addChild(this.stem);
      this.stem.position.set(0, 0);
      this.stem.lineStyle(3, 0x000000)
             .moveTo(0, 0)
             .lineTo(0, -20);
      this.stemVal = {
        length: 0
      }

      this.l1 = PIXI.Sprite.from('images/L' + getRandomInt(7) + '.png');
      this.container.addChild(this.l1);
      this.l1.y = -200;
      this.l1.scale.set(0);
      this.l1.anchor.set(0.5,1);

      this.l2 = PIXI.Sprite.from('images/L' + getRandomInt(7) + '.png');
      this.container.addChild(this.l2);
      this.l2.y = -130;
      this.l2.scale.set(0);
      this.l2.anchor.set(0.5,1);
      this.l2.rotation = -0.9;

      this.l3 = PIXI.Sprite.from('images/L' + getRandomInt(7) + '.png');
      this.container.addChild(this.l3);
      this.l3.y = -130;
      this.l3.scale.set(0);
      this.l3.anchor.set(0.5,1);
      this.l3.rotation = 0.9;

      this.l4 = PIXI.Sprite.from('images/L' + getRandomInt(7) + '.png');
      this.container.addChild(this.l4);
      this.l4.y = -50;
      this.l4.scale.set(0);
      this.l4.anchor.set(0.5,1);
      this.l4.rotation = -0.9;

      this.l5 = PIXI.Sprite.from('images/L' + getRandomInt(7) + '.png');
      this.container.addChild(this.l5);
      this.l5.y = -50;
      this.l5.scale.set(0);
      this.l5.anchor.set(0.5,1);
      this.l5.rotation = 0.9;

      this.update = function(delta) {
        this.stem.clear();
        this.stem.lineStyle(3, 0x000000)
             .moveTo(0, 0)
             .lineTo(0, this.stemVal.length);
      };

      this.animateIn = function(delay) {

        let anim = anime.timeline({
          easing: 'easeInOutQuart',
          duration: 1500,
          delay: delay
        });

        anim
        .add({
          targets: this.l1.scale,
            x: 0.6,
            y: 0.6
        }, 900)
        .add({
          targets: this.l2.scale,
            x: 0.6,
            y: 0.6
        }, 350)
        .add({
          targets: this.l3.scale,
            x: 0.6,
            y: 0.6
        }, 450)
        .add({
          targets: this.l4.scale,
            x: 0.6,
            y: 0.6
        }, 300)
        .add({
          targets: this.l5.scale,
            x: 0.6,
            y: 0.6
        }, 250)
        .add({
          targets: this.stemVal,
            length: -200
        }, 0)

        
      };

      this.animateOut = function(delay) {

        let anim = anime.timeline({
          easing: 'easeInOutQuart',
          duration: 1500,
          delay: delay
        });

        anim
        .add({
          targets: this.l1.scale,
            x: 0,
            y: 0
        }, 0)
        .add({
          targets: this.l2.scale,
            x: 0,
            y: 0
        }, 250)
        .add({
          targets: this.l3.scale,
            x: 0,
            y: 0
        }, 300)
        .add({
          targets: this.l4.scale,
            x: 0,
            y: 0
        }, 350)
        .add({
          targets: this.l5.scale,
            x: 0,
            y: 0
        }, 400)
        .add({
          targets: this.stemVal,
            length: 0
        }, 900)

        
      };
    }