import PropTypes from "prop-types";
import FeedbaackItem from "./FeedbaackItem";

function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>There are no feedbacks to display</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((feedback) => (
        <FeedbaackItem key={feedback.id} feedback={feedback} />
      ))}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default FeedbackList;
