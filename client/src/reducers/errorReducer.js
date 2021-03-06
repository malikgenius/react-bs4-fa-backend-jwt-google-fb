import { GET_ERRORS, GET_LOGIN_ERRORS } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        error: action.payload
      };
    // Login Errors will show only on login Modal, if we dont do that errors will show on page as well where we load Modal.
    case GET_LOGIN_ERRORS:
      return {
        ...state,
        loginError: action.payload
      };
    default: {
      return state;
    }
  }
};
