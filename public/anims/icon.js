function Icon(slide, x, y, shape, scale) {
    this.slide = slide;
    this.scale = scale;

    this.container = new PIXI.Container();
    this.slide.addChild(this.container);

    this.container.x = x;
    this.container.y = y;

    if (shape == "wrench") {
      this.shape = PIXI.Sprite.from('images/wrench.png');

    } else if (shape == "plug") {
      this.shape = PIXI.Sprite.from('images/plug.png');
    } else if (shape == "recycle") {
      this.shape = PIXI.Sprite.from('images/recycle.png');
    }

    anime({
        targets: this.shape,
        x: 50,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: true,
        duration: 4000
    });

    this.container.addChild(this.shape);
    this.shape.anchor.set(0.5);
    this.shape.scale.set(0);

    this.update = function(delta) {

    };

    this.animateIn = function(delay) {
      anime({
          targets: this.shape.scale,
          x: this.scale,
          y: this.scale,
          easing: 'easeInOutExpo',
          duration: 1000,
          delay: delay
        });
    };

    this.animateOut = function(delay) {
      anime({
          targets: this.shape.scale,
          x: 0,
          y: 0,
          easing: 'easeInOutExpo',
          duration: 1000,
          delay: delay
        });
    };

  }