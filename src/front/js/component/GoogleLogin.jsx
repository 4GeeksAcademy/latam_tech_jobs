import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleSignIn = ({ onSuccess, onFailure }) => {
  return (
    <GoogleLogin
      clientId="541333662211-9ngb0n387asg19kudk8rbldgl1cpkv14.apps.googleusercontent.com"
      buttonText="Sign in with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      redirectUri="https://turbo-winner-qpgrrjjrrrx24pwj-3001.app.github.dev" // Replace with your production URL
    />
  );
};

export default GoogleSignIn;