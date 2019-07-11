import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> HOME </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  }
});