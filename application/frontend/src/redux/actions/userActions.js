export const setUserLoggedIn = (userLoggedIn) => ({
  type: 'USER_LOGGED_IN_SET',
  userLoggedIn,
});

export const setLoggedInUserRole = (loggedInUserRole) => ({
  type: 'LOGGED_IN_USER_ROLE_SET',
  loggedInUserRole,
});
