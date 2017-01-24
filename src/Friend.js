import React from 'react';

const Friend = ({friend}) => {
  const {imageUrl, name, surname, isOnline} = friend;

  if (!!isOnline) {
    return (
      <div>
      <img width="100" height="100" src={imageUrl}/>
        <br />
         <svg width="10" height="10">
            <circle fill='green' cx="5" cy="5" r="5"/>
          </svg>
        <b> {name} </b><span>{surname}</span>
      </div>
    )
  }
  else {
    return null;
  }

};

export default Friend;
