import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import BadgeImage from '../../commons/BadgeImage';
import IconBadge from '../../commons/IconBadge';
import {useSelector} from 'react-redux';
import {Fonts} from '../../../constant/Fonts';
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
        <Text style={styles.userIdText(color)}>@0x123.45D</Text>
        <View style={styles.rowContainer}>
          <Text style={styles.followersText(color)}>
            154 <Text style={{color: color.textLight}}>Follower </Text>
          </Text>
          <Text style={styles.followersText(color)}>
            34 <Text style={{color: color.textLight}}>Following</Text>
          </Text>
        </View>
        <View style={[styles.rowContainer, {marginLeft: scale(-5)}]}>
          <Image
            source={require('../../../assets/images/matic.png')}
            style={styles.iconImage}
          />
          <Text style={styles.userIdText(color)}>:1.35</Text>
          <Image
            source={require('../../../assets/images/doom.png')}
            style={styles.doomIconImage}
          />
          <Text style={styles.userIdText(color)}>345.7</Text>
        </View>
      </View>
    </View>
  );
};

export default DrawerHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(14),

    // paddingHorizontal: scale(20),
  },
  headerContainer: {
    flexDirection: 'row',

    justifyContent: 'space-between',
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
    marginTop: verticalScale(10),
  },
  nameText: color => ({
    fontSize: moderateScale(20),
    color: color.text,
    fontFamily: Fonts.robotoMedium,
  }),
  userIdText: color => ({
    fontSize: moderateScale(16),
    color: color.textLight,
    fontFamily: Fonts.robotoMedium,
  }),

  rowContainer: {
    flexDirection: 'row',
    marginLeft: scale(-2),
    marginTop: verticalScale(5),
    alignItems: 'center',
  },
  followersText: color => ({
    fontSize: moderateScale(16),
    fontFamily: Fonts.robotoMedium,
    color: color.text,
  }),
  iconImage: {
    width: verticalScale(30),
    aspectRatio: 1 / 1,
  },
  doomIconImage: {
    marginLeft: scale(10),
    width: verticalScale(30),
    aspectRatio: 2.1 / 1,
  },
});
