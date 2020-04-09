import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../redux/actions';

/**
 * @component class
 * @name GoogleAuth
 * @description
 * @author adam.caldwell
 * @extends {React.Component}
 */
class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: '571172703845-8fc32j1h20scmf9eet8n647blkcqegu9.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (null === this.props.isSignedIn) return null;

    if (this.props.isSignedIn) {
      return (
        <button type="button" className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    }

    return (
      <button type="button" className="ui green google button" onClick={this.onSignInClick}>
        <i className="google icon" />
        Sign In with Google
      </button>
    );
  }

  render() {
    return <div className="item">{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
