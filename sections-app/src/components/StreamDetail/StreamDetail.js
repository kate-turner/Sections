import React from 'react';
import { StyleSheet, Modal, View, Text, Button } from 'react-native';

const streamDetail = props => {
	let modalContent = null;

	if (props.selectedStream) {
		modalContent = (
			<View>
				<Text> {props.selectedStream.sourceInfo.siteName} 
						
						
				</Text>
			</View>
		)
	}
	return (
		<Modal visible={props.selectedStream !== null}>
			<View style={styles.modalContainer}>
				{modalContent}
				<Text> Helllo detail page </Text> 
			
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	modalContainer: {
		margin: 40
	}
})

export default streamDetail;