import "../styles/SuggestionCard.css";

function SuggestionCard({
  icon,
  title,
  subtitle,
  onClick,
}) {

  return (
    <div
      className="suggestion-card"
      onClick={onClick}
    >
      <div className="card-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{subtitle}</p>
    </div>
  );
}

export default SuggestionCard;