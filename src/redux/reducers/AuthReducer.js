// user management

// import {lightColors} from '../../constant/Colors';

export const COLOR_THEME = 'COLOR_THEME';

const initial_state = {
  // colorTheme: lightColors,
};

const AuthReducer = (state = initial_state, action) => {
  switch (action.type) {
    case COLOR_THEME:
      return {
        ...state,
        colorTheme: action.payload,
      };

    default: {
      return state;
    }
  }
};
export default AuthReducer;
