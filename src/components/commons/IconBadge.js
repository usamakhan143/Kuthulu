import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icons from '../commons/Icons';
import Badge from './Badge';
import {useSelector} from 'react-redux';
const IconBadge = () => {
  const color = useSelector(state => state.color.colorTheme);

  return (
    <View style={styles.container}>
      <Icons type="AntDesign" name="message1" color={color.text} />
      <Badge />
    </View>
  );
};

export default IconBadge;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'blue',
    alignSelf: 'center',
  },
});
