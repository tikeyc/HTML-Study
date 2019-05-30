import { combineReducers } from 'redux';

import { loginReducer } from '../page/login/reducer/reducer';
import { registerReducer } from '../page/register/reducer/reducer';

export default combineReducers({loginReducer, registerReducer});
