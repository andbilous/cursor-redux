import actionTypes from './chats.types';

const initialState = {
    posts:[]
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_CHATS:
      return {
        ...state,
        items: action.payload,
        isLoading: false
      };
    case actionTypes.SET_FORWARDED_MESSAGE:
      return {
        ...state,
        forwardedMessage: action.payload
      };
    default:
      return state;
  }
};

export default postsReducer;