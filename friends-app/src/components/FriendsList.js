import React, { useState } from 'react';

import {axiosWithAuth } from './axiosWithAuth';

import { Card} from 'antd';

const FriendsList = props => {
    const [edit, setEdit] = useState(false);

    const [dataID, setDataID] = useState()

    const [friend, setFriend] = useState({
        name: '',
        age: '',
        email: ''

    })

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
    
    const handleSubmit = (e) => {
        e.preventDefault()
    
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
            {
            <div className='usrFriend'>
                <Card>
                    <p>{props.friend.name}</p>
                    <p>Age: {props.friend.age}</p>
                    <p>Email: {props.friend.email}</p>

                    <div>

                        <button 
                        onClick={() => 
                        removeUser(props.friend.id)}>Delete</button>

                        <button 
                        onClick={() => 
                        editUser(props.friend.id)}>Edit</button>

                    </div>
                </Card>
            </div>

                }

                {edit && (
                    <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={friend.name}
                    onChange={inputChange}
                    required
                />
                <input
                    type="text"
                    name="age"
                    placeholder="age"
                    value={friend.age}
                    onChange={inputChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={friend.email}
                    onChange={inputChange}
                    required
                />
                <button onClick={handleSubmit}>Edit Friend</button>
                </form>
            )}
        </div>
    )    
}

export default FriendsList;