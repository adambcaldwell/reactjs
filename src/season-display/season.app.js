import React from "react";
import SeasonDisplay from "./season-display.component";
import Spinner from "./spinner.component";

/**
 * @name SeasonApplication
 * @description learning about functional vs class based components
 * @author adam.caldwell
 */

/**
 * @component functional
 * @returns {*}
 */
/* const SeasonApp = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    err => console.log(err)
  );

  return <div>Latitude: </div>;
}; */

/**
 * @component class
 * @name SeasonApp
 * @see {React.Component}
 */
class SeasonApp extends React.Component {
  /**
   * Alternate way to initialize the constructor via shorthand (this works because of babel)
   * state = { lat: null, lng: null, errorMessage: null };0
   *
   * @constructor
   * @param {Object} props - properties to pass to super();
   */
  constructor(props) {
    // Important: always make this call 1st, props are not state
    super(props);

    // state should be initialized here (99% of the time), this is the only place we directly assign state values
    this.state = {
      lat: null,
      errorMessage: null
    };
  }

  /**
   * @method componentDidMount
   * @see {React.Component#componentDidMount}
   * @description Automatically called 1 time after component loads onto the screen
   * Best Practice: do initial data loading (or other operations) here
   */
  componentDidMount() {
    // console.log("Component was rendered to screen");

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  /**
   * @method componentDidUpdate
   * @see {React.Component#componentDidUpdate}
   * @description Called anytime our component updates itself
   * @param prevProps
   * @param prevState
   * @param snapshot
   */
  /* eslint-disable-next-line no-unused-vars */
  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log("Component was just updated");
  }

  /**
   * @description Called when we want to do cleanup after the component is unmounted
   * @see {React.Component#componentWillUnmount}
   */
  componentWillUnmount() {}

  /**
   * @method renderContent
   * @description Useful to have (something like) this when multiple returns are defined in the render method
   * @returns {*}
   */
  renderContent() {
    if (this.state.errorMessage && !this.state.lat)
      return <div>Error: {this.state.errorMessage} </div>;

    if (!this.state.errorMessage && this.state.lat)
      return <SeasonDisplay lat={this.state.lat} />;

    return <Spinner message="Please accept location request" />;
  }

  /**
   * Must be defined or React yaks
   * Best Practice: only render JSX here (99.9% of the time)
   * @method render
   * @see {React.Component#render}
   * @returns {*}
   */
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

export default SeasonApp;
