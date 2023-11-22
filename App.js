import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DiscoverScreen from './screens/DiscoverScreen';
import Home from './screens/Home';
import HikingScreen from './screens/HikingScreen';
import TrailDetailsScreen from './screens/TrailDetailsScreen';
import CampingScreen from './screens/CampingScreen';
import CampDetailsScreen from './screens/CampDetailsScreen';
import ProfileScreen from './screens/ProfileScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Discover" component={DiscoverScreen} />
        <Stack.Screen name='Hiking' component={HikingScreen}/>
        <Stack.Screen name="TrailDetails" component={TrailDetailsScreen}/>
        <Stack.Screen name="Camping" component={CampingScreen}/>
        <Stack.Screen name="CampingDetails" component={CampDetailsScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;