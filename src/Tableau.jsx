import { useState, useEffect, useRef } from "react";
const { tableau } = window;

function TableauEmbed() {
	const [url] = useState(
		"https://public.tableau.com/views/Mid_Pres_v2/Dashboard_Demo"
	);
	const ref = useRef(null);
	let viz;
	const initViz = () => {
		viz = new tableau.Viz(ref.current, url);
	};

	useEffect(() => {
		initViz();
	}, []);

	console.log(viz);

	// useEffect(() => {
	// 	if (viz == undefined) {
	// 		return false;
	// 	} else {
	// 		viz.dispose();
	// 	}
	// }, [viz]);

	return (
		<div>
			<h1>hi</h1>
			<div style={setVizStyle} />
		</div>
	);
}

const setVizStyle = {
	width: "800px",
	height: "700px",
};

export default TableauEmbed;

// import { useEffect, useRef, useState } from "react";
// const { tableau } = window;

// const setVizStyle = {
// 	width: "400px",
// 	height: "350px",
// };
// const TableauEmbed = () => {
// 	// const url = "https://public.tableau.com/views/Mid_Pres_v2/Dashboard_Demo";

// 	const [url] = useState(
// 		"https://public.tableau.com/views/Mid_Pres_v2/Dashboard_Demo"
// 	);

// 	const ref = useRef(null);
// 	const initViz = () => {
// 		new tableau.Viz(ref.current, url);
// 	};

// 	useEffect(initViz, []);

// 	return (
// 		<>
// 			<div ref={ref} style={setVizStyle}></div>
// 		</>
// 	);
// };

// export default TableauEmbed;
// import { useRef, useEffect } from "react";

// const { tableau } = window;

// const TableauEmbed = () => {
// 	let viz;
// 	const url = "https://public.tableau.com/views/Mid_Pres_v2/Dashboard_Demo";

// 	const initViz = () => {
// 		new tableau.Viz(ref.current, url, {
// 			width: "300px",
// 			height: "200px",
// 		});
// 	};

// 	const initViz2 = () => {
// 		const containerDiv = document.getElementById("vizContainer");
// 		const options = {
// 			hideTables: false,
// 			hideToolbar: true,
// 		};

// 		if (viz == undefined) {
// 			return false;
// 		} else {
// 			viz.dispose();
// 		}

// 		viz = new tableau.Viz(containerDiv, url, options);
// 	};

// 	useEffect(() => {
// 		initViz2();
// 	}, [viz]);

// 	return <div id="vizContainer"></div>;
// };

// export default TableauEmbed;
