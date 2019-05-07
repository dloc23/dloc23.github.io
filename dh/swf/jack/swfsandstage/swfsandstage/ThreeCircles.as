/* ***********************************************************************
ActionScript 3 Experiment by Barbara Kaskosz

www.flashandmath.com

Last modified: March 4, 2009
************************************************************************ */

package {
	
	
	import flash.display.*;
  
    import flash.events.*;
   
    import flash.text.*;
	
	import flash.filters.*;
	

  public class ThreeCircles extends MovieClip {
	
	
       var circle1:Shape;

       var circle2:Shape;

       var circle3:Shape;
	   
	   
	   public function ThreeCircles(){
		   
		   setUpCircles();
		   
		   renderCircles();
		   
		   /*
		   The code commented out:
		   
		   stage.addEventListener(MouseEvent.CLICK,whenClicked);
		   
		   causes an error when ext_docclass, with ThreeCircles as its Docunment Class,
		   is loaded into another swf file, container_2.swf.
		   That happenes as in container_2.fla, this constructor runs before
		   the loaded swf, ext_docclass.swf, is added as a child of 'loader'.
		   Not being a child of 'loader', ext_docclass.swf is not on the Display List.
		   Thus, it does not have access to 'stage'. The commented line does not
		   cause errors when ext_docclass.swf is compiled as a stand-alone swf.
		   */
		   
		   //stage.addEventListener(MouseEvent.CLICK,whenClicked);
		   
		   /*
		   To fix the problem, we need to listen to the event Event.ADDED_TO_STAGE
		   and add the listener 
		   
		   stage.addEventListener(MouseEvent.CLICK,whenClicked);
		   
		   after our instance of ThreeCircles have been added
		   to the Display List. 
		   
		   In the coditional below, the first part will run
		   when ext_docclass.fla is compiled; the second part will run
		   when ext_docclass.swf is loaded into container_2.swf.
		   */
		   
		   if(stage==null){
			   
			  this.addEventListener(Event.ADDED_TO_STAGE, addedToList);
			  
		   } else {
			   
			   stage.addEventListener(MouseEvent.CLICK,whenClicked);
		   }
		   
		   /*
		   The next commented out line concernes the issue of unloading an swf loaded
		   at runtime. 
		   */
		   
		   //this.addEventListener(Event.ENTER_FRAME,threeEnter);
		   
	   }
	   
      private function addedToList(e:Event):void {
	   
	      stage.addEventListener(MouseEvent.CLICK,whenClicked);
	   
       }
	   
	 private function whenClicked(e:MouseEvent):void {
	
	    renderCircles();
	
	    //trace("Stage listener to CLICK from ThreeCircles is running.");
	
    }
	
	
	/*
	The listener below will not run unless the line:
	
	this.addEventListener(Event.ENTER_FRAME,threeEnter);
	
	in the constructor is uncommented. 
	
	*/
	
	 private function threeEnter(e:Event):void {
	  
	   trace("ENTER_FRAME listener from ThreeCircles is running."); 
	  
    }
  
	/*
	'SetUpCicles' creates three Shapes, adds them as children of our instance
	of ThreeCircles and positions them.
	*/
	   
   private function setUpCircles(): void {
	 
	   circle1=new Shape();

       circle2=new Shape();

       circle3=new Shape();
	 
       this.addChild(circle1);

       this.addChild(circle2);

       this.addChild(circle3);

       circle1.filters=[ new DropShadowFilter() ];

       circle2.filters=[ new DropShadowFilter() ];

       circle3.filters=[ new DropShadowFilter() ];

       circle1.y=180;
	
       circle2.y=80;
	
       circle3.y=180;
	
       circle1.x=100;
	
       circle2.x=250;
	
       circle3.x=400;
	   
 }

   //'renderCircles' draws the cicles with fills
   //colors generated randomly.

  private function renderCircles():void {
	
	 var i:int;
	
	 for(i=1;i<4;i++){
		
		this["circle"+String(i)].graphics.clear();
		
		this["circle"+String(i)].graphics.lineStyle(1,0x000000);
		
		this["circle"+String(i)].graphics.beginFill(chooseColor());
		
		this["circle"+String(i)].graphics.drawCircle(0,0,50);
		
		this["circle"+String(i)].graphics.endFill();
		
	 }

	
  }
  
  /*
  'renderOrangeCircles' is a public method that drwas all cicles with orange fills.
  We include it to illustrate acces to methods of a loaded swf from the container swf.
  */

 public function renderOrangeCircles():void {
	
	 var i:int;
	
	 for(i=1;i<4;i++){
		
		this["circle"+String(i)].graphics.clear();
		
		this["circle"+String(i)].graphics.lineStyle(1,0x000000);
		
		this["circle"+String(i)].graphics.beginFill(0xFF9933);
		
		this["circle"+String(i)].graphics.drawCircle(0,0,50);
		
		this["circle"+String(i)].graphics.endFill();
		
	 }

	
  }

//A function and a helper function that generate randomly fill colors.

  private function chooseColor():Number {
	  
	   var r1:Number=Math.floor(Math.random()*256);
	
	   var r2:Number=Math.floor(Math.random()*256);
	
	   var r3:Number=Math.floor(Math.random()*256);
	
	  return combineRGB(r1,r2,r3);
  }
  
  
  private function combineRGB(red:Number,green:Number,blue:Number):Number {
	
	  var RGB:Number;
	
	  if(red>255){red=255;}
	  if(green>255){green=255;}
	  if(blue>255){blue=255;}
	
	  if(red<0){red=0;}
	  if(green<0){green=0;}
	  if(blue<0){blue=0;}
	
	
	  RGB=(red<<16) | (green<<8) | blue;
	
	 return RGB;	
	
  }
   
  
  }
  
}
