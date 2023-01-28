import {icons} from '../../utils/Icons';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {useSelector} from 'react-redux';
const Icons = ({
  type,
  name,
  color,
  size = moderateScale(25),
  style,
  onPress,
}) => {
  const MyIcon = icons[type];
  const colors = useSelector(state => state.color.colorTheme);

  return (
    <MyIcon
      name={name}
      color={color ? color : colors.text}
      size={size}
      style={style}
      onPress={onPress}
    />
  );
};
export default Icons;
