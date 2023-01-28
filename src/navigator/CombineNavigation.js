import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {useSelector} from 'react-redux';
import DashBoard from '../screens/Home/DashBoard';
import MessageList from '../screens/Message/MessageList';
import CustomDrawer from './CustomDrawer';
import Icons from '../components/commons/Icons';
import Group from '../screens/Group/Group';
import {View, StyleSheet} from 'react-native';
import AddPost from '../screens/Post/AddPost';
import Wallet from '../screens/Wallet/Wallet';
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      // backBehavior="history"

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
  const colorTheme = useSelector(state => state.color.colorTheme);

  const defaultTabNavOptions = {
    tabBarStyle: {
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.0,
      shadowColor: colorTheme.primay,
      elevation: 24,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,

      position: 'absolute',
      bottom: 0,
      padding: 10,
      width: '100%',
      zIndex: 0,
      backgroundColor: colorTheme.bottomTabBackground,
      height: verticalScale(50),
      keyboardHidesTabBar: true,
      paddingBottom: verticalScale(10),
      borderTopWidth: 0,
    },
    tabBarShowLabel: false,
    tabBarActiveTintColor: colorTheme.primary,
    tabBarInactiveTintColor: colorTheme.text,
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        ...defaultTabNavOptions,
        tabBarHideOnKeyboard: true,
        unmountOnBlur: true,
      }}>
      <Tab.Screen
        name="home"
        component={DashBoard}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <Icons type={'FontAwesome'} name="home" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="group"
        component={Group}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <Icons type={'FontAwesome'} name="group" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="post"
        component={AddPost}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <View style={styles.iconContainer(colorTheme)}>
              <Icons
                type={'MaterialIcons'}
                name="post-add"
                color={'#fff'}
                size={moderateScale(30)}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="wallet"
        component={Wallet}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <Icons type={'Ionicons'} name="wallet" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="message"
        component={MessageList}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <Icons
              type={'MaterialCommunityIcons'}
              name="message"
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: color => ({
    backgroundColor: color.primary,
    padding: moderateScale(15),
    bottom: verticalScale(0),
    borderRadius: 100,
    position: 'absolute',
  }),
});
