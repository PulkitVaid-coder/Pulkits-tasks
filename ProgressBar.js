import React, { useEffect, useState, useRef, Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : 0
    };
  }
 
  

  render() {  
    return (
      <View style={styles.container}>
        <Text>
          Loading...
        </Text>

        <View style={styles.progressBar}>
        <View style={[StyleSheet.absoluteFill], { backgroundColor: "yellow", width: this.state.value }}/>
        </View>

        <View style ={styles.buttoncontainer}>
          <Button onPress={() => { if (this.state.value < 200) { this.setState({ value: this.state.value + 50 }) }}} title={'increase'} />
          <Button onPress={() => { if (this.state.value > 0)   { this.setState({ value: this.state.value - 50 }) }}} title={'decrease'} />
        </View>
      </View>
      
    );
  }
}
 
export default Progress;
 
const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#ecf0f1',
   padding: 8,
   flexDirection: 'column'
  },

  progressBar: {
   height: 20,
   width: 200,
   backgroundColor: 'white',
   borderColor: '#000',
   borderWidth: 2,
   borderRadius: 5,
    flexDirection: 'row',
   marginBottom : 10
  },

  buttoncontainer: {
    justifyContent: 'space-between'
  }
  
});