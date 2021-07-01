import color from 'color';
import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,Text,View
} from 'react-native';
import { ListItem, Icon } from 'react-native-elements'
import { connect } from 'react-redux';
import { deleteFood } from './actions/food';

class FoodList extends Component {

	static navigationOptions = {
		title: 'Food List',
		headerTintColor: 'white',
		headerStyle: {
			backgroundColor: 'green',
		},
	};
	

	render() {
		const arr = this.props.foods
		// const Displayy = () => {
		// 		for (let i = 0; i < arr.length; i++)
		// 		{
		// 			console.log(this.props.foods[i].name)
		// 			return (<View>
		// 					<Text>{this.props.foods[i + 1].name} </Text>
		// 					</View>)
		// 		}
		// 	}
		
		return (
		
			//   <FlatList style={styles.listContainer}
			//     data={this.props.foods}
			//     keyExtractor={(item, index) => item.key.toString()}
			//     renderItem={
			//       (data) =>
			// 		  <ListItem
			// 		  style = {{color:'black'}}
			// 		  title={ data.item.name }
			//           bottomDivider
			//           rightIcon={<Icon
			//             name='delete'
			//             size={36}
			//             onPress={() => this.props.delete(data.item.key)} />
			//           }
			//         />
			//     }
			// />
			// <View>{Displayy()}</View>
			<View>
				{this.props.foods.map(obj => (
					<Text>{obj.name} </Text>
				))}
			</View>
				
		);
	};
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: 'grey',
    padding: 16
  },
  listText: {
	  fontSize: 30,
	  color:'black'
  },
});

const mapStateToProps = (state) => {
  return {
    foods: state.foodReducer.foodList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (key) => dispatch(deleteFood(key))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FoodList);




