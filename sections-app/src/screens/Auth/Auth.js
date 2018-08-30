import React, { Component } from 'react';
import { TextInput, View, Text, Button, StyleSheet } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component {
	loginHander = () => {
		startMainTabs();
	}
	
	render () {
		return (
			<View style={styles.container}>
				<Text>Please Log In</Text>
				<View style={styles.inputContainer}>
				<Button title="Switch to Login" />
						<TextInput placeholder="Your E-Mail Address" style={styles.input}/>
						<TextInput placeholder="Password" style={styles.input}/>
						<TextInput placeholder="Confirm Password" style={styles.input}/>
				<Button title="Submit" onPress={this.loginHander}/>
				</View>
			</View>
		);

	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	inputContainer: {
		width: '80%',
	},
	input: {
		width: '100%',
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: "#eee",
		padding: 5,
		margin: 8,
		textAlign: 'center',
	}
})

export default AuthScreen;