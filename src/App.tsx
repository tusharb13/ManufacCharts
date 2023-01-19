import React from "react";
import "./App.css";
import Charts from "./components/Chart/Chart";
function App() {
	return (
		<>
			<div className="in-middle">
				<Charts
					typeOfPlot={"scatter"}
					graphTitle={"Colour Intesity vs Hue"}
					xAxisType={"value"}
					xAxisLabel={"Colour Intesity"}
					yAxisLabel={"Hue"}
				></Charts>
				<Charts
					typeOfPlot={"bar"}
					graphTitle={"Alcohol vs Avg Mallic Acid"}
					xAxisType={"category"}
					xAxisLabel={"Alcohol"}
					yAxisLabel={"Avg Mallic Acid"}
				></Charts>
			</div>
		</>
	);
}

export default App;
