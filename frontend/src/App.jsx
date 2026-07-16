import { useState } from "react";

import "./App.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import ChatInput from "./components/ChatInput";

function App() {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  return (
    <div className="app">

      <Header />

      <div className="main-content">

        <Sidebar />

        <ChatArea
          messages={messages}
          isTyping={isTyping}
        />

      </div>

      <ChatInput
        inputText={inputText}
        setInputText={setInputText}
        messages={messages}
        setMessages={setMessages}
        isTyping={isTyping}
        setIsTyping={setIsTyping}
      />

    </div>
  );
}

export default App;