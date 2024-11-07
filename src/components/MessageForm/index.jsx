import { useState } from "react";
import "./MessageForm.scss";

export default function MessageForm({ addMessage }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addMessage(text);
      setText("");
    } else {
      alert("Сообщение не может быть пустым");
    }
  };

  return (
    <div className="message-wrapper">
      <form onSubmit={handleSubmit} className="message-form">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Введите сообщение"
          className="message-form_area"
        ></textarea>
        <button type="submit">Добавить сообщение</button>
      </form>
    </div>
  );
}
