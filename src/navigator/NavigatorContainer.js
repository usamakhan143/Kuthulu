import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './CombineNavigation';
import SecurityPin from '../screens/SecurityPin';
const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      {/* <AuthStackNavigator /> */}
      {/* <DrawerNavigator /> */}
      <SecurityPin />
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
