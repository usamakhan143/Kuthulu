import {combineReducers} from 'redux';
import CustomerReducer from '../reducers/CustomerReducer';
import AuthReducer from '../reducers/AuthReducer';
import ColorReducer from '../reducers/ColorReducer';

export default combineReducers({
  auth: AuthReducer,
  customer: CustomerReducer,
  color: ColorReducer,
});
