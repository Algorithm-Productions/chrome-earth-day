function Bird6(slide, cx, cy, bx, by, scale) {

    this.slide = slide;
    this.container = new PIXI.Container();
    this.slide.addChild(this.container);

    this.container.x = cx;
    this.container.y = cy;

    this.frames = [];

    for (let i = 0; i < 50; i++) {
        const val = i < 10 ? `0${i}` : i;
        this.frames.push(PIXI.Texture.from(`bird6${val}.png`));
    }

    this.anim = new PIXI.AnimatedSprite(this.frames);

    // this.anim.x = app.screen.width / 2;
    this.anim.anchor.set(0.47,0.9);
    this.anim.position.set(bx,by);
    this.anim.scale.set(0);
    this.anim.animationSpeed = 0.5;
    this.anim.play();

    this.container.addChild(this.anim);

    // const graphics = new PIXI.Graphics();
    // graphics.lineStyle(10, 0xFFBD01, 1);
    // graphics.drawCircle(bx, by, 5);
    // this.container.addChild(graphics);

    this.update = function(delta) {
    };

    this.animateIn = function(delay) {
      anime({
        targets: this.anim.scale,
        x: scale,
        y: scale,
        easing: 'easeInOutExpo',
        duration: 500,
        delay: delay
      });
    };

    this.animateOut = function(delay) {
      anime({
        targets: this.anim.scale,
        x: 0,
        y: 0,
        easing: 'easeInOutExpo',
        duration: 500,
        delay: delay
      });
    };

  }