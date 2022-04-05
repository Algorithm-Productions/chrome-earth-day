function Branch(slide, x, y) {
    this.slide = slide;

    this.container = new PIXI.Container();
    this.slide.addChild(this.container);

    this.container.x = x;
    this.container.y = y;

    this.update = function(delta) {

    };

    this.animateIn = function(delay) {

    };

    this.animateOut = function() {

    };

  }