index = 2;

slideFuncs[index] = function (container){
    
    // let height=window.innerHeight;
    // let width=window.innerWidth;
    // //x, y, radius, leaf count, rotation speed
    // const ring1 = new Ring(width+width/2, height/2, 300, 12, 0.005);
    // const plant1 = new Plant(200, height);
    // const plant2 = new Plant(width-200, height);
    // const windmill1 = new Windmill(400, height, 0.05, 2);
    // const windmill2 = new Windmill(width-400, height, 0.05, 1);

    //   function onClick1() {

    //     ring1.animate();
    //     plant1.animate();
    //     plant2.animate();
    //     windmill1.animate();
    //     windmill2.animate();

    //     // anime({
    //     //   targets: master,
    //     //   pos: -width,
    //     //   round: 1,
    //     //   easing: 'easeInOutQuad',
    //     //   duration: 3000
    //     // });
        
    //   }

    //   function onClick2() {
    //     windmill1.animateOut();
    //     windmill2.animateOut();

    //     // anime({
    //     //   targets: master,
    //     //   pos: -width*2,
    //     //   round: 1,
    //     //   easing: 'easeInOutExpo',
    //     //   duration: 3000
    //     // });
    //   }

    //   function onClick3() {
    //     anime({
    //       targets: sample.scale,
    //       y: 2,
    //       easing: 'easeInOutExpo',
    //       duration: 3000
    //     });
    //   }




	// 	app.ticker.add((delta) => {

    // //   sprite.x = master.pos + width/2;
    // //   bird.x = master.pos + width+200;
    // //   sample.x = master.pos + (width*2)+600;

    //   ring1.update(delta);
    //   plant1.update(delta);
    //   plant2.update(delta);
    //   windmill1.update(delta);
    //   windmill2.update(delta);
	// 	});
}

arriveTriggers[index] = function (){
    console.log();
}

leaveTriggers[index] = function (){
    console.log();

    //once complete
    arrive(index+1);
}