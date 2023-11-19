import { ImageBackground, StyleSheet, Text, ScrollView, SafeAreaView, StatusBar, View, TouchableOpacity } from 'react-native';
import { AmaticSC_700Bold } from "@expo-google-fonts/amatic-sc";
const image = { uri: "https://images.unsplash.com/photo-1548932134-3d7d765bece2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"};
import { useFonts } from "expo-font";
import { useRouter } from 'expo-router';
import DiscoverScreen from './DiscoverScreen.js';
import MenuBtn from '../components/MenuBtn';
import { icons } from '../constants/icons.js';
import { useState } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Home = ({navigation})  => {
  const [fontsLoaded] = useFonts({
    AmaticSC_700Bold,
  });
  // console.log(fontsLoaded);
  // if(!fontsLoaded){
  //   return <Text>Loading...</Text>;
  // }

  const Stack = createNativeStackNavigator();
  const router = useRouter();
  // const [explore, setExplore] = useState();

  return (

    <SafeAreaView style={styles.container}>

      <StatusBar translucent backgroundColor='rgba(0,0,0,0)' />

        <View style={styles.heading}>
        <Icon name='menu' size={28} color='#66BCD9'/>
        <Icon name='person' size={28} color='#66BCD9'/>
      </View>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.titleText}>NOMAD</Text>
        <Text style={styles.subtitleText}>Your all in one travel planner</Text>


        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Discover')}>
            <View>
              <Text style={styles.btn}>Explore</Text>
            </View>
        </TouchableOpacity>

      </ImageBackground>

    <Stack.Screen 
      options={{
        headerLeft: () => (
          <MenuBtn iconUrl={icons} dimension='60%' />
        )
      }}
      />
      <Stack.Screen name='Discover' component={DiscoverScreen}/>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  titleText: {
    color: 'ivory',
    fontSize: 102,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'AmaticSC_700Bold',
  },
  subtitleText: {
    color: 'ivory',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'AmaticSC_700Bold',
  },
  btn: {
    height: 50,
    width: 120,
    backgroundColor: '#e4f6f8',
    margin:'auto',
    marginLeft: 120,
    marginTop: 10,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'AmaticSC_700Bold',
  },
    heading: {
    paddingVertical: 20, 
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:'#e4f6f8',
  },
});

export default Home;