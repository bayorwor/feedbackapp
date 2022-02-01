import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import FeedbaackItem from "./FeedbaackItem";

function FeedbackList({ feedback, deleteFeedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>There are no feedbacks to display</p>;
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
