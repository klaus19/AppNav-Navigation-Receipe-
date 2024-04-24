import React from 'react';
import {View, Text, Button} from 'react-native';
import {StyleSheet} from 'react-native';

function Detail({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textProps}>Hello, Detail!</Text>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.btnStyle1}
          title="Back"
          onPress={() => navigation.goBack()}
        />
        <View style={styles.space} />
        <Button
          style={styles.btnStyle2}
          title="Go"
          onPress={() => navigation.navigate('Smile')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textProps: {
    color: 'black',
  },
  buttonContainer: {
    marginTop: 20, // Add margin top for spacing from the text
  },
  btnStyle1: {
    backgroundColor: 'purple',
    width: 200, // Adjust the width as needed
    marginBottom: 10,
  },
  space: {
    height: 10, // Adjust the height to set the space between buttons
  },
  btnStyle2: {
    backgroundColor: 'blue', // Adjust the background color as needed
    width: 200, // Adjust the width as needed
    marginTop: 10, // Adjust the margin top as needed
  },
});

export default Detail;
