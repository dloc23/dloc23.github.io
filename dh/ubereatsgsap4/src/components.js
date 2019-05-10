import React from "react";
import { Transition } from "react-transition-group";
import { TweenMax, TimelineMax, Linear } from "gsap/all";
import { CSSPlugin } from "gsap/all";
import logo from './logo.svg';
import bg3 from './assets/img/bg3.jpg';
import ue from './assets/img/ue.svg';
import ue2 from './assets/img/ue2.svg';
import circle from './circle.png';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import { faIceCream } from '@fortawesome/free-solid-svg-icons'

import {Animated} from "react-animated-css";

library.add(faStroopwafel)
library.add(faArrowRight)
library.add(faArrowLeft)
library.add(faPizzaSlice)
library.add(faHamburger)
library.add(faIceCream)

const startState = { autoAlpha: 0, x: -800 };

export const Home = props => <Transition
	unmountOnExit
	in={props.show}
	timeout={1000}
	onEnter={node => TweenMax.set(node, startState)}
	addEndListener={ (node, done) => {
		TweenMax.to(node, 0.2, {
			autoAlpha: props.show ? 1 : 0,
			x: props.show ? 0 : 800,
			onComplete: done
		});
	}}
>
        <div className="position-absolute col-12 no-gutters home-prop">
			<div className="row text-center">
            
            <div className="text-center m-0 dheight d1plate">
                <div className="font-logo mt-0">
                    <FontAwesomeIcon icon="stroopwafel" />
                </div>
                
			</div>
            </div>
            <div className="text-center p-4 logo-in div1b">

                    <img 
                    src={ue2}
                    className="pizza img-fluid"
                    alt="pizza" 
                    />
              
            </div>

            <button className="btn gsap-btn">Submit</button>		
	    </div>
</Transition>;

export const Services = props => <Transition
	unmountOnExit
	in={props.show}
	timeout={1000}
	onEnter={ node => TweenMax.set(node, startState) }
	addEndListener={ (node, done) => {
		TweenMax.to(node, 0.2, {
			autoAlpha: props.show ? 1 : 0,
			x: props.show ? 0 : 800,
			onComplete: done
		});
	}}
>
        <div className="position-absolute col-12 m-0">
            <div className="text-center m-0 dheight d2plate">
                {/* <h3 className="text-center m-0">DIV2 TOP</h3> */}
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                {/* <div className="text-center m-0">
                Favorite Food: 
                    <div className="font2-logo">
                        <FontAwesomeIcon icon="stroopwafel" />
                    </div>
                </div> */}

                <div className="text-center m-0">
                
                    <div className="font3-logo">
                        <FontAwesomeIcon icon="ice-cream" />
                    </div>
                </div>
            </div>
            
            <div className="m-0 text-center div2b">
                <div className="text-center m-0 p-4 logo-in">
                
                <img 
                    src={ue}
                    className="pizza img-fluid"
                    alt="pizza" 
                    />
                </div>

                {/* <img src={logo} className="App-logo" alt="logo" /> */}
            </div>
        </div>

</Transition>;

export const Contact = props => <Transition
	unmountOnExit
	in={props.show}
	timeout={1000}
	onEnter={ node => TweenMax.set(node, startState) }
	addEndListener={ (node, done) => {
		TweenMax.to(node, 0.2, {
			autoAlpha: props.show ? 1 : 0,
            x: props.show ? 0 : 800,
			onComplete: done
		});
	}}
>
        <div className="position-absolute col-12 m-0">
            
			<div className="m-0 text-center dheight d3plate">
				<h3 className="text-center m-0"></h3>
                {/* <div className="text-center gsapman">
                    <img className="text-center"
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo-man.svg"
                            //src= {slide1}
                            alt=""
                            className="img-fluid"
                        />
                </div>   */}
                <div className="text-center m-0 dheight">
              
                <div className="text-center m-0">
                 
                    <div className="m-0 font2-logo">
                        {/* <FontAwesomeIcon icon="pizza-slice" /> */}
                        <FontAwesomeIcon icon="hamburger" />
                    </div>
                </div>
            </div>
			</div>
            <div className="m-0 text-center div3b">

            <div className="text-center m-0 p-4 logo-in">
                
                <img 
                    src={ue}
                    className="pizza img-fluid"
                    alt="pizza" 
                    />
                </div>
                
                {/* <h3 className="text-center m-0"></h3>
                <img src={logo} className="App-logo" alt="logo" /> */}
            </div>
            <div class="text-center">
                <p>Some text</p>
            </div>

            {/* <button className="btn gsap-btn">Submit</button>		 */}
	    </div>
</Transition>;

