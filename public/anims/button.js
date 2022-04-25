function Button(parent, scale) {
    this.parent = parent;
    this.clicked = false;

    this.container = new PIXI.Container();
    this.parent.addChild(this.container);

    let call = function() {
      if (!this.clicked) {
        slide();
      }
      this.clicked = true;
      console.log(this.clicked);
    }

    this.container.x = width/2;
    this.container.y = height/2;
    this.container.scale.set(0);
    this.container.interactive = true;
    this.container.buttonMode = true;
    this.container.on('pointerdown', call);

    

    this.style = new PIXI.TextStyle({
      align: 'center',
      fontFamily: 'googleSans',
      fill: '#4285F4',
      fontSize: 42,
      wordWrap: true,
      wordWrapWidth: width*2-100,
      lineJoin: 'round',
    });

    
    this.bg = new PIXI.Graphics();

      this.bg.beginFill(0xD2E3FC);
      this.bg.moveTo(0, 0);
      this.bg.lineTo(-200, 0);
      this.bg.lineTo(-200, -50);
      this.bg.quadraticCurveTo(-200, -100, -150, -100);
      this.bg.lineTo(0, -100);
      this.bg.closePath();
      this.bg.endFill();

    this.container.addChild(this.bg);

    if (lang == 'de') {
      this.style.fontSize = 32;
      this.textObj = new PIXI.Text('Weiter', this.style);
    } else if (lang == 'fr') {
      this.style.fontSize = 32;
      this.textObj = new PIXI.Text('Suivant(e)', this.style);
    } else {
      this.textObj = new PIXI.Text('Next', this.style);
    }

    
    this.textObj.anchor.set(0.5);
    this.textObj.y = -50;
    this.textObj.x = -100;
    
    this.container.addChild(this.textObj);


    
    

    this.update = function(delta) {
      // this.text = new PIXI.Text(this.text, this.style);
      this.style = new PIXI.TextStyle({
        fontFamily: 'googleSans'
      });
    };

    this.animateIn = function(delay) {
      anime({
          targets: this.container.scale,
          x: scale,
          y: scale,
          easing: 'easeInOutExpo',
          duration: 2000,
          delay: delay
        });
    };

    this.animateOut = function(delay) {
        anime({
            targets: this.container.scale,
            x: 0,
            y: 0,
            easing: 'easeInOutExpo',
            duration: 1000,
            delay: delay
          });

    };

  }