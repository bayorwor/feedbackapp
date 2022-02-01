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
      rating: 1,
    },
    {
      id: 3,
      text: "This is a feedback item three from  context",
      rating: 7,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //deleting a feedback item
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter((feedback) => feedback.id !== id));
    }
  };

  //adding a new feedback item
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidV4();
    setFeedback([newFeedback, ...feedback]);
  };

  //editing a feedback item
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
