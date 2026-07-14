import "../styles/WelcomeScreen.css";

import {
  Code2,
  FileText,
  Lightbulb,
  GraduationCap,
} from "lucide-react";

import SuggestionCard from "./SuggestionCard";

function WelcomeScreen({ setInputText }) {

  return (
    <div className="welcome-screen">

      <div className="welcome-header">

        <h1>Good Evening, Dhrumil 👋</h1>

        <p>
          What would you like to accomplish today?
        </p>

      </div>

      <div className="suggestion-grid">

        <SuggestionCard
          icon={<Code2 size={28} />}
          title="Generate Code"
          subtitle="React • Java • Python"
          onClick={() =>
            setInputText("Generate production-ready React code.")
          }
        />

        <SuggestionCard
          icon={<FileText size={28} />}
          title="Review Resume"
          subtitle="ATS • Grammar • Design"
          onClick={() =>
            setInputText("Review and improve my resume.")
          }
        />

        <SuggestionCard
          icon={<Lightbulb size={28} />}
          title="Project Ideas"
          subtitle="Hackathons • Portfolio"
          onClick={() =>
            setInputText("Give me an innovative project idea.")
          }
        />

        <SuggestionCard
          icon={<GraduationCap size={28} />}
          title="Learn Something"
          subtitle="DSA • Cloud • React"
          onClick={() =>
            setInputText("Teach me React in a simple way.")
          }
        />

      </div>

    </div>
  );
}

export default WelcomeScreen;