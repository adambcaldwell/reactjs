import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../redux/actions';
import StreamForm from './stream-form';

/**
 * @component class
 * @name StreamCreate
 * @description
 * @author adam.caldwell
 * @extends {React.Component}
 */
class StreamCreate extends Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
