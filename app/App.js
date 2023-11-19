import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DiscoverScreen from '../screens/DiscoverScreen';
import Home from '../screens/Home';
import HikingScreen from '../screens/HikingScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Discover" component={DiscoverScreen} />
        <Stack.Screen name='Hiking' component={HikingScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;