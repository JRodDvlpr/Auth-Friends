import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from './axiosWithAuth';

//Styling  Library
import { Card } from 'antd';



const Friend = (props) => {

  console.log('Friend', props)

  const [friend, setFriend] = useState({})

  useEffect(() => {
    axiosWithAuth().get(`${props.match.url}`)
    .then(res => {
      console.log('res friend', res.data)
      setFriend(res.data)
    })
    .catch(err => {
      console.log(err)
      })
    }, [props.match.url])

  return (
    <Card>
      <h2>{friend.name}</h2>
      <p>age: {friend.age}</p>
      <p>email: {friend.email}</p>
    </Card>
  )
}

export default Friend;