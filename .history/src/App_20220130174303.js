import { useState } from "react";
import FeedbaackItem from "./components/FeedbaackItem";
import Header from "./components/Header";
import feedbackData from "./data/feedBacks";

const App = () => {
  const [feedback, setFeedback] = useState(feedbackData);

  return (
    <>
      <Header />
      <div className="container">
        <FeedbaackItem />
      </div>
    </>
  );
};

export default App;
