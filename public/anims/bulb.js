function Bulb(slide, x, y, scale) {
    this.x = x;
    this.y = y;

    this.slide = slide;
    this.container = new PIXI.Container();
    this.slide.addChild(this.container);

    this.container.x = this.x;
    this.container.y = this.y;

    anime({
      targets: this.container,
      y: y-50,
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: true,
      duration: 3000
    });

    this.bulb = PIXI.Sprite.from('images/bulb.png');
    this.container.addChild(this.bulb);
    this.bulb.anchor.set(0.5,0.78);
    this.bulb.scale.set(0);

    this.stem = new PIXI.Graphics();
      this.container.addChild(this.stem);
      this.stem.position.set(0, 0);
      this.stem.lineStyle(5, 0x4F5453)
             .moveTo(0, 0)
             .lineTo(0, 0);
    this.stemVal = {
        length: 0
    }

    this.l1 = PIXI.Sprite.from('images/leaf9.png');
    this.container.addChild(this.l1);
    this.l1.y = -100;
    this.l1.scale.set(0);
    this.l1.rotation = degrees_to_radians(180);

    this.l2 = PIXI.Sprite.from('images/leaf10.png');
    this.container.addChild(this.l2);
    this.l2.y = -100;
    this.l2.scale.set(0);
    this.l2.rotation = degrees_to_radians(270);

    this.update = function(delta) {
        this.stem.clear();
        this.stem.lineStyle(5, 0x4F5453)
             .moveTo(0, 0)
             .lineTo(0, this.stemVal.length);
    };

    this.animateIn = function(delay) {

        var bulbAnim = anime.timeline({
            easing: 'easeInOutQuart',
            duration: 500
          });
          
          // Add children
          bulbAnim
          .add({
            targets: this.bulb.scale,
            x: 1,
            y: 1,
          })
          .add({
            targets: this.stemVal,
            length: -110,
          })
          .add({
            targets: this.l1.scale,
            x: 1,
            y: 1,
          })
          .add({
            targets: this.l2.scale,
            x: 1,
            y: 1,
          });

    };

    this.animateOut = function(delay) {
        var bulbAnim = anime.timeline({
            easing: 'easeInOutQuart',
            duration: 500
          });
          
          // Add children
          bulbAnim
          .add({
            targets: this.l2.scale,
            x: 0,
            y: 0,
          })
          .add({
            targets: this.l1.scale,
            x: 0,
            y: 0,
          })
          .add({
            targets: this.stemVal,
            length: 0,
          })
          .add({
            targets: this.bulb.scale,
            x: 0,
            y: 0,
          });
          
          
          

    };
    }