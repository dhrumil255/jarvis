import "../styles/ChatMessages.css";

function ChatMessages({ messages }) {
  return (
    <div className="messages">

      {messages.map((message) => (

        <div
          key={message.id}
          className={`message-row ${message.sender}`}
        >

          <div className={`message-bubble ${message.sender}`}>

            <p>{message.text}</p>

            <span className="message-time">
              {message.time}
            </span>

          </div>

        </div>

      ))}

    </div>
  );
}

export default ChatMessages;