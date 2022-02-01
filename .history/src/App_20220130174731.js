import { useState } from "react";
import Header from "./components/Header";
import feedbackData from "./data/feedBacks";

const App = () => {
  const [feedback, setFeedback] = useState(feedbackData);

  return (
    <>
      <Header />
      <div className="container">
        <FeedbaackLis />
      </div>
    </>
  );
};

export default App;
