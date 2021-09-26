export const setOwnerName = (ownerName) => ({
  type: 'OWNER_NAME_SET',
  ownerName,
});

export const setOwnerContactNumber = (ownerContactNumber) => ({
  type: 'OWNER_CONTACT_NUMBER_SET',
  ownerContactNumber,
});

export const setOwnerEmail = (ownerEmail) => ({
  type: 'OWNER_EMAIL_SET',
  ownerEmail,
});

export const setOwnerPassword = (ownerPassword) => ({
  type: 'OWNER_PASSWORD_SET',
  ownerPassword,
});

export const setOwnerConfirmPassword = (ownerConfirmPassword) => ({
  type: 'OWNER_CONFIRM_PASSWORD_SET',
  ownerConfirmPassword,
});

export const setOwnerFormSubmitted = (ownerFormSubmitted) => ({
  type: 'OWNER_FORM_SUBMITTED_SET',
  ownerFormSubmitted,
});
