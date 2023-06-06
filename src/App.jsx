import { TableauEmbed } from "@stoddabr/react-tableau-embed-live";

function App() {
	return (
		<>
			<h1>511 Group 3</h1>
			<TableauEmbed
				sourceUrl="https://public.tableau.com/views/Spotify_511_edm/Dashboard_Demo"
				width={"100vw"}
				height={"100vh"}
			/>
		</>
	);
}

export default App;
