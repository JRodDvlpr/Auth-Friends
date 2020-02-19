import React, { useState } from 'react';

import {axiosWithAuth } from './axiosWithAuth';

import { Card, Button, Input, Form } from 'antd';

const FriendsList = props => {

    const [edit, setEdit] = useState(false);

    const [dataID, setDataID] = useState()

    const [friend, setFriend] = useState({
        name: '',
        age: '',
        email: ''

    })

    

  // removes any user added to the list sends the request to the DB
    const removeUser = (userID) => {

        // setFriends(friends.filter(friends => friends.id !== itemId));

        console.log(userID)
        axiosWithAuth().delete(`/friends/${userID}`)
        .then(res =>{
            console.log(res.data);
            props.setFriends(res.data);
            console.log(res.data);
        })
        .catch(err => console.log(err));
    }
    

    //sends any edit back to the db regardless if nothing was entered.
    const handleSubmit = () => {
       
    
        axiosWithAuth().put(`/friends/${dataID}`, friend)
        .then(res => {
          props.setFriends(res.data)
        
        })
        .catch(err => {
          console.log(err)
        })
    }

    const inputChange = (e) => {
        console.log(e.target.value)
        e.preventDefault()
        setFriend({
          ...friend, 
          [e.target.name]: e.target.value
        })
    }

    const editUser = (friendId) => {
        console.log(friendId)
        setEdit(!edit)
        setDataID(friendId)
    }


    
      
    return(
    

        <div className='friendsList'>
            
            <div className='usrFriend'>
                <Card>
                    <p>{props.friend.name}</p>
                    <p>Age: {props.friend.age}</p>
                    <p>Email: {props.friend.email}</p>

                    <div>


                        <Button id="btnEdit"
                        onClick={() => editUser(props.friend.id)}>Edit</Button>
                    
                        <Button type='danger'
                        onClick={() => 
                        removeUser(props.friend.id)}>Delete</Button>
                       

                    </div>
                </Card>
            </div>

            

            {edit && (
                
                <Card>
                <Form className='editform' >

                <Input className='editInput'
                    type="text"
                    name="name"
                    placeholder="name"
                    value={friend.name}
                    onChange={inputChange}
                    required
                />
                <Input className='editInput'
                    type="text"
                    name="age"
                    placeholder="age"
                    value={friend.age}
                    onChange={inputChange}
                    required
                />
                <Input className='editInput'
                    type="email"
                    name="email"
                    placeholder="email"
                    value={friend.email}
                    onChange={inputChange}
                    required
                />
                <Button id="editBtn" onClick={handleSubmit}>Edit Friend</Button>
                </Form>
                </Card>
            )}
            
        </div>
    )  
}

export default FriendsList;