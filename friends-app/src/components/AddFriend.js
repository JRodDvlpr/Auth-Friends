import React, { useState } from 'react';

import { axiosWithAuth } from './axiosWithAuth';

//Styling  Library
import { Button, Form, Input } from 'antd';

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
    e.preventDefault()
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
    <Form onSubmit={handleSubmit} className="addFriends">

      {/* <h1>{isLoading ? 'Adding Friend. to your list..' : 'Add a Friend'}</h1> */}

      <Input type="text" name="name" value={inputs.name} onChange={handleInput} placeholder="Enter Name" required />

      <Input type="number" name="age" value={inputs.age} onChange={handleInput} placeholder="Enter Age" required />

      <Input type="email" name="email" value={inputs.email} onChange={handleInput} placeholder="Enter Email" required />

      <Button type="primary" htmlType="submit" loading={isLoading}>Add Friend</Button>
    </Form>
  )
}

export default AddFriend;