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
        <stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'My Home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <stack.Screen
          name="Detail"
          component={Detail}
          options={{
            title: 'My Details',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <stack.Screen
          name="Smile"
          component={Smile}
          options={{
            title: 'My Smile',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
