
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

function Item({ item }) {
  if (item.index % 2 == 0) {
    return (
      <View style={styles.listItem1}>
        <Image source={{ uri: item.photo }} style={{ width: 60, height: 60, borderRadius: 30,}} />
        <View style={{ alignItems: "flex-end", flex: 1,margin:15 }}>
          <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
          <Text>{item.message}</Text>
        </View>
      </View>
    );
  }
  return (
    
     <View style={styles.listItem}>
        <Image source={{ uri: item.photo }} style={{ width: 60, height: 60, borderRadius: 30 }} />
        <View style={{ alignItems: "flex-start", flex: 1,margin :15 }}>
          <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
          <Text>{item.message}</Text>
        </View>
      </View>
  )
}

export default class Flatlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          "name": "Michael Jordan",
          "message": " Hello there",
          "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/43.jpg",
          "index": 1
            
        },
        {
          "name": "Alexa",
          "message": "Hey",
          "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg",
          "index": 2
            
        },
        {
          "name": "Michelle",
          "message": "How are you guys ?",
          "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/68.jpg",
          "index": 3
        },
        {
          "name": "Ann",
          "message": "we are good",
          "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/65.jpg",
          "index": 4
        },
        {
          "name": "Ann",
          "message": "hope keeps us alive",
          "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/65.jpg",
          "index": 5
        },
        {
          "name": "Ann",
          "message": "rightly said",
          "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/65.jpg",
          "index": 6
        },
        {
          "name": "Ann",
          "message": "makes sense",
          "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/65.jpg",
          "index": 7
        },
        {
          "name": "Ann",
          "message": "somehow",
          "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/65.jpg",
          "index": 8
        },
        {
          "name": "Ann",
          "message": "very true",
          "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/65.jpg",
          "index": 9
        },
        {
          "name": "Ann",
          "message": "lets make it happen",
          "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/65.jpg",
          "index": 10
        },
        {
          "name": "Ann",
          "message": "last message !!",
          "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/65.jpg",
          "index": 11
        }
      ],
      showButton: "true"
    }
    this.onViewableItemsChanged = this.onViewableItemsChanged.bind(this);
    this.viewabilityConfig = { viewAreaCoveragePercentThreshold: 50 }
  }

    onViewableItemsChanged = ({ viewableItems, changed }) =>
    {
      console.log("Visible items are", viewableItems);
      console.log("Changed in this iteration", changed);
      for (var i = 0; i < viewableItems.length; i++) {
        if (viewableItems[i].key === 10) {
          this.setState({ showButton: 'false' })
        }
        else {
          this.setState({ showButton: 'true' })
        }
    }
    }
  
    
  render() {
    let listViewRef;
    const { showButton } = this.state;

    const EndButtonHandler = () => {
      listViewRef.scrollToEnd({ animated: true });
    }

    const renderScrollButton = () => {
      if (showButton  === 'true') {
        return (
          <TouchableOpacity style={[styles.buttonStyle, { right: 10 }]} onPress={EndButtonHandler}>
            <Text style={styles.text}>{'Scroll Down'}</Text>
          </TouchableOpacity>
        )
       }
      }
    
      return (
        <View style={styles.container}>
          <Text></Text>
          <FlatList
            style={{ flex: 1 }}
            data={this.state.data}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={item => item.index}
            ref={(ref) => {
              listViewRef = ref;
            }}
            onViewableItemsChanged={this.onViewableItemsChanged}
            viewabilityConfig={
              this.viewabilityConfig
            }
          />
          {renderScrollButton()}
        </View>
      )
    }
  }

  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop:40
  },
  listItem:{
    margin:10,
    padding:10,
    backgroundColor:"rgb(144,238,144)",
    width:"80%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5
  },
  listItem1:{
    margin:10,
    padding:10,
    backgroundColor:"rgb(173,216,230)",
    width:"80%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row-reverse",
    borderRadius:5
  },
  buttonStyle: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: 'yellow',
    borderRadius:30
  }
});