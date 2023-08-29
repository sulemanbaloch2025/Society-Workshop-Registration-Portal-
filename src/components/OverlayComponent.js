import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

class Overlay extends Component {

	constructor(props) {
		super(props);

		this.state = {
			show: true
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		var value = this.state.show;
		this.setState({ show: !value })
	}

	overlayInstance() {
		if(this.state.show === true) {
			return(
				<CSSTransition key = {1} in={true} classNames="translateright" enter={false} exit={false} appear={true} timeout={1000}>
					<div className="overlaywrapper in">
						<CSSTransition in={true} classNames="fade" enter={false} exit={false} appear={true} timeout={1000}>
							<section className="overlayhead"> Hello! </section>
						</CSSTransition>
						<CSSTransition in={true} classNames="fade" enter={false} exit={false} appear={true} timeout={1000}>
							<section className="overlaysubhead"> enter the details to create your account </section>
						</CSSTransition>
						<CSSTransition in={true} classNames="fade" enter={false} exit={false} appear={true} timeout={1000}>
							<input type="button" className="buttonmove" value="Sign Up" onClick={this.handleChange}/>
						</CSSTransition>
					</div>
				</CSSTransition>
			);
		}
		else {
			return(
				<CSSTransition key = {2} in={true} classNames="translateleft" enter={false} exit={false} appear={true} timeout={1000}>
					<div className="overlaywrapper up">
						<CSSTransition in={true} classNames="fade" enter={false} exit={false} appear={true} timeout={1000}>
							<section className="overlayhead"> Welcome! </section>
						</CSSTransition>
						<CSSTransition in={true} classNames="fade" enter={false} exit={false} appear={true} timeout={1000}>
							<section className="overlaysubhead"> please sign in with your details </section>
						</CSSTransition>
						<CSSTransition in={true} classNames="fade" enter={false} exit={false} appear={true} timeout={1000}>
							<input type="button" className="buttonmove" value="Sign In" onClick={this.handleChange}/>
						</CSSTransition>
					</div>
				</CSSTransition>
			);
		}
	}

	render() {
		return(
			<div>
				{ this.overlayInstance() }
			</div>
		);
	}

}

export default Overlay;