import actionTypes from './chats.types';

<Post author={{
  name: "Anakin skywalker",
  photo: ANAKIN_IMAGE,
  nickname: "@dart_vader"
}}
content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
image={RAY_IMAGE}
date={"26 февр."}

const initialState = {
    posts:[
      {},
      {}
    ]
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