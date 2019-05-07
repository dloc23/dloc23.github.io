(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.showcaseChildHTML5 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// i5
	this.instance = new lib.i5_1();
	this.instance.setTransform(897.5,128.5,1,1,0,0,0,30.5,26.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(111));

	// i4
	this.instance_1 = new lib.i4_1();
	this.instance_1.setTransform(837,128.5,1,1,0,0,0,30,26.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).wait(116));

	// i3
	this.instance_2 = new lib.i3_1();
	this.instance_2.setTransform(777.5,129.5,1,1,0,0,0,29.5,26.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).wait(121));

	// i2
	this.instance_3 = new lib.i2_1();
	this.instance_3.setTransform(717,129.5,1,1,0,0,0,30.5,26.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).wait(126));

	// i1
	this.instance_4 = new lib.i1_1();
	this.instance_4.setTransform(655.5,130.5,1,1,0,0,0,31.5,26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).wait(130));

	// Layer 1
	this.t1 = new lib.videoThumbnail1();
	this.t1.setTransform(1117,155,1,1,0,0,0,118,66);

	this.t2 = new lib.videoThumbnail2();
	this.t2.setTransform(1067,196,1,1,0,0,0,67,34);

	this.replayBTN = new lib.replay_icon();
	this.replayBTN.setTransform(1012.2,46,1.299,1.333,0,0,0,7.8,7.5);

	this.happymeal = new lib.happymeal();
	this.happymeal.setTransform(509,35,1,1,0,0,0,31,31);

	this.instance_5 = new lib.type1_1();
	this.instance_5.setTransform(776,21,1,1,0,0,0,151,7);

	this.instance_6 = new lib.type3_1();
	this.instance_6.setTransform(776,87.5,1,1,0,0,0,152,10.5);

	this.instance_7 = new lib.text2();
	this.instance_7.setTransform(776.5,53,1,1,0,0,0,154.5,16);

	this.instance_8 = new lib.cta1_1();
	this.instance_8.setTransform(776,181,1,1,0,0,0,154,19);

	this.instance_9 = new lib.cta2_1();
	this.instance_9.setTransform(776,220,1,1,0,0,0,154,19);

	this.instance_10 = new lib.legal_1();
	this.instance_10.setTransform(527.5,243,1,1,0,0,0,56.5,8);

	this.instance_11 = new lib.back();
	this.instance_11.setTransform(485,124,1,1,0,0,0,485,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.happymeal},{t:this.replayBTN},{t:this.t2},{t:this.t1}]}).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.9,1124.8,250);


// symbols:
(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.cta1 = function() {
	this.initialize(img.cta1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,308,38);


(lib.cta2 = function() {
	this.initialize(img.cta2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,308,38);


(lib.i1 = function() {
	this.initialize(img.i1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,53);


(lib.i2 = function() {
	this.initialize(img.i2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,53);


(lib.i3 = function() {
	this.initialize(img.i3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,53);


(lib.i4 = function() {
	this.initialize(img.i4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,53);


(lib.i5 = function() {
	this.initialize(img.i5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,53);


(lib.legal = function() {
	this.initialize(img.legal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,16);


(lib.logocopy = function() {
	this.initialize(img.logocopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,84);


(lib.thumb1 = function() {
	this.initialize(img.thumb1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,73);


(lib.thumb2 = function() {
	this.initialize(img.thumb2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,125,73);


(lib.type1 = function() {
	this.initialize(img.type1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,14);


(lib.type2 = function() {
	this.initialize(img.type2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,304,21);


(lib.type3 = function() {
	this.initialize(img.type3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,309,32);


(lib.thumb_alpha = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AovEsIAApXIRfAAIAAJXg");
	this.shape.setTransform(-12.9,-4.9,0.991,0.967);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-68.4,-33.9,111,58);


(lib.playbtn_thumball = function() {
	this.initialize();

	// blue
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmvmvINfGvItfGwg");
	this.shape.setTransform(13.3,11,0.122,0.122);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#27C1E8","#D9EFED"],[0,1],0,70.8,0,-70.6).s().p("AkSKMQh/g2hihiQhihig2h/Qg3iEAAiPQAAiPA3iDQA2h/BihiQBihiB/g2QCDg3CPAAQEkAADQDPQBiBiA2B/QA3CDAACPQAACPg3CEQg2B/hiBiQhiBih/A2QiEA3iPAAQiPAAiDg3g");
	this.shape_1.setTransform(11.5,11.5,0.122,0.122);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkzLaQiOg8huhuQhuhug7iOQg/iTAAihQAAifA/iUQA7iOBuhuQBuhuCOg7QCUg/CfAAQChAACTA/QCOA7BuBuQBtBuA9COQA+CUAACfQAAChg+CTQg9COhtBuQhuBuiOA8QiTA+ihAAQifAAiUg+g");
	this.shape_2.setTransform(11.5,11.5,0.122,0.122);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#27C1E8","#D9EFED"],[0,1],0,-13.1,0,12.7).s().p("AgrBqQgVgKgQgPQgQgQgJgVQgJgVAAgXQAAgWAJgVQAKgVAPgQQAQgPAVgKQAVgJAWAAQAXAAAVAJQAVAJAQAQQAPAQAKAVQAIAVABAWQgBAXgIAVQgKAVgPAQQgQAPgVAKQgVAIgXABQgWgBgVgIg");
	this.shape_3.setTransform(11.5,11.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23,23);


(lib.type3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.type2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,304,21);


(lib.type1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.type1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,302,14);


(lib.Tween4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B037").s().p("AgoA/QgRgLgKgRIAZgZQADAOAMAKQAMAJAPAAQAQAAAMgNQANgNAAgRQAAgQgNgNQgMgNgQAAQgMAAgKAGQgKAGgFAKIgjAAQAHgYAUgPQATgOAaAAQAdgBAWAWQAWAXAAAdQAAAegWAXQgWAWgdgBQgVAAgTgLg");
	this.shape.setTransform(0.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00B037").s().p("AgggfIBBAAIhBA/g");
	this.shape_1.setTransform(-4.3,3.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.6,-7.4,15.4,15);


(lib.text2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.type3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,309,32);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.thumb2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,125,73);


(lib.legal_1 = function() {
	this.initialize();

	// Layer 2
	this.text = new cjs.Text("© 2013 McDonald's", "8px Arial", "#FFFFFF");
	this.text.lineHeight = 9;
	this.text.setTransform(11,-2.9);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(11,-2.9,82.4,12.9);


(lib.i5_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.i5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,61,53);


(lib.i4_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.i4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,53);


(lib.i3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.i3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,59,53);


(lib.i2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.i2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,61,53);


(lib.i1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.i1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63,53);


(lib.happymeal = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.logocopy();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,83,84);


(lib.cta2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cta2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,308,38);


(lib.cta1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cta1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,308,38);


(lib.back = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.videoThumbnail2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{over:1,out:7});

	// play btn
	this.instance = new lib.playbtn_thumball();
	this.instance.setTransform(141.3,117.3,1,1,0,0,0,94.3,94.3);
	this.instance.alpha = 0.5;
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},6).to({alpha:0.5},6).wait(1));

	// alpha
	this.instance_1 = new lib.thumb_alpha("synched",0);
	this.instance_1.setTransform(73,39,0.993,1);
	this.instance_1.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},6).to({alpha:0.398},6).wait(1));

	// Layer 3
	this.instance_2 = new lib.thumb1();
	this.instance_2.setTransform(-0.2,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,0.3,125,73);


(lib.videoThumbnail1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"over":1,"out":7});

	// play btn
	this.instance = new lib.playbtn_thumball();
	this.instance.setTransform(141.3,117.3,1,1,0,0,0,94.3,94.3);
	this.instance.alpha = 0.5;
	this.instance.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},6).to({alpha:0.5},6).wait(1));

	// alpha
	this.instance_1 = new lib.thumb_alpha("synched",0);
	this.instance_1.setTransform(73,39,0.993,1);
	this.instance_1.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},6).to({alpha:0.398},6).wait(1));

	// Layer 4
	this.instance_2 = new lib.Symbol6();
	this.instance_2.setTransform(62.5,36.5,1,1,0,0,0,62.5,36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125,73);


(lib.replay_icon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"over":1});

	// icon
	this.instance = new lib.Tween4("synched",0);
	this.instance.setTransform(7.7,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:90},5).to({rotation:180},5).to({rotation:270.1},5).to({rotation:360},5).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,153,0)").s().p("AhLBLIAAiVICXAAIAACVg");
	this.shape.setTransform(7.7,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.4,15);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;