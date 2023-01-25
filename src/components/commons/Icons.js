import {icons} from '../../utils/Icons';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
const Icons = ({
  type,
  name,
  color,
  size = moderateScale(25),
  style,
  onPress,
}) => {
  const MyIcon = icons[type];
  return (
    <MyIcon
      name={name}
      color={color}
      size={size}
      style={style}
      onPress={onPress}
    />
  );
};
export default Icons;
