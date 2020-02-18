import React, {useEffect, useState } from 'react';

import {axiosWithAuth } from './axiosWithAuth';

import {Spin, Card} from 'antd';

const FriendsList = props => {
    const [friends, setFriends] = useState(null);

    

    const removeUser = e => {
        e.preventDefault();
        // setFriends(friends.filter(myFriends => myFriends.id !== itemId));
        axiosWithAuth().delete(`/friends/${itemId}`)
        .then(res =>{
            console.log(res.data);
            setFriends(res.data)
        })
        .catch(err => console.log(err));
	}

    

    useEffect(() => {
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(res => {
                console.log(res.data)
                setFriends(res.data);
                console.log(res.data);
            })
        .catch(error => console.log(error));
    }, []);

  
    return(
    
            // <div className='friendsList'>
            //     {friends ? friends.map((friend, idx) =>(
            //         <div className='usrFriend' key={idx}>
            //         <p>Name: {friend.name}</p>
            //         <p>Age: {friend.age}</p>
            //         <p>Email: {friend.email}</p>
            //         </div>
            //     )) : <Spin className='spinner' size='large'/>}
            // </div>

             <div className='friendsList'>
                {friends ? friends.map((friend, idx) =>(
                    <div className='usrFriend' key={idx}>
                    <Card>
                    <p>{friend.name}</p>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                    <div>
                    <button onClick={() => removeUser(friends.id)}>Delete</button>
                    </div>
                    </Card>
                    </div>
                )) : <Spin className='spinner' size='large'/>}
            </div>
     
    )
    
}

export default FriendsList;