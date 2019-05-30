import { connect } from 'react-redux';

import Register from '../components';
import {  } from '../action/action';

const mapStateToProps = state => {
  const { username, password } = state;

  return {
    username: username,
    password: password
  };
}

// const mapDispatchToProps

export default connect(mapStateToProps, {})(Register);
