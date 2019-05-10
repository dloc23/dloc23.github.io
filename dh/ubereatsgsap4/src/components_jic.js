import React from "react";
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";
import { TimelineLite, CSSPlugin } from "gsap/all";
import SimpleTween from "./simple-tween";


const startState = { autoAlpha: 0, x: -400 };
const startState2 = { Y: -400 };

export const Home = props => <Transition
	unmountOnExit
	in={props.show}
	timeout={1000}

	onEnter={node => TweenMax.set(node, startState)}
	addEndListener={ (node, done) => {
		
		// SimpleTween.myTween = new TimelineLite({ paused:true })
		// 	 .to(node, 0.5, { alpha: 0.5, rotation: 360, transformOrigin: "center" })
			 
		// this.myTween2 = new TimelineLite({ paused:true })
		// 	.to(node, 2, { x: 500 })
		
		TweenMax.to( node, 0.5, {
			autoAlpha: props.show ? 1 : 0,
			x: props.show ? 0 : 400,
			onComplete: done

		});

		// this.logoTween = new TimelineLite({ paused:true })
		// 	.to(this.logoContainer, 2, { x: 500 })


	}}
>

	<div className="container">
		<div className="col-12 mt-5">

		{/* <img
			src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo-man.svg"
			//src= {slide1}
			alt=""
			className="img-fluid"
			ref={ img => this.logoContainer = img }
		/> */}

			<div className="alert alert-success">
				<h2 className="text-center mb-0">HOME</h2>
			</div>
			<div className="pg1">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis exercitationem provident vitae cum inventore voluptatem, numquam laborum minima quisquam excepturi odit similique repellendus beatae vero autem, natus ab deleniti expedita?</p>
				<p>Porro eveniet dolores consectetur, sapiente quas cupiditate natus, nemo iusto modi hic accusantium necessitatibus cumque nostrum expedita quisquam corrupti alias nobis praesentium impedit non quos! Id deserunt explicabo iure nulla.</p>
			</div>
		</div>
	</div>
</Transition>;

export const Services = props => <Transition
	unmountOnExit
	in={props.show}
	timeout={1000}
	onEnter={ node => TweenMax.set(node, startState, startState2) }
	addEndListener={ (node, done) => {
		TweenMax.to(node, 0.5, {
			autoAlpha: props.show ? 1 : 0,
			x: props.show ? 0 : 400,
			//y: props.show ? 0 : 400,
			onComplete: done
		});
	}}
>
	<div className="position-absolute col-12">
		<div className="col-12 mt-5">
			<div className="alert alert-success">
				<h2 className="text-center mb-0">SERVICES</h2>
			</div>
			<p> repudiandae impedit praesentium labore</p>
		</div>
	</div>
</Transition>;

export const Contact = props => <Transition
	unmountOnExit
	in={props.show}
	timeout={1000}
	onEnter={ node => TweenMax.set(node, startState) }
	addEndListener={ (node, done) => {
		TweenMax.to(node, 0.5, {
			autoAlpha: props.show ? 1 : 0,
			x: props.show ? 0 : 400,
			onComplete: done
		});
	}}
>
	<div className="position-absolute col-12">
		<div className="col-12 mt-5">
		
			<div className="alert alert-success">
				<h3 className="text-center mb-0">CONTACT</h3>
			</div>

			<div className="row justify-content-center">
				<div className="col-12 col-md-6">
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input type="text" name="name" id="name" className="form-control" />
					</div>
					<div className="form-group">
						<label htmlFor="mail">Email</label>
						<input type="email" name="mail" id="mail" className="form-control"/>
					</div>
					<div className="form-group">
						<label htmlFor="comments">Comments</label>
						<textarea name="comments" id="comments" rows="5" className="form-control"></textarea>
					</div>
					<button className="btn gsap-btn">Submit</button>
				</div>
			</div>

		</div>
	</div>
</Transition>;
