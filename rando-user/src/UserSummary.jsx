import React, { useState } from 'react';

function UserSummary(props) {
  const [showMore, setShowMore] = useState(false)

  if (props.userData === null) {
    return (
      <p>There is no user data.</p>
    )
  } else {
    return (
      <div>
        {/* In order to get data inside objects to show, the data has to be guarded using the and statements below. */}
        <p>Name: {props.userData.name && props.userData.name.title} {props.userData.name && props.userData.name.first} {props.userData.name && props.userData.name.last}</p>
        <p>Email: {props.userData.email}</p>
        {showMore === true ? (
          <div>
            <p>Location: {props.userData.location && props.userData.location.street && props.userData.location.street.number}, {props.userData.location && props.userData.location.street && props.userData.location.street.name}, {props.userData.location && props.userData.location.city}, {props.userData.location && props.userData.location.state}</p>
            <p>Username: {props.userData.login && props.userData.login.username}</p>
            <img src={props.userData.picture && props.userData.picture.large} alt="random user headshot" />
          </div>)
          : (false)}
        {/* For the button below to change text based on status, the ternary will be triggered. */}
        <button onClick={() => setShowMore(!showMore)}>{showMore ? "Show Less" : "Show More"}</button>
      </div>
    )
  }
}

export default UserSummary;