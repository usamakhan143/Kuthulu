import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {moderateScale, scale} from 'react-native-size-matters';
import {Colors} from '../../constant/colors/Colors';

const Badge = ({number}) => {
  const color = useSelector(state => state.color.colorTheme);
  console.log('number', number);
  return (
    <View
      style={[number ? styles.container(color) : styles.emptyContainer(color)]}>
      <Text style={styles.badgeText}>{number}</Text>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  emptyContainer: color => ({
    backgroundColor: color.primary,
    position: 'absolute',
    borderRadius: 100,
    width: scale(13),
    aspectRatio: 1 / 1,
    right: -5,
    top: -5,
    borderColor: color.background,
    borderWidth: moderateScale(3),
    padding: moderateScale(2),
  }),
  container: color => ({
    backgroundColor: color.primary,
    position: 'absolute',
    borderRadius: 100,
    right: -10,
    top: -10,
    borderColor: color.background,
    borderWidth: moderateScale(2),
    padding: moderateScale(2),
  }),
  badgeText: {
    fontSize: moderateScale(11),
    color: Colors.white,
  },
});
