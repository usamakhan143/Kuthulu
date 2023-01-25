// user management

export const IS_LOADING_AUTH = 'IS_LOADING_AUTH';
export const IS_CUSTOMER_LOADING = 'IS_CUSTOMER_LOADING';
export const MENU_DATA = 'MENU_DATA';

const initial_state = {
  is_loading: true,
  // dashboard states
};

const CustomerReducer = (state = initial_state, action) => {
  switch (action.type) {
    case IS_CUSTOMER_LOADING:
      return {
        ...state,
        is_loading: action.payload,
      };

    default: {
      return state;
    }
  }
};
export default CustomerReducer;
