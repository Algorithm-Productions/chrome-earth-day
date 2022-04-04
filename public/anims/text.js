function Text(slide, x, y, text, bg) {
      this.slide = slide;
      this.text = text;

      this.container = new PIXI.Container();
      this.slide.addChild(this.container);

      this.container.x = x;
      this.container.y = y;

      this.style = new PIXI.TextStyle({
        align: 'right',
        fontFamily: 'googleSans',
        fill: '#202124',
        fontSize: 42,
        wordWrap: true,
        wordWrapWidth: 500,
        lineJoin: 'round',
      });

      let textMetrics = PIXI.TextMetrics.measureText(text, this.style);
      let bgHeight = textMetrics.height*1.2+120;
      
      this.bg = new PIXI.Graphics();

      if (bg == 1) {
        this.bg.beginFill(0xCEEAD6);
        this.bg.moveTo(-300, 0);
        this.bg.lineTo(200, 0);
        this.bg.quadraticCurveTo(300, 0, 300, 100);
        this.bg.lineTo(300, bgHeight);
        this.bg.lineTo(-200, bgHeight);
        this.bg.quadraticCurveTo(-300, bgHeight, -300, bgHeight-100);
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

      

      this.text = new PIXI.Text(this.text, this.style);
      if (bg == 1) {
        this.text.anchor.set(0.5,0);
        this.text.y = 60;
      } else if (bg == 2) {
        this.text.anchor.set(0.5);
        this.style.align = 'center';
      }
      
      
      this.text.alpha = 0;
      this.container.addChild(this.text);


      
      

      this.update = function(delta) {
        // this.text = new PIXI.Text(this.text, this.style);
        this.style = new PIXI.TextStyle({
          fontFamily: 'googleSans'
        });
      };

      this.animateIn = function(delay) {
        anime({
            targets: this.text,
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
            targets: this.text,
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