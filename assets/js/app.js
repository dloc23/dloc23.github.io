$(document).ready(function() {
    $.when(
    
        $.get("assets/svg/oGrid.svg", function(svg) {
          $("#oGrid").append(svg.documentElement);
        }),
        $.get("assets/svg/osrchart.svg", function(svg) {
            $("#osrChart").append(svg.documentElement);
          }),
        $.get("assets/svg/oGrid2.svg", function(svg) {
            $("#oGrid2").append(svg.documentElement);
          }),
        $.get("assets/svg/panels.svg", function(svg) {
            $("#panels").append(svg.documentElement);
          })
        
      ).then(init);

    function init() {
    //var animController = new ScrollMagic.Controller( {addIndicators: true} );
    var animController = new ScrollMagic.Controller();
    var sceneArray = [];

    //var sNum = $('section').length;
    TweenMax.set('#osrChart, #osr-core, #osr-core-2, #osr-core-main2, #osr-core-main3, #label-purple-highlight, #purple-label-marker, #osrchart-blue-png, #osrchart-blue2-png, #floor-ring, #blue-ring-big, #purple-label-marker, #ring1, #ring2, #panel1, #panel2, #panel2-head, #panel2-para, #panel2-box, #dots1, #dots2, #dots3, #dots4, #panel3-head, #panel3-head2, #panel3-div, #panel3-pg1, #panel3-para2, #panel3-para3, #panel3-para4, #hcm-blue, #erp-blue, #crm-blue', { opacity: 0 });
    
    TweenMax.set('#oGrid', { opacity: .5}, 0)
        
        
        
/* SCENE INTRO
        ++++++++++++++++++++++++++++++++++++++++++++++++++++
        ++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    var tl = new TimelineMax();
        tl
            //.add(TweenMax.to('#oGrid', 0, { opacity: .5 }), 0)
            .add(TweenMax.to('#oGrid', 1, { opacity: 1 }), 1)
            .add(TweenMax.to('#oGrid', 1, { rotation: +360, transformOrigin:"center center", ease:Linear.easeNone }).timeScale(0.2), 2)
                ////////////  TEXT
            //.add(TweenMax.staggerTo([ '#hero-container h1', '#hero-container h2' ], 1, { opacity:0, x:'+=150', y:'+=20', ease:Expo.easeNone }, .2), 1);
                // Operational...
                // The Engine That Runs...
        
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
            .add(TweenMax.to('#oGrid #ogrid-bl path, #oGrid #ogrid-tl path, #oGrid #ogrid-br path, #oGrid #ogrid-tr path, #oGrid #ogrid-top path', 4, { stroke: '#E7EAEF', ease: Linear.easeNone }), 0)
            .add(TweenMax.to('#oGrid', 1, { rotation: '+=360', transformOrigin:"center center", ease: Linear.easeNone }).timeScale(0.1), 0)

                ////////////  TEXT
           
            .add(TweenMax.staggerFrom('#scene1-pin h1', 5, { opacity:0, x:'-=250', ease:Linear.easeNone }, 1.5), 4)
                // Service Buniness Need a New Solution
            .add(TweenMax.staggerFrom('#scene1-4-trigger p', 5, { opacity:0, ease:Linear.easeNone }, 1.5), 4)
        
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
            //.add(TweenMax.staggerFrom('#scene1-4-trigger p', 5, { opacity:0, x:'-=250', ease:Linear.easeNone }, 1.5), 4);
            //.add(TweenMax.staggerFrom('#scene1 p', 12, { y:'+=250', opacity:0.3 }, 4), 0)
            //.add(TweenMax.to('#scene1 p', 4, { opacity:0 }), 18);
            //.add(TweenMax.staggerFrom('#scene1 p', 6, { opacity:0, ease: Linear.easeNone }, 12), 2.3)
            //.add(TweenMax.to('#scene1 p', 2, { opacity:0, ease: Linear.easeNone }, 12), 2.3)
            //.add(TweenMax.to('#scene1 p', 2, { opacity:0, ease: Linear.easeNone }, 12), 4.6)
                // Today, services businesses are facing the challenge of creating...
        
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
        .add(TweenMax.to('#oGrid', 3, {scaleY:1, ease: Linear.easeNone}),0)
        .add(TweenMax.to('#oGrid', 1, {scaleY:0.40, ease: Linear.easeNone}),1)
        .add(TweenMax.to('#oGrid', 3, {scale:'+=0.05', ease: Linear.easeNone}),2)
        .add(TweenMax.to('#ogrid-bl, #ogrid-inner-bl', 1, {x:'+=-10', y:'+=10', ease: Linear.easeNone}),4)
        .add(TweenMax.to('#ogrid-tl, #ogrid-inner-tl', 1, {x:'+=-10', y:'+=-10', ease: Linear.easeNone}),5)
        .add(TweenMax.to('#ogrid-top, #ogrid-inner-top', 1, {y:'+=-25', ease: Linear.easeNone}),6)
        .add(TweenMax.to('#ogrid-tr, #ogrid-inner-tr', 1, {x:'+=10', y:'+=-10', ease: Linear.easeNone}),7)
        .add(TweenMax.to('#ogrid-br, #ogrid-inner-br', 1, {x:'+=10', y:'+=10', ease: Linear.easeNone}),8)
        .add(TweenMax.staggerTo('#scene1-pin h1', 4, {x:'-=250', opacity:0}, 0.6), 1.5)
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
        
        
            .add(TweenMax.to('#discover', 0, { opacity: 0, x:'-=80', y:'-=158' }), 0)
            .add(TweenMax.to('#people', 0, { opacity: 0, x:'-=80', y:'-=158' }), 0)
            .add(TweenMax.to('#benefits', 0, { opacity: 0, x:'-=80', y:'-=158' }), 0)
        
            .add(TweenMax.to('#panels', 0, { scale: 0.7, opacity:1, x: "+=123", y:"-=423" }), 0)
            //.add(TweenMax.to('#panel2', 0, { scale: 1.4, opacity: 0, x:"+=600", y:"-=350", ease: Linear.easeNone }), 0)
            .add(TweenMax.to('#panel2-head', 0, { scale: 1, x:"+=200", y:"", ease: Linear.easeNone }), 0)
            .add(TweenMax.to('#panel2-para', 0, { scale: 1, opacity:0, x:"+=200", y:"", ease: Linear.easeNone }), 0)
            .add(TweenMax.to('#panel2-box', 0, { scale: 1, opacity:0, x:"", ease: Linear.easeNone }), 0)
        
            .add(TweenMax.to('#panel3-head', 0, { scale: 1, opacity: 0, x:"+=300" }), 0)
            .add(TweenMax.to('#panel3-div', 0, { scale: 1, opacity: 0, x:"", y:"" }), 0)
            .add(TweenMax.to('#dots1', 0, { scale: 1, opacity: 0 }), 0)
            .add(TweenMax.to('#dots2', 0, { scale: 1, opacity: 0 }), 0)
            .add(TweenMax.to('#dots3', 0, { scale: 1, opacity: 0 }), 0)
            .add(TweenMax.to('#dots4', 0, { scale: 1, opacity: 0 }), 0)
            .add(TweenMax.to('#panel3-para2', 0, { scale: 1, opacity: 0, x:"+=156", y:"+=46" }), 0)
            .add(TweenMax.to('#panel3-para3', 0, { scale: 1, opacity: 0, x:"-=100", y:"+=198" }), 0)
            .add(TweenMax.to('#panel3-para4', 0, { scale: 1, opacity: 0, x:"-=95", y:"+=46" }), 0)
      
            .add(TweenMax.to('#osrChart', 0, { scale: 0.8, x: "-=223", y:"-=23" }), 0)
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
            
            .add(TweenMax.to('#panel2-head', 4, { opacity: 1, x:"-=254", y:"", ease: Linear.easeNone }), 48)
            .add(TweenMax.to('#panel2-box', 6, { opacity: 1, x:"", y:"", ease: Linear.easeNone }), 48)
            .add(TweenMax.to('#panel2-para', 3, { opacity: 1, x:"-=196", y:"", ease: Linear.easeNone }), 52)

            .add(TweenMax.to('#discover', 4, { opacity: 1, x:'+=110', ease: Linear.easeNone }), 46)
            .add(TweenMax.to('#people', 4, { opacity: 1, x:'+=110', ease: Linear.easeNone }), 48)
            .add(TweenMax.to('#benefits', 4, { opacity: 1, x:'+=110', ease: Linear.easeNone }), 50)

            //.add(TweenMax.to('#osrChart', 4, {  scale: 0.6, x: "-=142", y: "+=80" }), 60)
            .add(TweenMax.to('#osrChart', 4, {  scale: 0.76, x:'-=260', y:'+=56' }), 52)
        
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
            .add(TweenMax.to('#oGrid', 0, {x:'+=50', y:'+=17', ease: Linear.easeNone}), 256)
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
        
        
            .add(TweenMax.to('#oGrid', 2, {opacity:0, ease: Linear.easeNone}), 278)
            .add(TweenMax.to('#oGrid', 0, {x:'-=50', y:'-=17'}), 280)
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
        
      
            .set('#discover', {className:"-=active"}, 300)//246
            .set('#people', {className:"+=active"}, 300)//246
            .set('#benefits', {className:"-=active"}, 300);//246
        
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
        
        .add(TweenMax.to('#oGrid2 #service-leader', 8, {opacity:0, y:"-=850", ease: Linear.easeNone}), 94)
        .add(TweenMax.to('#oGrid2 #resource-manager', 8, {opacity:0, y:"-=850", ease: Linear.easeNone}), 102)
        .add(TweenMax.to('#oGrid2 #project-manager', 8, {opacity:0, y:"-=850", ease: Linear.easeNone}), 110)
        .add(TweenMax.to('#oGrid2 #contributor', 8, {opacity:0, y:"-=850", ease: Linear.easeNone}), 118)
        .add(TweenMax.to('#oGrid2 #executive', 8, {opacity:0, y:"-=850", ease: Linear.easeNone}), 124)
        
        .add(TweenMax.to('#oGrid2 #header', 8, {y:'-=1650', opacity:0, ease: Linear.easeNone}), 132)
        
        .add(TweenMax.staggerTo('#oGrid2 #ogrid2-outter-whole, #oGrid2 #osr-label', 4, {opacity:0, ease: Linear.easeNone}), 120)
        
        .add(TweenMax.to('#oGrid2 #ogrid2-bl path, #oGrid2 #ogrid2-tl path, #oGrid2 #ogrid2-br path, #oGrid2 #ogrid2-tr path, #oGrid2 #ogrid2-top path', 8, { stroke: '#ffffff', ease: Linear.easeNone }), 135)
        
        .add(TweenMax.to('#oGrid2 #ogrid2-whole', 8, {opacity:0.5, ease:Linear.easeNone }), 135)
        
        .set('#discover', {className:"-=active"}, 150)
        .set('#people', {className:"-=active"}, 150)
        .set('#benefits', {className:"+=active"}, 150)
        .set('#scene2-3 .slide-list', {className:"+=white a"}, 150)
        
        .add(TweenMax.to('#discover', 4, { y:'+=58' }), 150)
        .add(TweenMax.to('#people', 4, { y:'+=58' }), 150)
        .add(TweenMax.to('#benefits', 4, { y:'+=58' }), 150)
        
        
        var scene3 = new ScrollMagic.Scene( {
            triggerElement: '#scene3',
            duration: 3600,
//            triggerHook: "onEnter",
            triggerHook: 0.2,
            offset: 8400  // transition of graph animation to people animation
        })
        .setTween(s3tl)
        .addTo(animController);


/* SCENE 3_1
        ++++++++++++++++++++++++++++++++++++++++++++++++++++
        ++++++++++++++++++++++++++++++++++++++++++++++++++++ */    
        var s3_1tl = new TimelineMax();
            s3_1tl
            
            .add(TweenMax.to('#panel_1', 0, { y:'+=80', ease: Linear.easeNone }), 0)
            .add(TweenMax.to('#panel_1', 12, { y:'-=1600', ease: Linear.easeNone }), 4)
            .add(TweenMax.to('#panel_1', 2, { opacity: 0, ease: Linear.easeNone }), 12)
        
            .add(TweenMax.to('#panel_2', 0, { y:'+=80', x:'-=140', ease: Linear.easeNone }), 0)
            .add(TweenMax.to('#panel_2', 12, { y:'-=1600', ease: Linear.easeNone }), 6)
            .add(TweenMax.to('#panel_2', 2, { opacity:0, ease: Linear.easeNone }), 14)
            
            .add(TweenMax.to('#panel_3', 0, {  y:'+=80', x:'-=288', ease: Linear.easeNone }), 0)
            .add(TweenMax.to('#panel_3', 12, { y:'-=1600', ease: Linear.easeNone }), 9)
            .add(TweenMax.to('#panel_3', 2, { opacity:0, ease: Linear.easeNone }), 17)
        
            .add(TweenMax.to('#oGrid2 #ogrid2-whole', 4, {opacity:0, y:"-=6000", ease:Linear.easeNone }), 23)
        
            // FAKE OUT PLACEHOLDER TO KEEP THE SCENE ON, SO OGRID CAN ANIMATE UPS
            .add(TweenMax.to('#panel_3', 15, { x:'-=1288', ease: Linear.easeNone }), 40)
        
            .add(TweenMax.to('#discover', 4, {opacity:0, y:"-=200", ease:Linear.easeNone }), 21)
            .add(TweenMax.to('#people', 3, {opacity:0, y:"-=260", ease:Linear.easeNone }), 22)
            .add(TweenMax.to('#benefits', 5, {opacity:0, y:"-=520", ease:Linear.easeNone }), 23)
        
        var scene3_1 = new ScrollMagic.Scene( {
        triggerElement: '#scene3',
        duration: '2000%',
        triggerHook: 0
    })
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
        offset: 2500 // position the hero image up or down
    })
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
        triggerHook: 0.6,
        offset: 480
    })
//.addindicators({ name: "--> scene3-3 --> Duration 200%" })
    .setTween(s3_1tl)
    .addTo(animController);
            

/* SCENE 4
        ++++++++++++++++++++++++++++++++++++++++++++++++++++
        ++++++++++++++++++++++++++++++++++++++++++++++++++++ */ 
        

                // init controller
                var controller = new ScrollMagic.Controller();
                // build scene
//                var s4_tl = new TimelineMax();
//                    s4_tl
//                    
//                    
//                    //.add(TweenMax.to('#man-img', 3, { opacity: 0, scale: 4 }), 5)
//                         
//                         //.add(TweenMax.to('#panel_3', 15, { x:'-=1288', ease: Linear.easeNone }), 40)
//                    
////                    .setTween('#card-man', 0, { opacity: 0, y:'+=150' })
//                        //.add(TweenMax.to('#card-man', 0, { opacity: 0, y:'+=150' }), 0)
//                        .add(TweenMax.to('#card-man', 5, { opacity: 1, y:'-=150' }), 5)
                
                    var scene4 = new ScrollMagic.Scene({

                    triggerElement: "#trigger1", 
                    duration: 1200,
                    offset: 420 
                    })       
                    
                    .setTween('#card-man', 0, { opacity: 0, y:'+=80' })
                    .setTween('#card-man', .2, { opacity: 1, y:'-=80', ease: Linear.easeIn })

                    .setPin("#pin1")
                    //.addIndicators({name: "trigger 1 pin 1 0"}) // add indicators (requires plugin)
                    .addTo(controller);

                //init controller
//                var controller = new ScrollMagic.Controller();
//       
//                var scene = new ScrollMagic.Scene({
//                    
//                    triggerElement: "#pin2",
//                    duration: 0,
//                    offset: 480
//                    })
//                    
//                    .setPin("#pin2")
//                    .addIndicators({name: "pin2 (duration: 0)"}) // add indicators (requires plugin)
//                    .addTo(controller);  
                 
                 
                //init controller
                var controller = new ScrollMagic.Controller();

                var scene = new ScrollMagic.Scene({

                    triggerElement: "#trigger2", 
                    duration: 0,
                    //triggerHook: 0.2,
                    offset: 0 })
                
                    .setTween('#card-ebook-container', 0, { opacity: 0, y:'+=100', ease: Linear.easeNone })
                    .setTween('#card-ebook-container', .4, { opacity: 1, y:'-=100', ease: Linear.easeNone })    
                
                    .setPin("#pin2")
                    //.addIndicators({name: "trigger2 pin 2 (duration: 0)"}) // add indicators (requires plugin)
                    .addTo(controller);
        
                // init controller
                var controller = new ScrollMagic.Controller();

                // build scene
                var scene = new ScrollMagic.Scene({

                    triggerElement: "#trigger3", 
                    duration: 0,
                    offset: 0 })

                
                    .setTween('#cta-image', 0, { opacity: 0, y:'+=50', ease: Linear.easeOut })
                    //.setTween('#cta-image', .2, { opacity: 1, y:'-=50', ease: Linear.easeNone })    
                
                
                    .setPin("#pin3")
                    //.addIndicators({name: "trigger 3 pin 3 (duration: 0)"}) // add indicators (requires plugin)
                    .addTo(controller);
        
        

	//  bind scroll to anchor links
	$(document).on("click", "a[href^='#']", function (e) {
		var id = $(this).attr("href");
		if ($(id).length > 0) {
			e.preventDefault();

			// trigger scroll
			controller.scrollTo(id);

				// if supported by the browser we can even update the URL.
			if (window.history && window.history.pushState) {
				history.pushState("", document.title, id);
			}
		}
	});
        
              
}
});



        ///  YO YO s ???????????????>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>
//             .add(TweenMax.to('#ring1', 4, { opacity: 1 }), 129)
//             .add(TweenMax.fromTo('#ring1', 4, { opacity: 0 }, { opacity: 1, repeat: -1, yoyo: true, ease: Circ.easeInOut }), 129)
       
//                TweenMax.fromTo("#ring1", 1,
//										{left: -100},
//										{left: 100, repeat: -1, yoyo: true, ease: Circ.easeInOut}
//									)

        
//             TweenMax.to(mc, 1, {x:100, repeat:1, yoyo:true});
//             .add( TweenMax.fromTo("#ring1", 4, {x:'+=100', repeat:1, yoyo:true}), 129)

//                //.add(TweenMax.to('#ring1', 4, { opacity: 1, repeat:24 }), 134)
//                         //.to('#ring1', 4, { opacity: 0 }, "+=4")
//        
//                    //TweenMax.to(mc, 1, {x:100, repeat:2});
//        
//                    //tl.to(element, 1, {x:200})
//                    //1 second after end of timeline (gap)
//                    //.to(element, 1, {y:200}, "+=1")

