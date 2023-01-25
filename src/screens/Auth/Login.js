import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

import {useForm} from 'react-hook-form';

import {moderateScale, verticalScale} from 'react-native-size-matters';

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    register,
    reset,
  } = useForm({
    mode: 'all',
  });
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
