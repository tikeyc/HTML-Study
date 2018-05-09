import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css'
import TestImg from '../context/test';

class Cat extends React.Component {
  
  render() {
    const mouse = this.props.mouse;
    return (
      <img src="https://unsplash.it/200/200?image=80" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} alt='' />
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 10, y: 10 };
  }

  handleMouseMove(event) {
    console.log('x:',event.clientX);
    console.log('y:',event.clientY);
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>

        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {this.props.render(this.state)}
      </div>
    );
  }
}



export class MouseTracker extends React.Component {

  renderTheCat = (mouse) => {
    return <Cat mouse={mouse} />;
  }
  render() {
    // <Mouse render={mouse => (
    //   <Cat mouse={mouse} />
    // )}/>
    return (
      <div className='render-props'>
        <h1>Move the mouse around!</h1>
        <Mouse render={this.renderTheCat}/>
      </div>
    );
  }
}

ReactDOM.render(
  <TestImg />,
  document.getElementById('abcd')
);

// 现在，我们提供了一个 render prop 以让 <Mouse> 能够动态决定什么需要渲染，而不是克隆 <Mouse> 组件并硬编码来解决特定的用例。
//
// 更具体地说，render prop 是一个组件用来了解要渲染什么内容的函数 prop。
//
// 这一技术使得共享代码间变得相当便利。为了实现这一行为，渲染一个带有 render prop 的 <Mouse> 组件能够告诉它当前鼠标坐标 (x, y) 要渲染什么。
//
// 关于 render props 一个有趣的事情是你可以使用一个带有 render props 的常规组件来实现大量的 高阶组件 (HOC)。例如，如果你更偏向于使用一个 withMouse 的高阶组件而不是一个 <Mouse> 组件，你可以轻松的创建一个带有 render prop 的常规 <Mouse> 组件的高阶组件。

// If you really want a HOC for some reason, you can easily
// create one using a regular component with a render prop!
export function withMouse(Component) {
  return class extends React.Component {
    render() {
      return (
        <Mouse render={mouse => (
          <Component {...this.props} mouse={mouse} />
        )}/>
      );
    }
  }
}
