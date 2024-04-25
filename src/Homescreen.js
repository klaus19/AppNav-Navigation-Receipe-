import React from 'react';
import {View, Text, Button} from 'react-native';
import {StyleSheet} from 'react-native';

function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textProps}>Hello, Home!</Text>
      <Button
        style={styles.btnStyle}
        title="Go"
        onPress={() =>
          navigation.navigate('Detail', {
            itemId: 89,
            otherParam: 'anything you want here',
          })
        } // Removed the extra closing parenthesis
      />
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
  btnStyle: {
    justifyContent: 'center',
    backgroundColor: 'purple',
    width: 200,
  },
});

export default Home;
