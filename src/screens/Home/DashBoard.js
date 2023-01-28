import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {moderateScale} from 'react-native-size-matters';
import DashboardHeader from '../../components/header/DashboardHeader';

const DashBoard = () => {
  const color = useSelector(state => state.color.colorTheme);
  return (
    <View style={styles.container(color)}>
      <DashboardHeader />
      <Text style={styles.text(color)}>DashBoard</Text>
    </View>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  container: color => ({
    flex: 1,
    backgroundColor: color.background,
  }),
  text: color => ({color: color.text, fontSize: moderateScale(20)}),
});
