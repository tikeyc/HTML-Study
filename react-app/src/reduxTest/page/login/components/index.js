import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker, List } from 'antd-mobile';
import domtoimage from 'dom-to-image';
import './index.less';

class Login extends React.Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    loginRequest: PropTypes.func.isRequired,
    saveUsername: PropTypes.func.isRequired,
    clearPassword: PropTypes.func.isRequired
  }

  usernameOnChange = (event) => {
    this.props.saveUsername(event.target.value);
  }

  passwordOnChange = (event) => {
    this.props.savePassword(event.target.value);
  }

  loginButtonClick = () => {
    this.props.loginRequest(this.props.username, this.props.password);
  }

  componentDidUpdate() {
    if (this.props.result.successed) {
      this.props.history.push({pathname: '/Register'});
      this.props.clearPassword();
    }
  }

  cupPic() {
    var node = document.getElementById('my-node');

    domtoimage.toPng(node)
    .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.cupPic}>cupPic</button>
        <div id="my-node">
          <h2>登录页d</h2>
          <div>
            <label className="testClassName">用户名</label>
            <input type="text" name="" value={this.props.username} onChange={this.usernameOnChange}/>
          </div>
          <div>
            <label>密码 </label>
            <input type="text" name="" value={this.props.password} onChange={this.passwordOnChange}/>
          </div>
          <br />
          <button onClick={this.loginButtonClick}>登入</button>
          {/* <DatePicker>
            <List.Item arrow="horizontal">Datetime</List.Item>
          </DatePicker> */}
        </div>
      </div>
    );
  }
}

export default Login;

// const Login = ({username, password, loginRequest}) => (
//   <h2>登录页</h2>
// )
//
// export default Login;
