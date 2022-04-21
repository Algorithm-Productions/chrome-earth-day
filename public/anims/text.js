function Text(slide, x, y, text, bg, width, align) {
      this.slide = slide;
      this.text = text;

      this.container = new PIXI.Container();
      this.slide.addChild(this.container);

      this.container.x = x;
      this.container.y = y;

      this.style = new PIXI.TextStyle({
        align: align,
        fontFamily: 'googleSans',
        fill: '#202124',
        fontSize: 42,
        wordWrap: true,
        wordWrapWidth: width*2-100,
        lineJoin: 'round',
      });

      let textMetrics = PIXI.TextMetrics.measureText(text, this.style);
      let bgHeight = textMetrics.height*1.2+120;
      
      this.bg = new PIXI.Graphics();

      if (bg == 1) {
        this.bg.beginFill(0xCEEAD6);
        this.bg.moveTo(-width, 0);
        this.bg.lineTo(width-100, 0);
        this.bg.quadraticCurveTo(width, 0, width, 100);
        this.bg.lineTo(width, bgHeight);
        this.bg.lineTo(-width+100, bgHeight);
        this.bg.quadraticCurveTo(-width, bgHeight, -width, bgHeight-100);
        this.bg.closePath();
        this.bg.endFill();
      } else if (bg == 2) {
        this.bg.lineStyle(0); // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
        this.bg.beginFill(0xFAD2CF, 1);
        this.bg.drawCircle(0, 0, 300);
        this.bg.endFill();
      }

      this.bg.alpha = 0;

      this.container.addChild(this.bg);

      

      this.textObj = new PIXI.Text(this.text, this.style);
      if (bg == 1) {
        this.textObj.anchor.set(0.5,0);
        this.textObj.y = 60;
        // this.textObj.x = -50;
      } else if (bg == 2) {
        this.textObj.anchor.set(0.5);
        this.style.align = 'center';
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

        anime({
            targets: this.bg,
            alpha: 1,
            easing: 'easeInOutExpo',
            duration: 1000,
            delay: delay
          });
      };

      this.animateOut = function() {
        anime({
            targets: this.textObj,
            alpha: 0,
            easing: 'easeInOutExpo',
            duration: 1000
          });

        anime({
            targets: this.bg,
            alpha: 0,
            easing: 'easeInOutExpo',
            duration: 1000,
            delay: 300
          });
      };

    }