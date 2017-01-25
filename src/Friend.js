import React, {Component} from 'react';

class Friend extends Component {

  shouldComponentUpdate(nextProps) {
    const {isFavorite, friend:{isOnline}} = nextProps;
    const currentFavorite = this.props.isFavorite;
    const currentOnline = this.props.friend.isOnline;
    if (currentFavorite !== isFavorite) {
      console.log('isFavorite has changed');
    }
    else if (currentOnline !== isOnline) {
      console.log('isOnline has changed');
    }
    return currentFavorite !== isFavorite || currentOnline !== isOnline;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isFavorite === true && nextProps.isFavorite === false) {
      alert("😢");
    }
  }

  render() {
    const {friend, isFavorite, toggleFavorite} = this.props;
    const {imageUrl, name, surname, isOnline} = friend;

      return (
        <div>
          <img width="100" height="100" src={imageUrl}/>
          <br />
           <svg width="10" height="10">
              <circle fill={isOnline ? 'green' : 'red'} cx="5" cy="5" r="5"/>
            </svg>
          <b> {name} </b><span>{surname}</span>
          <button onClick={toggleFavorite}>
           {isFavorite === true ? 'Remove favorite' : 'Set as favorite'}
          </button>
        </div>
      )
    }
};

export default Friend;
