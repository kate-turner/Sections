import { Navigation } from 'react-native-navigation';

const startTabs = () => {
	Navigation.startTabBasedApp({
		tabs: [
			{
				screen: "sections-app.StreamListScreen",
				label: "Streams",
				title: "Streams"
			},
			{
				screen: "sections-app.MapsScreen",
				label: "Maps",
				title: "Maps"
			},
		]

	})	
};

export default startTabs;

