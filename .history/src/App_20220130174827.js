import { useState } from "react";
import Header from "./components/Header";
import feedbackData from "./data/feedBacks";
import FeedbackList from "./components/FeedbackList";

const App = () => {
  const [feedback, setFeedback] = useState(feedbackData);

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
};

export default App;
