import React from 'react';
import SearchBar from './SearchBar';
import UserListWrapper from './UserListWrapper';

import "../../css/chat-box.css";

function ChatBox({ users, onSearch }) {
  return (
    <div className="chat-box-wrapper">
      <SearchBar onSearch={onSearch} />
      <UserListWrapper users={users} />
    </div>
  );
}

export default ChatBox;
