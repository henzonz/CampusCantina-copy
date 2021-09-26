const initState = {
  ownerName: '',
  ownerContactNumber: '',
  ownerEmail: '',
  ownerPassword: '',
  ownerConfirmPassword: '',
  ownerFormSubmitted: false,
};
const ownerSignupReducer = (state = initState, action) => {
  switch (action.type) {
    case 'OWNER_NAME_SET':
      return {
        ...state,
        ownerName: action.ownerName,
      };
    case 'OWNER_CONTACT_NUMBER_SET':
      return {
        ...state,
        ownerContactNumber: action.ownerContactNumber,
      };
    case 'OWNER_EMAIL_SET':
      return {
        ...state,
        ownerEmail: action.ownerEmail,
      };
    case 'OWNER_PASSWORD_SET':
      return {
        ...state,
        ownerPassword: action.ownerPassword,
      };
    case 'OWNER_CONFIRM_PASSWORD_SET':
      return {
        ...state,
        ownerConfirmPassword: action.ownerConfirmPassword,
      };
    case 'OWNER_FORM_SUBMITTED_SET':
      return {
        ...state,
        ownerFormSubmitted: action.ownerFormSubmitted,
      };
    default:
      return state;
  }
};

export default ownerSignupReducer;
