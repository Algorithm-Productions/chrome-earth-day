function Shape(slide, x, y, shape, scale) {
      this.slide = slide;
      this.scale = scale;

      this.container = new PIXI.Container();
      this.slide.addChild(this.container);

      this.container.x = x;
      this.container.y = y;

      if (shape == "bigleaf") {
        this.shape = PIXI.Sprite.from('images/bigleaf.png');

        anime({
            targets: this.shape,
            rotation: 0.2,
            easing: 'easeInOutQuad',
            direction: 'alternate',
            loop: true,
            duration: 4000
          });

      } else if (shape == "hex") {
        this.shape = PIXI.Sprite.from('images/hex.png');

        anime({
            targets: this.shape,
            x: 50,
            easing: 'easeInOutQuad',
            direction: 'alternate',
            loop: true,
            duration: 4000
          });
      } else if (shape == "flower") {
        this.shape = PIXI.Sprite.from('images/flower.png');

        anime({
            targets: this.shape,
            rotation: Math.PI*2,
            easing: 'linear',
            loop: true,
            duration: 20000
          });
      }

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

      this.animateOut = function() {
        anime({
            targets: this.shape.scale,
            x: 0,
            y: 0,
            easing: 'easeInOutExpo',
            duration: 1000,
            delay: 800
          });
      };

    }