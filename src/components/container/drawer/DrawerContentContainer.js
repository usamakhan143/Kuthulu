import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icons from '../../commons/Icons';
import {Fonts} from '../../../constant/Fonts';
import {useSelector} from 'react-redux';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const DrawerContentContainer = ({
  iconType,
  iconName,
  title,
  iconSize = moderateScale(24),
  showDropDown,
  containerStyle,
  onPress,
}) => {
  const color = useSelector(state => state.color.colorTheme);

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <View>
        <Icons type={iconType} name={iconName} size={iconSize} />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.titleText(color)}>{title}</Text>
        {showDropDown && <Icons type="Feather" name="chevron-down" />}
      </View>
    </TouchableOpacity>
  );
};

export default DrawerContentContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(20),
  },
  rightContainer: {
    flexDirection: 'row',

    alignItems: 'center',
    width: scale(190),
    justifyContent: 'space-between',
  },
  titleText: color => ({
    fontFamily: Fonts.robotoRegular,
    color: color.text,
    fontSize: moderateScale(16),
    paddingLeft: scale(18),
  }),
});
