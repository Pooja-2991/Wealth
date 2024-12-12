import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Recommend from '@/components/recommend'
import Container from '@/components/container'
import Date from '@/components/Date'

const index = () => {
  return (

    <View style={styles.background}>
      <Recommend />
      <Container />
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'purple',
  },
})

export default index
