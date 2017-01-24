import React from 'react';
import Friend from 'Friend';
import friends from 'friends.json';
import FriendsList from 'FriendsList';

const App = () => {

  return (
    <div>
      Friend List
      <hr />
      <FriendsList friends={friends}/>
    </div>
  )
};

export default App;
