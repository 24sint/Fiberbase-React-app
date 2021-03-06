import React, { Component } from 'react';
import '../../App.css';
 
import { withFirebase } from '../Firebase';
 
class AdminPage extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      loading: false,
      users: []
    };
  }
 
  componentDidMount() {

    this.setState({ loading: true });
 
    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();
      
      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
      }));

      this.setState({
       users: usersList,
        loading: false,

      });
    });
  }
  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const {users, loading } = this.state;
    console.log(users, loading)
    return (
      <div className="nav admin">
        <h1>Admin</h1>
        {loading && <div style={{color: "#ff7a7a", fontSize: "1.7rem", fontWeight:"bold"}}>Loading ...</div>}
        
        <UserList users={users}/>
      </div>
    );
  }
}

const UserList = ({ users }) => (
    <ul className="userlist">
           <h1>User List</h1>
     {users.map(user => (
        <li key={user.uid}>
           <span>
            <strong>ID:</strong> {user.uid}
          </span>
          <span>
            <strong>E-Mail:</strong>{user.email}
          </span>
          <span>
            <strong>Username:</strong>{user.username}
          </span> 
        </li>       
      ))} 
    </ul>
  );
  
export default withFirebase(AdminPage);