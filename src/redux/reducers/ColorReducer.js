// user management

import {LightTheme} from '../../constant/colors/Index';

export const COLOR_THEME = 'COLOR_THEME';
export const DARK_MODE = 'DARK_MODE';

const initial_state = {
  colorTheme: LightTheme,
  darkMode: false,
};

const ColorReducer = (state = initial_state, action) => {
  switch (action.type) {
    case COLOR_THEME:
      return {
        ...state,
        colorTheme: action.payload,
      };
    case DARK_MODE:
      return {
        ...state,
        darkMode: action.payload,
      };

    default: {
      return state;
    }
  }
};
export default ColorReducer;
