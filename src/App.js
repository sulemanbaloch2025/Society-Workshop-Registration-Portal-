import React from 'react';
import './App.css';
import Overlay from './components/OverlayComponent';
import Left from './components/LeftComponent';
import Right from './components/RightComponent';

function App() {
	return (
		<div className="main">
			<div className="wrapper">
				<div className="intro">
				<Overlay />
					<div className="containerwrapper">
						<section className="left">
							<Left />
						</section>
						<section className="right">
							<Right />
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
