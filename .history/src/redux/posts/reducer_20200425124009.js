import actionTypes from './chats.types';

// <Post author={{
//   name: "Anakin skywalker",
//   photo: ANAKIN_IMAGE,
//   nickname: "@dart_vader"
// }}
// content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
// image={RAY_IMAGE}
// date={"26 февр."}

const initialState = {
    posts:[
      {
        name:'Anakin skywalker',
        photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg',
        nickname: "@dart_vader",
        content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
      },
      {},
      {},
    ]
}

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