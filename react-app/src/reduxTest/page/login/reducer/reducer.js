import * as actionType from '../action/action-type';

let defaultState = {
  username: '',
  password: '',
  result: ''
};

export const loginReducer = (state = defaultState, action = {}) => {
  switch (action.type) {
    case actionType.LOGINSUCCESSED:
      console.log('LOGINSUCCESSED',action.result);
      return {...state, ...{result: action.result}};
    case actionType.LOGINFAILD:
      return {...state, ...{result: action.result}};
    case actionType.CLEARPASSWORD:
      return {...state, ...{password: action.password, result: {successed: false}}};
    case actionType.SAVUSERNAME:
      return {...state, ...{username: action.username, result: {successed: false}}};
    case actionType.SAVPASSWORD:
      return {...state, ...{password: action.password, result: {successed: false}}};
    default:
      return state;
  }
}
