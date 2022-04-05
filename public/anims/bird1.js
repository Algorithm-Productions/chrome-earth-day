function Bird1(slide, x, y) {

      this.slide = slide;
      this.container = new PIXI.Container();
      this.slide.addChild(this.container);

      this.container.x = x;
      this.container.y = y;

      this.frames = [];

      for (let i = 0; i < 48; i++) {
          const val = i < 10 ? `0${i}` : i;
          this.frames.push(PIXI.Texture.from(`bird1${val}.png`));
      }

      this.anim = new PIXI.AnimatedSprite(this.frames);

      // this.anim.x = app.screen.width / 2;
      this.anim.y = 2000;
      this.anim.anchor.set(0.5);
      this.anim.scale.set(0.5);
      this.anim.animationSpeed = 0.5;
      this.anim.play();

      this.container.addChild(this.anim);

      this.update = function(delta) {
      };

      this.animateIn = function() {
        anime({
          targets: this.anim,
          y: 0,
          easing: 'easeInOutExpo',
          duration: 2000,
          delay: 500
        });
      };

      this.animateOut = function() {
        anime({
          targets: this.anim,
          y: -2000,
          easing: 'easeInOutExpo',
          duration: 2000,
          delay: 500
        });
      };

    }