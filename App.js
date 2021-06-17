/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//import 'react-native-gesture-handler';
import * as React from 'react';
import FlatList from './Flatlist'
import Progress from './ProgressBar'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function ProgressScreen() {
  return (
    <Progress></Progress>
  );
}

function FlatListScreen() {
  return (
    <FlatList></FlatList>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="ProgressBar" component={ProgressScreen} />
        <Tab.Screen name="Flatlist" component={FlatListScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
