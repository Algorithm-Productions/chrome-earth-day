function Circle(slide, x, y, radius, type) {
    this.x = x;
    this.y = y;
    this.radius = radius;

    this.slide = slide;
    this.container = new PIXI.Container();
    this.slide.addChild(this.container);

    this.container.x = this.x;
    this.container.y = this.y;

    this.bits = [];
    
    this.arc = new PIXI.Graphics();
    this.container.addChild(this.arc);
    this.container.rotation = -Math.PI/3;

    this.arcVal = {
        pos: Math.PI
    }

    this.leaf = PIXI.Sprite.from('images/leaf7.png');
    this.container.addChild(this.leaf);
    this.leaf.position.set(-radius+6,30);
    this.leaf.rotation = Math.PI/1.4;
    this.leaf.scale.set(0);
    this.bits.push(this.leaf);

    this.leaf = PIXI.Sprite.from('images/leaf7.png');
    this.container.addChild(this.leaf);
    this.leaf.position.set(-radius+6,-30);
    this.leaf.rotation = Math.PI/1.2;
    this.leaf.scale.set(0);
    this.bits.push(this.leaf);

    this.leaf = PIXI.Sprite.from('images/leaf8.png');
    this.container.addChild(this.leaf);
    this.leaf.position.set(-radius+1,0);
    this.leaf.rotation = -Math.PI/4;
    this.leaf.scale.set(0);
    this.bits.push(this.leaf);

    this.leaf = PIXI.Sprite.from('images/curl.png');
    this.container.addChild(this.leaf);
    this.leaf.anchor.set(0.5,0);
    this.leaf.position.x = radius *  Math.cos(degrees_to_radians(200));
    this.leaf.position.y = radius *  Math.sin(degrees_to_radians(200));
    this.leaf.rotation = Math.PI/1.7;
    this.leaf.scale.set(0);
    this.bits.push(this.leaf);

    this.update = function(delta) {
        this.arc.clear();
        this.arc.lineStyle(5, 0x000000, 1);
        this.arc.arc(0, 0, this.radius, Math.PI, this.arcVal.pos);
    };

    this.animateIn = function(delay) {
        anime({
        targets: this.arcVal,
        pos: 3 * Math.PI,
        easing: 'easeInOutExpo',
        duration: 3000,
        delay: delay
        });

        this.bits.forEach(function (leaf, i) {
            anime({
                targets: leaf.scale,
                x: 1,
                y: 1,
                easing: 'easeInOutExpo',
                duration: 3000,
                delay: (delay*2)+i*200
            });
        })

    };

    this.animateOut = function(delay) {
        anime({
        targets: this.arcVal,
        pos: Math.PI,
        easing: 'easeInOutExpo',
        duration: 3000,
        delay: delay*1.3
        });

        this.bits.forEach(function (leaf, i) {
            anime({
                targets: leaf.scale,
                x: 0,
                y: 0,
                easing: 'easeInOutExpo',
                duration: 3000,
                delay: i*200
            });
        })
    };
    }