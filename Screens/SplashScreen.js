import { StyleSheet, View,Image } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start woapp!</Text>
      <StatusBar style="auto" /> */}
      <Image source={require('../assets/splash/splash.png')} />
    </View>
  )
}

export default SplashScreen;

const styles = StyleSheet.create({})