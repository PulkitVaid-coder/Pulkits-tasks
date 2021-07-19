import React, {Component} from 'react';
import { StyleSheet, View,Text, TouchableOpacity} from 'react-native';
import Accordian from './Accordion'
import { Colors } from './Colors';
import Icon from "react-native-vector-icons/MaterialIcons";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu :[
        { 
          title: 'Non Veg Biryanis', 
          data: [
            {key:'Chicken Biryani\n20 calories', value:false},
            {key:'Mutton Biryani\n20 calories', value:false},
            {key:'Prawns Biryani\n20 calories', value:false},
          ] 
        },
        { 
          title: 'Pizzas',
          data: [
            {key:'Chicken Dominator\n20 calories', value:false},
            {key:'Peri Peri Chicken\n20 calories', value:false},
            {key:'Indie Tandoori Paneer\n20 calories', value:false},
            {key:'Veg Extraveganza\n20 calories', value:false}
          ]
        },
        { 
         title: 'Drinks',
         data: [
           {key:'Cocktail\n20 calories', value:false},
           {key:'Mocktail\n20 calories', value:false},
           {key:'Lemon Soda\n20 calories', value:false},
           {key:'Orange Soda\n20 calories', value:false}
          ]
        },
        { 
          title: 'Deserts',
          data: [
            {key:'Choco Lava Cake\n20 calories', value:false},
            {key:'Gulabjamun\n20 calories', value:false},
            {key:'Kalajamun\n20 calories', value:false},
            {key:'Jalebi\n20 calories', value:false}
          ]
        },
      ]
     }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style = {{justifyContent:"space-between",flexDirection:'row'}}>
          <TouchableOpacity><Icon name={'keyboard-arrow-left'} size={30} color={Colors.BROWN}></Icon></TouchableOpacity>
          <Text style={styles.texxt}>Create Your Own Meal</Text>
        <TouchableOpacity style = {{flexDirection:"row-reverse",justifyContent:"flex-start"}}><Icon name={'shopping-cart'} size={30} color={Colors.BROWN}></Icon></TouchableOpacity>
        </View>
        <Text style={styles.texxxt}>Mini Size</Text>
        { this.renderAccordians() }
      </View>
    );
  }

  renderAccordians=()=> {
    const items = [];
    for (item of this.state.menu) {
        items.push(
            <Accordian 
                title = {item.title}
                data = {item.data}
            />
        );
    }
    return items;
}
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   paddingTop:0,
   backgroundColor:Colors.WHITE,
   
  },
  texxt: {
    fontSize: 20,
    alignSelf: 'center',
   
  },
  texxxt: {
    color: 'grey',
    alignSelf: 'center',
    marginBottom:20
    
  }
});