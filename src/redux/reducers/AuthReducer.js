// user management

// import {lightColors} from '../../constant/Colors';

export const COLOR_THEME = 'COLOR_THEME';
export const SHOW_PIN = 'SHOW_PIN';

const initial_state = {
  showPin: true,
  // colorTheme: lightColors,
};

const AuthReducer = (state = initial_state, action) => {
  switch (action.type) {
    case SHOW_PIN:
      return {
        ...state,
        showPin: action.payload,
      };

    default: {
      return state;
    }
  }
};
export default AuthReducer;
