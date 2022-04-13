function Vine(slide, x, y, px, p1y, p2y, radius, stroke) {
      this.slide = slide;
      this.container = new PIXI.Container();
      this.slide.addChild(this.container);
      this.container.x = x;
      this.container.y = y;

      this.in = {
        partA: -width/2,
        partB: Math.PI+Math.PI/2,
        partC: p1y,
        partD: Math.PI,
        partE: px+radius
      }

      this.out = {
        partA: -width/2,
        partB: Math.PI+Math.PI/2,
        partC: p1y,
        partD: Math.PI,
        partE: px+radius
      }

      let leaf;
      this.leaves = [];


      this.partA = new PIXI.Graphics();
      this.container.addChild(this.partA);

      this.partB = new PIXI.Graphics();
      this.container.addChild(this.partB);

      this.partC = new PIXI.Graphics();
      this.container.addChild(this.partC);

      this.partD = new PIXI.Graphics();
      this.container.addChild(this.partD);

      this.partE = new PIXI.Graphics();
      this.container.addChild(this.partE);

      this.partACount = Math.abs(Math.round(((-width/2) - (px))/100));
      for (let i = 0; i < this.partACount; i++) {
          const leaf = new PIXI.Sprite.from('images/leaf' + getRandomIntRange(1,6) + '.png');
          leaf.scale.set(0);
          leaf.x = map(i, 0, this.partACount-1, -width/2, px-radius);
          leaf.y = p1y-radius;
          if (Math.round(Math.random()) == 1) {
            leaf.rotation = Math.PI*1.5;
          }
          this.leaves.push(leaf);
          this.container.addChild(leaf);
      }

      this.partCCount = Math.abs(Math.round(((p1y) - (p2y))/100));
      for (let i = 0; i < this.partCCount; i++) {
          const leaf = new PIXI.Sprite.from('images/leaf' + getRandomIntRange(1,6) + '.png');
          leaf.scale.set(0);
          leaf.x = px;
          leaf.y = map(i, 0, this.partCCount-1, p1y, p2y);
          if (Math.round(Math.random()) == 1) {
            leaf.rotation = Math.PI/2;
          }
          this.leaves.push(leaf);
          this.container.addChild(leaf);
      }

      this.partECount = Math.abs(Math.round(((width/2) - (px))/100));
      for (let i = 0; i < this.partECount; i++) {
          const leaf = new PIXI.Sprite.from('images/leaf' + getRandomIntRange(1,6) + '.png');
          leaf.scale.set(0);
          leaf.x = map(i, 0, this.partECount-1, px+radius, width/2);
          leaf.y = p2y+radius;
          if (Math.round(Math.random()) == 1) {
            leaf.rotation = Math.PI*1.5;
          }
          this.leaves.push(leaf);
          this.container.addChild(leaf);
      }

      this.update = function(delta) {
        this.partA.clear();
        this.partA.lineStyle(stroke, 0x202124)
             .moveTo(this.out.partA, p1y-radius)
             .lineTo(this.in.partA, p1y-radius);

        this.partB.clear();
        this.partB.lineStyle(stroke, 0x202124, 1);
        this.partB.arc(px-radius, p1y, radius, this.out.partB, this.in.partB);

        this.partC.clear();
        this.partC.lineStyle(stroke, 0x202124)
             .moveTo(px, this.out.partC)
             .lineTo(px, this.in.partC);

        this.partD.clear();
        this.partD.lineStyle(stroke, 0x202124, 1);
        this.partD.arc(px+radius, p2y, radius, this.in.partD, this.out.partD);

        this.partE.clear();
        this.partE.lineStyle(stroke, 0x202124)
             .moveTo(this.out.partE, p2y+radius)
             .lineTo(this.in.partE, p2y+radius);
      };

      this.animateIn = function(delay) {

        var animIn = anime.timeline({
          easing: 'linear',
          duration: 300,
          autoplay: false
        });

        animIn
        .add({
          targets: this.in,
          partA: px-radius,
        })
        .add({
          targets: this.in,
          partB: 2 * Math.PI,
        })
        .add({
          targets: this.in,
          partC: p2y,
        })
        .add({
          targets: this.in,
          partD: Math.PI/2,
        })
        .add({
          targets: this.in,
          partE: width/2,
        });

        setTimeout(function(){
            animIn.play();
        }, delay);
        

        this.leaves.forEach(function (leaf, i) {
          anime({
            targets: leaf.scale,
            x: 0.8,
            y: 0.8,
            easing: 'easeInOutExpo',
            duration: 1000,
            delay: i*80+delay
          });
        })
      };

      this.animateOut = function() {
        var animOut = anime.timeline({
          easing: 'linear',
          duration: 300,
          autoplay: false
        });

        animOut
        .add({
          targets: this.out,
          partA: px-radius,
        })
        .add({
          targets: this.out,
          partB: 2 * Math.PI,
        })
        .add({
          targets: this.out,
          partC: p2y,
        })
        .add({
          targets: this.out,
          partD: Math.PI/2,
        })
        .add({
          targets: this.out,
          partE: width/2,
        });


        this.leaves.forEach(function (leaf, i) {
          
          if (i == 0) {
            anime({
              targets: leaf.scale,
              x: 0,
              y: 0,
              easing: 'easeInOutExpo',
              duration: 1000,
              delay: i*80,
              complete: function(anim) {
                animOut.play();
              }
            });
          } else {
            anime({
              targets: leaf.scale,
              x: 0,
              y: 0,
              easing: 'easeInOutExpo',
              duration: 1000,
              delay: i*80
            });
          }
        })
      };

    }