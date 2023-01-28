import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './CombineNavigation';
import SecurityPin from '../screens/SecurityPin';
import {useSelector} from 'react-redux';
const AppNavigationContainer = () => {
  const showPin = useSelector(state => state.auth.showPin);
  return (
    <NavigationContainer>
      {/* <AuthStackNavigator /> */}
      {showPin ? <SecurityPin /> : <DrawerNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
