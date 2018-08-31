import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import backgroundImage from "../../assets/marker.jpg"

class Maps extends Component {
	render () {
		return (
			<ImageBackground source={backgroundImage} style={styles.backgroundImage}>
			<View style={styles.container}>
				<Text style={styles.text}>  </Text>
			</View>
			</ImageBackground>
		);
	}
}

export default Maps;

const styles = StyleSheet.create({
	backgroundImage: {
		width: '100%',
		flex: 1,
	},

	container: {
		flex: 1,
		alignItems: 'center',
	},
	
	text: {
		fontSize: 30,
		textAlign: 'center',
		marginTop: 60,
	}
})