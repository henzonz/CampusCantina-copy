import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import ownerSignupReducer from './ownerSignupReducer';
import cartItemsReducer from './cartItemsReducer';
import userReducer from './userReducer';

export default combineReducers({
  searchReducer,
  ownerSignupReducer,
  cartItemsReducer,
  userReducer,
  // TODO: Add more reducers
});
