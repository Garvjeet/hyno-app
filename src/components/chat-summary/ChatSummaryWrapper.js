// src/components/ChatSummaryWrapper.js
import React, { useState } from 'react';
import ChatBox from './ChatBox';
import { users } from '../../constants/data';

import "../../css/chat-summary-wrapper.css";

function ChatSummaryWrapper() {
  const [userList, setUserList] = useState(users);

  const handleSearch = (query) => {
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setUserList(filteredUsers);
  };

  return (
    <div className="chat-summary-main-wrapper">
      <ChatBox users={userList} onSearch={handleSearch} />
    </div>
  );
}

export default ChatSummaryWrapper;
