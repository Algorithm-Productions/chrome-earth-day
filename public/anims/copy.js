function Copy(slide, x, y, text, width, align, font, color, size) {
    this.slide = slide;
    this.text = text;

    this.container = new PIXI.Container();
    this.slide.addChild(this.container);

    this.container.x = x;
    this.container.y = y;

    this.style = new PIXI.TextStyle({
      align: align,
      fontFamily: font,
      fill: color,
      fontSize: size,
      wordWrap: true,
      wordWrapWidth: width,
      lineJoin: 'round',
    });

    let textMetrics = PIXI.TextMetrics.measureText(text, this.style);

    this.textObj = new PIXI.Text(this.text, this.style);
    if (align == "center") {
        this.textObj.anchor.set(0.5,0);
    } else if (align == "left") {
        this.textObj.anchor.set(0);
    } else if (align == "right") {
        this.textObj.anchor.set(1,0);
    }
    
    
    this.textObj.alpha = 0;
    this.container.addChild(this.textObj);


    
    

    this.update = function(delta) {
      // this.text = new PIXI.Text(this.text, this.style);
      this.style = new PIXI.TextStyle({
        fontFamily: 'googleSans'
      });
    };

    this.animateIn = function(delay) {
      anime({
          targets: this.textObj,
          alpha: 1,
          easing: 'easeInOutExpo',
          duration: 1000,
          delay: delay*1.5
        });
    };

    this.animateOut = function() {
      anime({
          targets: this.textObj,
          alpha: 0,
          easing: 'easeInOutExpo',
          duration: 1000
        });
    };

  }