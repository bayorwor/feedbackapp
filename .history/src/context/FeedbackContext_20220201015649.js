import { createContext, useState, useEffect } from "react";
import { v4 as uuidV4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    getFeedback();
  }, []);

  //fetches all feedbacks from the database
  const getFeedback = async () => {
    const res = await fetch(
      `http://localhost:5000/feedback?_sort=id&_order=desc`
    );
    const data = await res.json();
    setFeedback(data);
    setIsLoading(false);
  };

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

  //updating a feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((feedback) =>
        feedback.id === id ? { ...feedback, ...updItem } : feedback
      )
    );
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
        isLoading,
        deleteFeedback,
        addFeedback,
        feedbackEdit,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
