import React from 'react';
import {ThemeContext} from './theme-context';

class TestImg extends React.Component {
  render() {
    return(
      <ThemeContext.Consumer>
        {({theme, toggleTheme, imgsrc}) => (
          <img src={imgsrc} alt={imgsrc}/>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default TestImg
