import { connect } from 'react-redux';

import Login from '../components';
import { loginRequest, saveUsername, savePassword, clearPassword } from '../action/action';

const mapStateToProps = state => {
  const { loginReducer } = state;

  return {
    username: loginReducer.username,
    password: loginReducer.password,
    result: loginReducer.result
  };
};

// const mapDispatchToProps

export default connect(mapStateToProps, {loginRequest, saveUsername, savePassword, clearPassword})(Login);
