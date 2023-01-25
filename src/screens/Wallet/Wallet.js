import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {moderateScale} from 'react-native-size-matters';

const Wallet = () => {
  const color = useSelector(state => state.color.colorTheme);

  return (
    <View style={styles.container(color)}>
      <Text style={styles.text(color)}>Wallet</Text>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: color => ({
    flex: 1,
    backgroundColor: color.background,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  text: color => ({color: color.text, fontSize: moderateScale(20)}),
});
