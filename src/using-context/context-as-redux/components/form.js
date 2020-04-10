import React from 'react';
import Field from './field';
import Button from './button';

/**
 * @component functional
 * @name Form
 * @description a form with a field & button
 * @param {Object} props - properties
 * @author adam.caldwell
 */
const Form = (props) => {
  return (
    <div className="ui form">
      <Field />
      <Button />
    </div>
  );
};

export default Form;
