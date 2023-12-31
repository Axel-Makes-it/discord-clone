import React, { useState, useEffect, useRef } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { auth } from "../firebase";
import "../styles/DashChatLog.css";
import demoImage from "../images/demo.png";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdf44Gx3D6p_BHSiX5UqOA-hJG3wdJ2Ac",
  authDomain: "discord-chat-a3e1f.firebaseapp.com",
  projectId: "discord-chat-a3e1f",
  storageBucket: "discord-chat-a3e1f.appspot.com",
  messagingSenderId: "383434851633",
  appId: "1:383434851633:web:3c8e6ca2008bef2f955c10",
  measurementId: "G-25717733KY",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function DashChatLog() {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const messageContainerRef = useRef(null);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const scrollToRecentMessage = () => {
    // Scroll to the most recent message
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight -
        messageContainerRef.current.clientHeight;
    }
  };

  const handleDeleteMessage = async (message) => {
    try {
      if (auth.currentUser && auth.currentUser.uid === message.userId) {
        await deleteDoc(doc(db, "messages", message.id));
      }
    } catch (error) {
      console.error("Error deleting message: ", error);
    }
  };

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(newMessages);

      scrollToRecentMessage();
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    scrollToRecentMessage();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      try {
        const user = auth.currentUser;
        const messageData = {
          content: value,
          timestamp: new Date(),
          userProfileImage: user.photoURL,
          userId: user.uid,
          userName: user.displayName,
        };

        await addDoc(collection(db, "messages"), messageData);

        setValue("");

        scrollToRecentMessage();
      } catch (error) {
        console.error("Error adding message: ", error);
      }
    }
  };

  return (
    <section className="dashChatLog__section">
      <div className="dashChatLog__container" ref={messageContainerRef}>
        {messages.map((message, index) => (
          <div className="dashChatLog__message" key={index}>
            <div className="message">
              <div className="user">
                <img
                  id="userPhoto"
                  src={message.userProfileImage || demoImage}
                  alt="User Profile"
                />
                <p id="userName">{message.userName}</p>
              </div>
              <p>{message.content}</p>
            </div>

            {auth.currentUser && auth.currentUser.uid === message.userId && (
              <button id="delete" onClick={() => handleDeleteMessage(message)}>
                Delete
              </button>
            )}
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
