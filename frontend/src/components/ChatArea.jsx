import "../styles/ChatArea.css";

import WelcomeScreen from "./WelcomeScreen";
import ChatMessages from "./ChatMessages";

function ChatArea({ messages, setInputText }) {

  return (
    <main className="chat-area">

      {messages.length === 0 ? (

        <WelcomeScreen
          setInputText={setInputText}
        />

      ) : (

        <ChatMessages
          messages={messages}
        />

      )}

    </main>
  );
}

export default ChatArea;