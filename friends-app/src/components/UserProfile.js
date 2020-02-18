  
import React, {useState, useEffect} from 'react';


import { withRouter } from 'react-router-dom';

import {axiosWithAuth } from './axiosWithAuth';

import Nav from './Nav';
import FriendsList from './FriendsList';

import { Spin, Form, Input, Button } from 'antd';

const UserProfile = props => {

  const [isLoading, setIsLoading] = useState(false);

  const [friends, setFriends ] = useState([]);

  //Form inputs for new friends
  const [newFriends, setNewFriends] = useState({
    name: '',
    age: '',
    email: ''
  });

  // fetching data 
  useEffect(() => {
    axiosWithAuth()
        .get('/friends')
        .then(res => {
            console.log(res.data)
            setFriends(res.data);
            console.log(res.data)
        })
    .catch(error => console.log(error));
}, []);
  
  const handleSubmit = e => {
    e.preventDefault();
   
    // User is notified the data is being submitted
    setIsLoading(true);

    axiosWithAuth()
      .post('/friends', newFriends)
      .then(() => {
        //Show user that we finished successfully
        alert('Your New Friend Has Been Added!');

        //Clears form
        setNewFriends({
          name: '',
          age: '',
          email: ''
        });
     
      })
      .catch(error => console.log(error))
     
  }

  //Input state handler
  const handleInput = e => {
    e.preventDefault()
    setNewFriends({
      ...newFriends,
      [e.target.name]: e.target.value
    });
  }

  // logout will remove the token, push to history we redirect to the login page
  const logout = () => {
    sessionStorage.removeItem('token');
    props.history.push('/login');

  }

  return (
    <div className="profile">
      <Nav logout={logout} />

      {/* Adding New friend to DB */}
      <h2>Add New Friend</h2>

      <Form 
      onSubmit={handleSubmit} 
      className="addFriends">

      <Input 
      type="text" 
      name="name" 
      value={newFriends.name} 
      onChange={handleInput} 
      placeholder="Enter Name" required />

      <Input 
      type="number" 
      name="age" 
      value={newFriends.age} 
      onChange={handleInput} 
      placeholder="Enter Age" required />

      <Input 
      type="email" 
      name="email" 
      value={newFriends.email} 
      onChange={handleInput} 
      placeholder="Enter Email" required />

      <Button 
      type="primary" 
      htmlType="submit" 
      >Add Friend</Button>

    </Form>

       {/* displays all my friends */}
       <div>
         <h1>Friends</h1>
      <div className='friends'>
        {isLoading ? (
          <Spin /> ) : (friends.map(friend =>
            <FriendsList 
            key={friend.id}
            friend={friend}
            setFriends={setFriends}
            
            />
        ))}
      </div>
      </div>
      {/* <PrivateRoute exact path="/friends/:id">
        <AddFriend />
      </PrivateRoute> */}
    </div>
  )
}

// withRouter will pass updated match, location, and history props to the wrapped component whenever it renders

export default withRouter(UserProfile);