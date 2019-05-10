import React, { Component } from "react";
import { TimelineLite, CSSPlugin } from "gsap/all";

import slide1 from './assets/img/slide1.png';
import slide2 from './assets/img/slide2.png';
import slide3 from './assets/img/slide3.png';
import slide4 from './assets/img/slide4.png';

//import circle from './assets/img/circle.png';




class SimpleTween extends Component {

	constructor(props){
		super(props);
		// logo container
        this.logoContainer = null;
        this.logoContainer2 = null;
		// logo tween
        this.logoTween = null;
        this.logoTween2 = null;
	}


	componentDidMount(){
		// create logo tween
		this.logoTween = new TimelineLite({ paused:true })
			.to(this.logoContainer, 2, { x: 500 })
            .to(this.logoContainer, 1, { rotation: 360, transformOrigin: "center" });
            
        // create logo tween
		this.logoTween2 = new TimelineLite({ paused:true })
        .to(this.logoContainer2, 2, { x: 500 })
        .to(this.logoContainer2, 1, { rotation: 360, transformOrigin: "center" });
	}


	render(){
		return <div className="container">
			<div className="row">

				<div className="col-12 mt-3">
					<h3 className="text-center">Simple Tween</h3>
					<p>Animates the GSAP logo to the right of it's original position and finally does a 360 degrees rotation. You can use the buttons to control the animation.</p>
					<p>Uses the <strong>ref</strong> inline callback to create a reference to the DOM element, which is then used in the <strong>componentDidMount</strong> event to create the GSAP instance.</p>
					<hr/>
				</div>

				<div className="col-12">
					<h3 className="text-center">Control Logo Tween</h3>
					<p>Use the buttons to control the Logo Tween</p>
					<div className="mb-2 btn-group">
						{/* <button
							className="btn gsap-btn"
							onClick={() => this.logoTween.play()}
						// >Play</button>
                        ></button> */}
						<button
							className="btn gsap-btn"
							onClick={() => this.logoTween.pause()}
						>Pause</button>
						<button
							className="btn gsap-btn"
							onClick={() => this.logoTween.reverse()}
						>Reverse</button>
						<button
							className="btn gsap-btn"
							onClick={() => this.logoTween.restart()}
						>Restart</button>
					</div>
					<hr />
				</div>

				<div className="col-12 mt-3">
					<img
                        //src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo-man.svg"
                        src= {slide1}
						alt=""
						className="img-fluid"
						ref={ img => this.logoContainer = img }
					/>
                    <img
                        //src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo-man.svg"
                        src= {slide2}
						alt=""
						className="img-fluid"
						ref={ img => this.logoContainer2 = img }
					/>
                    <button
                            className="btn gsap-btn"
                            onClick={() =>  this.logoTween.play()
                                           
                            }
                            // onClick={() =>  this.logoTween.play()
                            //                 this.logoTween2.play()
                            //             }
						// >Play1</button>
                        ></button>
                    <button
							className="btn gsap-btn"
							onClick={() => this.logoTween2.play()}
						// >Play2</button>
                        ></button>
				</div>

			</div>
		</div>;
	}
	
}

export default SimpleTween;
