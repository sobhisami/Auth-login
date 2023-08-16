import Login from '../../layout/Login';
import SignUp from '../../layout/Signup';
import React from 'react'

export default class index extends React.Component {
    state = {
        showRegisterComponent: false,
    };

    handleRegisterClick = () => {
        this.setState({ showRegisterComponent: true });
        
    };

    handleBackClick = () => {
        this.setState({ showRegisterComponent: false });
        console.log(this.state);

    };


    render() {
        const { showRegisterComponent } = this.state;

        return (
            <React.Fragment>

                {showRegisterComponent ? <SignUp handleSignUpPage={this.handleBackClick} /> : <Login handleLoginPage={this.handleRegisterClick} />}
            </React.Fragment>
        )
    }
}