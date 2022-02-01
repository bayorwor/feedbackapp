import React from "react";

function FeedbackStats({ feedback }) {
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Ratings : 10</h4>
    </div>
  );
}

export default FeedbackStats;
