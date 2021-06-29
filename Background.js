import * as React from "react";
import { StyleSheet, View, ScrollView, Dimensions, Image, TouchableOpacity, Button } from "react-native";

const DEVICE_WIDTH = Dimensions.get("window").width;

class BackGround extends React.Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
      image : 0
    };
    this.scrollRef = React.createRef();
  }


  setSelectedIndex = event => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    //Dividing the horizontal offset by the width of the view to see which page is visible
    const selectedIndex = Math.floor(contentOffset.x / viewSize.width);
    this.setState({ image: selectedIndex })
    this.setState({ selectedIndex });
  }

  showslide1 = () => {
    this.setState({ image: 0 })
    this.setState({selectedIndex:0})
  }

  showslide2 = () => {
    this.setState({ image: 1 })
    this.setState({selectedIndex:1})
  }

  showslide3 = () => {
    this.setState({ image: 2 })
    this.setState({selectedIndex:2})
  }

   

  render() {

    // const showimage = () => {
    //   var index = this.state.image
    //   return (
    //     <Image
    //       style={styles.backgroundImage}
    //       source={{ uri: images[index]}}
    //       key={index}
    //     />
    //   )
    // }
    const { images } = this.props;
    const { selectedIndex } = this.state;

    return (
      <View style={{ height: "100%", width: "100%" }}>
        <ScrollView
        horizontal
        pagingEnabled
		    onMomentumScrollEnd={this.setSelectedIndex}
     	  ref={this.scrollRef}
        >
          {images.map(image => (
            <Image
              style={styles.backgroundImage}
              source={{ uri: images[this.state.image] }}
              key={image}
            />
          ))}
        </ScrollView>
        <View style={styles.circleDiv}>
          {images.map((image, i) => (
            <View
              style={[
                styles.whiteCircle,
                { backgroundColor: i === selectedIndex ? 'black' : 'white' }
              ]}
              key={image}
            />
          ))}
        </View>
        <View style={{flexDirection:'row',alignSelf:'center',alignContent:'space-between',position:'absolute'}}>
         <View style={{margin:10}}><Button title={'page 1'} onPress = {this.showslide1}></Button></View>
         <View style={{margin:10}}><Button title={'page 2'} onPress = {this.showslide2}></Button></View>
         <View style={{margin:10}}><Button title ={'page 3'} onPress = {this.showslide3}></Button></View> 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: "100%",
    width: Dimensions.get("window").width
  },
  circleDiv: {
    position: "absolute",
    bottom: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 10,
    margin :10
  },
  whiteCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    //backgroundColor: "#fff"
  }
});

export { BackGround };