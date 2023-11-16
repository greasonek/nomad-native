import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'expo-image';


export default HomeScreen = () => {
  return (
    <><View style={styles.container}>

      <Text>NOMAD</Text>
    </View>
    <View style={styles.container}>
        <Image
          style={styles.image}
          source="https://images.unsplash.com/photo-1548932134-3d7d765bece2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          placeholder={blurhash}
          contentFit="cover"
          transition={1000} />
      </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
