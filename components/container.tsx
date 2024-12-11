import { View, Text, StyleSheet, TextInput } from 'react-native'

import React, {useState} from 'react'

const container = () => {

    const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.suggest}>Suggested strategy:</Text>
      <View style={styles.moderate}>
        <Text style={styles.mtext}>Moderate Growth</Text>
        <View style={styles.shadow}>
        <View style={styles.equity}>
            <View>
             <Text>Equity:Debt</Text>
             <Text>50:50</Text>
            </View>
            <View>
             <Text>Strategy</Text>
             <Text>Balanced</Text>
            </View>
            <View>
             <Text>No. Of Funds</Text>
             <Text>7</Text>
            </View>
        </View>
        <View style={styles.equity2}>
            <View>
             <Text>CAGR (3 Yrs)</Text>
             <Text>18 %</Text>
            </View>
            <View>
             <Text>Rebalance Frequency</Text>
             <Text>Quarterly</Text>
            </View>
        </View>
        </View>
      </View>
      <Text style={styles.monthlysip}>Pick a monthky SIP date*</Text>
      <TextInput
        style={styles.input}
        placeholder="Select date"
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        borderRadius: 20,
        

    },
    suggest:{
        fontWeight: 'semibold',
        fontSize: 16,
        marginLeft: 20,
        color: '#595959',
        paddingTop: 24,
        paddingBottom: 24,

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

    },
    mtext:{
        fontSize: 20,
        fontWeight: 'semibold',
        paddingBottom: 24,
        paddingLeft: 17.5,
    },
    equity:{
        flexDirection: 'row',
        gap: 28,
        backgroundColor: 'white',
        margin: 0,
        paddingLeft: 16,
        paddingTop: 16,
    },
    equity2: {
        flexDirection: 'row',
        gap: 28,
        backgroundColor: 'white',
        margin: 0,
        paddingLeft: 16,
        paddingTop: 10,
        paddingBottom: 16,
    },
    monthlysip:{
        marginLeft: 20,
        marginTop: 48,

    },
    input:{
        marginLeft: 20,
        marginRight: 20,
        height:50,
        borderColor: 'grey',
        borderRadius: 14,
        paddingLeft: 12,
    },

    smallhead:{
        fontSize:10
    }

})

export default container