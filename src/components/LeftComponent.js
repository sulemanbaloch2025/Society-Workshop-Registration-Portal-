import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

class Left extends Component {

	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: ''
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		var target = event.target;
		var value = target.value;
		var name = target.name;

		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		alert('Sign In Successful');
		event.preventDefault();
	}

	render() {

		return(
			<CSSTransition in={true} classNames="fademain" enter={false} exit={false} appear={true} timeout={1000}>
				<div>
					<section className="texthead"> Sign In </section>
					<section className="textsubhead"> sign in to continue to the application </section>
					<form onSubmit={this.handleSubmit}>
						<input type="text" className="textinp" name="username" placeholder="Username" value={this.state.username} onChange={this.handleInputChange} required/>
						<input type="password" className="textinp" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange} required/>
						<button className="buttonsubmit"> Sign In </button>
					</form>
					<section className="two textsubhead"> ~ or ~ </section>
					<section className="social">
						<section className="fb btn"> <i className="fa fa-facebook fa-fw"> </i> </section>
						<section className="google btn"> <i className="fa fa-google fa-fw"> </i> </section>
					</section>
				</div>
			</CSSTransition>
		);
	}

}

export default Left;