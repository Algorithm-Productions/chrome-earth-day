function Sun(slide, x, y, size) {
    this.slide = slide;

    this.container = new PIXI.Container();
    this.slide.addChild(this.container);

    this.container.x = x;
    this.container.y = y;

    this.graphics = new PIXI.Graphics();
    this.graphics.lineStyle(0); // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
    this.graphics.beginFill(0xFEF7E0, 1);
    this.graphics.drawCircle(0, 0, size);
    this.graphics.endFill();
    this.container.addChild(this.graphics);
    this.graphics.scale.set(0);

    this.update = function(delta) {
    };

    this.animateIn = function(delay) {
        anime({
            targets: this.graphics.scale,
            x: 1,
            y: 1,
            easing: 'easeInOutExpo',
            duration: 2000,
            delay: delay
        });
    };


    this.animateOut = function(delay) {
        anime({
            targets: this.graphics.scale,
            x: 0,
            y: 0,
            easing: 'easeInOutExpo',
            duration: 2000,
            delay: delay
        });
    };

  }