import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import Icons from '../../commons/Icons';
import {Fonts} from '../../../constant/Fonts';
import {useSelector} from 'react-redux';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

const DrawerGroupContainer = ({title, imageUrl, containerStyle, onPress}) => {
  const color = useSelector(state => state.color.colorTheme);

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <Image style={styles.image} source={{uri: imageUrl}} />
      <Text style={styles.titleText(color)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default DrawerGroupContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(14),
  },
  image: {
    width: scale(24),
    borderRadius: 100,
    aspectRatio: 1 / 1,
  },
  titleText: color => ({
    fontFamily: Fonts.robotoMedium,
    color: color.text,
    fontSize: moderateScale(16),
    paddingLeft: scale(10),
  }),
});
