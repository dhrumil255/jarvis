import "../styles/ChatInput.css";
import { Paperclip, Mic, Send } from "lucide-react";

function ChatInput({
  inputText,
  setInputText,
  messages,
  setMessages,
  setIsTyping,
}) {

  const handleSend = () => {

    if (inputText.trim() === "") return;

    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    // User message
    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: inputText,
      time: currentTime,
    };

    setMessages((prevMessages) => [
      ...prevMessages,
      userMessage,
    ]);

    setInputText("");

    // Show typing state
    setIsTyping(true);

    // Fake Jarvis reply after 1 second
    setTimeout(() => {

      const botMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: "Hello! I'm Jarvis. This is a demo reply.",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prevMessages) => [
        ...prevMessages,
        botMessage,
      ]);

      setIsTyping(false);

    }, 1000);

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