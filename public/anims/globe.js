function Globe(slide, x, y, loop) {

    this.slide = slide;
    this.container = new PIXI.Container();
    this.slide.addChild(this.container);

    this.container.x = x;
    this.container.y = y;

    this.frames = [];

    for (let i = 0; i < 125; i++) {
        // const val = i < 10 ? `0${i}` : i;
        let val = 0;
        if (i < 10) {
            val = `00${i}`;
        } else if (i < 100) {
            val = `0${i}`;
        } else {
            val = i;
        }
        this.frames.push(PIXI.Texture.from(`globe${val}.png`));
    }

    this.anim = new PIXI.AnimatedSprite(this.frames);

    let speed = 0.5;
    // this.anim.x = app.screen.width / 2;
    this.anim.anchor.set(0.538, 0.494);
    this.anim.scale.set(0);
    this.anim.animationSpeed = speed;
    this.anim.loop = false;
    this.anim.play();

    // const graphics = new PIXI.Graphics();
    // graphics.lineStyle(10, 0xFFBD01, 1);
    // graphics.drawCircle(0, 0, 275);
    // this.container.addChild(graphics);

    if (loop) {
        this.anim.onComplete = function () {
            speed = -speed;
            this.animationSpeed = speed;
            this.play();
            // console.log(this);
        };
    }

    this.container.addChild(this.anim);

    this.update = function(delta) {
    };

    this.animateIn = function(delay) {
      anime({
        targets: this.anim.scale,
        x: 1,
        y: 1,
        easing: 'easeInOutExpo',
        duration: 2000,
        delay: delay
      });
    };

    this.animateOut = function(delay) {
      anime({
        targets: this.anim.scale,
        x: 0,
        y: 0,
        easing: 'easeInOutExpo',
        duration: 2000,
        delay: delay
      });
    };

  }