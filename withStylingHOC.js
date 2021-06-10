import React from 'react';
import {
	Text,
	View
} from 'react-native';

export const withStyling = (BaseComponent) => (props) => (
  <BaseComponent {...props} style={{ backgroundColor: 'grey' }}/>
);
