import React from 'react';
import $ from 'jquery';
import './index.css';
import NavigationBar from '../../components/navigationBar/navigationBar';
import logo from '../../images/logo.png'
import {loginUrl} from '../../common/api/api'

// LoginPage.contextTypes = {
//   router: React.PropTypes
// }

export default class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  /////////////////销毁阶段/////////////////
  componentWillUnmount() {
    //取消网络请求
    console.log('LoginPage componentWillUnmount');
  }

  // leftImgClick = () => {
  //   console.log('leftImgClick');
  // }
  //
  // rightImgClick = () => {
  //   console.log('rightImgClick');
  // }

  inputOnChange = (e) => {
    var targetId = e.target.id;
    var value = e.target.value;
    console.log(value);
    if (targetId === 'username') {
      this.setState({
        username:value
      });
    } else if (targetId === 'password') {
      this.setState({
        password:value
      });
    }
  }

  loginButtonOnClick = (event) => {
    console.log('loginButtonOnClick',this.props);
    if (event && event.preventDefault) {
      event.preventDefault();
    } else {//针对IE
      window.event.returnValue = false;
    }
    if (this.state.username && this.state.password) {
      this.loginRequest(event);
    } else {
      // alert('请输入用户名或密码');
      gotoHome(this);
    }
  }


  loginRequest = (event)=> {
    const currentThis = this;
    const {
      username,
      password
    } = this.state;
    const url = loginUrl + '&username=' + username + '&password=' + password;
    console.log('url',url);
    $.ajax({
      type:'get',
      url:url,
      dataType:'',
      data:{},
      success: function (result) {
        console.log('result:',result);
        gotoHome(currentThis);
      },
      error: function (error) {
        console.log('error:',error);
        gotoHome(currentThis);
      }
    });
  }

  render() {
    return (
      <div className='login-contanier'>
        <NavigationBar
          title='GTMC营销信息'
          //leftText='test'
          //leftImg={require('../../images/btn_back.png')}
          //rightImg={require('../../images/quyuanniu.png')}
          //rightText='test'
          // leftImgClick={this.leftImgClick}
          // rightImgClick={this.rightImgClick}
        />
        <div className='login-div'> <img src={logo} alt=''/> </div>
        <form className="login-form" action="#" method="post">
          <div>
            <label className="form-label" htmlFor="username">账号</label>
            <input className="form-imput" id="username" type="text" name="username"
              value={this.state.username}
              onChange={this.inputOnChange}
            />
          </div>
          <div>
            <label className="form-label" htmlFor="password">密码</label>
            <input className="form-imput" id="password" type="password" name="password"
              value={this.state.password}
              onChange={this.inputOnChange}
            />
          </div>
          <div className='login-button-div'><button className='form-button' type='button' onClick={this.loginButtonOnClick}>登入</button></div>
        </form>
      </div>
    );
  }
}

function gotoHome(currentThis) {
  // ReactDOM.render(
  //   <HomePage />,
  //   document.getElementById('root')
  // );
  currentThis.props.history.push({pathname:'/homePage'});
}
