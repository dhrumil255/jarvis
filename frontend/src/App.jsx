import { useState } from "react";

import "./App.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";

function App() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  return (
    <div className="app">
      <Header />

      <div className="main-content">
        <Sidebar />

        <ChatArea
          messages={messages}
          isTyping={isTyping}
          inputText={inputText}
          setInputText={setInputText}
          setMessages={setMessages}
          setIsTyping={setIsTyping}
        />
      </div>
    </div>
  );
}

export default App;