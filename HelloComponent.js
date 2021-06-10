import React from 'react';
import {
	Text,
	View
} from 'react-native';

export const HelloComponent = ({ name, ...otherProps }) => (
	<View {...otherProps}>
	<Text>Hello world!{name}</Text>
	</View>
);
