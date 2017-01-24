import React from 'react';
import Friend from 'Friend';

const FriendsList = ({friends}) => {
  return (
    <div>
    {friends.map((friend, index) =>
      <Friend key={index} friend={friend} />
    )}
    </div>
  )
};

export default FriendsList;
