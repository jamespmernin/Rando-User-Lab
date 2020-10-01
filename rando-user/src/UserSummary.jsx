import React from 'react';

function UserSummary(props) {
  if ({ props.userData } === null) {
    return (
      <div>
        <h3>There is no user data.</h3>
      </div>
    )
  } else {
    return (
      <div>
        <h3>Hi!</h3>
      </div>
    )
  }
}

export default UserSummary;