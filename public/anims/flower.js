/*
    --------------------------------
    PLANT
    --------------------------------
    */

    function Flower(slide, x, y) {
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
  
        this.l5 = PIXI.Sprite.from('images/leaf6.png');
        this.container.addChild(this.l5);
        this.l5.y = -30;
        this.l5.scale.set(0);
        this.l5.rotation = -Math.PI/2;

        this.flower = PIXI.Sprite.from('images/flower.png');
        this.container.addChild(this.flower);
        this.flower.y = -100;
        this.flower.anchor.set(0.5);
        this.flower.scale.set(0);
  
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
            targets: this.l5.scale,
              x: 0.6,
              y: 0.6
          }, 250)
          .add({
            targets: this.stemVal,
              length: -100
          }, 0)
          .add({
            targets: this.flower.scale,
            x: 0.15,
            y: 0.15,
          }, 500)
  
          
        };
  
        this.animateOut = function(delay) {
  
          let anim = anime.timeline({
            easing: 'easeInOutQuart',
            duration: 1500,
            delay: delay
          });
  
          anim
          .add({
            targets: this.l5.scale,
              x: 0,
              y: 0
          }, 400)
          .add({
            targets: this.flower.scale,
            x: 0,
            y: 0,
          }, 0)
          .add({
            targets: this.stemVal,
              length: 0
          }, 900)
  
          
        };
      }