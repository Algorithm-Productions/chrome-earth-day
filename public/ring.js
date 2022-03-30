/*
    --------------------------------
    RING
    --------------------------------
    */

    function Ring(x, y, radius, count, speed) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.count = count;
      this.speed = speed;

      this.container = new PIXI.Container();
      app.stage.addChild(this.container);

      this.leafcontainer = new PIXI.Container();
      this.container.addChild(this.leafcontainer);

      this.greenleafs = [];
      this.blueleafs = [];

      this.arc = new PIXI.Graphics();
      this.container.addChild(this.arc);

      this.arcVal = {
        pos: Math.PI
      }
      
      for (let i = 0; i < this.count; i++) {
          const leaf = new PIXI.Sprite.from('images/greenleaf.png');
          leaf.scale.set(0);
          leaf.x = this.radius *  Math.cos(degrees_to_radians(i*(360/this.count)));
          leaf.y = this.radius *  Math.sin(degrees_to_radians(i*(360/this.count)));
          leaf.rotation = degrees_to_radians(i*(360/this.count))+31.5;
          this.greenleafs.push(leaf);
          this.leafcontainer.addChild(leaf);
      }
      for (let i = 0; i < this.count; i++) {
          const leaf = new PIXI.Sprite.from('images/blueleaf.png');
          leaf.scale.set(0);
          leaf.x = this.radius *  Math.cos(degrees_to_radians(i*(360/this.count)+(180/this.count)));
          leaf.y = this.radius *  Math.sin(degrees_to_radians(i*(360/this.count)+(180/this.count)));
          leaf.rotation = degrees_to_radians(i*(360/this.count))+27;
          this.blueleafs.push(leaf);
          this.leafcontainer.addChild(leaf);
      }
      this.container.y = this.y;
      this.leafcontainer.rotation = degrees_to_radians(180);

      this.update = function(delta) {
        this.arc.clear();
        this.arc.lineStyle(3, 0x000000, 1);
        this.arc.arc(0, 0, this.radius, Math.PI, this.arcVal.pos);
        //this.container.x = master.pos + this.x;
        this.container.rotation += this.speed * delta;
      };

      this.animate = function() {
        anime({
          targets: this.arcVal,
          pos: 3 * Math.PI,
          easing: 'easeInOutExpo',
          duration: 3000,
          delay: 3000
        });

        this.greenleafs.forEach(function (leaf, i) {
          anime({
            targets: leaf.scale,
            x: 0.4,
            y: 0.4,
            easing: 'easeInOutExpo',
            duration: 3000,
            delay: 3000+i*50
          });
        })
        this.blueleafs.forEach(function (leaf, i) {
          anime({
            targets: leaf.scale,
            x: 0.4,
            y: 0.4,
            easing: 'easeInOutExpo',
            duration: 3000,
            delay: 3000+i*50
          });
        })
      };
    }