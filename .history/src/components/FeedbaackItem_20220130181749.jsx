import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./shared/Card";

function FeedbaackItem({ feedback }) {
  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <button onClick={() => handleClick(feedback.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
}

FeedbaackItem.propTypes = {
  feedback: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default FeedbaackItem;
