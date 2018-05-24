import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import LoginPage from './pages/login';
import HomePage from './pages/home';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      //<Route path='/roster'/>
      // 当路径名为'/'时, path不匹配
      // 当路径名为'/roster'或'/roster/2'时, path匹配
      // 当你只想匹配'/roster'时，你需要使用"exact"参数,则路由仅匹配'/roster'而不会匹配'/roster/2'
      // <Route exact path='/roster'/>
      <Switch>
        {/* 方式一 */}
        {/* <Route exact path='/'
          render = {(props) => {
              return (<LoginPage />);
            }
          }
        >
        </Route> */}
        {/* 方式二 */}
        {/* <Route exact path='/'
          children = {(props) => {
              return (<LoginPage />);
            }
          }
        >
        </Route> */}
        {/* 方式三 */}
        <Route exact path='/' component={LoginPage} ></Route>
        <Route path='/homePage' component={HomePage}></Route>
      </Switch>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);



registerServiceWorker()
