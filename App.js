import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/Homescreen';
import Detail from './src/DetailsScreen';
import Smile from './src/SmileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Detail" component={Detail} />
        <stack.Screen name="Smile" component={Smile} />
      </stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
