import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../../../constant/colors/Colors';
import {Fonts} from '../../../constant/Fonts';
import {moderateScale, scale} from 'react-native-size-matters';
import Icons from '../../../components/commons/Icons';
const KeyboadButton = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {isNaN(text) ? (
        <Icons
          type={text == 'fp' ? 'MaterialIcons' : 'Ionicons'}
          name={text == 'fp' ? 'fingerprint' : 'backspace-outline'}
          color={Colors.white}
        />
      ) : (
        // <></>
        <Text style={styles.text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default KeyboadButton;

const styles = StyleSheet.create({
  container: {
    width: scale(100),
    aspectRatio: 1 / 0.8,

    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.white,
    fontFamily: Fonts.robotoSemiBold,
    fontSize: moderateScale(30),
  },
});
