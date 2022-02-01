import { useState } from "react";
import Header from "./components/Header";
import feedbackData from "./data/feedBacks";
import FeedbackList from "./components/FeedbackList";

const App = () => {
  const [feedback, setFeedback] = useState(feedbackData);

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((feedback) => feedback.id !== id));
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} />
      </div>
    </>
  );
};

export default App;
