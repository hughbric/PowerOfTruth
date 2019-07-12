import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { exportAllDeclaration } from '@babel/types';

export default class Home extends Component {
  

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.logoContainer}>
            By the Power of Truth
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    marginTop: 40,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'HelveticaNeue-Bold'
  }
});