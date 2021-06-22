import React, { Component } from 'react';
import { View, StyleSheet, Button,Text } from 'react-native';

export default function Card(props) {
	return (
		<View style={styles.card}>
			<View style={styles.cardContent}>
				<Text>NAME :{props.children.name}</Text>
				<Text>GENDER :{props.children.gender}</Text>
				<Text>AGE :{props.children.age}</Text>
				<Text>LOCATION :{props.children.location}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 6,
		elevation: 3,
		backgroundColor: '#fff',
		shadowOffset: { width: 1, height: 1 },
		shadowColor: '#333',
		shadowOpacity: 0.3,
		shadowRadius: 2,
		marginHorizontal: 4,
		marginVertical :6
	},
	cardContent: {
		marginHorizontal: 18,
		marginVertical:10
	}

})
