import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import Header from "./components/Header";
import feedbackData from "./data/feedBacks";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";

const App = () => {
  const [feedback, setFeedback] = useState(feedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter((feedback) => feedback.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidV4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <FeedbackForm addFeedback={addFeedback} />
            <FeedbackStats feedback={feedback} />
            <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} />
          </Route>
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
