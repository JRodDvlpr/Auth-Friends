import React, {useEffect, useState } from 'react';

import {axiosWithAuth } from './axiosWithAuth';

const FriendsList = () => {
    const [friends, setFriends] = useState(null);

    useEffect(() => {
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(res => {
                console.log(res.data)
                setFriends(res.data);
                console.log(res.data)
            })
        .catch(error => console.log(error));
    }, []);

    return(
        <div className='friendsList'>
            {friends ? friends.map((friend, idx) =>(
                <div className='usrFriend' key={idx}>
                <p>{friend.name}, Age: {friend.age}</p>
                <p>Email: {friend.email}</p>
                </div>
            )) : <p>Loading your friends.. </p>}
        </div>
    )
}

export default FriendsList;