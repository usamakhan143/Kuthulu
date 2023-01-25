import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {verticalScale} from 'react-native-size-matters';
import {useSelector} from 'react-redux';
import DashBoard from '../screens/Home/DashBoard';
import MessageList from '../screens/Message/MessageList';
import CustomDrawer from './CustomDrawer';
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      // backBehavior="history"
      screenOptions={{drawerPosition: 'right'}}
      backBehavior="history"
      drawerContent={props => {
        return <CustomDrawer {...props} />;
      }}
      initialRouteName="Home">
      <Drawer.Screen
        name="Dashboard"
        component={BotTab}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}
export const BotTab = navigation => {
  const color = useSelector(state => state.color.colorTheme);

  const defaultTabNavOptions = {
    tabBarStyle: {
      backgroundColor: color.background,
      elevation: 0,
      height: verticalScale(65),
      //color you want to change
      keyboardHidesTabBar: true,
      paddingBottom: verticalScale(10),
      borderTopWidth: 0,
    },
    tabBarShowLabel: false,
    tabBarActiveTintColor: 'black',
    tabBarInactiveTintColor: 'black',
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        ...defaultTabNavOptions,
        tabBarHideOnKeyboard: true,
        unmountOnBlur: true,
        showLabel: false,
        tabBarLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={DashBoard}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => <></>,
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageList}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => <></>,
        }}
      />
    </Tab.Navigator>
  );
};
