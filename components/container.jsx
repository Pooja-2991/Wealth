import { View, Text, StyleSheet, TextInput } from 'react-native'

import React, {useState} from 'react'
import Date from '@/components/Date'
import { useFonts } from "expo-font";


const container = () => {
    const [fontsLoaded] = useFonts({
        "CharmanSerif": require("@/assets/fonts/CharmanSerif-Black.otf"),
        
      });
    
      if (!fontsLoaded) {
        return <Text>Loading fonts...</Text>;
    }
    const [inputText, setInputText] = useState('');

  return (
    <View>
    <View style={styles.container}>
      <Text style={styles.suggest}>Suggested strategy:</Text>
      <View style={styles.moderate}>
        <Text style={styles.mtext}>Moderate Growth</Text>
        <View>
        <View style={styles.equity}>
            <View>
             <Text style={styles.smallhead}>Equity:Debt</Text>
             <Text style={styles.boldtext}>50:50</Text>
            </View>
            <View>
             <Text style={styles.smallhead}>Strategy</Text>
             <Text style={styles.boldtext}>Balanced</Text>
            </View>
            <View>
             <Text style={styles.smallhead}>No. Of Funds</Text>
             <Text style={styles.boldtext}>7</Text>
            </View>
        </View>
        <View style={styles.equity2}>
            <View>
             <Text style={styles.smallhead}>CAGR (3 Yrs)</Text>
             <Text style={styles.boldtext}>18 %</Text>
            </View>
            <View>
             <Text style={styles.smallhead}>Rebalance Frequency</Text>
             <Text style={styles.boldtext}>Quarterly</Text>
            </View>
        </View>
        </View>
      </View>
      <Text style={styles.monthlysip}>Pick a monthly SIP date*</Text>
      <Date/>
    </View>
    
    </View>
    
  )
}

const styles = StyleSheet.create({
    container:{
        borderRadius: 20,
        backgroundColor: 'white',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    suggest:{
        fontWeight: 'semibold',
        fontSize: 16,
        marginLeft: 20,
        color: '#595959',
        paddingTop: 24,
        paddingBottom: 24,
        fontFamily: "CharmanSerif",

    },
    moderate:{
        marginLeft: 23.5,
        paddingTop: 24,
        paddingRight: 1.5,
        backgroundColor: '#F5ECFB',
        marginRight: 23.5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        borderRadius: 12,

    },
    mtext:{
        fontSize: 20,
        fontWeight: 'semibold',
        paddingBottom: 24,
        paddingLeft: 17.5,
        fontFamily: "CharmanSerif",
    },
    equity:{
        flexDirection: 'row',
        gap: 60,
        backgroundColor: 'white',
        margin: 0,
        paddingLeft: 16,
        paddingTop: 16,
    },
    equity2: {
        flexDirection: 'row',
        gap: 56,
        backgroundColor: 'white',
        margin: 0,
        paddingLeft: 16,
        paddingTop: 10,
        paddingBottom: 16,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
    },
    monthlysip:{
        marginLeft: 20,
        marginTop: 48,
        fontSize: 14,
        fontWeight: 'medium',
        color: '#595959',
        fontFamily: "NotoSans",
        paddingBottom: 4,
    },
    input:{
        marginLeft: 20,
        marginRight: 20,
        height:50,
        borderColor: 'grey',
        borderRadius: 14,
        paddingLeft: 12,
        marginTop: 8,
    },
    smallhead:{
        fontSize: 10,
        fontWeight: 'medium',
        color: '#8C8C8C',
        fontFamily: "NotoSans"
    },
    boldtext:{
        fontSize: 14,
        fontWeight: 'medium',
        color: '#595959',
        fontFamily: "NotoSans"
    }

})

export default container