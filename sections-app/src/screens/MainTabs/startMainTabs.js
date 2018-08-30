import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
	Promise.all([
		Icon.getImageSource("md-map", 30),
		Icon.getImageSource("md-analytics", 30)
	]).then(sources => {
		Navigation.startTabBasedApp({
		tabs: [
			{
				screen: "sections-app.StreamListScreen",
				label: "Streams",
				title: "Streams",
				icon: sources[1]
			
			},
			{
				screen: "sections-app.MapsScreen",
				label: "Maps",
				title: "Maps",
				icon: sources[0]


			},
		]

		})

	})
	
		
};

export default startTabs;

