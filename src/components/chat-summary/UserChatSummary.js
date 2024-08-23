import React from 'react';
import "../../css/user-chat-summary.css";

function UserChatSummary({ user }) {
  return (
    <div className="user-chat-detail">
      <div className="user-img-wrapper">
        <img src={user.image} alt={user.name} />
      </div>
      <div className="chat-content">
        <div className="chat-header">
          <span className="user-name">{user.name}</span>
          <span className="chat-time-stamp">{"Just now"}</span>
        </div>
        
        <div className="user-message-summary">
          <span className="user-message-content">{user.lastMessage}</span>
          {
            user.unreadMsgCount > 0 ? 
            <span className="message-count-badge">{user.unreadMsgCount}</span>
            : <></>
          }
        </div>
      </div>
    </div>
  );
}

export default UserChatSummary;
