
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

export default class App extends React.Component {
  state = {
    data:[
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
            "index":2
            
        },
        {
            "name": "Michelle",
            "message": "How are you guys ?",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/68.jpg",
            "index":3
        },
        {
            "name": "Ann",
            "message": "we are good",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/65.jpg",
            "index":4
        },

    ]
  }


  render(){
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex:1}}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item}/>}
          keyExtractor={item => item.index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop:60
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
  }
});