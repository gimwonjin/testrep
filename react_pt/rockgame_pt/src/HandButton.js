import HandIcon from "./HandIcon";
import "./HandButton.css";

function HandButton({ value }) {
  return (
    <button className="HandButton">
      <HandIcon className="HandButton-icon" value={value} />
    </button>
  );
}

export default HandButton;
