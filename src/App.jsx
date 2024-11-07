import { useState, useEffect } from "react";
import "./App.css";
import MessageForm from "./components/MessageForm";
import MessageList from "./components/MessageList";

function App() {
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("messages");
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  const addMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      text,
      timestamp: new Date(),
    };
    setMessages([newMessage, ...messages]);
  };

  const deleteMessage = (id) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  return (
    <div className="app">
      <h1>Микроблог</h1>
      <MessageForm addMessage={addMessage} />
      <MessageList messages={messages} deleteMessage={deleteMessage} />
    </div>
  );
}

export default App;
