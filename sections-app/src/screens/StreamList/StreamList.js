import React, { Component } from 'react';
import {Alert, StyleSheet, FlatList, Text, View, TouchableOpacity, List } from "react-native";
import { material } from 'react-native-typography'


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
			
				
				<View style={styles.itemContainer}>
				<TouchableOpacity
				onPress={() => this.props.onStreamSelected(stream.item.key)}>
					
					<Text style={styles.name}>
					{stream.item.sourceInfo.siteName}
					</Text>
					
					<Text style={styles.value}>
					{stream.item.values[0].value[0].value}
					</Text>

					<Text style={styles.description}>
					{stream.item.variable.variableDescription}
					</Text>
					
				</TouchableOpacity>
				</View>


				
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
   marginTop: 20,
  },
  itemContainer: {
   width: '100%',
   backgroundColor:'#F5F5F5',
   marginTop: 4,
  },
  name: {
    fontSize: 18,
    height: 25,
    paddingLeft: 10,
    marginTop: 10,
  },
  value: {
  	fontSize: 18,	
  	color: "orange",
  	paddingLeft: 10,
  },
  description: {
  	fontSize: 12,
  	paddingLeft: 10,
  	paddingBottom: 10,
  }

});

export default StreamList;