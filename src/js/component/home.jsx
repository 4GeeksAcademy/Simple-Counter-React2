import React from "react";


//create your first component
const Home = ({ digit6, digit5, digit4, digit3, digit2, digit1 }) => {
	return (
		<div className="containerCounter bg-dark">
			<div className="calendar">
				<i className="far fa-clock"></i>
			</div>
			<div className="six">{digit6}</div>
        	<div className="five">{digit5}</div>
        	<div className="four">{digit4}</div>
        	<div className="three">{digit3}</div>
        	<div className="two">{digit2}</div>
        	<div className="one">{digit1}</div>
		</div>	
	);
};
export default Home;
