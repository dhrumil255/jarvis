import "../styles/SuggestionCard.css";

function SuggestionCard({
  icon,
  title,
  description,
  onClick,
}) {
  return (
    <div className="suggestion-card" onClick={onClick}>

      <div className="card-top">
        <div className="card-icon">
          {icon}
        </div>

        <h3>{title}</h3>
      </div>

      <p>{description}</p>

    </div>
  );
}

export default SuggestionCard;