import React, {Component} from 'react';
import Friend from 'Friend';
import filter from 'lodash/filter';
import {isInArray} from 'utils/string-utils';

class FriendsList extends Component {
  state = {
    showOfflineUsers: false,
    searchText: '',
    favorites: [1, 2]
  }

  toggleOfflineUsers = () => {
    this.setState({
      showOfflineUsers: !this.state.showOfflineUsers
    });
  }

  onSearchChange = e => {
    this.setState({searchText: e.target.value})
  }

  toggleFavorite = (friendId) => {
    const favorites = this.state.favorites;
    const indexOfFriend = favorites.indexOf(friendId);
    let updatedArray;

    if (indexOfFriend === -1) {
      updatedArray = [...favorites, friendId];
    }
    else {
      updatedArray = favorites.filter((favorite, index) => index !== indexOfFriend);
    }

    this.setState({favorites: updatedArray});
  }

  render () {
    const {friends} = this.props;
    const {showOfflineUsers, searchText, favorites} = this.state;
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

    const filteredFriends = friends.filter(friend => isInArray([friend.name, friend.surname], searchText));
    const onlineFilteredFriends = filteredFriends.filter(friend => friend.isOnline);
    const offlineFilteredFriends = filteredFriends.filter(friend => !friend.isOnline);

    const filteredUsersNumber = onlineFilteredFriends.length + (showOfflineUsers ? offlineFilteredFriends.length : 0);
    const totalUsersNumber = showOfflineUsers ? friends.length : onlineUsers.length;

    return (
      <div>
        <button onClick={this.toggleOfflineUsers}>
          <span>{showOfflineUsers ? 'Hide' : 'Show'} offline users</span>
        </button>

        <br />

        <input type="text" placeholder="Search" value={searchText} onChange={this.onSearchChange}/>

        <b> {filteredUsersNumber} </b> of <span> {totalUsersNumber} </span>

        {onlineFilteredFriends.length > 0 &&
          <div>
            <h3> Online users </h3>
            {onlineFilteredFriends.map((friend, index) =>
              <Friend key={friend.id}
              friend={friend}
              isFavorite={favorites.indexOf(friend.id) !== -1}
              toggleFavorite={() => this.toggleFavorite(friend.id)}
              />
            )}
          </div>
        }

        {showOfflineUsers && offlineFilteredFriends.length > 0 &&
          <div>
            <h3> Offline users </h3>
            {offlineFilteredFriends.map((friend, index) =>
              <Friend key={friend.id}
              friend={friend}
              isFavorite={favorites.indexOf(friend.id) !== -1}
              toggleFavorite={() => this.toggleFavorite(friend.id)}
              />
            )}
          </div>
        }

        {offlineFilteredFriends.length === 0 && onlineFilteredFriends.length === 0 && <div>
          No users found
        </div>
        }
      </div>
    )
  }
}

export default FriendsList;
