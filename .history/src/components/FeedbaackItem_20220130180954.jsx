import PropTypes from "prop-types";
import Card from "./shared/Card";

function FeedbaackItem({ feedback }) {
  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
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
