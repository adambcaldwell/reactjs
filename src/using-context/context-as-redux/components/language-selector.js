import React, { Component } from 'react';
import LanguageContext from '../contexts/language-context';

/**
 * @component class
 * @name LanguageSelector
 * @description select a language
 * @author adam.caldwell
 * @extends {React.Component}
 */
class LanguageSelector extends Component {
  render() {
    return (
      <div>
        Select a language:&nbsp;
        <i className="flag us" onClick={() => this.context.onLanguageChange('english')} />
        <i className="flag nl" onClick={() => this.context.onLanguageChange('dutch')} />
      </div>
    );
  }
}

LanguageSelector.contextType = LanguageContext;

export default LanguageSelector;
