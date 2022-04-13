function Bird9(slide, x, y) {

    this.slide = slide;
    this.container = new PIXI.Container();
    this.slide.addChild(this.container);

    this.container.x = x;
    this.container.y = y;

    this.frames = [];

    for (let i = 0; i < 25; i++) {
        const val = i < 10 ? `0${i}` : i;
        this.frames.push(PIXI.Texture.from(`bird 9${val}.png`));
    }

    this.anim = new PIXI.AnimatedSprite(this.frames);

    this.anim.x = -width;
    this.anim.anchor.set(0.47,0.92);
    this.anim.scale.set(0.4);
    this.anim.animationSpeed = 0.5;
    this.anim.play();

    this.container.addChild(this.anim);

    // const graphics = new PIXI.Graphics();
    // graphics.lineStyle(10, 0xFFBD01, 1);
    // graphics.drawCircle(0, 0, 5);
    // this.container.addChild(graphics);

    this.update = function(delta) {
    };

    this.animateIn = function(delay) {
      anime({
        targets: this.anim,
        x: 0,
        easing: 'easeInOutExpo',
        duration: 2000,
        delay: delay
      });
    };

    this.animateOut = function(delay) {
      anime({
        targets: this.anim,
        x: width,
        easing: 'easeInOutExpo',
        duration: 2000,
        delay: delay
      });
    };

  }