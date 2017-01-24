import React, {Component} from 'react';
import Friend from 'Friend';
import filter from 'lodash/filter';


class FriendsList extends Component {
  state = {
    showOfflineUsers: false
  }

  toggleOfflineUsers = () => {
    this.setState({
      showOfflineUsers: !this.state.showOfflineUsers
    });
  }

  render () {
    const {friends} = this.props;
    const {showOfflineUsers} = this.state;
    const filteredFriends = filter(friends, friend => showOfflineUsers === true || friend.isOnline === true);
    console.log(filteredFriends);

    return (
      <div>
        <button onClick={this.toggleOfflineUsers}>
          <span>{showOfflineUsers ? 'Hide' : 'Show'} offline users</span>
        </button>

        {filteredFriends.map((friend, index) => {
          return (
            <Friend key={index} friend={friend} />
          )
        }
      )}
      </div>
    )
  }
}

export default FriendsList;
