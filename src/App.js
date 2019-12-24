import React from 'react';
import MainContainer from './containers/MainContainer';
import './styles/common.scss';

const App = () => {
	return (
		<div id="wrapper">
			<div className="container">
				<MainContainer />
			</div>
		</div>
	);
};

export default App;
