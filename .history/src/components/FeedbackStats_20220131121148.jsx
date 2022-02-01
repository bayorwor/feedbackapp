import { useContext } from "react";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  let average =
    feedback.reduce((total, feedback) => total + feedback.rating, 0) /
    feedback.length;

  average = average.toFixed(1);

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Ratings : {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
