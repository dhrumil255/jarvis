import "../styles/ChatInput.css";
import { Paperclip, Mic, Send } from "lucide-react";

function ChatInput({
  inputText,
  setInputText,
  messages,
  setMessages,
}) {

  const handleSend = () => {

    if (inputText.trim() === "") return;

    const userMessage = {
      sender: "user",
      text: inputText,
    };

    const jarvisReply = {
      sender: "jarvis",
      text: "Hello! I'm still under development. Soon I'll be powered by AI.",
    };

    setMessages([
      ...messages,
      userMessage,
      jarvisReply,
    ]);

    setInputText("");
  };

  return (
    <div className="chat-input-container">

      <button className="icon-btn">
        <Paperclip size={20} />
      </button>

      <input
        type="text"
        placeholder="Ask Jarvis anything..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
      />

      <button className="icon-btn">
        <Mic size={20} />
      </button>

      <button
        className="send-btn"
        onClick={handleSend}
      >
        <Send size={22} />
      </button>

    </div>
  );
}

export default ChatInput;