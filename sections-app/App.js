import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StreamList from "./src/components/StreamList/StreamList";
import StreamDetail from "./src/components/StreamDetail/StreamDetail";

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      streamsData: [],
      selectedStream: null,
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

  streamSelectedHandler = id => {
    this.setState(prevState => {
      return {
        selectedStream: prevState.streamsData.find(stream => {
          return stream.id === id;
        })
      };
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
      
      <StreamList 
        streamsData={this.state.streamsData}
        onStreamSelected={this.streamSelectedHandler}
       />
      <StreamDetail selectedStream={this.state.selectedStream} />
      

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
