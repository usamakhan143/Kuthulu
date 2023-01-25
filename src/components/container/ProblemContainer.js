import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import React from 'react';
import {Colors} from '../../constant/Colors';
import {Fonts} from '../../constant/Fonts';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const ProblemContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>For problem contact</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              'whatsapp://send?text=Please mark my attendace&phone=+923062715650',
            )
          }>
          <Image
            source={require('../../assets/images/whatsapp.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProblemContainer;

const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(30),
  },
  text: {
    color: Colors.primary,
    fontFamily: Fonts.montserratSemiBold,
    letterSpacing: -0.73,
    textAlign: 'center',
    fontSize: moderateScale(18),
  },
  iconsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: verticalScale(5),
  },
  icon: {
    height: verticalScale(50),
    aspectRatio: 1 / 1,
  },
  instaIcon: {
    height: verticalScale(40),
    aspectRatio: 1 / 1,
  },
});
