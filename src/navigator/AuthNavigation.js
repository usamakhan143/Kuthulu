import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../screens/Auth/Login';
const AuthStack = createNativeStackNavigator();
export const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown:false}}>
      <AuthStack.Screen
        name="login"
        component={Login}
       
      />
    </AuthStack.Navigator>
  );
};
