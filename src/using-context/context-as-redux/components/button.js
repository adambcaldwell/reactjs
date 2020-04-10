import React, { Component } from 'react';
import LanguageContext from '../contexts/language-context';
import ColorContext from '../../contexts/color-context';
/**
 * @component class
 * @name Button
 * @description a button utilizing context to determine the color & language
 * @author adam.caldwell
 * @extends {React.Component}
 */
class Button extends Component {
  renderSubmit = (language) => {
    return 'english' === language ? 'Submit' : 'Voorleggen';
  };

  renderButton = (color) => {
    return (
      <button type="button" className={`ui button ${color}`}>
        <LanguageContext.Consumer>{({ language }) => this.renderSubmit(language)}</LanguageContext.Consumer>
      </button>
    );
  };

  render() {
    return <ColorContext.Consumer>{(color) => this.renderButton(color)}</ColorContext.Consumer>;
  }
}

// configuring the static contextType on the Button class
Button.contextType = LanguageContext;

export default Button;
