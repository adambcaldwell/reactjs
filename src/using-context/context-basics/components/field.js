import React, { Component } from 'react';
import LanguageContext from '../contexts/language-context';

/**
 * @component class
 * @name Field
 * @description
 * @author adam.caldwell
 * @extends {React.Component}
 */
class Field extends Component {
  render() {
    return (
      <div className="ui field">
        <label>
          <LanguageContext.Consumer>{(value) => ('english' === value ? 'Name' : 'Naam')}</LanguageContext.Consumer>
        </label>
        <input />
      </div>
    );
  }
}

// configuring the static contextType on the Field class
Field.contextType = LanguageContext;

export default Field;
