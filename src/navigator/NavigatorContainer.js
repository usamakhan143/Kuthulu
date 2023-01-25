import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './CombineNavigation';
const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      {/* <AuthStackNavigator /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
