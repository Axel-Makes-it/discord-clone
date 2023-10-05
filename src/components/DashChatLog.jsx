import React, { useState } from "react";
import "../styles/DashChatLog.css";

function DashChatLog() {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      setMessages([...messages, value]);
      setValue("");
    }
  };

  return (
    <section className="dashChatLog__section">
      <div className="dashChatLog__container">
        {messages.map((message, index) => (
          <div className="dashChatLog__message" key={index}>
            <p>{message}</p>
          </div>
        ))}
      </div>
      <div className="dashChatLogInput">
        <form className="chatLogForm" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Message"
            value={value}
            onChange={handleInputChange}
          />
          <button className="chatLog-btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default DashChatLog;
