import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {useSelector} from 'react-redux';

const Group = () => {
  const color = useSelector(state => state.color.colorTheme);

  return (
    <View style={styles.container(color)}>
      <Text style={styles.text(color)}>Group</Text>
    </View>
  );
};

export default Group;

const styles = StyleSheet.create({
  container: color => ({
    flex: 1,
    backgroundColor: color.background,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  text: color => ({color: color.text, fontSize: moderateScale(20)}),
});
