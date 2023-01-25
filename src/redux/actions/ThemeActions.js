import {LightTheme, DarkTheme} from '../../constant/colors/Index';
import {COLOR_THEME, DARK_MODE} from '../reducers/ColorReducer';

export const switchTheme = darkmode => {
  return async dispatch => {
    dispatch({type: COLOR_THEME, payload: darkmode ? LightTheme : DarkTheme});
    dispatch({type: DARK_MODE, payload: !darkmode});
  };
};
