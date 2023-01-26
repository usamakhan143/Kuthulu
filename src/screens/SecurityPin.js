import {StyleSheet, Text, View, Image, TextInput, Animated} from 'react-native';
import React from 'react';
import {Colors} from '../constant/colors/Colors';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Fonts} from '../constant/Fonts';
import {FlatList} from 'react-native-gesture-handler';
import {keyboardLayout} from '../constant/DummyData';
import KeyboadButton from '../components/container/keyboardButton/KeyboadButton';
import {useRef} from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
const SecurityPin = () => {
  const [numberInput, setnumberInput] = useState('');

  const buttonPressHandler = buttonTab => {
    if (buttonTab == 'fp') {
      alert('we are working on it');
    } else if (!isNaN(buttonTab)) {
      buttonPress(buttonTab);
    } else {
      let newStr = numberInput.slice(0, -1);
      setnumberInput(newStr);
    }
  };
  const buttonPress = buttonTab => {
    // textInput1.current('hahah');
    const numberAsString = buttonTab.toString();
    if (numberInput == '') {
      setnumberInput(numberAsString);
    } else {
      if (numberInput.length == 4) {
        console.log('runFunction');

        if (numberInput == '0000') {
          alert('correct');
        } else {
          alert('wong');
        }
      } else {
        setnumberInput(prev => prev + numberAsString);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require('../assets/images/appLogo.png')}
          style={styles.logo}
        />
        <Text style={styles.titleText}>Kuthulu</Text>
      </View>
      <View style={styles.pinContainer}>
        <View style={styles.pinInputContainer}>
          <Text style={styles.pinInput}>{numberInput.length > 0 && '*'}</Text>
        </View>
        <View style={styles.pinInputContainer}>
          <Text style={styles.pinInput}>{numberInput.length > 1 && '*'}</Text>
        </View>
        <View style={styles.pinInputContainer}>
          <Text style={styles.pinInput}>{numberInput.length > 2 && '*'}</Text>
        </View>
        <View style={styles.pinInputContainer}>
          <Text style={styles.pinInput}>{numberInput.length > 3 && '*'}</Text>
        </View>
      </View>
      <Text style={styles.forgotText}>Forgot Pin?</Text>

      <FlatList
        data={keyboardLayout}
        numColumns={3}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <KeyboadButton
              text={item.title}
              onPress={() => buttonPressHandler(item.title)}
            />
          );
        }}
      />
    </View>
  );
};

export default SecurityPin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: verticalScale(80),
  },
  logo: {
    width: scale(70),
    tintColor: Colors.white,
    aspectRatio: 1 / 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: moderateScale(50),
    fontFamily: Fonts.robotoBlack,
    color: Colors.white,
    paddingLeft: scale(20),
  },
  pinContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(30),
  },
  pinInputContainer: {
    borderBottomWidth: moderateScale(5),
    borderColor: 'rgba(255,255,255,0.5)',
    marginHorizontal: scale(5),
  },
  pinInput: {
    fontSize: moderateScale(40),
    // paddingVertical: 0,
    width: scale(20),
    height: verticalScale(35),
    fontFamily: Fonts.robotoBlack,
    marginHorizontal: scale(5),
  },
  forgotText: {
    fontSize: moderateScale(20),
    fontFamily: Fonts.robotoMedium,
    color: Colors.white,
    marginTop: verticalScale(70),
    marginBottom: verticalScale(20),
  },
});
