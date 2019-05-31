$(document).ready(function() {
    
    var newHeight;
    
    $(window).on('resize', function(){
            var win = $(this);
            newHeight = $(window).height();
            console.log( newHeight );
        });
    
    $.when().then(init);
    
    function init() {              
        
    var animController = new ScrollMagic.Controller();
    var sceneArray = [];

    TweenMax.set('#osrChart, #osr-core, #osr-core-2, #osr-core-main2, #osr-core-main3, #label-purple-highlight, #purple-label-marker, #osrchart-blue-png, #osrchart-blue2-png, #floor-ring, #blue-ring-big, #purple-label-marker, #ring1, #ring2, #panel1, #panel2, #panel2-head, #panel2-para, #panel2-box, #dots1, #dots2, #dots3, #dots4, #panel3-head, #panel3-head2, #panel3-div, #panel3-pg1, #panel3-para2, #panel3-para3, #panel3-para4, #hcm-blue, #erp-blue, #crm-blue', { opacity: 0 });
    
    TweenMax.set('#oGrid', { opacity: .5}, 0)
        
    TweenMax.set('#rec5', { x:'+=150'}, 0)

    var tl = new TimelineMax();
        tl

            .add(TweenMax.to('#oGrid', 1, { opacity: 1 }), 0)
            .add(TweenMax.to('#oGrid', 1, { opacity: 1, rotation: +360, transformOrigin:"center center", ease:Linear.easeNone }).timeScale(0.2), 0)
                ////////////  TEXT
            .add(TweenMax.staggerTo([ '#hero-container h1', '#hero-container h2' ], 2, { opacity:0, x:'+=350', y:'+=20', ease:Expo.easeNone }, .2), 0)

            .add(TweenMax.to('#squares-right', 0, { scale: 1, x:'+=0', y:'+=0' }), 0)
        
            .add(TweenMax.to('#squares-left', 0, { scale: 1, x:'-=260', y:'+=20' }), 0)

            .add(TweenMax.to('#rec2', 6, { opacity: 0, y:'-=20' }), 0)
            .add(TweenMax.to('#rec1', 6, { opacity: 0, y:'+=0' }), 0)
            .add(TweenMax.to('#rec3', 4, { opacity: 0, y:'-=340' }), 0)
            .add(TweenMax.to('#rec4', 6, { opacity: 0, y:'-=210' }), 0)

            .add(TweenMax.to('#rec5', 6, { opacity: 0, y:'-=810' }), 0)
            .add(TweenMax.to('#rec7', 6, { opacity: 0, y:'-=310' }), 0)
            .add(TweenMax.to('#rec8', 6, { opacity: 0, y:'+=210' }), 0)
            .add(TweenMax.to('#rec6', 6, { opacity: 0, y:'-=20' }), 0)
        
    var introScene = new ScrollMagic.Scene ({
        triggerElement: '#intro-scene-trigger',
        duration: '1700%',
        triggerHook: 0

    }) 
        .setPin('#anim1-container')
        .addTo(animController);

    var introAnimScene = new ScrollMagic.Scene ({
        triggerElement: '#intro-scene-trigger',
        duration: '100%',
        triggerHook: 0

    })  
        .setTween(tl) 
        .addTo(animController);

    var s1tl = new TimelineMax();
        s1tl
            .add(TweenMax.to('#oGrid #ogrid-bl path, #oGrid #ogrid-tl path, #oGrid #ogrid-br path, #oGrid #ogrid-tr path, #oGrid #ogrid-top path', 4, { stroke: '#E7EAEF', ease: Linear.easeNone }), 2)
            .add(TweenMax.to('#oGrid', 1, { rotation: '+=360', transformOrigin:"center center", ease: Linear.easeNone }).timeScale(0.1), 1)
                ////////////  TEXT
            .add(TweenMax.staggerFrom('#scene1-pin h1', 5, { opacity:0, x:'-=350', ease:Linear.easeNone }, 1.5), 4)
            .add(TweenMax.staggerFrom('#scene1-4-trigger p', 5, { opacity:0, ease:Linear.easeNone }, 1.5), 4)
        
            .add(TweenMax.to('#flip-today', 0, { opacity: 1, y:"+=1400", ease: Linear.easeNone }), 0)
            .add(TweenMax.to('#flip-today-mask', 0, { opacity: 1, ease: Linear.easeNone }), 0)
   
    var scene1 = new ScrollMagic.Scene( {
        triggerElement: '#scene1-trigger',
        duration: 500,
        triggerHook: 0
    })   
        .setTween(s1tl)
        .addTo(animController); 
        
    var scene1_1 = new ScrollMagic.Scene({
        triggerElement: '#scene1-pin',
        duration: '500%',
        triggerHook: 0.1
    })
        .setPin('#scene1-pin', { pushFollowers: false })    
        .addTo(animController);
     
    var s1_2tl = new TimelineMax();
        s1_2tl       
            .add(TweenMax.staggerFrom('#scene1-2-trigger p', 2, { opacity:0, ease:Linear.easeNone }, 1), 0);
        
    var scene1_2 = new ScrollMagic.Scene( {
        triggerElement: '#scene1-2-trigger',
        duration: 600,
        triggerHook: 0.7 // KEEP SCENE 1_2 ON LONGER
    })
        .setTween(s1_2tl)
        .addTo(animController);
   
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
        .add(TweenMax.staggerTo('#scene1-2-trigger p', 4, { opacity:0, ease:Linear.easeNone }, 1), 1.5)
        .add(TweenMax.to('#ogrid-tl, #ogrid-inner-tl', 4, {x:'+=-10', y:'+=-28', ease: Linear.easeNone}),10)
        .add(TweenMax.to('#ogrid-br, #ogrid-inner-br', 4, {x:'+=-3', y:'+=20', ease: Linear.easeNone}),11)
        
    var scene1_3 = new ScrollMagic.Scene( {
        triggerElement: '#scene1-3-trigger',
        duration: 600,
        triggerHook: 0
    })
    .setTween(s1_3tl)
    .addTo(animController);
        
    var s2tl = new TimelineMax();
    s2tl
        .add(TweenMax.to('#oGrid', 8, {opacity:0, ease: Linear.easeNone}), 8)
        
    var scene2 = new ScrollMagic.Scene( {
        triggerElement: '#scene2',
        duration: 1000,
        triggerHook: 0.6
    })
    .setTween(s2tl)
    .addTo(animController);

    var scene2_1 = new ScrollMagic.Scene( {
        triggerElement: '#scene2',
        duration: '1300%',
        triggerHook: 0.2
    })  
        .setPin('#scene2-pin')   
        .addTo(animController);
  
    var s2_1tl = new TimelineMax();
        s2_1tl
         
            .set('#discover', {className:"+=active"}, 0)
            .set('#people', {className:"-=active"}, 0)
            .set('#benefits', {className:"-=active"}, 0)
        
            .add(TweenMax.to('#flip-today-mask', 4, { opacity: 0, ease: Linear.easeNone }), 49)
            
            .add(TweenMax.to('#ogrid2-mobile', 0, { opacity: 0, x:'-=35' }), 0)
            .add(TweenMax.to('#ogrid2-mobile-text', 0, { opacity: 0 }), 0)
            .add(TweenMax.to('#girl-card1', 0, { opacity: 0 }), 0)
            .add(TweenMax.to('#girl-card2', 0, { opacity: 0 }), 0)
            .add(TweenMax.to('#girl-card3', 0, { opacity: 0 }), 0)

            .add(TweenMax.to('#flip-osr', 0, { opacity: 1, y: "-=140" }), 0)
            .add(TweenMax.to('#flip-osr-mask', 0, { opacity: 1 }), 0)
            .add(TweenMax.to('#mask-blue', 0, { opacity: 0, x: "-=23" }), 0)
          
            .add(TweenMax.to('#flip-osr-head1', 0, { opacity: 0 }), 0)
            .add(TweenMax.to('#flip-osr-head2', 0, { opacity: 0, x:'-=200' }), 0)
              
            .add(TweenMax.to('#flip-osr-p1', 0, {  opacity: 0, x:'-=200', y:"+=62" }), 0)
              
            .add(TweenMax.to('#flip-osr-p2', 0, {  opacity: 0, x:'-=300' }), 0)
            .add(TweenMax.to('#flip-osr-p3', 0, {  opacity: 0, x:'-=200' }), 0)
            .add(TweenMax.to('#flip-osr-p4', 0, {  opacity: 0, x:'-=200' }), 0)
            .add(TweenMax.to('#flip-osr-p5', 0, {  opacity: 0, x:'-=200' }), 0)
            
            .add(TweenMax.to('#flip-osr-head1', 8, { opacity: 1 }), 50)
            .add(TweenMax.to('#flip-osr-head1', 8, { opacity: 0, x:"+=200" }), 64)
        
            .add(TweenMax.to('#flip-osr-p1', 8, { opacity: 1, x:"+=200" }), 64)
            .add(TweenMax.to('#flip-osr-p1', 4, {  opacity: 0, x:"+=100" }), 88)
            
            .add(TweenMax.to('#flip-osr-head1', 1, { opacity: 0 }), 88)
            .add(TweenMax.to('#flip-osr-head2', 8, { opacity: 1, x:'+=200' }), 88)
            
            .add(TweenMax.to('#flip-osr-p2', 8, {  opacity: 1, x:'+=300' }), 92)
    
            .add(TweenMax.to('#flip-osr-p2', 8, {  opacity: 0, x:'+=200' }), 125)
            .add(TweenMax.to('#flip-osr-p3', 8, {  opacity: 1, x:'+=200' }), 125)
        
            .add(TweenMax.to('#flip-osr-p3', 8, {  opacity: 0, x:'+=200' }), 165)
            .add(TweenMax.to('#flip-osr-p4', 8, {  opacity: 1, x:'+=200' }), 165)
        
            .add(TweenMax.to('#flip-osr-p4', 8, {  opacity: 0, x:'+=200' }), 205)
            .add(TweenMax.to('#flip-osr-p5', 8, {  opacity: 1, x:'+=200' }), 205)
        
            .add(TweenMax.to('#flip-osr-p5', 4, {  opacity: 0 }), 268)
            .add(TweenMax.to('#flip-osr-head2', 4, { opacity: 0 }), 268)

            .add(TweenMax.to('#discover', 0, { opacity: 0, x:'-=80', y:'-=158' }), 0)
            .add(TweenMax.to('#people', 0, { opacity: 0, x:'-=80', y:'-=158' }), 0)
            .add(TweenMax.to('#benefits', 0, { opacity: 0, x:'-=80', y:'-=158' }), 0)
        
            .add(TweenMax.to('#panels', 0, { scale: 0.7, opacity:1, x: "+=123", y:"-=423" }), 0)
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
    
            .add(TweenMax.to('#osrChart', 0, { scale: 0.8, x: "-=292", y:"-=23" }), 0)
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

            .add(TweenMax.to('#discover', 4, { opacity: 1, x:'+=110', ease: Linear.easeNone }), 42)
            .add(TweenMax.to('#people', 4, { opacity: 1, x:'+=110', ease: Linear.easeNone }), 43)
            .add(TweenMax.to('#benefits', 4, { opacity: 1, x:'+=110', ease: Linear.easeNone }), 44)

            
            // Add Pause
            .add(TweenMax.to('#osrChart', 4, {  scale: 0.82, x:'-=160', y:'+=56' }), 64)
        
            .add(TweenMax.to('#panel2-head', 4, { opacity: 1, x:"-=554", ease: Linear.easeNone }), 64)
            .add(TweenMax.to('#panel2-box', 3, { opacity: 1, x:"-=196", ease: Linear.easeNone }), 65)
            .add(TweenMax.to('#panel2-para', 3, { opacity: 1, x:"-=196", ease: Linear.easeNone }), 65)
            // End Add Pause
        
            .add(TweenMax.to('#dots-bl', 4, {opacity:0, ease: Linear.easeIn}), 84)
            .add(TweenMax.to('#dots-br', 4, {opacity:0, ease: Linear.easeIn}), 84)
            .add(TweenMax.to('#dots-tr', 4, {opacity:0, ease: Linear.easeIn}), 84)
        
            .add(TweenMax.to('#hcm-base', 4, {opacity:0, ease: Linear.easeIn}), 84)
            .add(TweenMax.to('#erp-base', 4, {opacity:0, ease: Linear.easeIn}), 84)
            .add(TweenMax.to('#crm-base', 4, {opacity:0, ease: Linear.easeIn}), 84)
            .add(TweenMax.from('#grey-lines-all', 4, {opacity:0, ease: Linear.easeIn}), 84)
            
            .add(TweenMax.from('#osr-core-middle-ring', 4, {opacity:0, ease: Linear.easeNone}), 80)
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
            
            // Add Pause
            .add(TweenMax.to('#panel2-head', 2, { opacity: 0, x:"+=150", ease: Linear.easeNone }), 88)
            .add(TweenMax.to('#panel2-box', 3, { opacity: 0, ease: Linear.easeNone }), 87)
            .add(TweenMax.to('#panel2-para', 2, { opacity: 0, x:"+=200", ease: Linear.easeNone }), 89)
        
            .add(TweenMax.to('#panel3-head2', 0, { opacity: 0, x:"+=150", ease: Linear.easeNone }), 0)
            .add(TweenMax.to('#panel3-head', 3, { opacity: 1, x:"-=300", ease: Linear.easeNone }), 88)
            .add(TweenMax.to('#panel3-head2', 4, { opacity: 1, x:"-=150", ease: Linear.easeNone }), 90)
            .add(TweenMax.to('#panel3-div', 4, { opacity: 1, y:"", ease: Linear.easeNone }), 90)
            .add(TweenMax.to('#dots1', 4, { opacity: 1, ease: Linear.easeNone }), 90)
            .add(TweenMax.to('#panel3-pg1', 0, { scale: 1, x:"+=154", y:"+=46"}), 0)
            .add(TweenMax.to('#panel3-pg1', 4, { opacity: 1, x:"-=150" }), 92)
            // End Add Pause
    
            .add(TweenMax.to('#purple-label-white-box', 4, { y:"+=61", opacity:0, ease: Linear.easeNone }), 118)
            .add(TweenMax.to('#label-purple-highlight', 4, { y:"+=61", opacity:0, ease: Linear.easeNone }), 118)
            .add(TweenMax.to('#business-intelligence-line', 4, { y:"+=61", scaleX: 1, ease: Linear.easeNone }), 118)
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

            .add(TweenMax.to('#oGrid', 12, {opacity:1, ease: Linear.easeNone}), 262)

            .add(TweenMax.to('#ogrid-br, #ogrid-inner-br', 4, {x:'+=3', y:'-=20', ease: Linear.easeNone}), 266)
            .add(TweenMax.to('#ogrid-br, #ogrid-inner-br', 1, {x:'-=10', y:'-=10', ease: Linear.easeNone}), 272)
        
            .add(TweenMax.to('#ogrid-tl, #ogrid-inner-tl', 2, {x:'+=10', y:'+=28', ease: Linear.easeNone}), 267)
            .add(TweenMax.to('#ogrid-tl, #ogrid-inner-tl', 1, {x:'+=10', y:'+=10', ease: Linear.easeNone}), 269)
        
            .add(TweenMax.to('#ogrid-bl, #ogrid-inner-bl', 1, {x:'+=10', y:'-=10', ease: Linear.easeNone}), 268)
            
            .add(TweenMax.to('#ogrid-top, #ogrid-inner-top', 1, {y:'+=25', ease: Linear.easeNone}), 270)
            .add(TweenMax.to('#ogrid-tr, #ogrid-inner-tr', 1, {x:'-=10', y:'+=10', ease: Linear.easeNone}), 271)

            .add(TweenMax.to('#oGrid', 3, {scaleY:1, ease: Linear.easeNone}), 274)
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
            .add(TweenMax.to('#ogrid2-mobile', 24, { opacity: 1, y:'-=237'}), 260)
        
            .add(TweenMax.to('#ogrid2-mobile-text', 0, { opacity: 0 }), 0)
            .add(TweenMax.to('#ogrid2-mobile-text', 1, { opacity: 0, y:"+=105" }), 267)
            .add(TweenMax.to('#ogrid2-mobile-text', 8, { opacity: 1, y:"-=80", ease: Linear.easeOut }), 268)
            
            .add(TweenMax.to('#oGrid', 2, {opacity:0, ease: Linear.easeNone}), 278)
            .add(TweenMax.to('#oGrid2', 0, { x:'+=56' }), 278)
            .add(TweenMax.from('#oGrid2 #ogrid2-whole', 8, {opacity:0, ease: Linear.easeNone}), 278)
            .add(TweenMax.from('#oGrid2 #ogrid2-outter-whole', 4, {opacity:0, ease: Linear.easeNone}), 282)
            .add(TweenMax.from('#oGrid2 #header', 4, {opacity:0, x:'+=420', ease: Linear.easeNone}), 290)

            .add(TweenMax.from('#oGrid2 #service-leader', 8, {opacity:0, ease: Linear.easeNone}), 294)
            .add(TweenMax.from('#oGrid2 #resource-manager', 8, {opacity:0, ease: Linear.easeNone}), 302)
            .add(TweenMax.from('#oGrid2 #project-manager', 8, {opacity:0, ease: Linear.easeNone}), 310)
            .add(TweenMax.from('#oGrid2 #contributor', 8, {opacity:0, ease: Linear.easeNone}), 318)
            .add(TweenMax.from('#oGrid2 #executive', 8, {opacity:0, ease: Linear.easeNone}), 326)
        
            .set('#discover', {className:"-=active"}, 300)
            .set('#people', {className:"+=active"}, 300)
            .set('#benefits', {className:"-=active"}, 300)

    var scene2_2 = new ScrollMagic.Scene( {
        triggerElement: '#scene2',
        duration: '1300%',
        triggerHook: 0.1,
        offset: 200
    })
        .setTween(s2_1tl)
        .addTo(animController);
    
    var scene2_3 = new ScrollMagic.Scene( {
        triggerElement: '#scene2-3',
        duration: '2100%', // KEEP NAV ON LEFT
        triggerHook: 0.2
    })  
        .setPin('#scene2-3-pin')    
        .addTo(animController)
      
    var s3tl = new TimelineMax();
    s3tl
        
        .add(TweenMax.to('#ogrid2-mobile-back', 0, { opacity: 0, y:'-=200', ease: Linear.easeOut }), 0)
           
        .add(TweenMax.to('#sl', 24, { opacity: 0, y:'-=287'}), 16)
        .add(TweenMax.to('#sl-t', 24, { opacity: 0, y:'-=287'}), 16)
        
        .add(TweenMax.to('#rm', 24, { opacity: 0, y:'-=387'}), 18)
        .add(TweenMax.to('#rm-t', 24, { opacity: 0, y:'-=387'}), 18)
        
        .add(TweenMax.to('#pm', 24, { opacity: 0, y:'-=687'}), 20)
        .add(TweenMax.to('#pm-t', 24, { opacity: 0, y:'-=687'}), 20)
        
        .add(TweenMax.to('#c', 24, { opacity: 0, y:'-=537'}), 22)
        .add(TweenMax.to('#c-t', 24, { opacity: 0, y:'-=537'}), 22)
        
        .add(TweenMax.to('#e', 24, { opacity: 0, y:'-=587'}), 23)
        .add(TweenMax.to('#e-t', 24, { opacity: 0, y:'-=587'}), 23)
        
        .add(TweenMax.to('#girl-people', 16, { opacity: 0, y:'-=200', ease: Linear.easeOut }), 40)
        .add(TweenMax.to('#ogrid2-mobile-text', 16, { opacity: 0, y:'-=200', ease: Linear.easeOut }), 17)
        .add(TweenMax.to('#girl-process', 16, { opacity: 0 }), 30)
        .add(TweenMax.to('#girl-osr-text', 8, { opacity: 0 }), 30)
        .add(TweenMax.to('#girl-osr path, girl-osr-inside path', 32, { stroke: '#FFF', opacity: 0.2, y:"-=60" }), 40)
        
        .add(TweenMax.to('#girl-card1', 1, { opacity: 0, y:"+=100" }), 0)
        .add(TweenMax.to('#girl-card1', 8, { opacity: 1 }), 76)
        .add(TweenMax.to('#girl-card1', 4, { opacity: 0 }), 100)
        
        .add(TweenMax.to('#girl-card2', 1, { opacity: 0, y:"+=100" }), 0)
        .add(TweenMax.to('#girl-card2', 4, { opacity: 1 }), 100)
        .add(TweenMax.to('#girl-card2', 8, { opacity: 0  }), 112)
        
        .add(TweenMax.to('#girl-card3', 1, { opacity: 0, y:"+=100" }), 0)
        .add(TweenMax.to('#girl-card3', 8, { opacity: 1 }), 112)
        
//        .add(TweenMax.to('#oGrid2 #service-leader', 8, {opacity:0, y:"-=850", ease: Linear.easeNone}), 94)
//        .add(TweenMax.to('#oGrid2 #resource-manager', 8, {opacity:0, y:"-=850", ease: Linear.easeNone}), 102)
//        .add(TweenMax.to('#oGrid2 #project-manager', 8, {opacity:0, y:"-=850", ease: Linear.easeNone}), 110)
//        .add(TweenMax.to('#oGrid2 #contributor', 8, {opacity:0, y:"-=850", ease: Linear.easeNone}), 118)
//        .add(TweenMax.to('#oGrid2 #executive', 8, {opacity:0, y:"-=850", ease: Linear.easeNone}), 124)
        
        .add(TweenMax.to('#oGrid2 #service-leader', 8, {opacity:0, y:"-=850", ease: Linear.easeNone}), 112)
        .add(TweenMax.to('#oGrid2 #resource-manager', 8, {opacity:0, y:"-=850", ease: Linear.easeNone}), 112)
        .add(TweenMax.to('#oGrid2 #project-manager', 8, {opacity:0, y:"-=850", ease: Linear.easeNone}), 112)
        .add(TweenMax.to('#oGrid2 #contributor', 8, {opacity:0, y:"-=850", ease: Linear.easeNone}), 112)
        .add(TweenMax.to('#oGrid2 #executive', 8, {opacity:0, y:"-=850", ease: Linear.easeNone}), 112)
        .add(TweenMax.to('#oGrid2 #header', 8, {y:'-=1650', opacity:0, ease: Linear.easeNone}), 112)
        
        .add(TweenMax.to('#oGrid2 #ogrid2-outter-whole, #oGrid2 #osr-label', 8, {opacity:0, ease: Linear.easeNone}), 112)
        .add(TweenMax.to('#oGrid2 #osr-label', 4, {opacity:0, ease: Linear.easeNone}), 116)
        
        
        .add(TweenMax.to('#oGrid2 #ogrid2-bl path, #oGrid2 #ogrid2-tl path, #oGrid2 #ogrid2-br path, #oGrid2 #ogrid2-tr path, #oGrid2 #ogrid2-top path', 8, { stroke: '#ffffff', ease: Linear.easeNone }), 135)
        
        .add(TweenMax.to('#oGrid2 #ogrid2-whole', 8, {opacity:0.5, ease:Linear.easeNone }), 135)
        
        .set('#discover', {className:"-=active"}, 144)
        .set('#people', {className:"-=active"}, 144)
        .set('#benefits', {className:"+=active"}, 144)
        .set('#scene2-3 .slide-list', {className:"+=white a"}, 144)
        
//        .add(TweenMax.to('#discover', 8, { y:'+=58' }), 144)
//        .add(TweenMax.to('#people', 8, { y:'+=58' }), 144)
//        .add(TweenMax.to('#benefits', 8, { y:'+=58' }), 144)
       
        
        var scene3 = new ScrollMagic.Scene( {
            triggerElement: '#scene3',
            duration: 5400,
            triggerHook: 0.2,
            //offset: 7350  // transition of graph animation to people animation
            offset: $(window).height() * 7.5 // position the hero image up or down
            //offset: newHeight * 7.5
            
        })
        .setTween(s3tl)
        .addTo(animController);
    
        var s3_1tl = new TimelineMax();
            s3_1tl
        
            .add(TweenMax.to('#oGrid2 #ogrid2-whole', 4, { opacity:0.15, ease:Linear.easeNone }), 5)
            
            .add(TweenMax.to('#panel_1', 0, { opacity: 0, y:'+=80', ease: Linear.easeNone }), 0)
            .add(TweenMax.to('#panel_1', 2, { opacity: 1, ease: Linear.easeNone }), 2)
            .add(TweenMax.to('#panel_1', 12, { y:'-=1600', ease: Linear.easeNone }), 0)
            .add(TweenMax.to('#panel_1', 2, { opacity: 0, ease: Linear.easeNone }), 8)
        
            .add(TweenMax.to('#panel_2', 0, { opacity: 0, y:'+=80', x:'-=140', ease: Linear.easeNone }), 0)
            .add(TweenMax.to('#panel_2', 2, { opacity: 1, ease: Linear.easeNone }), 4)
            .add(TweenMax.to('#panel_2', 12, { y:'-=1600', ease: Linear.easeNone }), 2)
            .add(TweenMax.to('#panel_2', 2, { opacity:0, ease: Linear.easeNone }), 10)
            
            .add(TweenMax.to('#panel_3', 0, {  opacity: 0, y:'+=80', x:'-=288', ease: Linear.easeNone }), 0)
            .add(TweenMax.to('#panel_3', 2, {  opacity: 1, ease: Linear.easeNone }), 7)
            .add(TweenMax.to('#panel_3', 12, { y:'-=1600', ease: Linear.easeNone }), 5)
            .add(TweenMax.to('#panel_3', 2, { opacity:0, ease: Linear.easeNone }), 13)
        
            .add(TweenMax.to('#oGrid2 #ogrid2-whole', 4, { opacity:0.7, ease:Linear.easeNone }), 13)
        
            .add(TweenMax.to('#oGrid2 #ogrid2-whole', 2, {opacity:0, ease:Linear.easeNone }), 18)
        
            .add(TweenMax.to('#panel_3', 15, { x:'-=1288', ease: Linear.easeNone }), 22)
        
            .add(TweenMax.to('#discover', 4, {opacity:0, y:"-=200", ease:Linear.easeNone }), 14)
            .add(TweenMax.to('#people', 3, {opacity:0, y:"-=260", ease:Linear.easeNone }), 15)
            .add(TweenMax.to('#benefits', 5, {opacity:0, y:"-=520", ease:Linear.easeNone }), 16)
        
        var scene3_1 = new ScrollMagic.Scene( {
            triggerElement: '#scene3',
            duration: '1910%',
            triggerHook: 0
        })    
            .setPin('#scene3-pin')
            .addTo(animController);


        var scene3_2 = new ScrollMagic.Scene( {
            triggerElement: '#scene3-2-trigger',
            duration: '650%',
            triggerHook: 0,
            offset: $(window).height() * 2.83 // position the hero image up or down
    })
 
        .setPin('#hero-container2')
        .addTo(animController);
   
    var s3_3tl = new TimelineMax();
        s3_3tl
        
        var scene3_3 = new ScrollMagic.Scene( {
        triggerElement: '#hero-container2',
        duration: '1400%',
        triggerHook: 0.1,
        offset: 0
    })

    .setTween(s3_1tl)
    .addTo(animController);
            
        var controller = new ScrollMagic.Controller();

            //var timeline = new TimelineMax();
            //var tween1 = TweenMax.from("#card-man-container", 1, { opacity: 0, scale: 4, delay: 0 });
            //var tween2 = TweenMax.to("#card-man2", 0.2, { opacity: 1, delay: 0 });

            //timeline.add(tween1).add(tween2);
            //timeline.add(tween1);

        var scene = new ScrollMagic.Scene({

            triggerElement: "#trigger2", 
            duration: $(window).height(),
            //duration: 100,
            triggerHook: 0,
            offset: 450,
            //offset: ($(window).height() / 2)
            })
            .setPin("#pin1")
//            .setTween(timeline)
            .addTo(controller);
        
        
        

        var controller = new ScrollMagic.Controller();
        var timeline2 = new TimelineMax();
            //var tween11 = TweenMax.from("#card-ebook-container", .4, { opacity: 0, y:'+=40', delay: 0.1 });
            //var tween12 = TweenMax.from("#card-cta-pic", .4, { opacity: 0, y:'+=40', delay: .1 });
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

        timeline2.add(tween13);

        var scene = new ScrollMagic.Scene({
                    
            triggerElement: "#trigger2",
            duration: 0,
            offset: 0 })

            //.setPin("#pin2")
            //.setTween(timeline2)
            .addTo(controller);

        animController.scrollTo(function (newpos) {
            TweenMax.to(window, 0.8, {scrollTo: {y: newpos}});
        });

        $(document).on("click", "a[href^='#']", function (e) {
            var id = $(this).attr("href");

            if ($(id).length > 0) {
                e.preventDefault();
                animController.scrollTo(id);
                };       
        });
    }
});


