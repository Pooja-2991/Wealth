import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const recommend = () => {
  return (
    <View style={styles.container}>
      <Icon style={styles.icon} name="arrow-back-circle-outline" size={40} color="#BFBFBF"/>
      <Text style={styles.text}>Recommended Portfolio</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#440875',
      paddingBottom: 25,
    },
    text:{
        marginTop: 16,
        fontSize: 20,
        marginLeft: 26,
        color:'white',
    },
    icon: {
        marginLeft: 16,
        marginTop: 16,
        // height: 20,
        // width: 20,
    }
  });
   

export default recommend