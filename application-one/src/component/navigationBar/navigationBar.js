import React from 'react';
import './navigationBar.css';

export default class NavigationBar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  leftImgClick = () => {
    if (this.props.leftImgClick) {
      this.props.leftImgClick();
    }
  }

  rightImgClick = () => {
    if (this.props.rightImgClick) {
      this.props.rightImgClick();
    }
  }

  isEmptyObject(obj) {
    for(var n in obj){return false}
    return true;
  }

  render() {
    var leftImg = null;
    if (!this.isEmptyObject(this.props.leftImg)) {
      leftImg = <img className='leftImg' src={this.props.leftImg} alt='' onClick={this.leftImgClick}/>
    }
    var leftText = null;
    if (!this.isEmptyObject(this.props.leftText)) {
      var leftTextStyle = null;
      if (!leftImg) {
        leftTextStyle = {
          left: '10px'
        };
      }
      leftText = <p className='leftText' style={leftTextStyle}>{this.props.leftText}</p>
    }

    var rightImg = null;
    if (!this.isEmptyObject(this.props.rightImg)) {
      rightImg = <img className='rightImg' src={this.props.rightImg} alt='' onClick={this.rightImgClick}/>
    }
    var rightText = null;
    if (!this.isEmptyObject(this.props.rightText)) {
      var rightTextStyle = null;
      if (!rightImg) {
        rightTextStyle = {
          right: '10px'
        };
      }
      rightText = <p className='rightText' style={rightTextStyle}>{this.props.rightText}</p>
    }

    return (
      <div className='navigationBar'>
        <div>{leftImg}{leftText}</div>
        <div>{this.props.title}</div>
        <div>{rightText}{rightImg}</div>
      </div>
    );
  }
}
