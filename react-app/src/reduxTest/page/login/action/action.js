import * as actionType from './action-type';

export const loginRequest = (username, password) => {
  return async dispatch => {
    try {
      dispatch({
        type: actionType.LOGINSUCCESSED,
        result: {successed: true}
      });
    } catch (e) {
      console.error(e);
      dispatch({
        type: actionType.LOGINFAILD,
        result: {successed: false}
      });
    } finally {

    }
  }
}

export const saveUsername = (username) => {
  return {
    type: actionType.SAVUSERNAME,
    username: username
  }
}

export const savePassword = (password) => {
  return {
    type: actionType.SAVPASSWORD,
    password: password
  }
}

export const clearPassword = () => {
  return {
    type: actionType.CLEARPASSWORD,
    password: ''
  }
}
