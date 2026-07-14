import "../styles/Header.css";
import { Settings } from "lucide-react";

function Header() {
  return (
    <header className="header">
      <div className="logo-section">
        <h1>JARVIS</h1>
      </div>

      <div className="status-section">
        <button className="settings-btn">
          <Settings size={20} />
        </button>
      </div>
    </header>
  );
}

export default Header;