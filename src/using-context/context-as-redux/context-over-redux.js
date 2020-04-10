import React, { Component } from 'react';
import Form from './components/form';
import ColorContext from '../contexts/color-context';
import LanguageSelector from './components/language-selector';
import { LanguageStore } from './contexts/language-context';

/**
 * @component class
 * @name ContextReduxApp
 * @description the context application implementing 2 contexts
 * @author adam.caldwell
 * @extends {React.Component}
 */
class ContextReduxApp extends Component {
  state = {
    language: 'english',
  };

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="red">
            <Form />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default ContextReduxApp;
