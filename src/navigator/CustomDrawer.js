import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Drawer, Switch} from 'react-native-paper';

import CustomButton from '../components/buttons/CustomButton';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';

import {switchTheme} from '../redux/actions/ThemeActions';
import {IS_SIGNIN} from '../redux/reducers/AuthReducer';
import DrawerHeader from '../components/container/drawer/DrawerHeader';
import Icons from '../components/commons/Icons';
import DrawerContentContainer from '../components/container/drawer/DrawerContentContainer';
import {FlatList} from 'react-native-gesture-handler';
import {CrytoCurrency} from '../constant/DummyData';
import DrawerGroupContainer from '../components/container/drawer/DrawerGroupContainer';

export default function CustomDrawer({navigation, activeTab}) {
  const darkMode = useSelector(state => state.color.darkMode);
  const dispatch = useDispatch();
  const toggleSwitch = () => dispatch(switchTheme(darkMode));
  const color = useSelector(state => state.color.colorTheme);
  const [showdropItem, setShowdropItem] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color.background,
        paddingHorizontal: scale(15),
      }}>
      <DrawerContentScrollView>
        <DrawerHeader />

        <DrawerContentContainer
          iconType="FontAwesome"
          iconName="user"
          title="Profile"
        />
        <DrawerContentContainer
          iconType="FontAwesome"
          iconName="users"
          title="Group MemberShips "
          showDropDown={true}
          containerStyle={[
            styles.drawerContanerStyle(color),
            {paddingBottom: verticalScale(7)},
          ]}
          iconSize={moderateScale(16)}
          onPress={() => setShowdropItem(prev => !prev)}
        />
        {showdropItem &&
          CrytoCurrency.map((item, index) => {
            return (
              <DrawerGroupContainer
                key={index}
                imageUrl={item.image}
                title={item.name}
                containerStyle={{
                  paddingBottom: index == 3 ? verticalScale(7) : 0,
                  borderBottomWidth: index == 3 ? 0.5 : 0,

                  borderColor: color.textLight,
                }}
              />
            );
          })}
        <DrawerContentContainer
          iconType="Ionicons"
          iconName="create"
          title="Mint Groups"
          iconSize={moderateScale(20)}
        />
        <DrawerContentContainer
          iconType="Ionicons"
          iconName="settings"
          title="Settings"
          iconSize={moderateScale(20)}
        />
      </DrawerContentScrollView>
      <View style={styles.darkModeIcon}>
        <Icons
          name={darkMode ? 'moon' : 'sun'}
          type={darkMode ? 'Feather' : 'Feather'}
          onPress={toggleSwitch}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerBottom: color => ({
    backgroundColor: color.background,

    marginBottom: 12,
  }),
  drawerContanerStyle: color => ({
    borderBottomWidth: moderateScale(0.5),
    borderColor: color.textLight,
  }),
  darkModeIcon: {
    position: 'absolute',
    bottom: 40,
    left: 20,
  },
});
