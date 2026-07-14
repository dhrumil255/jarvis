import "../styles/Sidebar.css";
import {
  MessageSquare,
  Star,
  Brain,
  Sparkles,
  Settings,
  Info,
  Plus,
  User,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">

      <button className="new-chat-btn">
        <Plus size={18} />
        <span>New Chat</span>
      </button>

      <div className="menu">

        <h4>Workspace</h4>

        <div className="menu-item">
          <MessageSquare size={18}/>
          <span>Chats</span>
        </div>

        <div className="menu-item">
          <Star size={18}/>
          <span>Favorites</span>
        </div>

        <div className="menu-item">
          <Brain size={18}/>
          <span>Memory</span>
        </div>

        <div className="menu-item">
          <Sparkles size={18}/>
          <span>AI Skills</span>
        </div>

      </div>

      <div className="bottom-menu">

        <div className="menu-item">
          <Settings size={18}/>
          <span>Settings</span>
        </div>

        <div className="menu-item">
          <Info size={18}/>
          <span>About</span>
        </div>

      </div>

      <div className="profile">

        <User size={18}/>

        <span>Dhrumil</span>

      </div>

    </aside>
  );
}

export default Sidebar;