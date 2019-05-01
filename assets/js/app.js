$(document).ready(function() {
    $.when(
    
//        $.get("assets/svg/oGrid.svg", function(svg) {
//          $("#oGrid").append(svg.documentElement);
//        }),
        $.get("assets/svg/flip_today.svg", function(svg) {
            $("#flip-today").append(svg.documentElement);
          }),
        $.get("assets/svg/flip_osr.svg", function(svg) {
            $("#flip-osr").append(svg.documentElement);
          }),
//        $.get("assets/svg/endrings.svg", function(svg) {
//            $("#endring").append(svg.documentElement);
//          }),
//        $.get("assets/svg/squares-left.svg", function(svg) {
//            $("#squares-left").append(svg.documentElement);
//          }),
//        $.get("assets/svg/squares-right.svg", function(svg) {
//            $("#squares-right").append(svg.documentElement);
//          }),
//        $.get("assets/svg/endring_clip.svg", function(svg) {
//            $("#endring").append(svg.documentElement);
//          }),
//        $.get("assets/svg/osrchart.svg", function(svg) {
//            $("#osrChart").append(svg.documentElement);
//          }),
//        $.get("assets/svg/oGrid2.svg", function(svg) {
//            $("#oGrid2").append(svg.documentElement);
//          }),
        $.get("assets/svg/ogrid2_mobile.svg", function(svg) {
            $("#ogrid2-mobile").append(svg.documentElement);
          })
//        $.get("assets/svg/panels.svg", function(svg) {
//            $("#panels").append(svg.documentElement);
//          })
        
      ).then(init);
    

    function init() {
        
        
        console.log("The screen width is" + " " + ($(window).width()));
        console.log("The screen height is" + " " + ($(window).height() - 100));
        
        console.log("The girl offset is" + " " + ($(window).height() * 3.6 - 100));
        
        
    //var animController = new ScrollMagic.Controller( {addIndicators: true} );
    var animController = new ScrollMagic.Controller();
    var sceneArray = [];

    //var sNum = $('section').length;
    TweenMax.set('#osrChart, #osr-core, #osr-core-2, #osr-core-main2, #osr-core-main3, #label-purple-highlight, #purple-label-marker, #osrchart-blue-png, #osrchart-blue2-png, #floor-ring, #blue-ring-big, #purple-label-marker, #ring1, #ring2, #panel1, #panel2, #panel2-head, #panel2-para, #panel2-box, #dots1, #dots2, #dots3, #dots4, #panel3-head, #panel3-head2, #panel3-div, #panel3-pg1, #panel3-para2, #panel3-para3, #panel3-para4, #hcm-blue, #erp-blue, #crm-blue', { opacity: 0 });
    
    TweenMax.set('#oGrid', { opacity: .5}, 0)
        
    TweenMax.set('#rec5', { x:'+=150'}, 0)
        
        
//    TweenMax.set('#rec2', { scale: 2}, 0)
//        
//    TweenMax.set('#rec4', { scale: 2}, 0)
//        
//    TweenMax.set('#2rec5', { scale: 2}, 0)
//        
//    TweenMax.set('#newrec', { scale: 2}, 0)
        
//    TweenMax.set('#p-test', { scale: 1.5}, 0)
       
    //TweenMax.set('#p-test2', { scale: 1}, 0)
        
        
        
/* SCENE INTRO
        ++++++++++++++++++++++++++++++++++++++++++++++++++++
        ++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    var tl = new TimelineMax();
        tl
            
            //TweenMax.set('#oGrid', { opacity: .5}, 0)
            //.add(TweenMax.to('#oGrid', 0, { opacity: .5 }), 0)
            .add(TweenMax.to('#oGrid', 1, { opacity: 1 }), 0)
            .add(TweenMax.to('#oGrid', 1, { opacity: 1, rotation: +360, transformOrigin:"center center", ease:Linear.easeNone }).timeScale(0.2), 0)
                ////////////  TEXT
            .add(TweenMax.staggerTo([ '#hero-container h1', '#hero-container h2' ], 2, { opacity:0, x:'+=350', y:'+=20', ease:Expo.easeNone }, .2), 0)
                // Operational...
                // The Engine That Runs...
            .add(TweenMax.to('#squares-right', 0, { scale: 1, x:'+=0', y:'+=0' }), 0)
        
            .add(TweenMax.to('#squares-left', 0, { scale: 1, x:'-=260', y:'+=20' }), 0)
        
//            .add(TweenMax.to('#rec2', 4, { opacity: 0, y:'-=800' }), 0)
//            .add(TweenMax.to('#rec4', 4, { opacity: 0, y:'-=500' }), 0)
        
            .add(TweenMax.to('#rec2', 6, { opacity: 0, y:'-=20' }), 0)
            .add(TweenMax.to('#rec1', 6, { opacity: 0, y:'+=0' }), 0)
            .add(TweenMax.to('#rec3', 4, { opacity: 0, y:'-=340' }), 0)
            .add(TweenMax.to('#rec4', 6, { opacity: 0, y:'-=210' }), 0)

        
            .add(TweenMax.to('#rec5', 6, { opacity: 0, y:'-=810' }), 0)
            .add(TweenMax.to('#rec7', 6, { opacity: 0, y:'-=310' }), 0)
            .add(TweenMax.to('#rec8', 6, { opacity: 0, y:'+=210' }), 0)
            .add(TweenMax.to('#rec6', 6, { opacity: 0, y:'-=20' }), 0)
        
        
//            .add(TweenMax.staggerTo(['#hero-container h1', '#hero-container h2'], 2, {y:'-=98%', x:'-=100', opacity:0},0.2),0);
        
    var introScene = new ScrollMagic.Scene ({
        triggerElement: '#intro-scene-trigger',
        duration: '1700%',
        triggerHook: 0

    })
//.addindicators({ name: "--> introScene --> Duration 1700%" })    
        .setPin('#anim1-container')
        .addTo(animController);

    var introAnimScene = new ScrollMagic.Scene ({
        triggerElement: '#intro-scene-trigger',
        duration: '100%',
        triggerHook: 0

    })
//.addindicators({ name: "--> introAnimScene --> Duration 400" })   
        .setTween(tl) 
        .addTo(animController);

        
/* SCENE 1
        ++++++++++++++++++++++++++++++++++++++++++++++++++++
        ++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    var s1tl = new TimelineMax();
        s1tl
            .add(TweenMax.to('#oGrid #ogrid-bl path, #oGrid #ogrid-tl path, #oGrid #ogrid-br path, #oGrid #ogrid-tr path, #oGrid #ogrid-top path', 4, { stroke: '#E7EAEF', ease: Linear.easeNone }), 2)
            .add(TweenMax.to('#oGrid', 1, { rotation: '+=360', transformOrigin:"center center", ease: Linear.easeNone }).timeScale(0.1), 1)
                ////////////  TEXT
            .add(TweenMax.staggerFrom('#scene1-pin h1', 5, { opacity:0, x:'-=350', ease:Linear.easeNone }, 1.5), 4)
            .add(TweenMax.staggerFrom('#scene1-4-trigger p', 5, { opacity:0, ease:Linear.easeNone }, 1.5), 4)
        

        
            .add(TweenMax.to('#flip-today', 0, { opacity: 1, x:'-=23', y:"+=1460", ease: Linear.easeNone }), 0)
            .add(TweenMax.to('#flip-today-mask', 0, { opacity: 1, ease: Linear.easeNone }), 0)

        
        
    var scene1 = new ScrollMagic.Scene( {
        triggerElement: '#scene1-trigger',
        duration: 500,
        triggerHook: 0
    })
//.addIndicators({ name: "--> scene1 --> Duration 500" })    
        .setTween(s1tl)
        .addTo(animController); 
 
        
/* SCENE 1_1
        ++++++++++++++++++++++++++++++++++++++++++++++++++++
        ++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    var scene1_1 = new ScrollMagic.Scene({
        triggerElement: '#scene1-pin',
        duration: '500%',
        triggerHook: 0.1
    })
//.addIndicators({ name: "--> scene1_1 --> Duration 500%" })
        .setPin('#scene1-pin', { pushFollowers: false })    
        .addTo(animController);
  
        
/* SCENE 1_2
        ++++++++++++++++++++++++++++++++++++++++++++++++++++
        ++++++++++++++++++++++++++++++++++++++++++++++++++++ */    
    var s1_2tl = new TimelineMax();
        s1_2tl       
                ////////////  TEXT  #staggerp1', { opacity: 0 }); at top
            //.add(TweenMax.staggerFrom('.today p', 8, {y:'+=150', x:'-=200', opacity:1} , 12), 0);
            //.add(TweenMax.to('#staggerp1', 8, {y:'+=150', x:'+=200', opacity: 1} , 12),80)
            //.add(TweenMax.to('#scene1-3-trigger', 8, {y:'+=150', x:'+=200', opacity: 0} , 12), 60)
            //.add(TweenMax.to('#scene1-3-trigger', 8, {y:'+=150', x:'+=200', opacity: 1} , 12), 30)
            .add(TweenMax.staggerFrom('#scene1-2-trigger p', 2, { opacity:0, ease:Linear.easeNone }, 1), 0);
            //.add(TweenMax.staggerFrom('#scene1 p', 12, { y:'+=250', opacity:0.3 }, 4), 0)
            //.add(TweenMax.to('#scene1 p', 4, { opacity:0 }), 18);
            //.add(TweenMax.staggerFrom('#scene1 p', 6, { opacity:0, ease: Linear.easeNone }, 12), 2.3)
            //.add(TweenMax.to('#scene1 p', 2, { opacity:0, ease: Linear.easeNone }, 12), 2.3)
            //.add(TweenMax.to('#scene1 p', 2, { opacity:0, ease: Linear.easeNone }, 12), 4.6)
                // Today, services businesses are facing the challenge of creating...
        
        
//            .add(TweenMax.to('#flip-today-mask', 2, { opacity: 0.2, ease: Linear.easeNone }), 12)
        
        
    var scene1_2 = new ScrollMagic.Scene( {
        triggerElement: '#scene1-2-trigger',
        duration: 600,
        triggerHook: 0.7 // KEEP SCENE 1_2 ON LONGER
    })
//.addIndicators({ name: "--> scene1-2 --> Duration 600" })
        .setTween(s1_2tl)
        .addTo(animController);

        
/* SCENE 1_3
        ++++++++++++++++++++++++++++++++++++++++++++++++++++
        ++++++++++++++++++++++++++++++++++++++++++++++++++++ */   
    var s1_3tl = new TimelineMax();
    s1_3tl
    
//        .add(TweenMax.to('#flip-today', 0, { opacity: 0, y:"+=800", ease: Linear.easeNone }), 0)
//        .add(TweenMax.to('#flip-today', 4, { opacity: 1, ease: Linear.easeNone }), 1)
    
//        .add(TweenMax.to('#flip-today-mask', 2, { opacity: 0.2, ease: Linear.easeNone }), 10)
    
    
        .add(TweenMax.to('#oGrid', 3, {scaleY:1, ease: Linear.easeNone}),0)
        .add(TweenMax.to('#oGrid', 1, {scaleY:0.40, ease: Linear.easeNone}),1)
        .add(TweenMax.to('#oGrid', 3, {scale:'+=0.05', ease: Linear.easeNone}),2)
        .add(TweenMax.to('#ogrid-bl, #ogrid-inner-bl', 1, {x:'+=-10', y:'+=10', ease: Linear.easeNone}),4)
        .add(TweenMax.to('#ogrid-tl, #ogrid-inner-tl', 1, {x:'+=-10', y:'+=-10', ease: Linear.easeNone}),5)
        .add(TweenMax.to('#ogrid-top, #ogrid-inner-top', 1, {y:'+=-25', ease: Linear.easeNone}),6)
        .add(TweenMax.to('#ogrid-tr, #ogrid-inner-tr', 1, {x:'+=10', y:'+=-10', ease: Linear.easeNone}),7)
        .add(TweenMax.to('#ogrid-br, #ogrid-inner-br', 1, {x:'+=10', y:'+=10', ease: Linear.easeNone}),8)
        .add(TweenMax.staggerTo('#scene1-pin h1', 4, {x:'-=250', opacity:0}, 0.6), 1.5)
        .add(TweenMax.staggerTo('#scene1-2-trigger p', 4, { opacity:0, ease:Linear.easeNone }, 1), 1.5)
        //.add(TweenMax.to('#para-today', 4, { opacity: 0, ease: Linear.easeNone }), 1.5)
        //.add(TweenMax.staggerFrom('#scene1-4-trigger p', 5, { opacity:0, x:'-=250', ease:Linear.easeNone }, 1.5), 4)
        //.add(TweenMax.to('#scene1-pin h1', 4, { opacity:0}, 2), 0)
        .add(TweenMax.to('#ogrid-tl, #ogrid-inner-tl', 4, {x:'+=-10', y:'+=-28', ease: Linear.easeNone}),10)
        .add(TweenMax.to('#ogrid-br, #ogrid-inner-br', 4, {x:'+=-3', y:'+=20', ease: Linear.easeNone}),11)
        
    
    var scene1_3 = new ScrollMagic.Scene( {
        triggerElement: '#scene1-3-trigger',
        duration: 600,
        triggerHook: 0
    })
    .setTween(s1_3tl)
    .addTo(animController);

        
/* SCENE 2
        ++++++++++++++++++++++++++++++++++++++++++++++++++++
        ++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    var s2tl = new TimelineMax();
    s2tl
    
        //.add(TweenMax.from('#scene2', 4, {opacity:0, ease: Linear.easeNone}), 0)
        .add(TweenMax.to('#oGrid', 8, {opacity:0, ease: Linear.easeNone}), 8)
        //.add(TweenMax.to('#oGrid', 0, { x:'-=62', y:'+=84' }), 16)
        
    var scene2 = new ScrollMagic.Scene( {
        triggerElement: '#scene2',
        duration: 1000,
        triggerHook: 0.6
    })
    .setTween(s2tl)
    .addTo(animController);
        

/* SCENE 2_1
        ++++++++++++++++++++++++++++++++++++++++++++++++++++
        ++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    var scene2_1 = new ScrollMagic.Scene( {
        triggerElement: '#scene2',
        duration: '1300%',
        triggerHook: 0.2
    })
//.addIndicators({ name: "--> scene2_1 --> Duration 1300%" })    
        .setPin('#scene2-pin')   
        .addTo(animController);
  
    var s2_1tl = new TimelineMax();
        s2_1tl
         
            .set('#discover', {className:"+=active"}, 0)
            .set('#people', {className:"-=active"}, 0)
            .set('#benefits', {className:"-=active"}, 0)
        
        
            //.add(TweenMax.to('#intro-image', 4, { opacity: 0, ease: Linear.easeNone }), 0)
            //.add(TweenMax.to('#intro-image', 4, {opacity:1, ease: Linear.easeNone}), 50)
            //.add(TweenMax.to('#intro-image', 4, {opacity:1, ease: Linear.easeNone}), 86)
        
            //.add(TweenMax.to('#slide-list', 0, { opacity: 0 }), 0)
        
            //.set('#dots', 0,  {x:-231, ease:Power2.easeIn});

//                $('#dots1').on('click', function(event) {
//                    event.preventDefault();
//                    gotoAndPlay(200);
//                })
        
//            .add(TweenMax.on('click', function(event) {
//                    event.preventDefault();
//                    this.gotoAndPlay(200);
//                })  
                 
//                 $('#dots1').on('click', function(event) {
//                    tl.reversed() ? tl.play() : tl.reverse();
//                })
        
        
            .add(TweenMax.to('#flip-today-mask', 4, { opacity: 0, ease: Linear.easeNone }), 49)
            
            .add(TweenMax.to('#ogrid2-mobile', 0, { opacity: 0, x:'-=35' }), 0)
            .add(TweenMax.to('#ogrid2-mobile-text', 0, { opacity: 0 }), 0)
            .add(TweenMax.to('#girl-card1', 0, { opacity: 0 }), 0)
            .add(TweenMax.to('#girl-card2', 0, { opacity: 0 }), 0)
            .add(TweenMax.to('#girl-card3', 0, { opacity: 0 }), 0)
        
        
            .add(TweenMax.to('#flip-osr', 0, { opacity: 1, x: "-=78", y: "-=140" }), 0)
            .add(TweenMax.to('#flip-osr-mask', 0, { opacity: 0 }), 0)
        
            .add(TweenMax.to('#mask-blue', 0, { opacity: 0, x: "-=23" }), 0)
        
            
            .add(TweenMax.to('#flip-osr-head1', 0, { opacity: 0, x: "-=72", y:"+=146" }), 0)
            .add(TweenMax.to('#flip-osr-head2', 0, { opacity: 0, x: "+=18", y:"+=8" }), 0)
            .add(TweenMax.to('#flip-osr-p1', 0, {  opacity: 0, x: "-=251", y:"+=11" }), 0)
            .add(TweenMax.to('#flip-osr-p2', 0, {  opacity: 0, x: "-=51", y:"+=8" }), 0)
            .add(TweenMax.to('#flip-osr-p3', 0, {  opacity: 0, x: "-=52", y:"+=5" }), 0)
            .add(TweenMax.to('#flip-osr-p4', 0, {  opacity: 0, x: "-=52", y:"+=5" }), 0)
            .add(TweenMax.to('#flip-osr-p5', 0, {  opacity: 0, x: "-=52", y:"+=5" }), 0)
            
            
            .add(TweenMax.to('#flip-osr-head1', 8, { opacity: 1, x:"+=100" }), 32)
            .add(TweenMax.to('#flip-osr-head1', 8, { opacity: 0, x:"+=200" }), 62)
            .add(TweenMax.to('#flip-osr-p1', 8, { opacity: 1, x:"+=200" }), 62)
            .add(TweenMax.to('#flip-osr-p1', 1, {  opacity: 0 }), 86)
        
            
            .add(TweenMax.to('#flip-osr-head1', 1, { opacity: 0 }), 86)
            .add(TweenMax.to('#flip-osr-head2', 1, { opacity: 1 }), 86)
            
            
            .add(TweenMax.to('#flip-osr-p2', 4, {  opacity: 1 }), 88)
        
        
            .add(TweenMax.to('#flip-osr-p2', 1, {  opacity: 0 }), 125)
            .add(TweenMax.to('#flip-osr-p3', 1, {  opacity: 1 }), 125)
        
        
            .add(TweenMax.to('#flip-osr-p3', 1, {  opacity: 0 }), 165)
            .add(TweenMax.to('#flip-osr-p4', 1, {  opacity: 1 }), 165)
        
        
            .add(TweenMax.to('#flip-osr-p4', 1, {  opacity: 0 }), 205)
            .add(TweenMax.to('#flip-osr-p5', 1, {  opacity: 1 }), 205)
        
            .add(TweenMax.to('#flip-osr-p5', 4, {  opacity: 0 }), 270)
            .add(TweenMax.to('#flip-osr-head2', 4, { opacity: 0 }), 270)

            
            .add(TweenMax.to('#discover', 0, { opacity: 0, x:'-=80', y:'-=158' }), 0)
            .add(TweenMax.to('#people', 0, { opacity: 0, x:'-=80', y:'-=158' }), 0)
            .add(TweenMax.to('#benefits', 0, { opacity: 0, x:'-=80', y:'-=158' }), 0)
        
            .add(TweenMax.to('#panels', 0, { scale: 0.7, opacity:1, x: "+=123", y:"-=423" }), 0)
            //.add(TweenMax.to('#panel2', 0, { scale: 1.4, opacity: 0, x:"+=600", y:"-=350", ease: Linear.easeNone }), 0)
            .add(TweenMax.to('#panel2-head', 0, { scale: 1, x:"+=500", y:"", ease: Linear.easeNone }), 0)
            .add(TweenMax.to('#panel2-para', 0, { scale: 1, opacity:0, x:"+=200", y:"", ease: Linear.easeNone }), 0)
            .add(TweenMax.to('#panel2-box', 0, { scale: 1, opacity:0, x:"+=200", ease: Linear.easeNone }), 0)
        
            .add(TweenMax.to('#panel3-head', 0, { scale: 1, opacity: 0, x:"+=300" }), 0)
            .add(TweenMax.to('#panel3-div', 0, { scale: 1, opacity: 0, x:"", y:"" }), 0)
            .add(TweenMax.to('#dots1', 0, { scale: 1, opacity: 0 }), 0)
            .add(TweenMax.to('#dots2', 0, { scale: 1, opacity: 0 }), 0)
            .add(TweenMax.to('#dots3', 0, { scale: 1, opacity: 0 }), 0)
            .add(TweenMax.to('#dots4', 0, { scale: 1, opacity: 0 }), 0)
            .add(TweenMax.to('#panel3-para2', 0, { scale: 1, opacity: 0, x:"+=156", y:"+=46" }), 0)
            .add(TweenMax.to('#panel3-para3', 0, { scale: 1, opacity: 0, x:"-=100", y:"+=198" }), 0)
            .add(TweenMax.to('#panel3-para4', 0, { scale: 1, opacity: 0, x:"-=95", y:"+=46" }), 0)
        
        
      
            .add(TweenMax.to('#osrChart', 0, { scale: 0.9, x: "-=292", y:"-=23" }), 0)
            .add(TweenMax.to('#osrChart', 4, { opacity:1, y:"-=323", ease: Linear.easeNone }), 6)
            
            
            
            .add(TweenMax.to('#floor-ring', 6, {opacity:1, ease: Linear.easeNone}), 9)
            .add(TweenMax.from('#osr', 4, {opacity:0, y:'+=320', ease: Linear.easeNone}), 12)
            .add(TweenMax.from('#osr-pole', 4, {opacity:0, y:'+=280', ease: Linear.easeNone}), 12)  
            
            .add(TweenMax.from('#crm', 4, {opacity:0, y:'+=280', ease: Linear.easeIn}), 13)
            .add(TweenMax.from('#erp', 4, {opacity:0, x:'+=3', y:'+=280', ease: Linear.easeIn}), 13)
            .add(TweenMax.from('#hcm', 4, {opacity:0, y:'+=280', ease: Linear.easeIn}), 13)
        
            .add(TweenMax.to('#dots-bl', 0, { x:'-=50', y:'+=26' }), 0)
            .add(TweenMax.from('#dots-bl', 2, {opacity:0, ease: Linear.easeIn}), 15)
            .add(TweenMax.to('#dots-br', 0, { x:'+=57', y:'+=19' }), 0)
            .add(TweenMax.from('#dots-br', 2, {opacity:0, ease: Linear.easeIn}), 15)
            //.add(TweenMax.to('#dots-tr', 0, { x:'', y:'' }), 0)
            .add(TweenMax.from('#dots-tr', 2, {opacity:0, ease: Linear.easeIn}), 15)
            .add(TweenMax.to('#grey-ring path', 3, {strokeOpacity:1, ease: Linear.easeIn}), 14)

            .add(TweenMax.from('#resource-management', 4, {opacity:0, y:'+=80', ease: Linear.easeNone}), 14)
            .add(TweenMax.from('#red-ring', 4, {opacity:0, ease: Linear.easeNone}), 16)
        
            .add(TweenMax.to('#business-intelligence-text-dark', 0, { opacity:0 }), 0)
            .add(TweenMax.from('#business-intelligence-text', 4, { opacity:0, x:'-=80', ease: Linear.easeNone }), 20)
            .add(TweenMax.from('#business-intelligence-line', 4, { opacity:0, x:'-=80', ease: Linear.easeNone }), 20)
            .add(TweenMax.from('#purple-ring', 4, { opacity:0, ease: Linear.easeNone }), 24)
        
            .add(TweenMax.from('#project-account', 4, {opacity:0, x:'-=80', ease: Linear.easeNone}), 26)
            .add(TweenMax.from('#green-ring', 4, {opacity:0, ease: Linear.easeNone}), 30)
            
            .add(TweenMax.from('#team-collab', 4, {opacity:0, y:'+=80', ease: Linear.easeNone}), 32)
            .add(TweenMax.from('#yellow-ring', 4, {opacity:0, ease: Linear.easeNone}), 36)
            
            .add(TweenMax.from('#project-management', 4, {opacity:0, y:'+=80', ease: Linear.easeNone}), 38)
            .add(TweenMax.from('#blue-ring', 4, {opacity:0, ease: Linear.easeNone}), 42)
            
            .add(TweenMax.to('#panel2-head', 4, { opacity: 1, x:"-=554", ease: Linear.easeNone }), 44)
            .add(TweenMax.to('#panel2-box', 3, { opacity: 1, x:"-=196", ease: Linear.easeNone }), 45)
            .add(TweenMax.to('#panel2-para', 3, { opacity: 1, x:"-=196", ease: Linear.easeNone }), 45)

            .add(TweenMax.to('#discover', 4, { opacity: 1, x:'+=110', ease: Linear.easeNone }), 42)
            .add(TweenMax.to('#people', 4, { opacity: 1, x:'+=110', ease: Linear.easeNone }), 43)
            .add(TweenMax.to('#benefits', 4, { opacity: 1, x:'+=110', ease: Linear.easeNone }), 44)

            //.add(TweenMax.to('#osrChart', 4, {  scale: 0.6, x: "-=142", y: "+=80" }), 60)
            .add(TweenMax.to('#osrChart', 4, {  scale: 0.82, x:'-=160', y:'+=56' }), 44)
        
        
        
        
/* PAUSE  PAUSE  PAUSE  PAUSE  PAUSE  PAUSE  PAUSE  PAUSE  PAUSE  PAUSE  PAUSE  PAUSE  PAUSE  PAUSE  PAUSE
        ++++++++++++++++++++++++++++++++++++++++++++++++++++
        ++++++++++++++++++++++++++++++++++++++++++++++++++++ */        
        
        

            .add(TweenMax.to('#dots-bl', 4, {opacity:0, ease: Linear.easeIn}), 84)
            .add(TweenMax.to('#dots-br', 4, {opacity:0, ease: Linear.easeIn}), 84)
            .add(TweenMax.to('#dots-tr', 4, {opacity:0, ease: Linear.easeIn}), 84)
        
            .add(TweenMax.to('#hcm-base', 4, {opacity:0, ease: Linear.easeIn}), 84)
            .add(TweenMax.to('#erp-base', 4, {opacity:0, ease: Linear.easeIn}), 84)
            .add(TweenMax.to('#crm-base', 4, {opacity:0, ease: Linear.easeIn}), 84)
            .add(TweenMax.from('#grey-lines-all', 4, {opacity:0, ease: Linear.easeIn}), 84)
            
            
            .add(TweenMax.from('#osr-core-middle-ring', 4, {opacity:0, ease: Linear.easeNone}), 80)
            //.add(TweenMax.to('#color-rings', 4, {opacity:0, ease: Linear.easeNone}), 81)
            .add(TweenMax.to('#red-ring', 4, {opacity:0, ease: Linear.easeNone}), 81)
            .add(TweenMax.to('#green-ring', 4, {opacity:0, ease: Linear.easeNone}), 81)
            .add(TweenMax.to('#yellow-ring', 4, {opacity:0, ease: Linear.easeNone}), 81)
            .add(TweenMax.to('#blue-ring', 4, {opacity:0, ease: Linear.easeNone}), 81)
            .add(TweenMax.to('#purple-ring', 4, {opacity:0, ease: Linear.easeNone}), 82)
            .add(TweenMax.to('#osr-core-main', 4, {opacity:0, ease: Linear.easeNone}), 84)
            .add(TweenMax.to('#osr-core-main3', 4, {opacity:1, x:'-=3', ease: Linear.easeNone}), 84)
        
            .add(TweenMax.to('#osr-core, #label-purple-highlight, #purple-label-marker', 3, {opacity:1, ease: Linear.easeNone}), 85)
            .add(TweenMax.from('#purple-label-white-box', 3, {opacity:0, ease: Linear.easeNone}), 85)
            .add(TweenMax.to('#business-intelligence-text', 3, { stroke:'rgba(0,0,0, .4)', }), 85)
            .add(TweenMax.to('#business-intelligence-line', 3, {scaleX: 1.3, ease: Linear.easeNone}), 85)
            .add(TweenMax.to('#business-intelligence', 3, {y:'-=61', ease: Linear.easeNone}), 85)
        
            .add(TweenMax.to('#panel2-head', 2, { opacity: 0, x:"+=150", ease: Linear.easeNone }), 82)
            .add(TweenMax.to('#panel2-box', 3, { opacity: 0, ease: Linear.easeNone }), 81)
            .add(TweenMax.to('#panel2-para', 2, { opacity: 0, x:"+=200", ease: Linear.easeNone }), 83)
        
            .add(TweenMax.to('#panel3-head2', 0, { opacity: 0, x:"+=150", ease: Linear.easeNone }), 0)
            .add(TweenMax.to('#panel3-head', 3, { opacity: 1, x:"-=300", ease: Linear.easeNone }), 82)
            .add(TweenMax.to('#panel3-head2', 4, { opacity: 1, x:"-=150", ease: Linear.easeNone }), 84)
            .add(TweenMax.to('#panel3-div', 4, { opacity: 1, y:"", ease: Linear.easeNone }), 84)
            .add(TweenMax.to('#dots1', 4, { opacity: 1, ease: Linear.easeNone }), 84)
            .add(TweenMax.to('#panel3-pg1', 0, { scale: 1, x:"+=154", y:"+=46"}), 0)
            .add(TweenMax.to('#panel3-pg1', 4, { opacity: 1, x:"-=150" }), 86)


/* PAUSE  PAUSE  PAUSE  PAUSE  PAUSE  PAUSE  PAUSE  PAUSE  PAUSE  PAUSE  PAUSE  PAUSE  PAUSE  PAUSE  PAUSE
        ++++++++++++++++++++++++++++++++++++++++++++++++++++
        ++++++++++++++++++++++++++++++++++++++++++++++++++++ */      
            .add(TweenMax.to('#purple-label-white-box', 4, { y:"+=61", opacity:0, ease: Linear.easeNone }), 118)
            .add(TweenMax.to('#label-purple-highlight', 4, { y:"+=61", opacity:0, ease: Linear.easeNone }), 118)
            .add(TweenMax.to('#business-intelligence-line', 4, { y:"+=61", scaleX: 1, ease: Linear.easeNone }), 118)
            //.add(TweenMax.to('#business-intelligence-text', 0, { stroke: '#f40628' }), 79)
            .add(TweenMax.to('#business-intelligence-text', 4, { y:"+=61", stroke: 'rgba(255,255,255, .1)', ease: Linear.easeNone }), 118)
            .add(TweenMax.to('#purple-label-marker', 4, { y:"+=61", opacity:0, ease: Linear.easeNone }), 118)
        
            .add(TweenMax.to('#osr-core-main3', 4, {opacity:0, ease: Linear.easeNone}), 118)
            .add(TweenMax.to('#osr-core-main', 4, {opacity:1, ease: Linear.easeNone}), 116)
            
            .add(TweenMax.to('#color-rings', 4, {opacity:0, ease: Linear.easeNone}), 118)
            .add(TweenMax.to('#purple-ring', 4, {opacity:0, ease: Linear.easeIn}), 120)

            .add(TweenMax.to('#osr-core', 4, {opacity:0, ease: Linear.easeNone}), 125)

            .add(TweenMax.to('#color-rings', 4, { opacity: 1, ease: Linear.easeNone }), 125)
            .add(TweenMax.to('#purple-ring', 4, { opacity: 1, ease: Linear.easeNone }), 125)
            .add(TweenMax.to('#red-ring', 4, { opacity: 1, ease: Linear.easeNone }), 125)
            .add(TweenMax.to('#green-ring', 4, { opacity: 1, ease: Linear.easeNone }), 125)
            .add(TweenMax.to('#yellow-ring', 4, { opacity: 1, ease: Linear.easeNone }), 125)
            .add(TweenMax.to('#blue-ring', 4, { opacity: 1, ease: Linear.easeNone }), 125)
            .add(TweenMax.from('#osr-core-middle-ring-text', 4, {opacity:0, ease: Linear.easeNone}), 126)
        
            .add(TweenMax.to('#panel3-pg1', 2, { opacity: 0, x:"+=150", ease: Linear.easeNone }), 126)
            .add(TweenMax.to('#panel3-para2', 2, { opacity: 1, x:"-=150", ease: Linear.easeNone }), 126)
            .add(TweenMax.to('#dots1', 4, { opacity: 0, ease: Linear.easeNone }), 126)
            .add(TweenMax.to('#dots2', 4, { opacity: 1, ease: Linear.easeNone }), 126)
        
        
        

            .add(TweenMax.to('#business-intelligence', 2, { opacity:0, y:'+=200', ease: Linear.easeNone }), 150)
            .add(TweenMax.to('#project-account', 2, {opacity:0, y:'+=200', ease: Linear.easeIn}), 150)
            .add(TweenMax.to('#hcm, #dots-bl', 2, {opacity:0, y:'+=196', ease: Linear.easeNone}), 150)
            .add(TweenMax.to('#team-collab', 2, {opacity:0, y:'+=200', ease: Linear.easeIn}), 150)
            .add(TweenMax.to('#erp, #dots-br', 2, {opacity:0, y:'+=200', ease: Linear.easeNone}), 150)
            .add(TweenMax.to('#project-management', 1, {opacity:0, y:'+=200', ease: Linear.easeIn}), 150)
            .add(TweenMax.to('#crm, #dots-tr', 2, {opacity:0, y:'+=200', ease: Linear.easeNone}), 150)
            .add(TweenMax.to('#resource-management', 1.5, {opacity:0, y:'+=200', ease: Linear.easeNone}), 150)
        
            .add(TweenMax.to('#grey-lines-all', 2, {opacity:0, y:"+=196", ease: Linear.easeIn}), 150)
        
            .add(TweenMax.to('#color-rings', 4, {opacity:0, ease: Linear.easeNone}), 150)
            .add(TweenMax.to('#grey-ring path', 3, {strokeOpacity:0, ease: Linear.easeIn}), 150)
            .add(TweenMax.to('#osr-core-main', 4, {opacity:0, ease: Linear.easeNone}), 153)
            .add(TweenMax.to('#osrchart-blue-png', 4, { opacity:1, ease: Linear.easeNone }), 153)
            .add(TweenMax.to('#osrchart-blue-ring', 0, { opacity:0 }), 153)
            .add(TweenMax.to('#osrchart-blue-ring', 0, { scale:"1.55", x:'+=200', y:'+=328' }), 153)
            .add(TweenMax.to('#osrchart-blue-ring', 4, { opacity:1, ease: Linear.easeNone }), 153)
            .add(TweenMax.to('#osr-core-middle-ring', 4, { opacity:0, ease: Linear.easeNone }), 153)
            .add(TweenMax.to('#osr-core-base-ring', 4, { opacity:0, ease: Linear.easeNone }), 153)
        
            .add(TweenMax.to('#panel3-para2', 2, { opacity: 0, x:"+=100", ease: Linear.easeNone }), 153)
            .add(TweenMax.to('#panel3-para3', 2, { opacity: 1, x:"+=100", ease: Linear.easeNone }), 153)
            .add(TweenMax.to('#dots2', 4, { opacity: 0, ease: Linear.easeNone }), 151)
            .add(TweenMax.to('#dots3', 4, { opacity: 1, ease: Linear.easeNone }), 151)


        //RINGS IN !!!!!!!!!!!!!!!!
            .add(TweenMax.from('#business-orchestration', 4, { opacity: 0, x:'-=100', ease: Linear.easeNone }), 167)
            .add(TweenMax.from('#ring1, #ring2', 0, { opacity: 0 }), 170)
            .add(TweenMax.to('#ring1, #ring2', 0, { scale: 1.51, x: '+=426', y: '+=572' }), 170)

            .add(TweenMax.to('#ring1', 1, { opacity: 1 }), 171)
            .add(TweenMax.to('#ring1', 1, { opacity: 0 }), 174)
            .add(TweenMax.to('#ring2', 1, { opacity: 1 }), 174)
            .add(TweenMax.to('#ring2', 1, { opacity: 0 }), 178)
            
            .add(TweenMax.to('#ring1', 1, { opacity: 1 }), 178)
            .add(TweenMax.to('#ring1', 1, { opacity: 0 }), 182)
            .add(TweenMax.to('#ring2', 1, { opacity: 1 }), 182)
            .add(TweenMax.to('#ring2', 1, { opacity: 0 }), 186)
            
            .add(TweenMax.to('#ring1', 1, { opacity: 1 }), 186)
            .add(TweenMax.to('#ring1', 1, { opacity: 0 }), 190)
            .add(TweenMax.to('#ring2', 1, { opacity: 1 }), 190)
            .add(TweenMax.to('#ring2', 1, { opacity: 0 }), 194)
        
            .add(TweenMax.to('#ring1', 1, { opacity: 1 }), 194)
            .add(TweenMax.to('#ring1', 1, { opacity: 0 }), 198)
            .add(TweenMax.to('#ring2', 1, { opacity: 1 }), 198)
            .add(TweenMax.to('#ring2', 1, { opacity: 0 }), 202)
        

            .add(TweenMax.from('#bluering', 8, { opacity:0 }), 202)
            .add(TweenMax.to('#business-orchestration', 4, { opacity: 0, ease: Linear.easeNone }), 202)
            .add(TweenMax.to('#osrchart-blue-png', 4, { opacity:0, ease: Linear.easeNone }), 204)
            .add(TweenMax.to('#osrchart-blue2-png', 4, { opacity: 1, ease: Linear.easeNone }), 204)
            
            .add(TweenMax.to('#hcm-blue', 0, { y:'-=80', ease: Linear.easeNone }), 206)
            .add(TweenMax.to('#erp-blue', 0, { y:'-=80', ease: Linear.easeNone }), 206)
            .add(TweenMax.to('#crm-blue', 0, { y:'-=80', ease: Linear.easeNone }), 206)
            
            .add(TweenMax.to('#hcm-blue', 4, { opacity: 1, y:"+=80", ease: Linear.easeNone }), 206)
            .add(TweenMax.to('#erp-blue', 4, { opacity: 1, y:"+=80", ease: Linear.easeNone }), 206)
            .add(TweenMax.to('#crm-blue', 4, { opacity: 1, y:"+=80", ease: Linear.easeNone }), 206)
        
            .add(TweenMax.to('#dots-bl', 2, { opacity: 1, x:'-=6', y:'-=197', ease: Linear.easeIn }), 206)
            .add(TweenMax.to('#dots-br', 2, { opacity: 1, y:'+=-204', ease: Linear.easeNone }), 206)
            .add(TweenMax.to('#dots-tr', 2, { opacity: 1, y:'-=196', ease: Linear.easeIn }), 206)
        
            .add(TweenMax.to('#panel3-para3', 2, { opacity: 0, x:"+=150", ease: Linear.easeNone }), 206)
            .add(TweenMax.to('#panel3-para4', 2, { opacity: 1, x:"+=100", ease: Linear.easeNone }), 206)
            .add(TweenMax.to('#dots3', 4, { opacity: 0, ease: Linear.easeNone }), 206)
            .add(TweenMax.to('#dots4', 4, { opacity: 1, ease: Linear.easeNone }), 206)


            .add(TweenMax.to('#bluering', 8, { opacity:0 }), 229)
            .add(TweenMax.to('#hcm-blue', 4, { opacity: 0, ease: Linear.easeNone }), 233)
            .add(TweenMax.to('#erp-blue', 4, { opacity: 0, ease: Linear.easeNone }), 233)
            .add(TweenMax.to('#crm-blue', 4, { opacity: 0, ease: Linear.easeNone }), 233)
        
            .add(TweenMax.to('#dots-bl', 2, { opacity: 0, ease: Linear.easeIn }), 233)
            .add(TweenMax.to('#dots-br', 2, { opacity: 0, ease: Linear.easeNone }), 233)
            .add(TweenMax.to('#dots-tr', 2, { opacity: 0, ease: Linear.easeIn }), 233)
        
            .add(TweenMax.to('#bluering', 16, { opacity:0, }), 229)
            .add(TweenMax.to('#osr', 8, {opacity: 0, y:'+=444', ease: Linear.easeNone}), 235)
            .add(TweenMax.to('#osr-pole', 4, {opacity:0, y:'+=444', ease: Linear.easeNone}), 235)
        
            .add(TweenMax.to('#panels', 6, { opacity:0, x:"+=50", ease: Linear.easeNone }), 241)
            
            .add(TweenMax.to('#floor-ring', 4, { opacity:0, ease: Linear.easeNone }), 239)
            .add(TweenMax.to('#osrchart-blue2-png', 10, { x:"+=160", ease: Linear.easeNone }), 247)
            .add(TweenMax.to('#intro-image', 10, { x:"+=160", ease: Linear.easeNone }), 247)
            .add(TweenMax.to('#osrChart', 16, { opacity:0, x: "+=46", ease: Linear.easeNone }), 241)


            //.add(TweenMax.to('#oGrid', 0, {x:'-=100', y:'+=14', ease: Linear.easeNone}), 255)
            //.add(TweenMax.to('#oGrid', 0, {x:'+=23', y:'+=23', ease: Linear.easeNone}), 256)
            .add(TweenMax.to('#oGrid', 12, {opacity:1, ease: Linear.easeNone}), 262)
        

            .add(TweenMax.to('#ogrid-br, #ogrid-inner-br', 4, {x:'+=3', y:'-=20', ease: Linear.easeNone}), 266)
            .add(TweenMax.to('#ogrid-br, #ogrid-inner-br', 1, {x:'-=10', y:'-=10', ease: Linear.easeNone}), 272)
        
            .add(TweenMax.to('#ogrid-tl, #ogrid-inner-tl', 2, {x:'+=10', y:'+=28', ease: Linear.easeNone}), 267)
            .add(TweenMax.to('#ogrid-tl, #ogrid-inner-tl', 1, {x:'+=10', y:'+=10', ease: Linear.easeNone}), 269)
        
            .add(TweenMax.to('#ogrid-bl, #ogrid-inner-bl', 1, {x:'+=10', y:'-=10', ease: Linear.easeNone}), 268)
            
            .add(TweenMax.to('#ogrid-top, #ogrid-inner-top', 1, {y:'+=25', ease: Linear.easeNone}), 270)
            .add(TweenMax.to('#ogrid-tr, #ogrid-inner-tr', 1, {x:'-=10', y:'+=10', ease: Linear.easeNone}), 271)
            
            //.add(TweenMax.to('#oGrid', 3, {scale:'-=0.05', ease: Linear.easeNone}), 210)
            .add(TweenMax.to('#oGrid', 3, {scaleY:1, ease: Linear.easeNone}), 274)
            //.add(TweenMax.to('#oGrid', 4, {y:'-=40', scale:'-=0.08', x:'-=6', ease: Linear.easeNone}), 214)
            .add(TweenMax.to('#oGrid #ogrid-bl path, #oGrid #ogrid-tl path, #oGrid #ogrid-br path, #oGrid #ogrid-tr path, #oGrid #ogrid-top path', 8, { stroke: '#1A80FF', ease: Linear.easeNone }), 278)
        
        
            
            .add(TweenMax.to('#sl', 0, { opacity: 0}), 0)
            .add(TweenMax.to('#sl', 0, { opacity: 0, y:"+=287"}), 283)
            .add(TweenMax.to('#sl', 16, { opacity: 1, y:'-=287'}), 284)
        
            .add(TweenMax.to('#sl-t', 0, { opacity: 0}), 0)
            .add(TweenMax.to('#sl-t', 0, { opacity: 0, y:"+=287"}), 283)
            .add(TweenMax.to('#sl-t', 16, { opacity: 1, y:'-=287'}), 284)
        
            .add(TweenMax.to('#rm', 0, { opacity: 0}), 0)
            .add(TweenMax.to('#rm', 0, { opacity: 0, y:"+=287"}), 289)
            .add(TweenMax.to('#rm', 16, { opacity: 1, y:'-=287'}), 290)
        
            .add(TweenMax.to('#rm-t', 0, { opacity: 0}), 0)
            .add(TweenMax.to('#rm-t', 0, { opacity: 0, y:"+=287"}), 289)
            .add(TweenMax.to('#rm-t', 16, { opacity: 1, y:'-=287'}), 290)
        
            .add(TweenMax.to('#pm', 0, { opacity: 0}), 0)
            .add(TweenMax.to('#pm', 0, { opacity: 0, y:"+=187"}), 293)
            .add(TweenMax.to('#pm', 8, { opacity: 1, y:'-=187'}), 294)
        
            .add(TweenMax.to('#pm-t', 0, { opacity: 0}), 0)
            .add(TweenMax.to('#pm-t', 0, { opacity: 0, y:"+=187"}), 293)
            .add(TweenMax.to('#pm-t', 8, { opacity: 1, y:'-=187'}), 294)
        
            .add(TweenMax.to('#c', 0, { opacity: 0}), 0)
            .add(TweenMax.to('#c', 0, { opacity: 0, y:"+=187"}), 297)
            .add(TweenMax.to('#c', 8, { opacity: 1, y:'-=187'}), 298)
        
            .add(TweenMax.to('#c-t', 0, { opacity: 0}), 0)
            .add(TweenMax.to('#c-t', 0, { opacity: 0, y:"+=187"}), 297)
            .add(TweenMax.to('#c-t', 8, { opacity: 1, y:'-=187'}), 298)
        
            .add(TweenMax.to('#e', 0, { opacity: 0}), 0)
            .add(TweenMax.to('#e', 0, { opacity: 0, y:"+=287"}), 299)
            .add(TweenMax.to('#e', 12, { opacity: 1, y:'-=287'}), 300)
        
            .add(TweenMax.to('#e-t', 0, { opacity: 0}), 0)
            .add(TweenMax.to('#e-t', 0, { opacity: 0, y:"+=287"}), 299)
            .add(TweenMax.to('#e-t', 12, { opacity: 1, y:'-=287'}), 300)
        
        
            .add(TweenMax.to('#girl-process', 0, { opacity: 0 }), 0)
            .add(TweenMax.to('#girl-process', 0, { opacity: 0 }), 277)
            .add(TweenMax.to('#girl-process', 16, { opacity: 1 }), 278)
        
            .add(TweenMax.to('#girl-osr', 0, { opacity: 0 }), 0)
            .add(TweenMax.to('#girl-osr', 1, { opacity: 0 }), 277)
            .add(TweenMax.to('#girl-osr', 32, { opacity: 1 }), 278)
        
            .add(TweenMax.to('#girl-osr-text', 0, { opacity: 0 }), 0)
            .add(TweenMax.to('#girl-osr-text', 0, { opacity: 0 }), 277)
            .add(TweenMax.to('#girl-osr-text', 16, { opacity: 1 }), 278)
            
            .add(TweenMax.to('#ogrid2-mobile', 0, { opacity: 0 }), 0)
            .add(TweenMax.to('#ogrid2-mobile', 1, { opacity: 0 }), 259)
            .add(TweenMax.to('#ogrid2-mobile', 16, { opacity: 1, y:'-=237'}), 260)
        
            .add(TweenMax.to('#ogrid2-mobile-text', 0, { opacity: 0 }), 0)
            .add(TweenMax.to('#ogrid2-mobile-text', 1, { opacity: 0, y:"+=100" }), 267)
            .add(TweenMax.to('#ogrid2-mobile-text', 8, { opacity: 1, y:"-=80", ease: Linear.easeOut }), 268)
            
        
        
            
            .add(TweenMax.to('#oGrid', 2, {opacity:0, ease: Linear.easeNone}), 278)
            //.add(TweenMax.to('#oGrid', 0, {x:'-=50', y:'-=17'}), 280)
            .add(TweenMax.to('#oGrid2', 0, { x:'+=56' }), 278)
            .add(TweenMax.from('#oGrid2 #ogrid2-whole', 8, {opacity:0, ease: Linear.easeNone}), 278)
            .add(TweenMax.from('#oGrid2 #ogrid2-outter-whole', 4, {opacity:0, ease: Linear.easeNone}), 282)
            .add(TweenMax.from('#oGrid2 #header', 4, {opacity:0, x:'+=420', ease: Linear.easeNone}), 290)

            //.add(TweenMax.staggerFrom('#oGrid2 #service-leader, #oGrid2 #resource-manager, #oGrid2 #executive, #oGrid2 #contributor, #oGrid2 #project-manager', 4, {opacity:0, y:'+=320'}, 0.8), 6)

            .add(TweenMax.from('#oGrid2 #service-leader', 8, {opacity:0, ease: Linear.easeNone}), 294)
            .add(TweenMax.from('#oGrid2 #resource-manager', 8, {opacity:0, ease: Linear.easeNone}), 302)
            .add(TweenMax.from('#oGrid2 #project-manager', 8, {opacity:0, ease: Linear.easeNone}), 310)
            .add(TweenMax.from('#oGrid2 #contributor', 8, {opacity:0, ease: Linear.easeNone}), 318)
            .add(TweenMax.from('#oGrid2 #executive', 8, {opacity:0, ease: Linear.easeNone}), 326)
        
      
            .set('#discover', {className:"-=active"}, 300)
            .set('#people', {className:"+=active"}, 300)
            .set('#benefits', {className:"-=active"}, 300)

        
/* SCENE 2_2
        ++++++++++++++++++++++++++++++++++++++++++++++++++++
        ++++++++++++++++++++++++++++++++++++++++++++++++++++ */    
    var scene2_2 = new ScrollMagic.Scene( {
        triggerElement: '#scene2',
        duration: '1300%',
        triggerHook: 0.1,
        offset: 200
    })
//.addIndicators({ name: "--> scene2-2 --> Duration 1300%" })
        .setTween(s2_1tl)
        .addTo(animController);

        
/* SCENE 2_3
        ++++++++++++++++++++++++++++++++++++++++++++++++++++
        ++++++++++++++++++++++++++++++++++++++++++++++++++++ */      
    var scene2_3 = new ScrollMagic.Scene( {
        triggerElement: '#scene2-3',
        duration: '2100%', // KEEP NAV ON LEFT
        triggerHook: 0.2
    })
//.addIndicators({ name: "--> scene2-3 --> Duration 1740%" })     
        .setPin('#scene2-3-pin')    
        .addTo(animController)

        
/* SCENE 2_4
        ++++++++++++++++++++++++++++++++++++++++++++++++++++
        ++++++++++++++++++++++++++++++++++++++++++++++++++++ */ 
//    var scene2_4 = new ScrollMagic.Scene( {
//        triggerElement: '#scene2-4',
//        duration: '600%',
//        triggerHook: 0.2
//    })
//.addIndicators({ name: "--> scene2-4 --> Duration 1800%" })    
//        .setPin('#scene2-4-pin')    
//        .addTo(animController);


/* SCENE 3
        ++++++++++++++++++++++++++++++++++++++++++++++++++++
        ++++++++++++++++++++++++++++++++++++++++++++++++++++ */        
    var s3tl = new TimelineMax();
    s3tl
        
        .add(TweenMax.to('#ogrid2-mobile-back', 0, { opacity: 0, y:'-=200', ease: Linear.easeOut }), 0)
        
        
        .add(TweenMax.to('#sl', 24, { opacity: 0, y:'-=287'}), 36)
        .add(TweenMax.to('#sl-t', 24, { opacity: 0, y:'-=287'}), 36)
        
        .add(TweenMax.to('#rm', 24, { opacity: 0, y:'-=387'}), 38)
        .add(TweenMax.to('#rm-t', 24, { opacity: 0, y:'-=387'}), 38)
        
        .add(TweenMax.to('#pm', 24, { opacity: 0, y:'-=687'}), 40)
        .add(TweenMax.to('#pm-t', 24, { opacity: 0, y:'-=687'}), 40)
        
        .add(TweenMax.to('#c', 24, { opacity: 0, y:'-=537'}), 42)
        .add(TweenMax.to('#c-t', 24, { opacity: 0, y:'-=537'}), 42)
        
        .add(TweenMax.to('#e', 24, { opacity: 0, y:'-=587'}), 43)
        .add(TweenMax.to('#e-t', 24, { opacity: 0, y:'-=587'}), 43)
        
        
        
        
    
        .add(TweenMax.to('#girl-people', 16, { opacity: 0, y:'-=200', ease: Linear.easeOut }), 60)
        .add(TweenMax.to('#ogrid2-mobile-text', 16, { opacity: 0, y:'-=200', ease: Linear.easeOut }), 37)
        .add(TweenMax.to('#girl-process', 16, { opacity: 0 }), 50)
        .add(TweenMax.to('#girl-osr-text', 8, { opacity: 0 }), 50)
        
        .add(TweenMax.to('#girl-osr path, girl-osr-inside path', 32, { stroke: '#FFF', opacity: 0.2, y:"-=60" }), 60)
        
        .add(TweenMax.to('#girl-card1', 1, { opacity: 0, y:"+=600" }), 0)
        .add(TweenMax.to('#girl-card1', 1, { opacity: 0 }), 85)
        .add(TweenMax.to('#girl-card1', 8, { opacity: 1 }), 86)
        .add(TweenMax.to('#girl-card1', 84, { y:"-=1200" }), 86)
        .add(TweenMax.to('#girl-card1', 8, { opacity: 0 }), 134)
        
        .add(TweenMax.to('#girl-card2', 1, { opacity: 0, y:"+=600" }), 0)
        .add(TweenMax.to('#girl-card2', 1, { opacity: 0 }), 119)
        .add(TweenMax.to('#girl-card2', 8, { opacity: 1 }), 120)
        .add(TweenMax.to('#girl-card2', 84, { y:"-=1200" }), 120)
        .add(TweenMax.to('#girl-card2', 8, { opacity: 0  }), 158)
        
        
        
        .add(TweenMax.to('#oGrid2 #service-leader', 8, {opacity:0, y:"-=850", ease: Linear.easeNone}), 94)
        .add(TweenMax.to('#oGrid2 #resource-manager', 8, {opacity:0, y:"-=850", ease: Linear.easeNone}), 102)
        .add(TweenMax.to('#oGrid2 #project-manager', 8, {opacity:0, y:"-=850", ease: Linear.easeNone}), 110)
        .add(TweenMax.to('#oGrid2 #contributor', 8, {opacity:0, y:"-=850", ease: Linear.easeNone}), 118)
        .add(TweenMax.to('#oGrid2 #executive', 8, {opacity:0, y:"-=850", ease: Linear.easeNone}), 124)
        
        .add(TweenMax.to('#oGrid2 #header', 8, {y:'-=1650', opacity:0, ease: Linear.easeNone}), 132)
        
        .add(TweenMax.staggerTo('#oGrid2 #ogrid2-outter-whole, #oGrid2 #osr-label', 4, {opacity:0, ease: Linear.easeNone}), 120)
        
        .add(TweenMax.to('#oGrid2 #ogrid2-bl path, #oGrid2 #ogrid2-tl path, #oGrid2 #ogrid2-br path, #oGrid2 #ogrid2-tr path, #oGrid2 #ogrid2-top path', 8, { stroke: '#ffffff', ease: Linear.easeNone }), 135)
        
        .add(TweenMax.to('#oGrid2 #ogrid2-whole', 8, {opacity:0.5, ease:Linear.easeNone }), 135)
        
        .set('#discover', {className:"-=active"}, 174)
        .set('#people', {className:"-=active"}, 174)
        .set('#benefits', {className:"+=active"}, 174)
        .set('#scene2-3 .slide-list', {className:"+=white a"}, 174)
        
        .add(TweenMax.to('#discover', 8, { y:'+=58' }), 174)
        .add(TweenMax.to('#people', 8, { y:'+=58' }), 174)
        .add(TweenMax.to('#benefits', 8, { y:'+=58' }), 174)
        
        
        var scene3 = new ScrollMagic.Scene( {
            triggerElement: '#scene3',
            duration: 6400,
//            triggerHook: "onEnter",
            triggerHook: 0.2,
            //offset: $(window).height() * 10.5 - 100,
            offset: 7350  // transition of graph animation to people animation
        })
        .setTween(s3tl)
        .addTo(animController);


/* SCENE 3_1
        ++++++++++++++++++++++++++++++++++++++++++++++++++++
        ++++++++++++++++++++++++++++++++++++++++++++++++++++ */    
        var s3_1tl = new TimelineMax();
            s3_1tl
            

            .add(TweenMax.to('#girl-card3', 1, { opacity: 0, y:"+=650" }), 0)
            .add(TweenMax.to('#girl-card3', 1, { opacity: 0 }), 14)
            .add(TweenMax.to('#girl-card3', 1, { opacity: 1 }), 14)
            .add(TweenMax.to('#girl-card3', 14, { opacity: 1, y:"-=1200" }), 15)
            .add(TweenMax.to('#girl-card3', 2, { opacity: 0 }), 21)
        
        
            .add(TweenMax.to('#oGrid2 #ogrid2-whole', 4, { opacity:0.15, ease:Linear.easeNone }), 5)
        
            
            .add(TweenMax.to('#panel_1', 0, { opacity: 0, y:'+=80', ease: Linear.easeNone }), 0)
            .add(TweenMax.to('#panel_1', 2, { opacity: 1, ease: Linear.easeNone }), 6)
            .add(TweenMax.to('#panel_1', 12, { y:'-=1600', ease: Linear.easeNone }), 4)
            .add(TweenMax.to('#panel_1', 2, { opacity: 0, ease: Linear.easeNone }), 12)
        
            .add(TweenMax.to('#panel_2', 0, { opacity: 0, y:'+=80', x:'-=140', ease: Linear.easeNone }), 0)
            .add(TweenMax.to('#panel_2', 2, { opacity: 1, ease: Linear.easeNone }), 8)
            .add(TweenMax.to('#panel_2', 12, { y:'-=1600', ease: Linear.easeNone }), 6)
            .add(TweenMax.to('#panel_2', 2, { opacity:0, ease: Linear.easeNone }), 14)
            
            .add(TweenMax.to('#panel_3', 0, {  opacity: 0, y:'+=80', x:'-=288', ease: Linear.easeNone }), 0)
            .add(TweenMax.to('#panel_3', 2, {  opacity: 1, ease: Linear.easeNone }), 11)
            .add(TweenMax.to('#panel_3', 12, { y:'-=1600', ease: Linear.easeNone }), 9)
            .add(TweenMax.to('#panel_3', 2, { opacity:0, ease: Linear.easeNone }), 17)
        
            .add(TweenMax.to('#oGrid2 #ogrid2-whole', 4, { opacity:0.7, ease:Linear.easeNone }), 17)
        
            .add(TweenMax.to('#oGrid2 #ogrid2-whole', 2, {opacity:0, ease:Linear.easeNone }), 22)
        
            // FAKE OUT PLACEHOLDER TO KEEP THE SCENE ON, SO OGRID CAN ANIMATE UPS
            .add(TweenMax.to('#panel_3', 15, { x:'-=1288', ease: Linear.easeNone }), 40)
        
            .add(TweenMax.to('#discover', 4, {opacity:0, y:"-=200", ease:Linear.easeNone }), 21)
            .add(TweenMax.to('#people', 3, {opacity:0, y:"-=260", ease:Linear.easeNone }), 22)
            .add(TweenMax.to('#benefits', 5, {opacity:0, y:"-=520", ease:Linear.easeNone }), 23)
        
        var scene3_1 = new ScrollMagic.Scene( {
        triggerElement: '#scene3',
        duration: '1910%',
        triggerHook: 0
    })
        
//        var start = scene3_1.scrollOffset();
//        var end = scene3_1.scrollOffset() + scene3_1.duration();
//        console.log("scene3_1 starts at", start, "and ends at", end)
        
//.addindicators({ name: "--> scene3-1 --> Duration 1600%" })    
    .setPin('#scene3-pin')
    .addTo(animController);
    
        
/* SCENE 3_2
        ++++++++++++++++++++++++++++++++++++++++++++++++++++
        ++++++++++++++++++++++++++++++++++++++++++++++++++++ */    
//    var s3_2tl = new TimelineMax();
//    s3_2tl

        var scene3_2 = new ScrollMagic.Scene( {
        triggerElement: '#scene3-2-trigger',
        duration: '650%',
        triggerHook: 0,
        offset: $(window).height() * 2.9 // position the hero image up or down
        //offset: 2500 // position the hero image up or down
    })
        
//        var start = scene3_2.scrollOffset();
//        var end = scene3_2.scrollOffset() + scene3_2.duration();
//        console.log("scene3_2 starts at", start, "and ends at", end)
        
        
//        scene3_2.on("change", function (event) {
//        console.log("Scene Property \"" + event.what + "\" changed to " + event.newval);
//            })
//.addindicators({ name: "--> scene3-2 --> Duration 300%" })    
    .setPin('#hero-container2')
    .addTo(animController);

        
/* SCENE 3_3
        ++++++++++++++++++++++++++++++++++++++++++++++++++++
        ++++++++++++++++++++++++++++++++++++++++++++++++++++ */    
    var s3_3tl = new TimelineMax();
        s3_3tl
        
        var scene3_3 = new ScrollMagic.Scene( {
        triggerElement: '#hero-container2',
        duration: '1400%',
        triggerHook: 0.1,
        offset: 0
    })
        
//        var start = s3_3tl.scrollOffset();
//        var end = s3_3tl.scrollOffset() + s3_3tl.duration();
//        console.log("s3_3tl starts at", start, "and ends at", end)
        
//.addindicators({ name: "--> scene3-3 --> Duration 200%" })
    .setTween(s3_1tl)
    .addTo(animController);
            

/* SCENE 4
        ++++++++++++++++++++++++++++++++++++++++++++++++++++
        ++++++++++++++++++++++++++++++++++++++++++++++++++++ */ 
                


                // init controller
                var controller = new ScrollMagic.Controller();
                //var sceneTest = new TimelineMax();
//  _______________________________________________________________________________________________________  >>>>>
//                    var test = new TimelineMax();
//                    test
//                        .add(TweenMax.to('#card-man', 0, { opacity: 0, y:'+=80' }), 0)
//                        .add(TweenMax.to('#card-man', 3, { opacity: 1, y:'-=80', ease: Linear.easeIn }), 1)
//
//                        .add(TweenMax.to('#card-man', 1, { opacity: 1, ease: Linear.easeIn }), 12);
//  _______________________________________________________________________________________________________  >>>>>                                   
                    var timeline = new TimelineMax();
                    var tween1 = TweenMax.from("#card-man", 1, { opacity: 0, y:'+=40', delay: 0.4 });
                    var tween2 = TweenMax.from("#card-man2", 1, { opacity: 0, delay: 0 });

                    timeline.add(tween1).add(tween2);
        
                // build scene
                var scene = new ScrollMagic.Scene({

                    triggerElement: "#trigger1", 
                    duration: 1800,
//                    triggerHook: 0.9,
                    offset: 450 })

                    .setPin("#pin1")
                    //.addIndicators({name: "1 (duration: 800)"}) // add indicators (requires plugin)
                    .setTween(timeline)
                    .addTo(controller);

        
                // init controller
                var controller = new ScrollMagic.Controller();
        
                var timeline2 = new TimelineMax();
                    var tween11 = TweenMax.from("#card-ebook-container", .4, { opacity: 0, y:'+=40', delay: 0.1 });
        
                    // COOL BOUNCE DOWN EFFECT
                    //var tween12 = TweenMax.from("#card-cta-pic-container", 1, { opacity: 0, y:'+=80', delay: 0.1 });
                    var tween12 = TweenMax.from("#card-cta-pic", .4, { opacity: 0, y:'+=40', delay: .1 });
        
                    var tween13 = TweenMax.staggerTo(
                            [ '#endring-green', '#endring-purple', '#endring-red', '#star', '#white-stuff', '#inner-path', '#blueball' ],
                            1.2,
                            { opacity: 0.5,
                             //delay: 1,
                             repeat: -1,
                             yoyo: true,
                             ease: Circ.easeInOut },
                            .3
                        );
                    

                    timeline2.add(tween11).add(tween12);

                // build scene
                var scene = new ScrollMagic.Scene({
                    
                    triggerElement: "#trigger2",
                    duration: 0,
//                    triggerHook: 0.9,
                    offset: 0 })

//                        .setTween(TweenMax.staggerTo(
//                            [ '#endring-green', '#endring-purple', '#endring-red', '#star', '#white-stuff', '#inner-path', '#blueball' ],
//                            1.2,
//                            { opacity: 0.5,
//                             //delay: 1,
//                             repeat: -1,
//                             yoyo: true,
//                             ease: Circ.easeInOut },
//                            .3
//                        ))

                    .setPin("#pin2")
                    //.addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
                    .setTween(timeline2)
                    .addTo(controller);
        
        
        
            
        
            animController.scrollTo(function (newpos) {
                TweenMax.to(window, 0.8, {scrollTo: {y: newpos}});
            });
        
            $(document).on("click", "a[href^='#']", function (e) {
                var id = $(this).attr("href");
                
                
                console.log(id);
                //$(this).css('cursor', 'pointer');
                
                //if ($(id).length > 0 & ($(id) !== "coverlink1")) {
                if ($(id).length > 0) {
                    e.preventDefault();
//                    $(this).css('cursor', 'pointer');

                    // trigger scroll
                    animController.scrollTo(id)
                    //this.id = null;
                    // MAKE LINK INACTIVE !!!!!!!!!

// if supported by the browser we can even update the URL.
//                    if (window.history && window.history.pushState) {
//                        history.pushState("", document.title, id);
//                    }
                };       
            });
        
//            controller.scrollTo(function (newpos) {
//                TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
//            });
//        
//            $(document).on("click", id, function (e) {
//                var id = $(this).attr("screen3");
//                
//                console.log(id);
//                
//                    e.preventDefault();
//
//                    controller.scrollTo(id)
//     
//            });

       
}
});


