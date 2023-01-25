import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Badge from './Badge';
import {verticalScale} from 'react-native-size-matters';
import {useSelector} from 'react-redux';

const BadgeImage = ({number}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://zipmex.com/static/d1af016df3c4adadee8d863e54e82331/Twitter-NFT-profile.jpg',
        }}
        style={styles.image}
      />
      <Badge number={number} />
    </View>
  );
};

export default BadgeImage;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'blue',
    alignSelf: 'center',
  },
  image: {
    height: verticalScale(25),
    aspectRatio: 1 / 1,
    borderRadius: 100,
  },
});
