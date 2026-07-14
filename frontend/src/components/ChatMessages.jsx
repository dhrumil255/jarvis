import "../styles/ChatMessages.css";

function ChatMessages({ messages }) {
  return (
    <div className="messages">

      {messages.map((message, index) => (

        <div
          key={index}
          className={`message ${message.sender}`}
        >
          <p>{message.text}</p>
        </div>

      ))}

    </div>
  );
}

export default ChatMessages;