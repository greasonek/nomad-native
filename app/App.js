import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const image = { uri: "https://images.unsplash.com/photo-1548932134-3d7d765bece2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"};
// import { useFonts } from "expo-font";

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   ZenLoop: require('../assets/ZenLoop-Regular.ttf'),
  // });

  // if(!fontsLoaded){
  //   return null;
  // }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.text}>NOMAD</Text>
      </ImageBackground>
    </View>
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
  text: {
    color: 'ivory',
    fontSize: 82,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'AmaticSC-Regular',
  },
  fontText: {
  }
});
