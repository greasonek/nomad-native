import React from 'react'
import { View, Text, SafeAreaView, StatusBar, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const DiscoverScreen = ({ navigation }) => {
  const categoryIcons = [
    <Icon name='directions-car' size={28} color='ivory'/>,
    <Icons name='hiking' size={28} color='ivory'/>,
    <Icons name='tent' size={28} color='ivory'/>,
    <Icon name='hotel' size={28} color='ivory'/>,

  ]
  const ListCategories = () => {
    return <View style={style.categoryContainer}>
      {categoryIcons.map((icon, index)=>(
      <View key={index} style={style.iconContainer}>
        <TouchableOpacity onPress={()=> navigation.navigate('Hiking')}>
        {icon}
        </TouchableOpacity>
      </View>
      ))}
    </View>
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#e4f6f8'}}>

      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Home')}>
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

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: '#e4f6f8', height:50, paddingHorizontal: 10}}>
          <View style={{flex:1}}>
            <Text style={style.headingTitle}>Discover what's out there</Text>
            <View style={style.inputContainer}>
              <Icon name='explore' size={28} margin={3}/>
              <TextInput
                  placeholder="Where are you going?"
                  style={{color: 'black'}}
                />
            </View>
          </View>
        </View>

        {/* <View>
        <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate()}>
        <View>
        <Text style={style.searchBtn}>Let's Go!</Text>
        </View>
        </TouchableOpacity>
        
      </View> */}
      </ScrollView>
      <ListCategories/>
      <View style={style.mapContainer}>
        <MapView style={style.map} />
      </View>
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
  mapContainer: {
    flex: 3,
    flexDirection: 'column',
  },
  map: {
    width: '100%',
    height: '100%',

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
  categoryContainer: {
    marginTop: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: '#9adbb3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin:10,
    marginTop:0
  },
  // searchBtn: {

  // }
})

export default DiscoverScreen