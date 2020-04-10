import React, { Component } from 'react';
import UserCreate from './components/user-create';
import LanguageContext from './contexts/language-context';
import ColorContext from '../contexts/color-context';

/**
 * @component class
 * @name ContextApp
 * @description the context application implementing 2 contexts
 * @author adam.caldwell
 * @extends {React.Component}
 */
class ContextApp extends Component {
  state = {
    language: 'english',
  };

  onLanguageChange(language) {
    this.setState({ language });
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:&nbsp;
          <i className="flag us" onClick={() => this.onLanguageChange('english')} />
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
        </div>
        {this.state.language}
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default ContextApp;
