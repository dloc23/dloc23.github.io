import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// components
import { Home, Services, Contact } from "./components";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

import {Animated} from "react-animated-css";

class Routes extends Component {

	render(){
		return <div className="m-0">

			<BrowserRouter>
				<div className="row route-row">

					{/* MENU */}
					<nav className="col-12 text-center rightleft">
						<Link className="btn gsap-btn mr-4" to="/home">
                            <div className="left-1">
                                <FontAwesomeIcon icon="stroopwafel" />
                            </div>
                        </Link>
						<Link className="btn gsap-btn mr-4" to="/services">
                        <div className="left-1">
                            <FontAwesomeIcon icon="ice-cream" />
                        </div>
                        </Link>
						<Link className="btn gsap-btn" to="/contact">
                        <div className="left-1">
                            <FontAwesomeIcon icon="hamburger" />
                        </div>
                        </Link>
					</nav>

					{/* CONTENT */}
					<div className="col-12 no-gutters">
						<Route path="/home" exact>
							{ ({ match }) => <Home show={match !== null} /> }
						</Route>
						<Route path="/services">
							{ ({ match }) => <Services show={match !== null} /> }
						</Route>
						<Route path="/contact">
							{ ({ match }) => <Contact show={match !== null} /> }
						</Route>
					</div>

				</div>
			</BrowserRouter>

		</div>;
	}

}

export default Routes;
