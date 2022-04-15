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
      } else if (shape == "laptop") {

        this.shape = PIXI.Sprite.from('images/laptop.png');

      } else if (shape == "box") {

        this.shape = PIXI.Sprite.from('images/box.png');
        anime({
          targets: this.shape,
          x: 50,
          easing: 'easeInOutQuad',
          direction: 'alternate',
          loop: true,
          duration: 4000
        });

      } else if (shape == "puzzle1") {

        this.shape = PIXI.Sprite.from('images/puzzle1.png');
        anime({
          targets: this.shape,
          x: -50,
          y: -50,
          easing: 'easeInOutQuad',
          direction: 'alternate',
          loop: true,
          duration: 4000
        });

      } else if (shape == "puzzle2") {

        this.shape = PIXI.Sprite.from('images/puzzle2.png');
        anime({
          targets: this.shape,
          x: 50,
          y: 50,
          easing: 'easeInOutQuad',
          direction: 'alternate',
          loop: true,
          duration: 4000
        });

      } else if (shape == "cloud") {

        this.shape = PIXI.Sprite.from('images/cloud.png');
        anime({
          targets: this.shape,
          x: -width,
          easing: 'easeInOutQuad',
          direction: 'alternate',
          loop: true,
          duration: 20000
        });

      } else if (shape == "chrome") {

        this.shape = PIXI.Sprite.from('images/chrome.png');

      } else if (shape == "gauge") {

        this.shape = PIXI.Sprite.from('images/gauge.png');

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