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
    const text = 'english' === this.context.language ? 'Name' : 'Naam';

    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

// configuring the static contextType on the Field class
Field.contextType = LanguageContext;

export default Field;
