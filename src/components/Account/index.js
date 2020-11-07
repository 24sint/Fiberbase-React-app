import React from 'react';
import '../../App.css';
 
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { AuthUserContext, withAuthorization } from '../Session';
 
const AccountPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
        <div className="nav">
            <h1 style={{color: "#ff7a7a", fontSize: "1.5rem"}}>Account: {authUser.email}</h1>
            <PasswordForgetForm />
            <PasswordChangeForm />
        </div>
    )}
  </AuthUserContext.Consumer>
);
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(AccountPage);