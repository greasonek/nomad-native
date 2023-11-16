import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { AmaticSC_700Bold } from "@expo-google-fonts/amatic-sc";
const image = { uri: "https://images.unsplash.com/photo-1548932134-3d7d765bece2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"};
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    AmaticSC_700Bold,
  });

  if(!fontsLoaded){
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.titleText}>NOMAD</Text>
        <Text style={styles.buttonText}>Explore</Text>
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
  titleText: {
    color: 'ivory',
    fontSize: 152,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'AmaticSC_700Bold',
  },
  buttonText: {
    color: 'ivory',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'AmaticSC_700Bold',
  }
});
