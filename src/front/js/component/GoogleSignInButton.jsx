import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleSignInButton = ({ onLoginSuccess, onLoginFailure }) => {
    return (
        <div>
            <GoogleLogin
                clientId="541333662211-9ngb0n387asg19kudk8rbldgl1cpkv14.apps.googleusercontent.com" 
                buttonText="Sign in with Google"
                onSuccess={onLoginSuccess}
                onFailure={onLoginFailure}
            />
        </div>
    );
};

export default GoogleSignInButton;