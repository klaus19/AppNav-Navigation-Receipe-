import React from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';

function Detail() {
  return (
    <View style={styles.container}>
      <Text style={styles.textProps}>Hello, Detail!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make the container take up the entire screen
    justifyContent: 'center', // Vertically center the content within the View
    alignItems: 'center', // Horizontally center the content within the View
  },
  textProps: {
    color: 'black',
  },
});

export default Detail;
