import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

/**
 * @component class
 * @name StreamForm
 * @description a generalized stream form component for handling stream create/edit
 * @author adam.caldwell
 * @extends {React.Component}
 */
class StreamForm extends Component {
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }

    return null;
  };

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  render() {
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="Title" />
        <Field name="description" component={this.renderInput} label="Description" />
        <button type="submit" className="ui button primary">
          Submit
        </button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'Invalid title';
  }

  if (!formValues.description) {
    errors.description = 'Invalid description';
  }

  return errors;
};

export default reduxForm({
  form: 'StreamForm',
  validate,
})(StreamForm);
