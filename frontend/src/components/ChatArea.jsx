import "../styles/ChatArea.css";

import WelcomeScreen from "./WelcomeScreen";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

function ChatArea({
  messages,
  isTyping,
  inputText,
  setInputText,
  setMessages,
  setIsTyping,
}) {
  return (
    <main className="chat-area">

      <div className="chat-content">

        {messages.length === 0 ? (
          <WelcomeScreen setInputText={setInputText} />
        ) : (
          <>
            <ChatMessages messages={messages} />

            {isTyping && (
              <div className="typing-indicator">
                Jarvis is thinking...
              </div>
            )}
          </>
        )}

      </div>

      <ChatInput
        inputText={inputText}
        setInputText={setInputText}
        messages={messages}
        setMessages={setMessages}
        isTyping={isTyping}
        setIsTyping={setIsTyping}
      />

    </main>
  );
}

export default ChatArea;