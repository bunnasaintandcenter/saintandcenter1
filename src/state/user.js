const initialState = {
  username: '',
  email: '',
  displayName: '',
  token: ''
}

const USER_SIGNIN = 'USER_SIGNIN';
const USER_SIGNOUT = 'USER_SIGNOUT';
const USER_UPDATE_SHIPPING = 'USER_UPDATE_SHIPPING'

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNIN:
      // const { username, email, displayName, token } = action.payload;
      return action.payload
    case USER_SIGNOUT:
      return {
        ...state,
        username: '',
        email: '',
        displayName: '',
        token: ''
      }
    case USER_UPDATE_SHIPPING:
      console.log(action.payload)
      return {
        ...state,
        shipping: action.payload
      }
    default : return state
  }
};
