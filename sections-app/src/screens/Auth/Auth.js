import React, { Component } from 'react';
import { TextInput, View, Text, Button, ImageBackground, StyleSheet } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import backgroundImage from "../../assets/grand.jpg"

class AuthScreen extends Component {
	loginHander = () => {
		startMainTabs();
	}
	
	render () {
		return (
			<ImageBackground source={backgroundImage} style={styles.backgroundImage}>
			<View style={styles.container}>
			
				<Text style={styles.header}>Flow Forecast</Text>
				<View style={styles.inputContainer}>
						<TextInput placeholder="Your E-Mail Address" style={styles.input}/>
						<TextInput placeholder="Password" style={styles.input}/>
				<Button title="Explore" style={styles.button} onPress={this.loginHander}/>
				</View>
			
			</View>
			</ImageBackground>
		);

	}
};

const styles = StyleSheet.create({
	container: {
		marginTop: 50,
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	backgroundImage: {
		width: '100%',
		flex: 1,
	},
	header: {
		fontSize: 30,
		fontWeight: 'bold',
		paddingBottom: 15
	},
	inputContainer: {
		width: '80%',
	},
	input: {
		width: '100%',
		justifyContent: 'center',
		borderWidth: 1,
		borderRadius: 5,
		borderColor: "#eee",
		padding: 5,
		margin: 8,
		textAlign: 'center',
		backgroundColor: '#eee'
	},
	button: {
		padding: 10,
		margin: 5,
		backgroundColor: '#29aaf4',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: 'black'
	}
})

export default AuthScreen;