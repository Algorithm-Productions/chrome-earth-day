function Windmill(slide, x, y, speed, colour, scale) {
      this.slide = slide;
      this.speed = speed;

      this.container = new PIXI.Container();
      this.slide.addChild(this.container);

      this.container.x = x;
      this.container.y = y;
      this.container.scale.set(scale);

      this.pole = PIXI.Sprite.from('images/wmPole.png');
      this.container.addChild(this.pole);
      this.pole.y = 0;
      this.pole.scale.y = 0;
      this.pole.anchor.set(0.5,1);

      this.fan = PIXI.Sprite.from('images/wmFan' + colour + '.png');
      this.container.addChild(this.fan);
      this.fan.scale.set(0);
      this.fan.y = 0;
      this.fan.anchor.set(0.5);

      this.update = function(delta) {
        this.fan.rotation -= this.speed * delta;
      };

      this.animateIn = function(delay) {
        let anim = anime.timeline({
          easing: 'easeInOutQuart',
          autoplay: false,
          duration: 1000
        });

        anim
        .add({
          targets: this.pole.scale,
            y: 1
        }, 350)
        .add({
          targets: this.fan,
            y: -330
        }, 350)
        .add({
          targets: this.fan.scale,
            x: 1,
            y: 1
        }, 800)

        setTimeout(function(){
            anim.play();
        }, delay);
      };


      this.animateOut = function() {
        let anim = anime.timeline({
          easing: 'easeInOutQuart',
          duration: 1000
        });

        anim
        .add({
          targets: this.pole.scale,
            y: 0,
            x: 0
        }, 400)
        .add({
          targets: this.fan,
            y: 0
        }, 400)
        .add({
          targets: this.fan.scale,
            x: 0,
            y: 0
        }, 0)
      };

    }