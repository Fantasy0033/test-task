import React, { useState, useEffect } from "react";

export default function MessageItem({ message, deleteMessage }) {
  const { id, text, timestamp } = message;

  const [timePassed, setTimePassed] = useState("");

  const calculateTimePassed = () => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - new Date(timestamp)) / 1000);

    const minutes = Math.floor(diffInSeconds / 60);
    const seconds = diffInSeconds % 60;

    if (minutes > 60) {
      return `${Math.floor(minutes / 60)} часов назад`;
    } else if (minutes > 0) {
      return `${minutes} ${getMinuteDeclension(minutes)} назад`;
    } else if (seconds > 0) {
      return `${seconds} секунд назад`;
    } else {
      return "Только что";
    }
  };

  const getMinuteDeclension = (minutes) => {
    if (minutes % 10 === 1 && minutes % 100 !== 11) {
      return "минута";
    } else if (
      minutes % 10 >= 2 &&
      minutes % 10 <= 4 &&
      (minutes % 100 < 10 || minutes % 100 >= 20)
    ) {
      return "минуты";
    } else {
      return "минут";
    }
  };

  useEffect(() => {
    setTimePassed(calculateTimePassed());
  }, [timestamp]);

  return (
    <div className="message-item">
      <p>{text}</p>
      <span>{timePassed}</span>
      <button onClick={() => deleteMessage(id)}>Удалить</button>
    </div>
  );
}
