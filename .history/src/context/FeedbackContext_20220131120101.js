import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is a feedback from  context",
      rating: 5,
    },
  ]);
  return (
    <FeedbackContext.Provider value={{}}>{children}</FeedbackContext.Provider>
  );
};

export default FeedbackContext;
