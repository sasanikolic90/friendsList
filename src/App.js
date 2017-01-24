import React, {Component} from 'react';
import friends from 'friends.json';
import FriendsList from 'FriendsList';

class App extends Component {
  render () {
    return (
      <div>
        Friend List
        <hr />
        <FriendsList friends={friends}/>
      </div>
    )
  }
}

export default App;
