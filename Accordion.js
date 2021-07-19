
// import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager} from "react-native";
// //import { Colors } from './Colors';
// import Icon from "react-native-vector-icons/MaterialIcons";

// export default class Accordian extends Component{

//     constructor(props) {
//         super(props);
//         this.state = { 
//           data: props.data,
//           expanded : false,
//         }

//         if (Platform.OS === 'android') {
//             UIManager.setLayoutAnimationEnabledExperimental(true);
//         }
//     }
  
//   render() {

//     return (
//        <View>
//             <TouchableOpacity ref={this.accordian} style={styles.row} onPress={()=>this.toggleExpand()}>
//                 <Text style={[styles.title, styles.font]}>{this.props.title}</Text>
//                 <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'black'} />
//             </TouchableOpacity>
//             <View style={styles.parentHr}/>
//             {
//                 this.state.expanded &&
//                 <View style={styles.child}>
//                     <Text>{this.props.data}</Text>    
//                 </View>
//             }
            
//        </View>
//     )
//   }

//   toggleExpand=()=>{
//     LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
//     this.setState({expanded : !this.state.expanded})
//   }

// }

// const styles = StyleSheet.create({
//     title:{
//         fontSize: 14,
//         fontWeight:'bold',
//         color: 'black',
//     },
//     row:{
//         flexDirection: 'row',
//         justifyContent:'space-between',
//         height:56,
//         paddingLeft:25,
//         paddingRight:18,
//         alignItems:'center',
//         backgroundColor: 'green',
//     },
//     parentHr:{
//         height:1,
//         color: 'white',
//         width:'100%'
//     },
//     child:{
//         backgroundColor: 'yellow',
//         padding:16,
//     }
    
// });

import React, {Component} from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet, LayoutAnimation, Platform, UIManager} from "react-native";
import { Colors } from './Colors';
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Accordian extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          data: props.data,
          expanded : false,
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
  
  render() {

    return (
		<View>
			{/* <Icon name = {'chevron-back-outline'} size = {20} color = {'black'}></Icon> */}
            <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
                <Text style={[styles.title]}>{this.props.title}</Text>
                <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={Colors.WHITE} />
            </TouchableOpacity>
            <View style={styles.parentHr}/>
			{
				this.state.expanded &&
				<View style={{}}>
					<FlatList
						data={this.state.data}
						numColumns={1}
						scrollEnabled={false}
						renderItem={({ item, index }) =>
							<View>
								<TouchableOpacity style={[styles.childRow, styles.button, item.value ? styles.btnActive : styles.btnInActive]} onPress={() => this.onClick(index)}>
									<Text style={[styles.font, styles.itemInActive]} >{item.key}</Text>
									<Icon name={item.value ? 'check-circle' : 'circle'} size={24} color={item.value ? Colors.BROWN : Colors.LIGHTGRAY} />
								</TouchableOpacity>
								<View style={styles.childHr} />
							</View>
							
						} />
				</View>
			}
		</View>
	)
  }

  onClick=(index)=>{
    const temp = this.state.data.slice()
    temp[index].value = !temp[index].value
    this.setState({data: temp})
  }

  toggleExpand=()=>{
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded : !this.state.expanded})
  }

}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        width:'100%',
        height:54,
        alignItems:'center',
        paddingLeft:35,
        paddingRight:35,
        fontSize: 12,
    },
    title:{
        fontSize: 14,
        fontWeight:'bold',
        color: Colors.WHITE,
    },
    itemActive:{
        fontSize: 12,
        color: Colors.BROWN,
    },
    itemInActive:{
        fontSize: 12,
        color: Colors.DARKGRAY,
    },
    btnActive:{
        borderColor: Colors.BROWN,
    },
    btnInActive:{
        borderColor: Colors.DARKGRAY,
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
		backgroundColor: Colors.BROWN,
		marginBottom:5
    },
    childRow:{
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor: Colors.GRAY,
    },
    parentHr:{
        height:1,
        color: Colors.WHITE,
        width:'100%'
    },
    childHr:{
        height:1,
        backgroundColor: Colors.LIGHTGRAY,
        width:'100%',
    },
    colorActive:{
        borderColor: Colors.BROWN,
    },
    colorInActive:{
        borderColor: Colors.DARKGRAY,
    }
    
});
