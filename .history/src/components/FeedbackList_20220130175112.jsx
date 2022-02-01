import React from "react";
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

export default FeedbackList;
