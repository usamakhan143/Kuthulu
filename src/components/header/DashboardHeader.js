import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {nftImage} from '../../constant/Url';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../constant/colors/Colors';
import Icons from '../../components/commons/Icons';
const DashboardHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={{uri: nftImage}} style={styles.imageStyle} />
      <Image
        source={require('../../assets/images/appLogo.png')}
        style={styles.appLogoStyle}
      />
      <Icons
        type="MaterialCommunityIcons"
        name="star-four-points-outline"
        size={moderateScale(30)}
      />
    </View>
  );
};

export default DashboardHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(10),
  },
  imageStyle: {
    width: scale(30),
    aspectRatio: 1 / 1,
    borderRadius: moderateScale(100),
  },
  appLogoStyle: {
    width: scale(30),
    aspectRatio: 1 / 1,
    tintColor: Colors.primary,
  },
});
