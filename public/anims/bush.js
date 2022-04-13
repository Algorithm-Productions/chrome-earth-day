function Bush(slide, x, y, style, scale) {
    this.slide = slide;
    this.scale = scale;

    this.container = new PIXI.Container();
    this.slide.addChild(this.container);

    this.container.x = x;
    this.container.y = y;

    if (style == 1) {
      this.bush = PIXI.Sprite.from('images/bush1.png');
    } else if (style == 2) {
      this.bush = PIXI.Sprite.from('images/bush2.png');
    } else if (style == 3) {
      this.bush = PIXI.Sprite.from('images/bush3.png');
    } else if (style == 4) {
      this.bush = PIXI.Sprite.from('images/bush4.png');
    } else if (style == 5) {
      this.bush = PIXI.Sprite.from('images/bush5.png');
    }

    this.container.addChild(this.bush);
    this.bush.anchor.set(0.5, 1);
    this.bush.scale.set(0);

    this.update = function(delta) {

    };

    this.animateIn = function(delay) {
      anime({
          targets: this.bush.scale,
          x: this.scale,
          y: this.scale,
          easing: 'easeInOutExpo',
          duration: 1000,
          delay: delay
        });
    };

    this.animateOut = function(delay) {
      anime({
          targets: this.bush.scale,
          x: 0,
          y: 0,
          easing: 'easeInOutExpo',
          duration: 1000,
          delay: delay
        });
    };

  }