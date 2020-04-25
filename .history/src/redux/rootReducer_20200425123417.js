import { combineReducers } from 'redux';

import userProfileReducer from './userProfile/userProfile.reducer';

// eslint-disable-next-line import/prefer-default-export
export const rootReducer = combineReducers({
  authReducer, routerReducer, contactsReducer, chatsReducer, messagesReducer, userProfileReducer
});