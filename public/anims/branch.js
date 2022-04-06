function Branch(slide, x, y) {
    this.slide = slide;

    this.container = new PIXI.Container();
    this.slide.addChild(this.container);
    this.container.scale.set(0);
    this.container.rotation = -2;

    this.container.x = x;
    this.container.y = y;

    this.branch = PIXI.Sprite.from('images/branch.png');
    this.container.addChild( this.branch);
    this.branch.anchor.set(0.5);
    this.branch.scale.set(1);

    this.leaves = [];

    //LEFT

    this.leaf = PIXI.Sprite.from('images/leaf7.png');
    this.container.addChild(this.leaf);
    this.leaf.position.set(-240,12);
    this.leaf.rotation = Math.PI/2;
    this.leaf.scale.set(0);
    this.leaves.push(this.leaf);

    this.leaf = PIXI.Sprite.from('images/leaf7.png');
    this.container.addChild(this.leaf);
    this.leaf.position.set(-210,33);
    this.leaf.rotation = Math.PI/3;
    this.leaf.scale.set(0);
    this.leaves.push(this.leaf);

    this.leaf = PIXI.Sprite.from('images/leaf8.png');
    this.container.addChild(this.leaf);
    this.leaf.position.set(-230,25);
    this.leaf.rotation = -Math.PI/2;
    this.leaf.scale.set(0);
    this.leaves.push(this.leaf);

    //RIGHT

    this.leaf = PIXI.Sprite.from('images/leaf7.png');
    this.container.addChild(this.leaf);
    this.leaf.position.set(240,-12);
    this.leaf.rotation = -Math.PI/2;
    this.leaf.scale.set(0);
    this.leaves.push(this.leaf);

    this.leaf = PIXI.Sprite.from('images/leaf7.png');
    this.container.addChild(this.leaf);
    this.leaf.position.set(210,-33);
    this.leaf.rotation = -Math.PI/3*2;
    this.leaf.scale.set(0);
    this.leaves.push(this.leaf);

    this.leaf = PIXI.Sprite.from('images/leaf8.png');
    this.container.addChild(this.leaf);
    this.leaf.position.set(230,-25);
    this.leaf.rotation = Math.PI/2;
    this.leaf.scale.set(0);
    this.leaves.push(this.leaf);

    this.update = function(delta) {

    };

    this.animateIn = function(delay) {
        anime({
            targets: this.container.scale,
            x: 1,
            y: 1,
            easing: 'easeInOutExpo',
            duration: 3000,
            delay: delay
        });
        anime({
            targets: this.container,
            rotation: 0,
            easing: 'easeInOutExpo',
            duration: 3000,
            delay: delay
        });

        this.leaves.forEach(function (leaf, i) {
            anime({
              targets: leaf.scale,
              x: 0.9,
              y: 0.9,
              easing: 'easeInOutExpo',
              duration: 3000,
              delay: (delay+delay/2)+i*200
            });
        })
    };

    this.animateOut = function(delay) {
        anime({
            targets: this.container.scale,
            x: 0,
            y: 0,
            easing: 'easeInOutExpo',
            duration: 2000,
            delay: delay
        });
        anime({
            targets: this.container,
            rotation: -2,
            easing: 'easeInOutExpo',
            duration: 2000,
            delay: delay
        });

        this.leaves.forEach(function (leaf, i) {
            anime({
              targets: leaf.scale,
              x: 0,
              y: 0,
              easing: 'easeInOutExpo',
              duration: 2000,
              delay: i*200
            });
        })
    };

  }