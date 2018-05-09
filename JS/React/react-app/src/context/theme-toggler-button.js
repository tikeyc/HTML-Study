import React from 'react';
import {ThemeContext} from './theme-context';
import {BorderContext} from './theme-context';
function ThemeTogglerButton() {
  // Theme Toggler 按钮不仅接收 theme 属性
  // 也接收了一个来自 context 的 toggleTheme 函数
  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (
        <BorderContext.Consumer>
          {border => (
            <button
              className={border.className}
              onClick={toggleTheme}
              style={{backgroundColor: theme.background,color: theme.foreground}}>
              Toggle Theme
            </button>
          )}
        </BorderContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton
