function Running(slide, x, y) {

    this.slide = slide;
    this.container = new PIXI.Container();
    this.slide.addChild(this.container);

    this.container.x = x;
    this.container.y = y;

    this.frames = [];

    for (let i = 0; i < 20; i++) {
        const val = i < 10 ? `0${i}` : i;
        this.frames.push(PIXI.Texture.from(`squirrel_v2${val}.png`));
    }

    this.anim = new PIXI.AnimatedSprite(this.frames);

    this.anim.anchor.set(0.5);
    this.anim.scale.set(0);
    this.anim.animationSpeed = 0.5;
    this.anim.play();

    this.container.addChild(this.anim);

    this.update = function(delta) {
    };

    this.animateIn = function(delay) {
      anime({
        targets: this.anim.scale,
        x: 0.3,
        y: 0.3,
        easing: 'easeInOutExpo',
        duration: 3000,
        delay: delay
      });
    };

    this.animateOut = function(delay) {
      anime({
        targets: this.anim.scale,
        x: 0,
        y: 0,
        easing: 'easeInOutExpo',
        duration: 1000,
        delay: delay
      });
    };

  }