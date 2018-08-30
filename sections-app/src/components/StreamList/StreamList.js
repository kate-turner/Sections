import React, { Component } from 'react';
import {Alert, StyleSheet, FlatList, Text, View, TouchableOpacity, List } from "react-native";


class StreamList extends Component {
	

render(){
	// const streamList = this.props.streamsData.map((stream, index) => {
		// return <Text key={index}>
		// 		{stream.sourceInfo.siteName},
		// 		{stream.sourceInfo.geoLocation.geogLocation.latitude}
		// 		{stream.sourceInfo.geoLocation.geogLocation.longitude},
		// 		{stream.values[0].value[0].value}
		// 		{stream.variable.variableDescription}
		// 		</Text>

		

	
	return (
		<View style={styles.listContainer}>
			<FlatList 
			data={this.props.streamsData}
			
			renderItem={(stream) => (
			
				
					
					<TouchableOpacity
					 onPress={() => this.props.onStreamSelected(stream.item.key)}>
					
					<Text style={styles.name}>
					{stream.item.sourceInfo.siteName}
					
					
					{stream.item.values[0].value[0].value}
					{stream.item.variable.variableDescription}
					</Text>
					</TouchableOpacity>


				
				// {stream.sourceInfo.geoLocation.geogLocation.latitude}
				// {stream.sourceInfo.geoLocation.geogLocation.longitude},
				// {stream.values[0].value[0].value}
				// 
				// ItemSeparatorComponent={this.renderSeparator}
      		)}
      		keyExtractor={(item, index) => index.toString()}
      		/>
    	</View>
  	);
};
};


const styles = StyleSheet.create({
  listContainer: {
   flex: 1,
  },
  name: {
    fontSize: 18,
    height: 44,
  }
});

export default StreamList; 