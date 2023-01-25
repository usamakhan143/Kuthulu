import React, {forwardRef, useState} from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import {useController} from 'react-hook-form';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../constant/Colors';
import {Fonts} from '../../constant/Fonts';
import Entypo from 'react-native-vector-icons/Entypo';

// import Colors from '../constants/Colors';

const Input = forwardRef((props, ref) => {
  const [hidePassword, setHidePassword] = useState(true);

  const {field} = useController({
    control: props.control,
    defaultValue: '',
    name: props.name,
    rules: props.rules,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel}>{props.inputLabel}</Text>
      <View style={[styles.inputContainer, props.inputContainer]}>
        <TextInput
          value={field.value}
          onChangeText={field.onChange}
          placeholder={props.placeholder}
          secureTextEntry={props.password ? hidePassword : false}
          multiline={props.multiline}
          style={[styles.inputText, props.textStyle]}
          numberOfLines={props.numberOfLines}
          // returnKeyType={props.returnKeyType || 'next'}
          focusable={true}
          keyboardType={props.keyboardType}
          ref={ref}
          onSubmitEditing={props.onSubmitEditing}
          blurOnSubmit={props.blurOnSubmit}
          placeholderTextColor={Colors.inputPlaceHolderText}
          maxLength={props.maxLength}
          editable={props.editable}
        />
        {props.password ? (
          <Entypo
            style={styles.eyeIcon}
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye' : 'eye-with-line'}
            size={scale(20)}
            color={Colors.inputBorder}
          />
        ) : null}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginHorizontal: scale(20),

    marginTop: verticalScale(5),
  },
  inputLabel: {
    color: Colors.primary,
    fontFamily: Fonts.montserratSemiBold,
    paddingLeft: scale(13),
    fontSize: moderateScale(20),
    paddingBottom: verticalScale(5),
  },
  inputContainer: {
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(40),
    borderColor: Colors.inputBorder,
    paddingLeft: scale(10),
  },
  inputText: {
    color: Colors.inputText,
    fontFamily: Fonts.montserratMedium,
    letterSpacing: -0.67,
    fontSize: moderateScale(16),
  },

  eyeIcon: {
    position: 'absolute',
    right: moderateScale(10),
    top: 13,
  },
});

export default Input;
