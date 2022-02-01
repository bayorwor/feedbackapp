import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbaackItem from "./FeedbaackItem";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList({ deleteFeedback }) {
  const { feedback } = useContext(FeedbackContext);
  if (!feedback || feedback.length === 0) {
    return (
      <Card>
        <p>There are no feedbacks to display</p>
      </Card>
    );
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((feedback) => (
          <motion.div
            key={feedback.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbaackItem
              key={feedback.id}
              feedback={feedback}
              deleteFeedback={deleteFeedback}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
  // return (
  //   <div className="feedback-list">
  //     {feedback.map((feedback) => (
  //       <FeedbaackItem
  //         key={feedback.id}
  //         feedback={feedback}
  //         deleteFeedback={deleteFeedback}
  //       />
  //     ))}
  //   </div>
  // );
}

FeedbackList.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackList;
