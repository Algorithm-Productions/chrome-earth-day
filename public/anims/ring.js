/*
    --------------------------------
    RING
    --------------------------------
    */

    function Ring(slide, x, y, radius, count, speed) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.count = count;
      this.speed = speed;

      this.slide = slide;
      this.container = new PIXI.Container();
      this.slide.addChild(this.container);

      this.leafcontainer = new PIXI.Container();
      this.container.addChild(this.leafcontainer);
      this.container.x = this.x;
      this.container.y = this.y;

      this.greenleafs = [];
      this.blueleafs = [];

      this.arc = new PIXI.Graphics();
      this.container.addChild(this.arc);

      this.arcVal = {
        pos: Math.PI
      }
      
      for (let i = 0; i < this.count; i++) {
          const leaf = new PIXI.Sprite.from('images/leaf1.png');
          leaf.scale.set(0);
          leaf.x = this.radius *  Math.cos(degrees_to_radians(i*(360/this.count)));
          leaf.y = this.radius *  Math.sin(degrees_to_radians(i*(360/this.count)));
          leaf.rotation = degrees_to_radians(i*(360/this.count))+31.5;
          this.greenleafs.push(leaf);
          this.leafcontainer.addChild(leaf);
      }
      for (let i = 0; i < this.count; i++) {
          const leaf = new PIXI.Sprite.from('images/leaf2.png');
          leaf.scale.set(0);
          leaf.x = this.radius *  Math.cos(degrees_to_radians(i*(360/this.count)+(180/this.count)));
          leaf.y = this.radius *  Math.sin(degrees_to_radians(i*(360/this.count)+(180/this.count)));
          leaf.rotation = degrees_to_radians(i*(360/this.count))+27;
          this.blueleafs.push(leaf);
          this.leafcontainer.addChild(leaf);
      }

      this.leafcontainer.rotation = degrees_to_radians(180);

      this.update = function(delta) {
        this.arc.clear();
        this.arc.lineStyle(3, 0x000000, 1);
        this.arc.arc(0, 0, this.radius, Math.PI, this.arcVal.pos);
        // this.container.x = master.pos + this.x;
        this.container.rotation += this.speed * delta;
      };

      this.animateIn = function(delay) {
        anime({
          targets: this.arcVal,
          pos: 3 * Math.PI,
          easing: 'easeInOutExpo',
          duration: 3000,
          delay: delay
        });

        this.greenleafs.forEach(function (leaf, i) {
          anime({
            targets: leaf.scale,
            x: 0.6,
            y: 0.6,
            easing: 'easeInOutExpo',
            duration: 3000,
            delay: delay+i*50
          });
        })
        this.blueleafs.forEach(function (leaf, i) {
          anime({
            targets: leaf.scale,
            x: 0.6,
            y: 0.6,
            easing: 'easeInOutExpo',
            duration: 3000,
            delay: delay+i*50
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

        this.greenleafs.reverse().forEach(function (leaf, i) {
          anime({
            targets: leaf.scale,
            x: 0,
            y: 0,
            easing: 'easeInOutExpo',
            duration: 3000,
            delay: delay+i*50
          });
        })
        this.blueleafs.reverse().forEach(function (leaf, i) {
          anime({
            targets: leaf.scale,
            x: 0,
            y: 0,
            easing: 'easeInOutExpo',
            duration: 3000,
            delay: delay+i*50
          });
        })
      };
    }