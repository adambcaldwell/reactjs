import React from 'react';

/**
 * @component functional
 * @param {Object} props          - properties for the spinner
 * @param {String} props.message  - message to display
 */
const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

// Setting a default for the props to display when no message is passed in
Spinner.defaultProps = {
  message: 'Loading...',
};

export default Spinner;
