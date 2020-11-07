import React from 'react';
import '../../App.css';
 
import { withAuthorization } from '../Session';
 
const HomePage = () => (
  <div className="home">
    <h1>Blue Nile In Ethiopia</h1>
    <p>The Home Page is accessible by every signed in user.</p>
  </div>
);
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(HomePage);