import React, { useState } from 'react';

import { axiosWithAuth } from './axiosWithAuth';

const AddFriend = () => {
 
  const [isLoading, setIsLoading] = useState(false);

  //Form inputs
  const [inputs, setInputs] = useState({
    name: '',
    age: '',
    email: ''
  });

  //Input state handler
  const handleInput = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
   
    // User is notified the data is being submitted
    setIsLoading(true);

    axiosWithAuth()
      .post('http://localhost:5000/api/friends', inputs)
      .then(() => {
        //Show user that we finished successfully
        alert('Your New Friend Has Been Added!');

        //Clears form
        setInputs({
          name: '',
          age: '',
          email: ''
        });
     
      })
      .catch(error => console.log(error))
     
  }

  return (
    <form onSubmit={handleSubmit} className="addFriends">

      <h1>{isLoading ? 'Adding Friend. to your list..' : 'Add a Friend'}</h1>

      <input type="text" name="name" value={inputs.name} onChange={handleInput} placeholder="Enter Name" required />

      <input type="number" name="age" value={inputs.age} onChange={handleInput} placeholder="Enter Age" required />

      <input type="email" name="email" value={inputs.email} onChange={handleInput} placeholder="Enter Email" required />

      <button type="submit">Add Friend</button>
    </form>
  )
}

export default AddFriend;