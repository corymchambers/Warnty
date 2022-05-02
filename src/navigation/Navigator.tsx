import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';

const Navigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="First" component={FirstScreen} />
      <Stack.Screen name="Second" component={SecondScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
