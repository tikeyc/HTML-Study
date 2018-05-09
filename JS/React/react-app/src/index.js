import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {ThemeContext, BorderContext, themes} from './context/theme-context';
import ThemeTogglerButton from './context/theme-toggler-button';
import TestImg from './context/test';
import {MouseTracker, withMouse} from './render-props/render-props';
import MyAjaxComponent from './ajax/ajax';

class App extends React.Component {
  constructor(props) {
    super(props);

    // State 包含了 updater 函数 所以它可以传递给底层的 context Provider
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
      imgsrc: 'https://unsplash.it/200/200?image=1021',
    };
  }

  componentDidMount() {
    //网络请求
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  componentWillUnmount() {
    //取消网络请求
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, info);
    console.log(error);
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark,
      imgsrc: state.theme === themes.dark ? 'https://unsplash.it/200/200?image=1021' : 'https://unsplash.it/200/200?image=1022',
    }));
  };

  render() {
    const borderClassName = {
      className: 'button_border'
    };

    // 入口 state 传递给 provider
    return (
      <ThemeContext.Provider value={this.state}>
        <BorderContext.Provider value={borderClassName}>
          <Content defaultPropsimgsrc={this.props.defaultPropsimgsrc}/>
        </BorderContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

//类属性
App.defaultProps = {defaultPropsimgsrc: 'https://unsplash.it/200/200?image=800'};
App.displayName = 'tikeyc';

function Content(props) {
  return (
    <div>
      <MouseTracker />
      <ThemeTogglerButton />
      <TestImg />
      <Glossary items={items}/>
      <RenderPropsTEST />
      <img src={props.defaultPropsimgsrc} alt={props.defaultPropsimgsrc}/>
    </div>
  );
}

class RenderProps extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src="https://unsplash.it/200/200?image=82" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} alt='' />
    );
  }
}

const RenderPropsTEST = withMouse(RenderProps);

const items = [{id:1,term:'term1',description:'description1'},
               {id:2,term:'term2',description:'description2'},
               {id:3,term:'term3',description:'description3'},
               {id:4,term:'term4',description:'description4'}];

//Fragment
function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        // 没有`key`，将会触发一个key警告
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
