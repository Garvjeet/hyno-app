import React from 'react';
import UserChatSummary from './UserChatSummary';

function UserListWrapper({ users }) {
  return (
    <div className="user-list-wrapper">
      {users.map(user => (
        <UserChatSummary key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserListWrapper;
