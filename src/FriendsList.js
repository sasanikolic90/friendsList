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
    {/* const filteredFriends = filter(friends, friend => showOfflineUsers === true || friend.isOnline === true); */}

    const onlineUsers = [];
    const offlineUsers = [];

    friends.forEach(friend => {
      if (friend.isOnline) {
        onlineUsers.push(friend)
      }
      else {
        offlineUsers.push(friend);
      }
    });

    return (
      <div>
        <button onClick={this.toggleOfflineUsers}>
          <span>{showOfflineUsers ? 'Hide' : 'Show'} offline users</span>
        </button>

        <div>
          <h3> Online users </h3>
          {onlineUsers.map((friend, index) =>
            <Friend key={index} friend={friend} />
          )}
        </div>

        {showOfflineUsers &&
          <div>
            <h3> Offline users </h3>
            {offlineUsers.map((friend, index) =>
              <Friend key={index} friend={friend} />
            )}
          </div>
        }
      </div>
    )
  }
}

export default FriendsList;
