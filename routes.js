import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Loading from '~/screens/Loading';
import Login from '~/screens/Login';
import Home from '~/screens/Home';
import Create from '~/screens/Create';
import Edit from '~/screens/Edit';
import Feedback from '~/screens/Feedback';

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Loading" headerMode="none">
      <Stack.Screen name="Loading" component={Loading} />

      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Create" component={Create} />
      <Stack.Screen name="Edit" component={Edit} />
      <Stack.Screen name="Feedback" component={Feedback} />
    </Stack.Navigator>

  </NavigationContainer>
)


export default Routes;