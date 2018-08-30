import React, { Component } from 'react';
import {Alert, StyleSheet, FlatList, Text, View, TouchableOpacity, List } from "react-native";
// import StreamDetail from "./src/components/StreamDetail/StreamDetail";

class StreamList extends Component {
	constructor(props){
    super(props);
    this.state = {
      streamsData: [],
      selectedStream: null,
      logged: null,
  }
}
  componentDidMount(){
      this.getStreams().then((data) => {
        console.log(data)
        this.setState({
          streamsData: data.value.timeSeries
        })

      }).catch((err) => {
        console.log(err, 'in streams data api')
      });
  }

  getStreams = async() => {
      const streamAPI = 'https://waterservices.usgs.gov/nwis/iv/?&sites=07087050,07091200,07094500,09050700,09057500,06716500,06719505,09058000,09060799,09070500,09071750,09085100,09163500,09128000,09144250,09073400,09085000,09239500,09244490,09247600,09251000,09260050,09234500,09261000,09064600,09070000&format=json,1.1&parameterCd=00060,00065';
      try {
        const streams = await fetch(streamAPI);
        const streamsJson = await streams.json();
        return streamsJson;
        
      } catch(err) {
        console.log(err, 'error in getStreams catch block')
        return err
      }
  }



  streamSelectedHandler = key => {
    console.log(key + 'this is the key of stream')
    this.setState(prevState => {
      return {
        selectedStream: prevState.streamsData.find(stream => {
          return stream.key === key;
        })

      };
      console.log(key + 'this is the key of stream')
    });
  }

render(){
	// const streamList = this.props.streamsData.map((stream, index) => {
		// return <Text key={index}>
		// 		{stream.sourceInfo.siteName},
		// 		{stream.sourceInfo.geoLocation.geogLocation.latitude}
		// 		{stream.sourceInfo.geoLocation.geogLocation.longitude},
		// 		{stream.values[0].value[0].value}
		// 		{stream.variable.variableDescription}
		// 		</Text>

		

	console.log(this.props)
	return (
		<View style={styles.listContainer}>
			<FlatList 
			data={this.state.streamsData}
			
			renderItem={(stream) => (
			
				
				<View style={styles.itemContainer}>
				<TouchableOpacity
				onPress={() => this.state.onStreamSelected(stream.item.key)}>
					
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