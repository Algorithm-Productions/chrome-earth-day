function Globe(slide, x, y, loop) {

    this.slide = slide;
    this.container = new PIXI.Container();
    this.slide.addChild(this.container);

    this.container.x = x;
    this.container.y = y;

    this.frames = [];
    this.bFrames = [];

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
        this.bFrames.push(PIXI.Texture.from(`bubbles${val}.png`));
    }

    this.graphics = new PIXI.Graphics();
    this.graphics.lineStyle(60, 0xE8F0FE, 1);
    this.graphics.alpha = 0;

    this.anim = new PIXI.AnimatedSprite(this.frames);
    this.bubbles = new PIXI.AnimatedSprite(this.bFrames);

    let speed = 0.5;
    this.anim.anchor.set(0.538, 0.494);
    this.anim.scale.set(0);
    this.anim.animationSpeed = speed;
    this.anim.loop = false;
    // this.anim.play();

    // this.bubbles.zIndex = 10;
    

    

    if (loop) {
        this.anim.onComplete = function () {
            speed = -speed;
            this.animationSpeed = speed;
            this.play();
            // console.log(this);
        };
  
        this.graphics.drawCircle(0, 0, 330);
    } else {
        this.bubbles.anchor.set(0.538, 0.494);
        this.bubbles.scale.set(0);
        this.bubbles.animationSpeed = 0.5;
        this.bubbles.loop = false;
        // this.bubbles.play();
        this.graphics.drawCircle(0, 0, 290);
    }

    this.container.addChild(this.graphics);
    this.container.addChild(this.anim);
    this.container.addChild(this.bubbles);
    

    this.update = function(delta) {
    };

    this.animateIn = function(delay) {
        let globe = this.anim;
        anime({
            targets: this.anim.scale,
            x: 1,
            y: 1,
            easing: 'easeInOutExpo',
            duration: 1000,
            delay: delay,
            complete: function(anim) {
                globe.play();
            }
        });

        let bubbles = this.bubbles;
        anime({
            targets: this.bubbles.scale,
            x: 1,
            y: 1,
            easing: 'easeInOutExpo',
            duration: 1000,
            delay: delay,
            complete: function(anim) {
                if (!loop) {
                    bubbles.play();
                }
            }
        });

        anime({
            targets: this.graphics,
            alpha: 1,
            easing: 'easeInOutExpo',
            duration: 1000,
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

      anime({
        targets: this.bubbles.scale,
        x: 0,
        y: 0,
        easing: 'easeInOutExpo',
        duration: 1000,
        delay: delay
      });

      anime({
        targets: this.graphics,
        alpha: 0,
        easing: 'easeInOutExpo',
        duration: 1000,
        delay: delay
    });
    };

  }