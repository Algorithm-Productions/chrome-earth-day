function HoverBird(container) {

      this.container = container;

      this.frames = [];

      for (let i = 0; i < 100; i++) {
          const val = i < 10 ? `0${i}` : i;
          this.frames.push(PIXI.Texture.from(`bird10${val}.png`));
      }

      this.anim = new PIXI.AnimatedSprite(this.frames);

      // this.anim.x = app.screen.width / 2;
      this.anim.y = -300;
      this.anim.anchor.set(0.5);
      this.anim.scale.set(2);
      this.anim.animationSpeed = 0.5;
      this.anim.play();

      this.container.addChild(this.anim);

      this.update = function(delta) {
      };

      this.animateIn = function() {
        anime({
          targets: this.anim.scale,
          x: 3,
          easing: 'easeInOutExpo',
          duration: 3000,
          delay: delay
        });
      };

      this.animateOut = function() {
        
      };

    }