import {
  Code2,
  FileText,
  Lightbulb,
  GraduationCap,
} from "lucide-react";

import SuggestionCard from "./SuggestionCard";
import "../styles/WelcomeScreen.css";

function WelcomeScreen({ setInputText }) {
  const suggestions = [
    {
      icon: <Code2 size={24} />,
      title: "Generate Code",
      description: "React, Java, Python",
      prompt: "Generate React code",
    },
    {
      icon: <FileText size={20} />,
      title: "Review Resume",
      description: "ATS & Formatting",
      prompt: "Review my resume",
    },
    {
      icon: <Lightbulb size={20} />,
      title: "Brainstorm Ideas",
      description: "Projects & Startups",
      prompt: "Give me project ideas",
    },
    {
      icon: <GraduationCap size={20} />,
      title: "Learn Concepts",
      description: "AI, DSA & Web Dev",
      prompt: "Teach me React",
    },
  ];

  return (
    <div className="welcome-screen">

      <div className="welcome-header">
        <h1>What can I help you create today?</h1>
        <p>Build • Learn • Create</p>
      </div>

      <div className="suggestion-grid">
        {suggestions.map((item, index) => (
          <SuggestionCard
            key={index}
            {...item}
            onClick={() => setInputText(item.prompt)}
          />
        ))}
      </div>

    </div>
  );
}

export default WelcomeScreen;