export const AUTH_ACTIONS = {
  SET_TOKEN: 'SET_TOKEN',
  SET_USER_TYPE: 'SET_USER_TYPE',
}

export const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.SET_TOKEN:
      return { ...state, authToken: action.payload }
      break
    case AUTH_ACTIONS.SET_USER_TYPE:
      return { ...state, userType: action.payload }
      break
    default:
      return state
  }
}
