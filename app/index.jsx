import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const index = () => {
    const  router = useRouter()
  return (
    <View  style={styles.container}>
      <Button title='Go to Welcome' onPress={() => router.push('/welcome')} />
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})