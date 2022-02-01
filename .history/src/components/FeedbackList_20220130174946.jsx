import React from "react";

function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>There are no feedbacks to display</p>;
  }

  return <div></div>;
}

export default FeedbackList;
