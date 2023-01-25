import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {scale, moderateScale, verticalScale} from 'react-native-size-matters';

import {Fonts} from '../../constant/Fonts';

const CustomButton = ({
  title,
  width,
  backgoundColor,
  marginTop,
  fontColor,
  borderWidth,
  borderColor,
  onPress,
  marginRight,
  paddingVertical,
  fontSize,
  marginBottom,
  loading,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.buttonContainer(
        width,
        backgoundColor,
        marginTop,
        borderWidth,
        paddingVertical,
        borderColor,
        marginRight,
        marginBottom,
        loading,
      )}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator size="small" color={'#fff'} />
      ) : (
        <Text style={styles.titleStyle(fontColor, fontSize)}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: (
    width,
    backgroundColor = 'purple',
    marginTop,
    borderWidth,
    paddingVertical,
    borderColor,
    marginRight,
    marginBottom,
    loading,
  ) => ({
    width: width ? width : scale(320),
    backgroundColor,
    alignSelf: 'center',
    paddingVertical: paddingVertical ? paddingVertical : verticalScale(12),
    borderRadius: moderateScale(40),
    marginTop: marginTop ? marginTop : verticalScale(10),
    borderWidth: borderColor ? 1 : 0,
    marginRight: marginRight ? marginRight : 0,
    borderColor: borderColor ? borderColor : 'yellow',
    marginBottom: marginBottom ? marginBottom : 0,
    opacity: loading ? 0.6 : 1,
  }),
  titleStyle: (color = 'white', fontSize) => ({
    color: color,
    fontSize: fontSize ? fontSize : moderateScale(17),
    textAlign: 'center',
    fontFamily: Fonts.montserratBold,
  }),
});
