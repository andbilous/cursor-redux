import { combineReducers } from 'redux';
import pos from './posts/reducer';

// eslint-disable-next-line import/prefer-default-export
export const rootReducer = combineReducers({
  authReducer, routerReducer, contactsReducer, chatsReducer, messagesReducer, userProfileReducer
});