import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../../modal';
import { deleteStream, fetchStream } from '../../redux/actions';

/**
 * @component class
 * @name StreamDelete
 * @description
 * @author adam.caldwell
 */
class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  // uses React.Fragment (via shorthand)
  renderActions = () => {
    const { id } = this.props.match.params;

    return (
      <>
        <button type="button" className="ui negative button" onClick={() => this.props.deleteStream(id)}>
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </>
    );
  };

  renderContent = () => {
    return !this.props.stream
      ? 'Are you sure you want to delete this stream?'
      : `Are you sure you want to delete the stream with title: ${this.props.stream.title}?`;
  };

  render() {
    return <Modal title="Delete Stream" content={this.renderContent()} actions={this.renderActions()} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { deleteStream, fetchStream })(StreamDelete);
