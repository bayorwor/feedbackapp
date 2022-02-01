import { createContext, useState } from "react";
import { v4 as uuidV4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is a feedback item one from  context",
      rating: 9,
    },
    {
      id: 2,
      text: "This is a feedback item two from  context",
      rating: 15,
    },
    {
      id: 3,
      text: "This is a feedback item three from  context",
      rating: 7,
    },
  ]);

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
    <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
