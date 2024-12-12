import { useFonts } from "expo-font";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const recommend = () => {
  const [fontsLoaded] = useFonts({
    "CharmanSerif": require("@/assets/fonts/CharmanSerif-Black.otf"),

  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }
  return (
    <View style={styles.container}>
      <Icon style={styles.icon} name="arrow-back-circle-outline" size={40} color="#BFBFBF" />
      <Text style={styles.text}>Recommended Portfolio</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 25,
    color: '#BF40BF',
  },
  text: {
    marginTop: 16,
    fontSize: 20,
    marginLeft: 26,
    color: 'white',
    fontFamily: "CharmanSerif-regular",
  },
  icon: {
    marginLeft: 16,
    marginTop: 16,
  }
});


export default recommend

