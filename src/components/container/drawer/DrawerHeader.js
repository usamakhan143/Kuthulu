import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import BadgeImage from '../../commons/BadgeImage';
import IconBadge from '../../commons/IconBadge';
import {useSelector} from 'react-redux';

const DrawerHeader = () => {
  const color = useSelector(state => state.color.colorTheme);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={{
            uri: 'https://zipmex.com/static/d1af016df3c4adadee8d863e54e82331/Twitter-NFT-profile.jpg',
          }}
          style={styles.image}
        />
        <View style={styles.rightContainer}>
          <BadgeImage number={20} />
          <BadgeImage number={'20+'} />
          <IconBadge />
        </View>
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.nameText(color)}>Adam</Text>
        <Text style={styles.nameText(color)}>@0x123.45D</Text>
        <View style={styles.walletContainer}>
          <Text style={styles.nameText(color)}>Matic:1.35</Text>
          <Text style={styles.nameText(color)}> Doom 345.7</Text>
        </View>
      </View>
    </View>
  );
};

export default DrawerHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(15),
  },
  headerContainer: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    paddingHorizontal: scale(20),
  },
  image: {
    height: verticalScale(50),
    aspectRatio: 1 / 1,
    borderRadius: 100,
  },
  rightContainer: {
    flexDirection: 'row',
    width: scale(110),
    justifyContent: 'space-around',
  },
  mainContainer: {
    paddingHorizontal: scale(20),
  },
  nameText: color => ({
    fontSize: moderateScale(20),
    color: color.text,
  }),
  walletContainer: {
    flexDirection: 'row',
  },
});
