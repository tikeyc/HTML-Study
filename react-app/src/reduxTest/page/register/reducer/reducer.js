import * as actionType from '../action/action-type';

let defaultState = {
  username: '',
  password: '',
  result: ''
};

export const registerReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case actionType.LOGINSUCCESSED:
      return {...state, ...{result: action.result}};
    case actionType.LOGINFAILD:
      return {...state, ...{result: action.result}};
    case actionType.CLEARPASSWORD:
      return {...state, ...{password: action.password}};
    case actionType.SAVUSERNAME:
      return {...state, ...{username: action.username}};
    default:
      return state;
  }
}
