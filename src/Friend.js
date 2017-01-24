import React, {Component} from 'react';

class Friend extends Component {

  render() {
    const {friend} = this.props;
    const {imageUrl, name, surname, isOnline} = friend;

      return (
        <div>
          <img width="100" height="100" src={imageUrl}/>
          <br />
           <svg width="10" height="10">
              <circle fill={isOnline ? 'green' : 'red'} cx="5" cy="5" r="5"/>
            </svg>
          <b> {name} </b><span>{surname}</span>
        </div>
      )
    }
};

export default Friend;
