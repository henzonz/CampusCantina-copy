const initState = {
  userLoggedIn: false,
  loggedInUserRole: '',
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'USER_LOGGED_IN_SET':
      return {
        ...state,
        userLoggedIn: action.userLoggedIn,
      };
    case 'LOGGED_IN_USER_ROLE_SET':
      return {
        ...state,
        loggedInUserRole: action.loggedInUserRole,
      };
    default:
      return state;
  }
};

export default userReducer;
