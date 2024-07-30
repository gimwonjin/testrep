import React from "react";
import temeImg from "../assets/girachi.png";

function ChatMessage({ auth, message }) {
  const { text, uid, photoUrl } = message;
  const messageClass = uid === auth?.currentUser.uid ? "sent" : "received";
  return (
    <>
      <div className={`message ${messageClass}`}>
        <img src={photoUrl} />
        <p>{text}</p>
      </div>
    </>
  );
}

export default ChatMessage;
