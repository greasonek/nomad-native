import React from 'react'
import { Text, TextInput, View, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, StyleSheet, ImageBackground, FlatList, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import trails from '../constants/trails';
const {width} = Dimensions.get('screen');

const HikingScreen = ({navigation}) => {

const TrailCard = ({trails}) => {
  return (
      <ImageBackground style={style.cardImage} src={trails.image}></ImageBackground>
  )
};
  return (
    <SafeAreaView>
    <View>
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('Discover')}>
        <View>
          <Text style={style.btn}>Go Back</Text>
        </View>
    </TouchableOpacity>
  </View>
  

  <StatusBar translucent={false} backgroundColor='#e4f6f8'/>

<View style={style.heading}>
  <Icon name='menu' size={28} color='#66BCD9'/>
  <Icon name='person' size={28} color='#66BCD9'/>
</View>

{/* <ScrollView showsVerticalScrollIndicator={false}>

<View style={{backgroundColor: '#e4f6f8', height:50, paddingHorizontal: 10}}>
  <View style={{flex:1}}>
    <Text style={style.headingTitle}>Hiking</Text>
    <View style={style.inputContainer}>
      <Icon name='explore' size={28} margin={3}/>
      <TextInput
          placeholder="Where are you going?"
          style={{color: 'black'}}
        />
    </View>
  </View>
</View> */}
<Text style={style.trailsStyle}>Trails</Text>
<View>
  <FlatList 
    contentContainerStyle={{paddingLeft:20}}
    // horizontal
    // showsHorizontalScrollIndicator={false}
    data={trails} 
    renderItem={({item})=><TrailCard trail={item}/>}
    />
</View>
    {/* </ScrollView> */}
    </SafeAreaView>
  )
}
const style = StyleSheet.create({
  btn: {
    height: 40,
    width: 100,
    backgroundColor: 'ivory',
    margin:'auto',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'AmaticSC_700Bold',
  },
  heading: {
    paddingVertical: 10, 
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#e4f6f8',
  },
  headingTitle: {
    color: '#66BCD9',
    fontWeight: 'bold',
    fontFamily: 'AmaticSC_700Bold',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign:'center',
    // margin: 10,
  },
  inputContainer: {
    height: 50,
    width: '100%',
    backgroundColor: 'ivory',
    borderWidth: 1,
    borderRadius: 7,
    position: 'absolute',
    top: 70,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 12,
  },
  trailsStyle:{
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardImage: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
  },
});
export default HikingScreen