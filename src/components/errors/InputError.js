import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {scale, moderateScale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../constant/Colors';
import {Fonts} from '../../constant/Fonts';
const InputError = ({text}) => {
  return <Text style={styles.textStyle}>{text}</Text>;
};

export default InputError;

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: Fonts.montserratMedium,
    paddingTop: verticalScale(5),
    fontSize: moderateScale(14),
    color: Colors.fontError,
    marginLeft: scale(30),
  },
});
