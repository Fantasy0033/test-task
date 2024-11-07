import MessageItem from "../MessageItem";
import "./MessageList.scss";

export default function MessageList({ messages, deleteMessage }) {
  return (
    <div className="message-list">
      {messages.map((message) => (
        <MessageItem
          key={message.id}
          message={message}
          deleteMessage={deleteMessage}
        />
      ))}
    </div>
  );
}
