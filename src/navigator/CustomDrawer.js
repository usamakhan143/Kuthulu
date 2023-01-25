import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Drawer, Switch} from 'react-native-paper';
import {textStyles} from '../constant/TextStyle';
import CustomButton from '../components/buttons/CustomButton';
import {scale, verticalScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';

import {switchTheme} from '../redux/actions/ThemeActions';
import {IS_SIGNIN} from '../redux/reducers/AuthReducer';

export default function CustomDrawer({navigation, activeTab}) {
  const darkMode = useSelector(state => state.color.darkMode);
  const dispatch = useDispatch();
  const toggleSwitch = () => dispatch(switchTheme(darkMode));
  const color = useSelector(state => state.color.colorTheme);

  return (
    <View style={{flex: 1, backgroundColor: color.background}}>
      <DrawerContentScrollView>
        <View>
          <View style={styles.userinfo}>
            <Image
              source={{
                uri: 'https://t3.ftcdn.net/jpg/03/22/54/70/360_F_322547046_NkZWtsH6HdNY0XDeEqAPlJH3DhgjgPpt.jpg',
              }}
              style={{
                width: 80,

                borderRadius: 100,
                aspectRatio: 1 / 1,
              }}
            />
            <Text
              style={[textStyles.title(color), {marginTop: verticalScale(8)}]}>
              Developer
            </Text>
          </View>
          <View style={{marginTop: verticalScale(15)}}>
            <Switch
              trackColor={{
                false: darkMode ? '#767577' : 'purple',
                true: darkMode ? '#81b0ff' : 'pink',
              }}
              thumbColor={darkMode ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={darkMode}
            />
          </View>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.drawerBottom(color)}>
        <CustomButton
          width={245}
          title={'Logout'}
          paddingVertical={8}
          marginBottom={10}
          onPress={() => dispatch({type: IS_SIGNIN, payload: false})}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerBottom: color => ({
    backgroundColor: color.background,

    marginBottom: 12,
  }),
  userinfo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(12),
  },
  draweSection: {
    flexDirection: 'row-reverse',
    // paddingLeft: scale(25),
    marginTop: verticalScale(15),
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 0.5,
    paddingVertical: verticalScale(3),
  },
  draweimgae: {
    width: scale(30),
    height: verticalScale(35),
  },
});
