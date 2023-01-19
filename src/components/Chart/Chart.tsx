import data from "../../data/Wine-Data.json";
import ReactECharts from "echarts-for-react";
import React from "react";

interface IProps {
	typeOfPlot: string;
	graphTitle: string;
	xAxisType: string;
	xAxisLabel: string;
	yAxisLabel: string;
}

const Charts = ({
	typeOfPlot,
	graphTitle,
	xAxisType,
	xAxisLabel,
	yAxisLabel,
}: IProps) => {
	/// This function with return a [][] which will be filled accordin to the type of graph requested by the parent component
	const getOptionData = (typeOfPlot: string) => {
		let dataForOption: (string | number)[][] = [];
		if (typeOfPlot === "scatter") {
			data.map((element) =>
				dataForOption.push([element["Color intensity"], element["Hue"]])
			);
		} else {
			let typesOfAlcohol = [...new Set(data.map((item) => item.Alcohol))];

			// This foreach loop is to find the average Mallic acid for each alcohol type using the reduce function
			typesOfAlcohol.forEach((al) => {
				const alcoholType = data.filter((obj) => obj.Alcohol === al);
				const average =
					alcoholType.reduce((total, next) => total + next["Malic Acid"], 0) /
					alcoholType.length;
				dataForOption.push([al, average]);
			});
		}
		return dataForOption;
	};

	/// This function is used to set the option object required by ReactEcharts to render the desired graph
	const getOption = () => {
		let option = {
			title: {
				show: true,
				text: graphTitle,
				textAlign: "auto",
			},
			xAxis: { type: xAxisType, name: xAxisLabel },
			yAxis: { name: yAxisLabel },
			tooltip: {
				show: true,
				trigger: "item",
			},
			series: [
				{
					symbolSize: 10,
					data: getOptionData(typeOfPlot),
					type: typeOfPlot,
				},
			],
		};

		return option;
	};

	return <ReactECharts option={getOption()} lazyUpdate={true} />;
};

export default Charts;
